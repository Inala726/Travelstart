import "./App.css"
import TripCatalog from './pages/TripCatalog/TripCatalog'
import Accomodations from "./pages/Accomodation"
import Great from "./pages/great"
import Homepage from "./pages/Homepage/Homepage"
import Trip from "./components/TriProps/Trip"

const App = () => {
  return (
    <>

    <div className="MAIN">
    <TripCatalog/>
    </div> 
    {/* <div className="MAIN">
    <Great/> 
    </div> */}
    {/* <div className="MAIN">
 <Accomodations/>
    </div> */}
   {/* <Homepage/> */}
    </>
  )
}

export default App
