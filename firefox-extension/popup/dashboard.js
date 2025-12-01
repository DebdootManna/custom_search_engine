const form = document.getElementById('search-engine-form');

// Load the saved preference and update the UI
function restoreOptions() {
    function setCurrentChoice(result) {
        const selectedEngine = result.searchEngine || 'startpage'; // Default to startpage
        const radio = form.querySelector(`[value=${selectedEngine}]`);
        if (radio) {
            radio.checked = true;
        }
    }

    function onError(error) {
        console.log(`Error: ${error}`);
    }

    let getting = browser.storage.local.get("searchEngine");
    getting.then(setCurrentChoice, onError);
}

// Save the preference when the user makes a choice
function saveOptions(e) {
    const selectedEngine = e.target.value;
    browser.storage.local.set({
        "searchEngine": selectedEngine
    });
}

document.addEventListener('DOMContentLoaded', restoreOptions);
form.addEventListener('change', saveOptions);
