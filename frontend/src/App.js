import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import AllBooks from "./pages/AllBooks";
import Home from "./pages/Home";
import AddBook from "./pages/AddBook";
import Book from "./pages/Book";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/getbook" element={<AllBooks />} />
        <Route path="/addbook" element={<AddBook />} />
        <Route path="/getbook/:id" element={<Book />} />
      </Routes>
    </>
  );
}

export default App;
