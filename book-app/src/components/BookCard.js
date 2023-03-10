import React from "react";
import { Link } from "react-router-dom";
import bookcard from "./style/bookcard.css";
import book from "../images/book.png"
const BookCard = (props) => {
    
    const { id, name, genre, author } = props.books;
    

    return (
        <div className="list-group">
            <div className="list-group-item list-group-item-action flex-column align-items-start">
                <div className="d-flex">
                    <div className="book-img"><img src={book} alt="book cover" className="img-thumbnail"></img></div>
                    <div className="d-flex w-100 justify-content-between">
                        <div>
                            <Link 
                                to = {{
                                        pathname:`/book/${id}`,    
                                        
                                      }}
                                state = {
                                    {
                                        name:name,
                                        genre:genre,
                                        author:author
                                    }
                                }>
                                <h5 className="mb-1">{name}</h5>
                                <div>{genre}</div>
                                <div>{author}</div>
                            </Link>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="red" className="bi bi-trash" viewBox="0 0 16 16" onClick={() => props.clickHandler(id)}>
                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                            <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                        </svg>
                    </div>


                </div>

            </div>
        </div>
    )
}

export default BookCard;