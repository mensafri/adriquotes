import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import "./quotes.styles.css";
import { findQuotes } from "../firebase";

export default function Quotes() {
  const [quotes, setQuotes] = React.useState("Lo Pikir Lo Keren?");

  const handleClick = async () => {
    const response = await findQuotes();
    const index = Math.floor(Math.random() * response.length);
    if (response[index].quotes !== "") {
      setQuotes(response[index].quotes);
    } else {
      setQuotes("Lo Pikir Lo Keren?");
    }
  };

  return (
    <div className="quotes-box">
      <Box
        sx={{
          width: "35%",
          height: "35%",
        }}
        textAlign="center"
      >
        <Card
          style={{
            height: "90%",
            boxShadow: "none",
            opacity: 0.8,
          }}
        >
          <p className="quote-container">"{quotes}"</p>
        </Card>
        <Box mt={4}>
          <Button variant="contained" onClick={handleClick} color="primary">
            Gerutu Lagi Bang!
          </Button>
        </Box>
      </Box>
    </div>
  );
}
