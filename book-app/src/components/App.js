import react from "react"
import './style/App.css';
import Header from "./Header"
import AddBook from "./AddBook"
import BookList from "./BookList"

function App() {
  return (
    <div>
      <Header/>
     <AddBook> </AddBook>
     {/* <BookList></BookList>  */}
    </div>
  );
}

export default App;
