import React from 'react'
import "./trip.css"
import Vlog from "../../assets/header.jpg"

const TripCatalog = () => {
  return (
    <>

    <div className="tripDiv">
        <div className="tripHeader" style={{
            backgroundImage: `url(${Vlog})`,
            backgroundRepeat: "none",
            backgroundSize: "cover",
            backgroundPosition: "bottom"
        }}>
            <div className="overlay">
              <h3>TOUR WITH US</h3>
            </div>
        </div>
        <div className="tripContent">
            
        </div>
    </div>
      
    </>
  )
}

export default TripCatalog
