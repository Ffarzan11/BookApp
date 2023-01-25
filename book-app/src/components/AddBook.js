import React from "react";

import addBook from "./style/addBook.css"

class AddBook extends React.Component {
    state = {
        name: "",
        genre: "",
        author: "",
    };

    add = (e) => {
        e.preventDefault();
        if (this.state.name === "" || this.state.genre === "" || this.state.author === "") {
            alert('All fields needed');
            return;
        }
        this.props.addBookHandler(this.state);
        this.setState({ name: "", genre: "", author: "" });
    };
    render() {
        return (
            <div>
                <form onSubmit={this.add}>
                    <div className="name">
                        <label >
                            <span>Name :</span>
                            <input
                                className="inp"
                                type="text"
                                name="name"
                                value={this.state.name}
                                 onChange={(e) => this.setState({ name: e.target.value })} />
                        </label>
                    </div>
                    <div className="genre">
                        <label >
                            <span>Genre :</span>
                            <input
                                className="inp"
                                type="text"
                                name="name"
                                value={this.state.genre}
                                onChange={(e) => this.setState({ genre: e.target.value })} />
                        </label>
                    </div>
                    <div className="author">
                        <label >
                            <span>Author:</span>
                            <input
                                className="inp"
                                type="text"
                                name="name"
                                value={this.state.author}
                                onChange={(e) => this.setState({ author: e.target.value })} />
                        </label>
                    </div>
                    <div className="sub">
                        <button type="submit" className="btn btn-primary" value="submit">Add</button>
                    </div>

                </form>
            </div>
        );
    }
}
export default AddBook;