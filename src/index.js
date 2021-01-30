// es6 way of importing modules
// dependency for the whole project aka node module then no file path
import React from "react";
/* The react-dom package provides DOM-specific methods that can be used at the top level of your app and as an escape hatch to get outside of the React model if you need to. Most of your components should not need to use this module.*/
import ReactDom from "react-dom";

// all react functions are capitalized
function Greeting() {
  // JSX - javascript XML
  return (
    <>
      <Person />
      <Message />
    </>
  );
}

const Person = () => <h1>john doe</h1>;
const Message = () => {
  return <p>this is my message</p>;
};

// what were goting to render, where we're going to render it
ReactDom.render(<Greeting />, document.getElementById("root"));
