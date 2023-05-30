import { createContext, useState } from "react";
import { findQuotes, inputQuotes } from "../firebase";

export const QuotesContext = createContext({
  quotes: "",
  arrayQuotes: [],
  getArrayQuotes: () => {},
  addQuotes: () => {},
  deleteQuote: () => {},
  updateQuote: () => {},
});

export const QuotesProvider = ({ children }) => {
  const [quotes, setQuotes] = useState("");
  const [arrayQuotes, setArrayQuotes] = useState([]);

  const addQuotes = (inputQuote) => {
    inputQuotes(inputQuote);
    setQuotes(inputQuote);
  };

  const getArrayQuotes = async  () => {
    const response = await findQuotes();
    setArrayQuotes(response);
  };

  const value = { quotes, addQuotes, getArrayQuotes, arrayQuotes };
  return (
    <QuotesContext.Provider value={value}>{children}</QuotesContext.Provider>
  );
};
