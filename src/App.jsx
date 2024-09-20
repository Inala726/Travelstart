import "./App.css"
import TripCatalog from './pages/TripCatalog/TripCatalog'
import Great from "./pages/Great"
import Accomodations from "./pages/Accomodation"

const App = () => {
  return (
    <>

    <div className="MAIN">
    <TripCatalog/>
    </div>
    <div className="MAIN">
    <Great/>
    <TripCatalog/>
    <Accomodations/>
    </div>
 
    </>
  )
}

export default App
