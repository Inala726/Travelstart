import "./App.css"
import React from 'react'
import TripCatalog from './pages/TripCatalog/TripCatalog'
import Accomodations from "./pages/Accomodation"
import Great from "./pages/great"

const App = () => {
  return (
    <>

    {/* <div className="MAIN">
    <TripCatalog/>
    </div> */}
    {/* <div className="MAIN">
     <Great/>
    </div> */}

    <div className="MAIN">
    <Accomodations/>
    </div>

    </>
  )
}

export default App

