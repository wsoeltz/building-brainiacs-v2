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
