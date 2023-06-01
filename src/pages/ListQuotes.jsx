import React, { useContext } from "react";
import { QuotesContext } from "../contexts/QuotesContexts";
import ImageAdri from "../assets/download.jpeg";

export default function ListQuotes() {
  const { arrayQuotes } = useContext(QuotesContext);
  return (
    <div className="">
      <h1 className="flex justify-center items-center flex-col mt-8 text-3xl">
        List Quotes Lord Adri!
      </h1>
      <div className="grid grid-cols-4 gap-8 p-12">
        {arrayQuotes.map((quote) => {
          return (
            <div className="border-2 rounded-md border-slate-950 flex flex-col items-center bg-gradient-to-r from-sky-500 to-indigo-500">
              <img src={ImageAdri} alt="foto adri" className="mt-7"/>
              <p className="capitalize text-center m-5">{quote.quotes}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
