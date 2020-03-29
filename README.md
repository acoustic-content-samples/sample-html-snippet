# sample-html-snippet

Sample content type that can take html, css, and js input to render a component in Acoustic Content (formerly Watson Content Hub or WCH).
Update: As of April 26th, 2018, the HTML Snippet was renamed to Embed code and the content type is now part of the out of the box
Single Page Application Oslo.
Therefore this repository was updated to only showcase a sample implementation of a stock ticker using the content type that exists
out of the box.

![HTML snippet rendered from HTML, CSS, and JS code](/doc/images/demo-sample.png)

## Table of Contents
- [Table of Contents](#table-of-contents)
- [Prerequisite](#prerequisite)
- [Install and deploy the sample](#install-and-deploy-the-sample)
  - [Configure your Wchtools](#configure-your-wchtools)
  - [Install the sample content-artifacts](#install-the-sample-content-artifacts)
  - [Build and Deploy your components](#build-and-deploy-your-components)
- [Example create your own html snippet](#example-create-your-own-html-snippet)
- [License](#license)

## Prerequisite
* Node.js v6.11.1 or above. https://nodejs.org/en/download/
* Latest version of wchtools-cli. https://github.com/ibm-wch/wchtools-cli 
* Installed out of the box site in your Watson Content Hub tenant.

## Install and deploy the sample

### Configure your Wchtools
* Get your WCH tenant API URL. Open the Hub information dialog from the "About" flyout menu in the left navigation pane of the Watson Content Hub user interface. Copy the API URL.
* Run `wchtools init` in your command line. Enter your username and API URL to configure the wchtools

### Install the sample content-artifacts
* Using the Git URL to the sample-html-snippet repository and change the command line directory to `content-artifacts`, run this command to push HTML snippet sample page contents.
```
wchtools push -A -v -f
```

## Example create your own HTML snippet
Weather forecast
![San Jose week forecast](/doc/images/weather-snippet.png)
1. go to https://weatherwidget.io/
2. Customize widget
   * Choose a city, label, language, units
   * Options, Themes, and Customize tabs allow for further modification
3. Click 'GET CODE' button
4. Copy code from modal popup.
5. Create a new content item in your tenant.
6. Paste copied code in the HTML text field.
7. Publish the content item.
8. Add the new content item to a page.

## License
See the included license file [License](license.txt) .

[back to top](#sample-html-snippet)
