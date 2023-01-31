import React from "react";
import { Link } from "react-router-dom";
import book from "../images/book.png"
import bookDetail from "./style/bookDetail.css"
import { useLocation } from 'react-router-dom';
const BookDetails = () => {
    const location = useLocation();
    console.log(location.state)
    return (
        <div>
            <div className="card">
                <img className="card-img-top" src={book}/>
                <div className="card-body">
                    <div><b>Book Name:</b> {location.state.name} </div>
                    <div><b>Author: </b>{location.state.author} </div>
                    <div><b>Genre:</b> {location.state.genre}</div>
                </div>
            </div>
        </div>
        // <div>
        //     {console.log('this is book details')}
        // </div>
    
    );
};

export default BookDetails;