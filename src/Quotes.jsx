import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import './quotes.styles.css'




const card = (
  <React.Fragment>
    <CardContent>
      <Typography variant="h5" component="div">
        "Lo Pikir Lo Keren?"
      </Typography>
    </CardContent>
    <CardActions sx={{ justifyContent: "center" }}>
      <Button size="small" variant="outlined" color="primary" >Gerutu Lagi Bang!</Button>
    </CardActions>
  </React.Fragment>
);

export default function Quotes() {
  return (
    <div className="quotes-box">
      <Box sx={{ minWidth: 275 }} display="flex" justifyContent="center" alignItems="center">
        <Card variant="outlined">{card}</Card>
      </Box>
    </div>
  );
}
