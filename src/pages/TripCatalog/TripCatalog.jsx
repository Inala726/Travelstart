import React from 'react'
import "./trip.css"
import Data from "../../../public/data.json"
import Vlog from "../../assets/header.jpg"
import VBeach from "../../assets/beach-park.jpg"
import Trip from '../../components/TriProps/Trip'

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
            <div className='beach-all'>
              <Trip image = {VBeach} description="We offer the perfect tour locations." activities="Skiing and paragliding" price="Funding a full tour costs $5000"/>
              <Trip image = {VBeach} description="We offer the perfect tour locations." activities="Skiing and paragliding" price="Funding a full tour costs $5000"/>
              <Trip image = {VBeach} description="We offer the perfect tour locations." activities="Skiing and paragliding" price="Funding a full tour costs $5000"/>
              </div>

                  <div className="tours">
              {Data.map((location) => (
                    <div className='tour-div'>
                    <img className=''src={location.image} alt="" />
                    <div className='bruck-div'>
                    <p>{location.description}</p>
                    <p>{location.activity}</p>
                    <div className='comment-div'>
                      <p>{location.date}</p>
                      <p>{location.duration}</p>
                      <p>{location.destination}</p>
                    </div>
                    </div>               
                  </div>
    
              ))}
              </div>          

            </div>
            
    </div>
      
    </>
  )
}

export default TripCatalog
