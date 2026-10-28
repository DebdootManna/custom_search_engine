# All-in-One Custom Search Extension

This project contains Firefox and Chromium WebExtension builds that allow users to switch between multiple privacy-focused search engines.

## Features

- **Interactive Dashboard**: A simple popup dashboard allows you to choose your preferred search engine at any time. The UI has been styled for a modern look and feel.
- **Supported Engines**: Startpage, DuckDuckGo, Brave Search, Ecosia, and PrivacyWall.
- **Seamless Redirection**: The extension intercepts search queries and redirects them to your selected search engine.
- **Google Suggestions**: Continues to use Google's search suggestion API for a consistent experience.

## How It Works

The Firefox build uses the `webRequest` API, while the Chromium build uses Manifest V3's `declarativeNetRequest` API.

1.  A base search engine (Startpage) is declared in the `manifest.json`.
2.  When you perform a search, the extension's background script intercepts the outgoing request to this base engine.
3.  It checks your saved preference from the popup dashboard.
4.  It then redirects the request to the search engine you have chosen.

## Project Structure

- **`.gitignore`**: A file to exclude unnecessary files from version control.
- **`README.md`**: The public-facing documentation for the GitHub repository.
- **`GEMINI.md`**: This internal documentation file.
- **`firefox-extension/`**: The directory containing all the source code for the WebExtension.
    -   `manifest.json`: The core configuration file.
    -   `background.js`: The script that contains the core redirection logic.
    -   `popup/`: Contains the HTML, CSS, and JavaScript for the interactive dashboard.
    -   `icons/`: Contains the icons for the extension.

## How to Install (Development)

1.  Open Firefox and navigate to `about:debugging`.
2.  Click "This Firefox".
3.  Click "Load Temporary Add-on...".
4.  Select the `firefox-extension/manifest.json` file.