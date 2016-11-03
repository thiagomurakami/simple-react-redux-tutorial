# Hello World!

## Introduction

The "usual" web app (server side) works like this:
![Server Side App](../images/server-side.png)

React (and many other client-side frameworks) are a little different:
![Client Side App](../images/client-side.png)
(Images from: [A study plan to cure Javascript Fatigue](https://medium.com/@sachagreif/a-study-plan-to-cure-javascript-fatigue-8ad3a54f2eb1#.djem8j34q))

## Running

To run this sample:
```
npm install
npm run build-react
npm start
```

## Explanation

The `npm run build-react` runs the following script:

```
"build-react": "webpack --config webpack.config.js",
```

What this does is:
* Gets the **entries**, in this case: [App.jsx](1).
* Performs all the transformations required for [App.jsx](1) to run on the browser.
* Outputs the result to `public/bundle.js`.

## A step further

Try modifying the timeOut on [App.jsx](1) or adding new tags to the HelloWorld component!

**Don't forget to run `npm run build-react` to make your changes visible!** 

[1]: ./src/App.jsx
