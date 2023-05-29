import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Quotes from "./components/Quotes";
import InputQuotes from "./components/InputQuotes";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Quotes />} />
        <Route path="inputQuotes" element={<InputQuotes />} />
      </Route>
    </Routes>
  );
}

export default App;
