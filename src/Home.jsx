import React, { Fragment } from "react";
import Quotes from "./Quotes";
import Navbar from "./Navbar";

export default function Home() {
  return <Fragment>
    <Navbar/>
    <Quotes/>
  </Fragment>;
}
