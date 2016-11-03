import React from 'react';
import ReactDOM from 'react-dom';

// Delay to render the component into the DOM
const timeOut = 1000;

/*
  This is also a React Component!
  See: https://facebook.github.io/react/docs/components-and-props.html#functional-and-class-components
*/
const HelloWorld = (props) => (
  <p>Client Side Hello World! with {props.time} ms delay!</p>
);

/*
  Rendered with a delay using setTimeout
*/
setTimeout(() => {
  ReactDOM.render(
    <HelloWorld time={timeOut} />, // The React component to be rendered
    document.getElementById('root') // Will render on this element
  );
}, timeOut)

