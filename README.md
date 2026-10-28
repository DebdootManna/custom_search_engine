# All-in-One Custom Search

A browser extension that gives you control over your search engine, allowing you to quickly switch between several privacy-respecting options.

![Dashboard Screenshot](https://raw.githubusercontent.com/DebdootManna/custom_search_engine/main/screenshots/Screenshot1.png)
![Search Redirect Screenshot](https://raw.githubusercontent.com/DebdootManna/custom_search_engine/main/screenshots/Screenshot2.png)

## Description

This WebExtension empowers you to choose your search engine from a clean, simple dashboard. Instead of being locked into a single choice, you can switch between Startpage, DuckDuckGo, Brave Search, and PrivacyWall with a single click.

The Firefox version uses Firefox's search-provider override and redirects queries to your preferred provider, while maintaining search suggestions from Google. The Chromium version uses Manifest V3's `declarativeNetRequest` API to redirect searches sent to Startpage.

## Features

- **One-Click Switching**: Change your default search engine instantly from the extension's popup.
- **Privacy-Focused**: Includes support for Startpage, DuckDuckGo, Brave, and PrivacyWall.
- **Seamless Integration**: Works automatically in the background.
- **Search Suggestions**: Leverages Google's powerful search suggestions.
- **Lightweight & Modern UI**: A simple and beautiful dashboard.

## Installation

1.  Go to the [latest release](https://github.com/DebdootManna/custom_search_engine/releases) on GitHub (or you can build it yourself).
2.  Download the `.xpi` file for Firefox or the Chromium `.zip` file.
3.  In Firefox, navigate to `about:addons`.
4.  Drag and drop the downloaded `.xpi` file into the Add-ons Manager window.
5.  Approve the installation when prompted.

### Manual Installation (for Development)

1.  Clone or download this repository.
2.  Open Firefox and navigate to `about:debugging#/runtime/this-firefox`.
3.  Click the **Load Temporary Add-on...** button.
4.  Navigate to the `firefox-extension` directory inside the project and select the `manifest.json` file.

### Chromium Browsers (Brave, Chrome, Edge, Vivaldi, Helium, and others)

1.  Clone or download this repository.
2.  Open the browser's extensions page (`brave://extensions`, `chrome://extensions`, or the equivalent).
3.  Enable **Developer mode**.
4.  Click **Load unpacked** and select the `chrome` directory.
5.  Configure the browser's search provider to Startpage if you want address-bar searches to be redirected. Chromium does not allow regular extensions to programmatically replace the default search provider, so the extension can only redirect searches that are sent to its Startpage URL.

## How to Use

1.  Click the extension's icon in the Firefox toolbar.
2.  Select your desired search engine from the popup.
3.  Your choice is saved automatically and will be used for searches handled by the extension.

## Credits

This extension was created and is maintained by [DebdootManna](https://github.com/DebdootManna).
