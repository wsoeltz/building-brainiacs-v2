import React from "react"
import Content from "../components/content"
import MetaData from "../components/metadata"
import Header from "../components/header"
import Footer from "../components/footer"
import ContactForm from '../components/contactForm';
import { Link } from "gatsby"
import LearnigIcon from '../images/homepage/student-learning.png'
import SpecialistsDavidD from '../images/homepage/specialists/davidd.png'
import SpecialistsSamanthaM from '../images/homepage/specialists/samantham.png'
import SpecialistsLauraC from '../images/homepage/specialists/laurac.png'
import SpecialistsBillK from '../images/homepage/specialists/billk.png'
import SpecialistsKatrinaT from '../images/homepage/specialists/katrinat.png'
import SpecialistsDonL from '../images/homepage/specialists/donl.png'
import SpecialistsIvanR from '../images/homepage/specialists/ivanr.png'
import SpecialistsSierraS from '../images/homepage/specialists/sierras.png'
import PaulTryonProfile from '../images/homepage/paul-tryon-profile.png'
import JSONData from "../content/homepage.json";

const IndexPage = () => (
  <>
    <MetaData title={JSONData.metaTitle}  description={JSONData.metaDescription} />
    <Header extraClass='cover-photo-homepage'>
      <h1>{JSONData.heading}</h1>
      <h2>{JSONData.subHeading}</h2>
      <Link to="/contact" className="btn">{JSONData.headingCTA}</Link>
    </Header>
    <Content extraClass='homepage'>
      <section className="primary-row">
        <div className="row">
          <h4>{JSONData.description}</h4>
        </div>
      </section>
      <section className="secondary-row">
        <div className="row">
          <div className="column left">
            <h3>{JSONData.servicesLeftTitle}</h3>
            <p>{JSONData.servicesLeftDesc}</p>
          </div>
          <div className="column middle">
            <img src={LearnigIcon} alt="Learning Icon" title="Learning Icon" />
          </div>
          <div className="column right">
            <h3>{JSONData.servicesRightTitle}</h3>
            <p>{JSONData.servicesRightDesc}</p>
          </div>
        </div>
        <div className="row">
          <Link to="/services" className="btn">{JSONData.servicesCTA}</Link>
        </div>
      </section>
      <section className="tertiary-row">
        <div className="row">
          <div className="column left">
            <span className="tutor-small"><img src={SpecialistsDavidD} alt={'Our Specialist, David D.'} /></span>
            <span className="tutor-small"><img src={SpecialistsSamanthaM} alt={'Our Specialist, Samantha M.'} /></span>
            <span className="tutor-small"><img src={SpecialistsLauraC} alt={'Our Specialist, Laura C.'} /></span>
            <span className="tutor-small"><img src={SpecialistsBillK} alt={'Our Specialist, Bill K.'} /></span>
          </div>
          <div className="column middle">
            <h3>{JSONData.specialistsTitle}</h3>
            <p>{JSONData.specialistsDesc}</p>
            <Link to="/specialists" className="btn">{JSONData.specialistsCTA}</Link>
          </div>
          <div className="column right">
            <span className="tutor-small"><img src={SpecialistsKatrinaT} alt={'Our Specialist, Katrina T.'} /></span>
            <span className="tutor-small"><img src={SpecialistsDonL} alt={'Our Specialist, Don L.'} /></span>
            <span className="tutor-small"><img src={SpecialistsIvanR} alt={'Our Specialist, Ivan R.'} /></span>
            <span className="tutor-small"><img src={SpecialistsSierraS} alt={'Our Specialist, Sierra S.'} /></span>
          </div>
        </div>

      </section>

    <section className="quaternary-row">
      <div className="row">
        <blockquote className="column half">
          {JSONData.testimonaialsLeftQuote}
          <cite>{JSONData.testimonaialsLeftName}</cite>
        </blockquote>
        <blockquote className="column half">
          {JSONData.testimonaialsRightQuote}
          <cite>{JSONData.testimonaialsRightName}</cite>
        </blockquote>
      </div>
      <div className="row">
        <Link to="/testimonials" className="btn">{JSONData.testimonaialsCTA}</Link>
      </div>
    </section>

    <section className="contact-row">
      <div className="row">
        <h3>{JSONData.contactTitle}</h3>
        <div className="row relative-parent">
          <div className="paul-photo-full">
            <img
              src={PaulTryonProfile}
              alt="Photo of Paul Tryon"
              title="Paul Tryon, Literary Tutoring Specialist"
            />
          </div>
          <div className="form">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
    </Content>
    <Footer />
  </>
)

export default IndexPage
