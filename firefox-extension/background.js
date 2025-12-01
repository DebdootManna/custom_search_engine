// Define the search engine URLs
const searchEngines = {
    startpage: "https://www.startpage.com/do/search?q=",
    duckduckgo: "https://duckduckgo.com/?q=",
    brave: "https://search.brave.com/search?q=",
    privacywall: "https://www.privacywall.org/search?q="
};

const baseSearchUrl = "https://www.startpage.com/do/search";

// This function will be called every time a request is made
function redirectSearch(requestDetails) {
    // We only care about main frame (top-level) requests
    if (requestDetails.type !== "main_frame") {
        return;
    }

    // Get the user's preferred search engine from storage
    return browser.storage.local.get("searchEngine").then(result => {
        const preferredEngine = result.searchEngine || 'startpage';

        // If the preferred engine is the base one, do nothing.
        if (preferredEngine === 'startpage') {
            return;
        }

        // The request is to our base URL, so we need to redirect it.
        try {
            const url = new URL(requestDetails.url);
            const query = url.searchParams.get("q");

            if (query) {
                const newUrl = searchEngines[preferredEngine] + encodeURIComponent(query);
                console.log(`Redirecting search for "${query}" to ${newUrl}`);
                return { redirectUrl: newUrl };
            }
        } catch (e) {
            console.error("Failed to parse URL or redirect:", e);
        }

    }, error => {
        console.error(`Storage Error: ${error}`);
    });
}

// Add the listener for web requests
browser.webRequest.onBeforeRequest.addListener(
    redirectSearch,
    { urls: [`${baseSearchUrl}*`] },
    ["blocking"]
);

// Set a default value on first install
browser.runtime.onInstalled.addListener((details) => {
    if (details.reason === "install") {
        browser.storage.local.set({ "searchEngine": "startpage" });
        console.log("Default search engine set to Startpage on installation.");
    }
});
