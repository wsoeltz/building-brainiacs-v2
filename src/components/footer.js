import { Link } from "gatsby"
import React from "react"
import JSONData from "../content/general.json"

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <ul>
        <li><Link to="/services">{JSONData.navItemServices}</Link></li>
        <li><Link to="/specialists">{JSONData.navItemSpecialists}</Link></li>
        <li><Link to="/testimonials">{JSONData.navItemTestimonials}</Link></li>
        <li><Link to="/contact">{JSONData.navItemContactUs}</Link></li>
      </ul>
      <h6 className="footer-logo"><a href="/">Building Brainiacs</a></h6>
      <p id="copyright">Copyright © {year} Building Brainiacs LLC. All rights reserved.</p>
      <address>
        {JSONData.footerLocations}
        <br /><a href="tel:(917) 819-2468">(917) 819-2468</a>
        <br />
        <a href="mailto:paul@buildingbrainiacs.com">paul@buildingbrainiacs.com</a>
      </address>
    </footer>
  );
}

export default Footer
