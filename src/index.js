// es6 way of importing modules
// dependency for the whole project aka node module then no file path
import React from "react";
/* The react-dom package provides DOM-specific methods that can be used at the top level of your app and as an escape hatch to get outside of the React model if you need to. Most of your components should not need to use this module.*/
import ReactDom from "react-dom";

// all react functions are capitalized
function Booklist() {
  // JSX - javascript XML
  return (
    <section>
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article>
      <Image />
      <Title />
      <Author />
    </article>
  );
};
const Image = () => (
  <img
    src='https://images-na.ssl-images-amazon.com/images/I/A1pI53UQHvL._AC_UL200_SR200,200_.jpg'
    alt=''
  ></img>
);

const Title = () => <h1>Bronco and Friends: A Party to Remember</h1>;
const Author = () => <h4>Tim Tebow</h4>;
// what were goting to render, where we're going to render it
ReactDom.render(<Booklist />, document.getElementById("root"));
