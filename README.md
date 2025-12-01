# All-in-One Custom Search for Firefox

A browser extension that gives you control over your default search engine, allowing you to quickly switch between several privacy-respecting options.

![Dashboard Screenshot](https://raw.githubusercontent.com/DebdootManna/custom_search_engine/main/screenshots/Screenshot1.png)
![Search Redirect Screenshot](https://raw.githubusercontent.com/DebdootManna/custom_search_engine/main/screenshots/Screenshot2.png)

## Description

This Firefox WebExtension empowers you to choose your default search engine from a clean, simple dashboard. Instead of being locked into a single choice, you can switch between Startpage, DuckDuckGo, Brave Search, and PrivacyWall with a single click.

The extension works by intercepting your search queries and seamlessly redirecting them to your preferred provider, all while maintaining search suggestions from Google for a consistent and powerful search experience.

## Features

- **One-Click Switching**: Change your default search engine instantly from the extension's popup.
- **Privacy-Focused**: Includes support for Startpage, DuckDuckGo, Brave, and PrivacyWall.
- **Seamless Integration**: Works automatically in the background.
- **Search Suggestions**: Leverages Google's powerful search suggestions.
- **Lightweight & Modern UI**: A simple and beautiful dashboard.

## Installation

1.  Go to the [latest release](https://github.com/DebdootManna/custom-search-engine/releases) on GitHub (or you can build it yourself).
2.  Download the `.xpi` file.
3.  In Firefox, navigate to `about:addons`.
4.  Drag and drop the downloaded `.xpi` file into the Add-ons Manager window.
5.  Approve the installation when prompted.

### Manual Installation (for Development)

1.  Clone or download this repository.
2.  Open Firefox and navigate to `about:debugging#/runtime/this-firefox`.
3.  Click the **Load Temporary Add-on...** button.
4.  Navigate to the `firefox-extension` directory inside the project and select the `manifest.json` file.

## How to Use

1.  Click the extension's icon in the Firefox toolbar.
2.  Select your desired search engine from the popup.
3.  Your choice is saved automatically and will be used for all future searches from the Firefox search/address bar.

## Credits

This extension was created and is maintained by [DebdootManna](https://github.com/DebdootManna).
