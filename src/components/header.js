import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import JSONData from "../content/general.json"

const Header = ({ children, extraClass }) => {
  let pathname;
  try {
    pathname = window && window.location ? window.location.pathname : '';
  } catch(e) {
    console.error(e);
    pathname = '';
  }
  const headerClass = extraClass ? 'header ' + extraClass : 'header';

  const isCurrentPage = (page) => pathname.includes(page)  ? 'active' : undefined;

  return (
    <header className={headerClass}>
      <nav className="top-nav">
        <h1><Link to="/">Building Brainiacs</Link></h1>
        <ul>
          <li className={isCurrentPage("services")}><Link to="/services">{JSONData.navItemServices}</Link></li>
          <li className={isCurrentPage("specialists")}><Link to="/specialists">{JSONData.navItemSpecialists}</Link></li>
          <li className={isCurrentPage("testimonials")}><Link to="/testimonials">{JSONData.navItemTestimonials}</Link></li>
          <li className={isCurrentPage("contact")}><Link to="/contact">{JSONData.navItemContactUs}</Link></li>
          <li><Link to="/pay">{JSONData.navItemPay}</Link></li>
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
