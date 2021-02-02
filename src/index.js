// es6 way of importing modules
// dependency for the whole project aka node module then no file path
import React from "react";
/* The react-dom package provides DOM-specific methods that can be used at the top level of your app and as an escape hatch to get outside of the React model if you need to. Most of your components should not need to use this module.*/
import ReactDom from "react-dom";
// import css
import "./index.css";
// import books list
import { data } from "./books";
import RandomBook from "./Book";
import { greeting } from "./testing/testing";

function Booklist() {
  console.log(greeting);
  return (
    <section className='booklist'>
      {data.map((book) => {
        return <RandomBook key={book.id} {...book}></RandomBook>;
      })}
    </section>
  );
}

// what were goting to render, where we're going to render it
ReactDom.render(<Booklist />, document.getElementById("root"));
