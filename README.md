# sample-html-snippet

Sample content type that can take html, css, and js input to render a component.

![HTML snippet rendered from HTML, CSS, and JS code](/doc/images/demo-sample.png)

## Table of Contents
- [Table of Contents](#table-of-contents)
- [Install and deploy the sample](#install-and-deploy-the-sample)
  - [Configure your Wchtools](#configure-your-wchtools)
  - [Install the package content-artifacts and  site-application-files](#clone-and-install-the-sample-content-artifacts-and-site-application-files)
  - [Build and Deploy your components](#build-and-deploy-your-components)
- [Example create your own html snippet](#example-create-your-own-html-snippet)
- [License](#license)

## Install and deploy the sample

### Configure your Wchtools
* Get your WCH tenant API URL. Go to your WCH homepage -> YOUR USERNAME tab on top bar -> Hub information -> API URL. Copy the URL.
* Run `wchtools init` in your command line. Enter your username and API URL to configure the wchtools

### Clone and install the sample content-artifacts and site-application-files
* If you have not already done so, clone the [wch-site-application](https://github.com/ibm-wch/wch-site-application) source code and run `npm install` from within the cloned directory to install the dependencies. 
* From a command terminal, change directories to the wch-site-application root folder.
* Run the command below to copy the needed sample site-application-files and update the layout settings for the new component:
```
npm run install-layouts-from-git https://github.com/ibm-wch/sample-html-snippet.git
```
* Build and deploy your wch-site-application repository to make the new changes live.

### Build and Deploy your components
From a command terminal within the wch-site-application root directory, run:
1. `npm run build` to compile the project. Make sure there is no error during the build process.
2. `npm run deploy` to deploy the code to your WCH tenant. After that, you can see your changes in your WCH live site.

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
