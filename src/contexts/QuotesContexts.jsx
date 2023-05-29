import { createContext, useState } from "react";
import { inputQuotes } from "../firebase";

export const QuotesContext = createContext({
  quotes: [],
  addQuote: () => {},
  deleteQuote: () => {},
  updateQuote: () => {},
  updateQuoteStatus: () => {},
  updateQuoteAuthor: () => {},
});

export const QuotesProvider = ({ children }) => {
  const [quotes, setQuotes] = useState([]);

  const addQuotes = (inputQuote) => {
    inputQuotes(inputQuote);
    setQuotes(inputQuote);
  };

  const value = { quotes, addQuotes };
  return (
    <QuotesContext.Provider value={value}>{children}</QuotesContext.Provider>
  );
};
