import React, {useState} from 'react';
import JSONData from "../content/contact.json";

const ContactForm = () => {
  const [mousetrapValue, setMousetrapValue] = useState('');
  if (mousetrapValue && mousetrapValue.length) {
    return null;
  }

  const contactSections = JSONData.contactInfo.map(({location, phone, email}) => (
    <React.Fragment key={location + email + phone}>
      <p>
        <strong className="contact-info-header">{location}</strong>
        <a href={`tel:${phone}`} className="contact-link"><i className="fa fa-phone" alt="Call Us"></i><span>{phone}</span></a>
        <a href={`mailto:${email}`} className="contact-link"><i className="fa fa-envelope" alt="Email Us"></i><span>{email}</span></a>
      </p>
    </React.Fragment>
  ));

  return (
    <>
      <div className="row">
        <div className="column half">
          <p>{JSONData.paragraph1}</p>
          <p>{JSONData.paragraph2}<br />{JSONData.paragraph3}</p>
          <div className="vertical-center-container">
            <div className="vertical-center-items">
              {contactSections}
            </div>
          </div>
        </div>
        <div className="column half">
          <form id="contactform" name="contactform" action="https://getform.io/f/33e7a0e2-a111-4445-8535-be71b4deba48" method="POST">
              <input
                type="text"
                name={"website"}
                className="mousetrap"
                value={mousetrapValue}
                onChange={e => setMousetrapValue(e.target.value)}
              />
              <label htmlFor={"name"}>Name</label>
              <input type="text" name={"name"} id="first_name" required />
              <label htmlFor={"email"}>Email</label>
              <input type="email" name={"email"} id="email" required />
              <label htmlFor={"tel"}>Phone</label>
              <input type="text" name={"tel"} id="tel" required />
              <label htmlFor={"zip"}>Zip Code</label>
              <input type="text" name={"zip"} id="zip" required />
              <label htmlFor="comments">Message</label>
              <textarea  name="comments" id="comments" required></textarea>
              <input className="btn" type="submit" value={JSONData.contactButton} />
            <div className="listErrors"></div>
          </form>
        </div>
      </div>


      <div className="email-success-message">
        <div className="modalBackdrop"></div>
        <div className="success-container">
          <button className="close"><i className="fa fa-times" alt="close"></i></button>
          <p>Thank you for reaching out to us. Our founder, Paul Tryon, will be in touch within 24 hours.</p>
        </div>
      </div>
    </>
  );
}

export default ContactForm;