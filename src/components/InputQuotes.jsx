import React from "react";
import { Box, Button, FormControl, InputLabel, TextField } from "@mui/material";
import "./quotes.styles.css";

export default function InputQuotes() {
  const handleSubmit = (event) => {
    event.preventDefault();
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
        sx={{ padding: 5}}
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
          />
          <Button
            variant="contained"
            onSubmit={handleSubmit}
            sx={{ margin: 3 }}
          >
            Sip!
          </Button>
        </FormControl>
      </Box>
    </div>
  );
}
