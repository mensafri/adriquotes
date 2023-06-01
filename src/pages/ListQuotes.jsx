import React, { useContext } from "react";
import { QuotesContext } from "../contexts/QuotesContexts";
import { Box, Card, CardContent, CardMedia } from "@mui/material";
import ImageAdri from "../assets/download.jpeg";

export default function ListQuotes() {
  const { arrayQuotes } = useContext(QuotesContext);
  return (
    <div>
      <h1
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        List Quotes Lord Adri!
      </h1>
      {arrayQuotes.map((quote) => {
        return (
          <Box
            sx={{
              width: 295,
              height: 'auto',
              backgroundColor: "primary.dark",
              margin: 5,
              display: "inline-block",
              border: "2px solid grey",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <img
              src={ImageAdri}
              alt="quotesAdri"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            />
            <p
              style={{
                border: "2px solid black",
                marginTop: 0,
                textTransform: "capitalize",
                textAlign: "center",
              }}
            >
              {quote.quotes}
            </p>
          </Box>
        );
      })}
    </div>
  );
}
