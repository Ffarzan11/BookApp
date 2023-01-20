import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { uuid } from "uuidv4";
import './style/App.css';
import Header from "./Header"
import AddBook from "./AddBook"
import BookList from "./BookList"

const { v4: uuidv4 } = require('uuid')
function App() {
  
  const LOCAL_STORAGE_KEY = "books";
  const [books, setBooks] = useState(JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)));;

  const addBookHandler = (book) => {
    console.log(books);
    setBooks([...books, {id:uuid(), ...book}])
  };
  const removeBookHandler = (id) => {
    const newBookList = books.filter((book)=>{
      return book.id !== id;
    });
    setBooks(newBookList);
  };
 
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(books));
  }, [books]);
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" exact element={<BookList  books={books} getBookId={removeBookHandler} />} />
          <Route path="/add" exact element={<AddBook addBookHandler={addBookHandler} />} />
        </Routes>
        {/* <AddBook  />
        <BookList /> */}
      </Router>
    </div>
  );
}

export default App;
