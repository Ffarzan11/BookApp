import react from "react";
import React from "react";
import BookCard from "./BookCard";

const BookList = (props) => {
    const renderBookList = props.books.map((book) => {
        return (
            <BookCard books={book} />
        );
    });
    return <div>{renderBookList}</div>
};

export default BookList;
