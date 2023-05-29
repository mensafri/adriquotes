import React, { useState } from "react";
import { Box, Button, FormControl, InputLabel, TextField } from "@mui/material";
import "./quotes.styles.css";
import { inputQuotes } from "../firebase";

export default function InputQuotes() {
  const [quote, setQuote] = useState("");

  const handleChange = (e) => {
    setQuote(e.target.value);
  };

  const handleClick = (event) => {
    inputQuotes(quote);
    setQuote("");
  };

  return (
    <div className="input-box">
      <InputLabel
        sx={{
          display: "flex",
          justifyContent: "center",
          fontWeight: 1000,
          top: 200,
        }}
      >
        Masukkan Gerutuan Lord Adri!
      </InputLabel>
      <Box
        sx={{ padding: 5 }}
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="70vh"
      >
        <FormControl>
          <TextField
            id="outlined-basic"
            label="Enter your quote here"
            variant="outlined"
            fullWidth
            value={quote}
            onChange={handleChange}
          />
          <Button variant="contained" onClick={handleClick} sx={{ margin: 3 }}>
            Sip!
          </Button>
        </FormControl>
      </Box>
    </div>
  );
}
