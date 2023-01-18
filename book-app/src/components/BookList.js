import react from "react";
import React from "react";
import BookCard from "./BookCard";

const BookList = (props) => {
    const deleteContactHandler = (id) => {
        props.getBookId(id);
    };
    const renderBookList = props.books.map((book) => {
        return (
            <BookCard books={book} clickHandler={deleteContactHandler} key={book.id} />
        );
    });
    return <div>{renderBookList}</div>
};

export default BookList;
