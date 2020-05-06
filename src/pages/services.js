import React from "react"
import Content from "../components/content"
import MetaData from "../components/metadata"
import Header from "../components/header"
import Footer from "../components/footer"
import { Link } from "gatsby"
import JSONData from "../content/services.json";

const ServicesPage = () => (
  <>
    <MetaData title={JSONData.metaTitle}  description={JSONData.metaDescription} />
    <Header />
    <Content extraClass='services'>
      <section className="services-cover-photo">
        <div className="row">
          <h1>{JSONData.title}</h1>
          <h2>{JSONData.subtitle}</h2>
          <ul>{JSONData.list.map(item => <li key={item}>{item}</li>)}</ul>
        </div>
      </section>
      <section className="services-content">
        <div className="row">
          <div className="card matchHeight">
            <h3>{JSONData.leftPanelTitle}</h3>
            <div dangerouslySetInnerHTML={{__html: JSONData.leftPanelContent__HTML}} />
          </div>
          <div className="card matchHeight">
            <h3>{JSONData.rightPanelTitle}</h3>
            <div dangerouslySetInnerHTML={{__html: JSONData.rightPanelContent__HTML}} />
          </div>
        </div>
      </section>
      <section className="services-rates">
        <div className="row">
          <h3>{JSONData.rateTitle}</h3>
          <p>{JSONData.rateDesc}</p>
          <div className="learning-icon"><i className="fa fa-book" aria-hidden="true" alt="Book"></i></div>
        </div>
        <div className="row">
          <h3>{JSONData.ctaTitle}</h3>
          <Link to="/contact" className="btn">{JSONData.ctaButton}</Link>
        </div>
      </section>
    </Content>
    <Footer />
  </>
)

export default ServicesPage
