const searchEngines = {
    startpage: "https://www.startpage.com/do/search?q=",
    duckduckgo: "https://duckduckgo.com/?q=",
    brave: "https://search.brave.com/search?q=",
    ecosia: "https://www.ecosia.org/search?q=",
    privacywall: "https://www.privacywall.org/search/secure?t=pwm&q="
};

const redirectRuleId = 1;
const googleSearchUrlPattern = "^https://www\\.google\\.com/search\\?(?:[^#]*&)?q=([^&]*)";

function getRedirectRule(engine) {
    return {
        id: redirectRuleId,
        priority: 1,
        action: {
            type: "redirect",
            redirect: {
                regexSubstitution: `${searchEngines[engine]}\\1`
            }
        },
        condition: {
            regexFilter: googleSearchUrlPattern,
            resourceTypes: ["main_frame"]
        }
    };
}

async function updateRedirectRule(engine) {
    await chrome.declarativeNetRequest.updateDynamicRules({
        removeRuleIds: [redirectRuleId],
        addRules: [getRedirectRule(engine)]
    });
}

async function initializeRedirectRule() {
    const result = await chrome.storage.local.get("searchEngine");
    const preferredEngine = searchEngines[result.searchEngine]
        ? result.searchEngine
        : "startpage";

    if (result.searchEngine !== preferredEngine) {
        await chrome.storage.local.set({ searchEngine: preferredEngine });
    }

    await updateRedirectRule(preferredEngine);
}

chrome.runtime.onInstalled.addListener(async ({ reason }) => {
    if (reason === "install") {
        await chrome.storage.local.set({ searchEngine: "startpage" });
    }
    await initializeRedirectRule();
});

chrome.runtime.onStartup.addListener(initializeRedirectRule);

chrome.storage.onChanged.addListener(async (changes, areaName) => {
    if (areaName !== "local" || !changes.searchEngine) {
        return;
    }

    const preferredEngine = searchEngines[changes.searchEngine.newValue]
        ? changes.searchEngine.newValue
        : "startpage";
    await updateRedirectRule(preferredEngine);
});
