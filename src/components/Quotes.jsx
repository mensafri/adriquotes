import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import "./quotes.styles.css";
import { QuotesContext } from "../contexts/QuotesContexts";

export default function Quotes() {
  const [quote, setQuote] = React.useState("Lo Pikir Lo Keren?");
  const { arrayQuotes } = React.useContext(QuotesContext);

  const handleClick = async () => {
    const index = Math.floor(Math.random() * arrayQuotes.length);
    if (arrayQuotes[index].quotes !== "" || arrayQuotes[index].quotes === []) {
      setQuote(arrayQuotes[index].quotes);
      console.log(arrayQuotes[index].quotes);
      console.log(arrayQuotes[index].id);
    } else {
      setQuote("Lo Pikir Lo Keren?");
    }
  };

  // React.useEffect(() => {
  //   const fetchQuotes = async () => {
  //     await getArrayQuotes();
  //   };

  //   fetchQuotes();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

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
          <p className="quote-container">"{quote}"</p>
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
