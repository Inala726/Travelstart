import React from "react";
import "./triprops.css";

const Trip = (props) => {
  return (
    <>
      <div className="Props new">
        <div className="beach-div">
          <img src={props.image} alt="" />
          <div className="dark-comment">

            <div className="rate">
              <div className="divRate">{props.rating}</div>
              <p>${props.price}</p>
            </div>

            <h5>{props.destination}</h5>
           <h3>{props.name}</h3>
              <p>{props.description}</p>
              <p>{props.activities}</p>
            </div>
            <div className="comment-div">
              <h4>{props.Popularity}</h4>
            </div>
          </div>
          <div>
        </div>
      </div>
    </>
  );
};

export default Trip;
