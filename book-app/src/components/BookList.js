import react from "react";
import React from "react";
import BookCard from "./BookCard";
import bookList from "./style/bookList.css";
import { Link } from "react-router-dom";

const BookList = (props) => {
    console.log(props);
    const deleteContactHandler = (id) => {
        props.getBookId(id);
    };
    
    const renderBookList = props.books.map((book) => {
        return (
            <BookCard
                books={book}
                clickHandler={deleteContactHandler}
                key={book.id}
            />
        );
    });
    return (
        <div className="main">
            <div className="head d-flex justify-content-between ps-4 pe-4">
                <p className="h3 text-left "> Book List</p>
                <Link to="/add">
                    <button className="btn btn-primary">Add Contact</button>
                </Link>
            </div>
            <div>{renderBookList}</div>
        </div>
    );

};

export default BookList;