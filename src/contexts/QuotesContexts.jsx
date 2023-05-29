import { createContext, useState } from "react";

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
  const value = { quotes, setQuotes };

  return (
    <QuotesContext.Provider value={value}>{children}</QuotesContext.Provider>
  );
};
