import "./App.css"
import TripCatalog from './pages/TripCatalog/TripCatalog'
import Accomodations from "./pages/Accomodation/Accomodation"
import Great from "./pages/great"
import Trip from "./components/TriProps/Trip"
// import TripCatalog from './pages/TripCatalog/TripCatalog'
// import Great from "./pages/Great"
// import Great from "./pages/Great"
import {BrowserRouter as Router, Routes, Route} from react-router-dom
import Homepage from "./pages/Homepage/Homepage"
import About from "./pages/About/About"
import Footer from "./components/Footer/Footer"

const App = () => {
  return (
    <>

    
    <div className="MAIN">
       <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
        <Footer/>
       </Router>
    </div>
 
    </>
  )
}

export default App
