import { Link } from "gatsby"
import React from "react"

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <ul>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/specialists">Specialists</Link></li>
        <li><Link to="/testimonials">Testimonials</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
      </ul>
      <h6 className="footer-logo"><a href="/">Building Brainiacs</a></h6>
      <p id="copyright">Copyright © {year} Building Brainiacs LLC. All rights reserved.</p>
      <address>
        Serving Boston, New York City, Westchester, and Long Island
        <br /><a href="tel:(917) 819-2468">(917) 819-2468</a>
        <br /><a href="mailto:buildingbrainiacs@gmail.com">buildingbrainiacs@gmail.com</a>
      </address>
    </footer>
  );
}

export default Footer
