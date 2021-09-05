import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import { books } from "./books";
import Book from "./Book";

function BookList() {
  return (
    <section className="book">
      {books.map((book) => {
        return <Book key={book.id} {...book}></Book>;
      })}
    </section>
  );
}
ReactDOM.render(<BookList />, document.getElementById("root"));
