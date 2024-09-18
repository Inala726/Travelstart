import  './Footer.css'
import "bootstrap-icons/font/bootstrap-icons.css";

function Footer() {
  return (
    <section className='footer'>
    <div className="column1">
        <div className='footer1'>
            <div className="footer-logo"></div>
            <div className="footer-title">
            <p>Time to travel</p>
            </div>
            <div className="location">
                <div className="footer-circle"></div>
                <span className='street'><p>123 Anywhere St., Any City 12345</p></span>
            </div>

            <div className="location1">
                <div className="footer-circle1"></div>
                <span className='street'><p>123-456-7890</p></span>
            </div>

            <div className="location1">
                <div className="footer-circle1"></div>
                <span className='street'><p>hellocallcenter@gmail.com</p></span>
            </div>
        </div>
        <div className='footer2'>
            <span><p>Home</p></span>
            <span><p>Trip Catelog</p></span>
            <span><p>Countries</p></span>
            <span><p>Contact</p></span>
            <span><p>About</p></span>
        </div>
        <div className='footer3'>
        <span><p>Testimonials</p></span>
            <span><p>Blog</p></span>
            <span><p>Contact Us</p></span>
            <span><p>FAQ</p></span>
        </div>
        <div className='footer4'>
            <div className="privacy">
            <span><p>Privacy Policy</p></span>
            <span><p>Terms and Conditions</p></span>
            </div>

            <div className="privacy">
            <span><p>Follow Us</p></span>
            <div className="icon-box">
            <span><i className="bi bi-facebook"></i></span>
            <span><i className="bi bi-youtube"></i></span>
            <span><i className="bi bi-linkedin"></i></span>
            <span><i className="bi bi-twitter"></i></span>
            <span><i className="bi bi-instagram"></i></span>
            </div>
            </div>
        </div>
    </div>
    <div className="column2">
            Copyright © 2024 Pro Health. All rights reserved.
    </div>
</section>
  )
}

export default Footer