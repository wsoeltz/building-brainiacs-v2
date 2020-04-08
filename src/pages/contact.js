import React from "react"
import Content from "../components/content"
import MetaData from "../components/metadata"
import Header from "../components/header"
import Footer from "../components/footer"
import ContactForm from '../components/contactForm';

const ContactPage = () => (
  <>
    <MetaData title="Contact Us" />
    <Header />
    <Content extraClass='contact'>
      <section>
        <div className="row">
          <div className="contact-header">
            <div className="header-text">
              <h1>Contact Us</h1>
              <h3>Schedule a free phone consultation with our founder, Paul&nbsp;Tryon.</h3>
            </div>
            <div className="paul-photo-small">
              <img
                src={require("../images/homepage/paul-tryon-profile.png")}
                alt="Paul Tryon, Literary Tutoring Specialist"
                title="Paul Tryon, Literary Tutoring Specialist"
              />
            </div>
          </div>
          <ContactForm />
          <h3 className="locations">
            <em>Serving <strong>Boston</strong>, <strong>New&nbsp;York&nbsp;City</strong>, <strong>Westchester</strong>, and <strong>Long&nbsp;Island</strong></em>
          </h3>
        </div>
      </section>
    </Content>
    <Footer />
  </>
)

export default ContactPage
