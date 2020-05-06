import React, {useState} from 'react';
import JSONData from "../content/contact.json";

const ContactForm = () => {
  const [mousetrapValue, setMousetrapValue] = useState('');
  console.log(mousetrapValue);
  if (mousetrapValue && mousetrapValue.length) {
    return null;
  }
  let pathname;
  try {
    pathname = window && window.location ? window.location.pathname : '';
  } catch(e) {
    console.error(e);
    pathname = '';
  }
  const contactPagePara = pathname.includes('contact') ? (
    <p>We know that finding the right tutor for your child can be a daunting task. We are here to help.</p>
  ) : null;
  return (
    <>
      <div className="row">
        <div className="column half">
          {contactPagePara}
          <p>Fill out the form or contact us directly.<br />
          Paul Tryon will be in touch within 24 hours.</p>

        </div>
        <div className="column half">
          <div className="vertical-center-container">
            <div className="vertical-center-items">
              <a href="tel:(917) 819-2468" className="contact-link"><i className="fa fa-phone" alt="Call Us"></i><span>(917) 819-2468</span></a>
              <a href="mailto:buildingbrainiacs@gmail.com" className="contact-link"><i className="fa fa-envelope" alt="Email Us"></i><span>buildingbrainiacs@gmail.com</span></a>
            </div>
          </div>
        </div>
      </div>

      <form id="contactform" name="contactform" action="https://getform.io/f/33e7a0e2-a111-4445-8535-be71b4deba48" method="POST">
        <div className="row">
          <div className="column half">
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
          </div>
          <div className="column half">
            <label htmlFor="comments">Message</label>
            <textarea  name="comments" id="comments" required></textarea>
            <input className="btn" type="submit" value={JSONData.contactButton} />
          </div>
        </div>
        <div className="listErrors"></div>
      </form>

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