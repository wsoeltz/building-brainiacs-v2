import React from "react"
import Content from "../components/content"
import MetaData from "../components/metadata"
import Header from "../components/header"
import Footer from "../components/footer"
import ContactForm from '../components/contactForm';
import JSONData from "../content/contact.json";

const ContactPage = () => (
  <>
    <MetaData title={JSONData.metaTitle}  description={JSONData.metaDescription} />
    <Header />
    <Content extraClass='contact'>
      <section>
        <div className="row">
          <div className="contact-header">
            <div className="header-text">
              <h1>{JSONData.title}</h1>
              <h3>{JSONData.subtitle}</h3>
            </div>
            <div className="paul-photo-small">
              <img
                src={require("../images/homepage/paul-tryon-profile.png")}
                alt="Paul Tryon, Literary Tutoring Specialist"
                title="Paul Tryon, Literary Tutoring Specialist"
              />
              <div className="title-text">
                <h5>Paul Tryon</h5>
                <h6>Founder</h6>
              </div>
            </div>
          </div>
        </div>
        <ContactForm />
        <h3 className="locations">
          <em dangerouslySetInnerHTML={{__html: JSONData.locations}} />
        </h3>
      </section>
    </Content>
    <Footer />
  </>
)

export default ContactPage
