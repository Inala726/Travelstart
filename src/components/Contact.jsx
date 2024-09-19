import React from "react";
import "./contact.css";

const Contact = () => {
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

      <div className="txt">
        <h1>Let's Start a Conversation</h1>
      </div>
      <div className="double">
        <div className="left">
          <div className="">
            <h2>Ask how we can help you</h2>
            <h3>Points of contact</h3>
            <p>(+234) 814 234 7750</p>
            <p>(+234) 808 097 5645</p>
            <p>(+234) 913 099 9766</p>
          </div>
          <div className="">
            <h3>Email</h3>
            <a href="">email@email.com</a>
          </div>
        </div>
        <div className="line"></div>
        <div className="left- form">
          <div class="form-container">
            <form class="form">
              <div class="form-group">
                <label for="email">Email</label>
                <input type="text" id="email" name="email" required="" />
              </div>
              <div class="form-group">
                <label for="textarea">How Can We Help You?</label>
                <textarea
                  name="textarea"
                  id="textarea"
                  rows="10"
                  cols="50"
                  required=""
                >
                  {" "}
                </textarea>
              </div>
              <button class="form-submit-btn" type="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
