import { Routes, Route, Navigate } from "react-router-dom";
import "./styles.css";
import Navbar from "./components/UI/navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import HAndT from "./components/HAndT/HAndT";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/head&tail" element={<HAndT />} />
          <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
      </div>
    </div>
  );
}
