// import React from 'react'
import "./App.css";
import Nav from "./Components/Navbar/Nav";
// import About from "./Pages/About/About"
// import Contact from './Pages/Contact/Contact'
// import ReviewPage from "./Pages/Review/Review";
// import Nav from './Components/Navbar/Nav'
import Homepage from './Pages/Homepage/Homepage'
// import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <>

    {/* <div className="MAIN">
    <TripCatalog/>
    </div>  */}
    {/* <div className="MAIN">
    <Great/> 
    </div> */}
    {/* <div className="MAIN">
 <Accomodations/>
    </div> */}
   <Nav/>
   <Homepage/>
    {/* <Great/> */}
    {/* <TripCatalog/> */}
    {/* <Accomodations/> */}
    {/* <div>
    <Homepage/>
    </div> */}
    {/* <About/> */}
    {/* </div> */}
 
    </>
  )
}

export default App
