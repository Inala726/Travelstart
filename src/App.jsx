import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Great from './Pages/Great'
import About from "./Pages/About/About";
import Contact from './Pages/Contact/Contact';
import Homepage from "./Pages/Homepage/Homepage";
import TripCatalog from "./Pages/TripCatalog/TripCatalog";
import Nav from "./Components/Navbar/Nav";

const App = () => {
  return (
    <>
      {/* Use BrowserRouter instead of Router */}
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/countries" element={<Great />} />
          <Route path="/tc" element={<TripCatalog />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
