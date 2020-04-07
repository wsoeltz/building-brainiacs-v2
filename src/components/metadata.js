/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import Favicon from "../images/favicons/favicon.ico"
import AppleTouchIcon57x57 from "../images/favicons/apple-icon-57x57.png"
import AppleTouchIcon114x114 from "../images/favicons/apple-icon-114x114.png"
import AppleTouchIcon72x72 from "../images/favicons/apple-icon-72x72.png"
import AppleTouchIcon144x144 from "../images/favicons/apple-icon-144x144.png"
import AppleTouchIcon60x60 from "../images/favicons/apple-icon-60x60.png"
import AppleTouchIcon120x120 from "../images/favicons/apple-icon-120x120.png"
import AppleTouchIcon76x76 from "../images/favicons/apple-icon-76x76.png"
import AppleTouchIcon152x152 from "../images/favicons/apple-icon-152x152.png"
import Favicon96x96 from "../images/favicons/favicon-96x96.png"
import Favicon32x32 from "../images/favicons/favicon-32x32.png"
import Favicon16x16 from "../images/favicons/favicon-16x16.png"
import Mstile144x144 from "../images/favicons/ms-icon-144x144.png"
import Mstile70x70 from "../images/favicons/ms-icon-70x70.png"
import Mstile150x150 from "../images/favicons/ms-icon-150x150.png"
import Mstile310x310 from "../images/favicons/ms-icon-310x310.png"

import "../scss/style.scss"
import "../font-awesome-4.6.3/css/font-awesome.min.css"

function SEO({ description, title }) {
  const metaTitle = title && !title.toLowerCase().includes('building brainiacs')
    ? title + ' | Building Brainiacs' : 'Building Brainiacs';
  return (
    <Helmet>
      <meta charset="utf-8" />
      <meta http-equiv="x-ua-compatible" content="ie=edge" />
      <link rel="icon" href={Favicon} type="image/x-icon" />
      <link rel="icon" href={Mstile310x310} type="image/x-icon" />
      <link rel="apple-touch-icon-precomposed" sizes="57x57" href={AppleTouchIcon57x57} />
      <link rel="apple-touch-icon-precomposed" sizes="114x114" href={AppleTouchIcon114x114} />
      <link rel="apple-touch-icon-precomposed" sizes="72x72" href={AppleTouchIcon72x72} />
      <link rel="apple-touch-icon-precomposed" sizes="144x144" href={AppleTouchIcon144x144} />
      <link rel="apple-touch-icon-precomposed" sizes="60x60" href={AppleTouchIcon60x60} />
      <link rel="apple-touch-icon-precomposed" sizes="120x120" href={AppleTouchIcon120x120} />
      <link rel="apple-touch-icon-precomposed" sizes="76x76" href={AppleTouchIcon76x76} />
      <link rel="apple-touch-icon-precomposed" sizes="152x152" href={AppleTouchIcon152x152} />
      <link rel="icon" type="image/png" href={Favicon96x96} sizes="96x96" />
      <link rel="icon" type="image/png" href={Favicon32x32} sizes="32x32" />
      <link rel="icon" type="image/png" href={Favicon16x16} sizes="16x16" />
      <meta name="msapplication-TileColor" content="#FFFFFF" />
      <meta name="msapplication-TileImage" content={Mstile144x144} />
      <meta name="msapplication-square70x70logo" content={Mstile70x70} />
      <meta name="msapplication-square150x150logo" content={Mstile150x150} />
      <meta name="msapplication-square310x310logo" content={Mstile310x310} />

      <link href='//fonts.googleapis.com/css?family=Open+Sans:400,400italic,600,700' rel='stylesheet' type='text/css' />
      <title>{metaTitle}</title>
      <meta name="description" content={description} />

    </Helmet>
  )
}

SEO.defaultProps = {
  description: `Every child deserves the gift of reading. Our reading specialists turn the sentiment into a reality.`,
  title: 'Building Brainiacs'
}

SEO.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string.isRequired,
}

export default SEO
