// import React from 'react'
import { Route, Router, Routes } from "react-router-dom";
import "./App.css";
// import Nav from "./Components/Navbar/Nav";
import About from "./Pages/About/About"
import Contact from './Pages/Contact/Contact'
// import ReviewPage from "./Pages/Review/Review";
import Homepage from "./Pages/Homepage/Homepage";
import Nav from "./Components/Navbar/Nav";
// import Footer from './Components/Footer/Footer'
import Great from "./Pages/great";
import TripCatalaog from "./Pages/TripCatalog/TripCatalog"
const App = () => {
  return <>
      <Router>
        <Nav/>
        <Routes>
          <Route path="/" element = {<Homepage/>}/>
          <Route path="/about" element = {<About/>}/>
          <Route path="/contact" element= {<Contact/>}/>
          <Route path="/countries" element= {<Great/>}/>
          <Route path="/tc" element = {<TripCatalaog/>}/>
        </Routes>
      </Router>
 
  </>;
};

export default App;
