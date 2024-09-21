// import React from 'react'
import { Route, Router, Routes } from "react-router-dom";
import "./App.css";
import About from "./Pages/About/About"
// import ReviewPage from "./Pages/Review/Review";
import Homepage from "./Pages/Homepage/Homepage";
import Nav from "./Components/Navbar/Nav";
import Great from "./pages/Great";
import TripCatalog from "./pages/TripCatalog/TripCatalog";
import Contact from "./pages/Contact/Contact";
import Footer from "./components/Footer/Footer";

const App = () => {
  return <>
      <Router>
        <Nav/>
        <Routes>
          <Route path="/" element = {<Homepage/>}/>
          <Route path="/about" element = {<About/>}/>
          <Route path="/contact" element= {<Contact/>}/>
          <Route path="/countries" element= {<Great/>}/>
          <Route path="/tc" element = {<TripCatalog/>}/>
          
        </Routes>
        <Footer/>
      </Router>
 
  </>;
};

export default App;
