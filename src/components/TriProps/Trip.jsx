import React from "react";
import "./triprops.css";

const Trip = (props) => {
  return (
    <>
      <div className="Props new">
        <div className="beach-div">
          <img src={props.image} alt="" />
          <div className="dark-comment">
            <div>
              <p>{props.description}</p>
              <p>{props.activities}</p>
            </div>
            <div className="comment-div">
              <h4>{props.price}</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Trip;
