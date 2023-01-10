import React from "react";
import react from "react";
import addBook from "./style/addBook.css"

class AddBook extends React.Component {
    render(){
        return(
            <div>
                <form>
                <div className="name">
                    <label >
                        <span>Name :</span>
                            <input className="inp" type="text" name="name" />
                    </label>
                </div>
                <div className="genre">
                    <label >
                        <span>Genre :</span>
                            <input className="inp" type="text" name="name" />
                    </label>
                </div>
                <div className="author">
                    <label >
                        <span>Author:</span>
                            <input className="inp" type="text" name="name" />
                    </label>
                </div>
                <div className="sub">
                     <button type="button" className="btn btn-primary">Add</button>
                </div>
                
            </form>
           </div>
        )
    }
}
export default AddBook;