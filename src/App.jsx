import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";
import BookList from "./components/BookList";
import scifiBooks from "./data/scifi.json";

function App() {
  return (
    <div className="App">
      <MyNav />
      <Welcome />
      <BookList books={scifiBooks} />
      <MyFooter />
    </div>
  );
}

export default App;
