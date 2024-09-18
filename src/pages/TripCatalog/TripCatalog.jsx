import React from 'react'
import "./trip.css"
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
                  
              {/* <div className='tour-all'>
              <div className='tour-div'>
                <img className='' src={VBeach} alt="" />
                <div className='bruck-div'>
                <p>Inns Bruck Tourismus introduces worm card to</p>
                <p>travelers</p>
                <div className='comment-div'>
                  <p>July 15 2021</p>
                  <p>No comments</p>
                </div>
                </div>               
              </div>

              <div className='tour-div'>
                <img className='' src={VBeach} alt="" />
                <div className='bruck-div'>
                <p>Inns Bruck Tourismus introduces worm card to</p>
                <p>travelers</p>
                <div className='comment-div'>
                  <p>July 15 2021</p>
                  <p>No comments</p>
                </div>
                </div>               
              </div>
            </div> */}
                 <div className="beach-all">

              <Trip image = {VBeach} description="We offer the perfect tour locations." activities="Skiing and paragliding" price="Funding a full tour costs $5000"/>
              <Trip image = {VBeach} description="We offer the perfect tour locations." activities="Skiing and paragliding" price="Funding a full tour costs $5000"/>
              <Trip image = {VBeach} description="We offer the perfect tour locations." activities="Skiing and paragliding" price="Funding a full tour costs $5000"/>
              </div>
             
             {/* <div className='beach-div'>
                <img src={VBeach} alt="" />
                <div className='dark-comment'>
                <div>
                  <p>Tour operators retooling</p>
                  <p>Itineraries, looking for 2022</p>
                </div>
                <div className='comment-div'>
                  <p>July 15 2021</p>
                  <p>No comments</p>
                </div>
                </div>
              
              </div>

               <div className='beach-div'>
                <img src={VBeach} alt="" />
                <div className='dark-comment'>
                <div>
                  <p>Tour operators retooling</p>
                  <p>Itineraries, looking for 2022</p>
                </div>
                <div className='comment-div'>
                  <p>July 15 2021</p>
                  <p>No comments</p>
                </div>
                </div>
              
              </div>
            </div>

            <div className='tour-all'>
              <div className='tour-div'>
                <img className='' src={VBeach} alt="" />
                <div className='bruck-div'>
                <p>Inns Bruck Tourismus introduces worm card to</p>
                <p>travelers</p>
                <div className='comment-div'>
                  <p>July 15 2021</p>
                  <p>No comments</p>
                </div>
                </div>               
              </div>

              <div className='tour-div'>
                <img className='' src={VBeach} alt="" />
                <div className='bruck-div'>
                <p>Inns Bruck Tourismus introduces worm card to</p>
                <p>travelers</p>
                <div className='comment-div'>
                  <p>July 15 2021</p>
                  <p>No comments</p>
                </div>
                </div>               
              </div>
            </div>
        </div>

        <div className='beach-all'>
              <div className='beach-div'>
                <img src={VBeach} alt="" />
                <div className='dark-comment'>
                <div>
                  <p>Tour operators retooling</p>
                  <p>Itineraries, looking for 2022</p>
                </div>
                <div className='comment-div'>
                  <p>July 15 2021</p>
                  <p>No comments</p>
                </div>
                </div>
              
              </div>

             <div className='beach-div'>
                <img src={VBeach} alt="" />
                <div className='dark-comment'>
                <div>
                  <p>Tour operators retooling</p>
                  <p>Itineraries, looking for 2022</p>
                </div>
                <div className='comment-div'>
                  <p>July 15 2021</p>
                  <p>No comments</p>
                </div>
                </div>
              
              </div>

               <div className='beach-div'>
                <img src={VBeach} alt="" />
                <div className='dark-comment'>
                <div>
                  <p>Tour operators retooling</p>
                  <p>Itineraries, looking for 2022</p>
                </div>
                <div className='comment-div'>
                  <p>July 15 2021</p>
                  <p>No comments</p>
                </div>
                </div>
               */}
              {/* </div> */}
            </div>
            
    </div>
      
    </>
  )
}

export default TripCatalog
