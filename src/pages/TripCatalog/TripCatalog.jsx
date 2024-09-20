import React from "react";
import "./trip.css";
import Data from "../../../public/data.json";
import Vlog from "../../assets/header.jpg";
import Trip from "../../components/TriProps/Trip";
import Rate1 from "../../assets/ratings/rating-40.png"
import Rate2 from "../../assets/ratings/rating-50.png"

const TripCatalog = () => {
  let imageStuff = "";
  if(Data.rating === "4"){
    imageStuff = {Rate1}
  }else if(Data.rating === "5"){
    imageStuff = {Rate2}
  }
  
  return (
    <>
      <div className="tripDiv">
        <div
          className="tripHeader"
          style={{
            backgroundImage: `url(${Vlog})`,
            backgroundRepeat: "none",
            backgroundSize: "cover",
            backgroundPosition: "bottom",
          }}
        >
          <div className="overlay">
            <h3>TOUR WITH US</h3>
          </div>
        </div>
        <div className="tripContent">

          <div className="beach-all">
            {Data.map((location) => (
              // <Trip
              //   image={location.image}
              //   description={location.description}
              //   activities={location.activity}
              //   price={location.price}
              //   destination={location.destination}
              //   Popularity={location.popularity}
              //   rating={location.rating === "4" ? {Rate1} : {Rate1}}
              //   name={location.title}
              // />
              <Trip 
              image={Vlog} 
              description= "Love Love Love Love Depression Depression Dpression Depression Depression." 
              activities= "Paragliding, Skiing, Paragliding,  Skiing"
              price="4500"
              destination= "Madagascar"
              Popularity= "Very Popular"
              rating= {Rate2}
              name = "Pack up that lingerie and tour feeling sexy"
              // function ={imageStuff}

              />
            ))}
          </div>

        </div>

      </div>
    </>
  );
};

export default TripCatalog;
