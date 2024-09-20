import React, { useState } from "react";
import "./contact.css";
import { GrLocation } from "react-icons/gr";
import { LuPhoneCall } from "react-icons/lu";
import { LuMailOpen } from "react-icons/lu";
import Location from "./Location";
import swal from "sweetalert";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    swal({
      title: "Feedback Submitted!",
      text: "Thank you for your feedback!",
      icon: "success",
    });
  };

  return (
    <>
      <div className="cont">
        <div className="overlay">
          <div className="text">
            <h1>Contact Us</h1>
            <p>We are here and always happy to help</p>
          </div>
        </div>
      </div>

      <div className="three">
        <div className="box">
          <GrLocation className="icon" />
          <h3>Address</h3>
          <p>No. 6 Royaline Avenue</p>
          <p>Rivers State, Nigeria</p>
        </div>
        <div className="box">
          <LuPhoneCall className="icon" />
          <h3>Phone Number(s)</h3>
          <p>(+234) 814 234 7750</p>
          <p>(+234) 808 097 5645</p>
        </div>
        <div className="box">
          <LuMailOpen className="icon" />
          <h3>Email Address</h3>
          <a href="mailto:travelsmart@email.com">travelsmart@email.com</a>
          <a href="mailto:dummyemail@email.com">dummyemail@email.com</a>
        </div>
      </div>

      <div className="flex">
        <div className="location">
          <Location />
        </div>

        <div className="form">
          <div className="container">
            <form className="form" onSubmit={handleSubmit}>
              <div className="descr">
                <h2>Leave Your Feedback</h2>
              </div>

              <div className="input">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  autoComplete="off"
                />
                <label htmlFor="name">Name</label>
              </div>

              <div className="input">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  autoComplete="off"
                />
                <label htmlFor="email">Email</label>
              </div>

              <div className="input">
                <textarea
                  name="message" 
                  value={formData.message} 
                  onChange={handleChange} 
                  required 
                ></textarea>
                <label htmlFor="message">Message</label>
              </div>

              <button type="submit">Send Message →</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
