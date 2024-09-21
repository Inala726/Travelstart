import "./App.css"
import TripCatalog from './pages/TripCatalog/TripCatalog'
import Accomodations from "./pages/Accomodation/Accomodation"
import Great from "./pages/great"
import Trip from "./components/TriProps/Trip"
// import TripCatalog from './pages/TripCatalog/TripCatalog'
// import Great from "./pages/Great"
// import Accomodations from "./pages/Accomodation"
// import Great from "./pages/Great"
import Accomodations from "./pages/Accomodation"
import Homepage from "./pages/Homepage/Homepage"
import About from "./pages/About/About"

const App = () => {
  return (
    <>

    {/* <div className="MAIN">
    <TripCatalog/>
    </div>  */}
    {/* <div className="MAIN">
    <Great/> 
    </div> */}
    <div className="MAIN">
 <Accomodations/>
    </div>
   {/* <Homepage/> */}
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
