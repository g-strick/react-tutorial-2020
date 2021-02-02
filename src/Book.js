// when setting up component you need to import
import React from "react";

const Book = (props) => {
  const { img, title, author } = props;
  // reference or inline function
  const clickHandler = (e) => {
    console.log("e.target:", e.target);
    alert("hello world");
  };
  const complexExample = () => {
    console.log(author);
  };
  return (
    <article
      className='book'
      onMouseOver={() => {
        console.log(title);
      }}
    >
      <img src={img} alt=''></img>
      {/* {children} */}
      <h1 onClick={() => console.log(title)}>{title}</h1>
      <h4>{author}</h4>
      <button type='button' onClick={clickHandler}>
        reference example
      </button>
      <button type='button' onClick={() => complexExample(author)}>
        more complex example
      </button>
    </article>
  );
};
export default Book;
