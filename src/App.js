// import Home from "./components/Home";
import "./styles/app.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route/>
      </Routes>
   </Router>
  );
}

export default App;
//        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&per_page=200"