const form = document.getElementById("search-engine-form");

async function restoreOptions() {
    const result = await chrome.storage.local.get("searchEngine");
    const selectedEngine = result.searchEngine || "startpage";
    const radio = form.querySelector(`[value="${selectedEngine}"]`);

    if (radio) {
        radio.checked = true;
    }
}

async function saveOptions(event) {
    await chrome.storage.local.set({
        searchEngine: event.target.value
    });
}

document.addEventListener("DOMContentLoaded", restoreOptions);
form.addEventListener("change", saveOptions);
