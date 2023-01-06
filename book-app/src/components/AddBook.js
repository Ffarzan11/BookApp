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
                        <input type="text" name="name" />
                    </label>
                </div>
                <div className="genre">
                    <label >
                        <span>Genre :</span>
                        <input type="text" name="name" />
                    </label>
                </div>
                <div className="author">
                    <label >
                        <span>Author:</span>
                        <input type="text" name="name" />
                    </label>
                </div>
                <input type="submit" value="Submit" />
            </form>
           </div>
        )
    }
}
export default AddBook;