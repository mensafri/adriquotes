import React, { useContext, useState } from "react";
import { Box, Button, TextField } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import "./quotes.styles.css";
import { QuotesContext } from "../contexts/QuotesContexts";

export default function InputQuotes() {
  const [quote, setQuote] = useState("");
  const { addQuotes } = useContext(QuotesContext);

  const handleChange = (e) => {
    setQuote(e.target.value);
  };

  const handleClick = () => {
    if (quote !== "") {
      addQuotes(quote);
    } else {
      return;
    }
  };

  return (
    <div className="quotes-box">
      <Box
        sx={{
          width: "55%",
          height: "45%",
        }}
      >
        <Card
          variant="outlined"
          style={{
            height: "100%",
          }}
        >
          <CardContent>
            <TextField
              label="Masukkan Gerutuan Lord Adri Disini"
              fullWidth
              value={quote}
              onChange={handleChange}
              multiline={true}
              rows={5}
            />
          </CardContent>
          <CardActions sx={{ justifyContent: "center" }}>
            <Button variant="outlined" color="primary" onClick={handleClick}>
              Sip!
            </Button>
          </CardActions>
        </Card>
      </Box>
    </div>
  );
}
