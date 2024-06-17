import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const AppContext = createContext();

export default function AppContextProvider({ children }) {
  const [books, setBooks] = useState();

  const fetchBooks = async () => {
    await axios
      .get("http://localhost:8000/api/v1/getbook")
      .then((res) => setBooks(res.data.books))
      .catch((error) => {
        console.error(error);
      });
  };

  const value = { books, setBooks, fetchBooks };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
