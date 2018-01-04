# News Feed app - React Native

Coding Fellowship React Native challenge. The app needed to:

Begin with a list screen, displaying a list of article headlines. The articles will be sourced from a local JSON file.

Allow an article item to be tapped in the list, navigating to a detail view. This will display the following content:
* Article image (if available) 
* Article headline
* Article content

Render the headerbar using a background colour of #d35400, with white text.

I had also completed the extra tasks, which were:

* The detail screen should include a button which, when tapped, will open an in-app-browser screen at the specified article's URL. Use the Expo SDK WebBrowser module to achieve this.
* Change the Back button to read 'Back' on the detail page instead of 'BBC News'.
* Convert the app to store the articles inside a Redux store.
* Read the articles from an API instead of a local JSON file.
* Show a loading spinner while the articles are loading.
* Display the article publication date beneath the headline in both the list and detail view. The date should take the form X {mins|hours|days} ago.
* Show an accessory 'chevron' to the right of the content inside each list item, for iOS devices only.

I also added pull-to-refresh functionality.

### End product

<img width="300" src="http://kyebuffery.co.uk/news-feed-native/bbc-news.gif" alt="News Feed GIF"/>

## Getting Started
The app can be installed by cloning the Git repository and running 'yarn add' in the project directory. Once all packages are installed, you can run 'yarn start' to run the app in localhost.

To simulate the app in a mobile device, type i in the CLI and this run the app in an emulated iOS device.

## Prerequisites
To run the simulator, you must have Xcode, Simulator and Watchman installed.

## Built With
React Native
Redux
ES6 immutable methods syntax
Expo
