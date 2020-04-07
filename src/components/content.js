/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */
import React from "react"
import PropTypes from "prop-types"

const Layout = ({ children, extraClass }) => {
  const bodyClass = extraClass ? 'body ' + extraClass : 'header';
  return (
    <article className={bodyClass}>{children}</article>
  )
}

Layout.propTypes = {
  extraClass: PropTypes.string,
  children: PropTypes.node.isRequired,
}

export default Layout
