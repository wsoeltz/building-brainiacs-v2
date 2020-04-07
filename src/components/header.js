import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ children, extraClass }) => {
  const pathname = window && window.location ? window.location.pathname : '';
  const headerClass = extraClass ? 'header ' + extraClass : 'header';

  const isCurrentPage = (page) => pathname.includes(page)  ? 'active' : undefined;

  return (
    <header className={headerClass}>
      <nav className="top-nav">
        <h1><Link to="/">Building Brainiacs</Link></h1>
        <ul>
          <li className={isCurrentPage("services")}><Link to="/services">Services</Link></li>
          <li className={isCurrentPage("specialists")}><Link to="/specialists">Specialists</Link></li>
          <li className={isCurrentPage("testimonials")}><Link to="/testimonials">Testimonials</Link></li>
          <li className={isCurrentPage("contact")}><Link to="/contact">Contact Us</Link></li>
          <li><Link to="/pay">Pay</Link></li>
        </ul>
      </nav>
      {children}
    </header>
  );
}

Header.propTypes = {
  children: PropTypes.node,
  extraClass: PropTypes.string,
}

export default Header
