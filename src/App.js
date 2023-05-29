import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Navbar";
import Quotes from "./Quotes";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Quotes />} />
      </Route>
    </Routes>
  );
}

export default App;
