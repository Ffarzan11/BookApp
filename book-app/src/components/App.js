import React, { useState, useEffect } from "react";

import './style/App.css';
import Header from "./Header"
import AddBook from "./AddBook"
import BookList from "./BookList"

function App() {
  const LOCAL_STORAGE_KEY = "books";
  const [books, setBooks] = useState(JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)));;

  const addBookHandler = (book) => {
    console.log(books);
    setBooks([...books, book])
  };
  // const removeBookHandler = (id) => {
  //   const newBookList = books.filter((book)=>{
  //     return book.id !== id;
  //   });
  //   setBooks(newBookList);
  // }
  // useEffect(() => {
  //   const retrieveBook = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  //   if(retrieveBook) setBooks(retrieveBook);
  // }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(books));
  }, [books]);
  return (
    <div>
      <Header />
      <AddBook addBookHandler={addBookHandler} />
      <BookList books={books} />
    </div>
  );
}

export default App;
