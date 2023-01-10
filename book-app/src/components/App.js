import react from "react"
import './style/App.css';
import Header from "./Header"
import AddBook from "./AddBook"
import BookList from "./BookList"

function App() {
  const books = [
    {
      id:"1",
      name: "wimpy kid",
      genre: "comedy",
      author: "xyz"
    },
    {
      id: "2",
      name: "sherlock holmes",
      genre: "mystery",
      author: "doyale"
    }
  ]
  return (
    <div>
      <Header/>
     <AddBook> </AddBook>
     <BookList books = {books}/> 
    </div>
  );
}

export default App;
