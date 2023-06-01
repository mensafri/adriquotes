import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import InputQuotes from "./components/InputQuotes";
import Quotes from "./components/Quotes";
import ListQuotes from "./pages/ListQuotes";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Quotes />} />
        <Route path="inputQuotes" element={<InputQuotes />} />
        <Route path="list" element={<ListQuotes />} />
      </Route>
    </Routes>
  );
}

export default App;
