import React, { useState } from "react";
import "./review.css";
import Nav from "../../Components/Navbar/Nav";
import '../../App.css'

const ReviewPage = () => {
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState({
    name: "",
    rating: 5,
    comment: "",
  });

  const handleChange = (e) => {
    setNewReview({
      ...newReview,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setReviews([...reviews, newReview]);
    setNewReview({ name: "", rating: 5, comment: "" });
  };

  return (
    <>
    <Nav/>
        <div className="cont">
            <div className="text">
                <p className="num">3,200,000</p>
                <h2>Travel Gurus shared their best tips and experiences</h2>
                <h2>And we are waiting for yours</h2>
                <a href="#form">
                    <button className="button">How was your stay</button>
                </a>
            </div>
        </div>
        <div className="">
            <div className="question"><h2>How does it work</h2></div>
            <div className="three">
                <div className="box">
                    <div className="icon"></div>
                    <div className="text">
                        <h2>It starts w booking</h2>
                        <p></p>
                    </div>
                </div>
                <div className="box">
                    <div className="icon"></div>
                    <div className="text">
                        <h2>Followed by a trip</h2>
                        <p></p>
                    </div>
                </div>
                <div className="box">
                    <div className="icon"></div>
                    <div className="text">
                        <h2>And finally, a review</h2>
                        <p></p>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
};

export default ReviewPage;
