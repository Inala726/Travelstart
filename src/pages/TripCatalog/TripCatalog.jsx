import React from "react";
import "./trip.css";
import Data from "../../../public/data.json";
import Vlog from "../../assets/header.jpg";
import VBeach from "../../assets/beach-park.jpg";
import Trip from "../../components/TriProps/Trip";

const TripCatalog = () => {
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
              <Trip
                image={location.image}
                description={location.description}
                activities={location.activity}
                price={location.price}
                destination={location.destination}
                Popularity={location.popularity}
                rating={location.rating}
                name={location.title}
              />
            ))}
          </div>

        </div>
        
      </div>
    </>
  );
};

export default TripCatalog;
