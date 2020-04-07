import React from 'react';

const ContactForm = () => {
  const {pathname} = window.location;
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


      <form id="contactform" name="contactform" method="post" action="send_form_email.php">
        <div className="row">
          <div className="column half">
            <label htmlFor="first_name">Name</label>
            <input  type="text" name="first_name" id="first_name" required />
            <label htmlFor="email">Email</label>
            <input  type="email" name="email" id="email" required />
            <label htmlFor="phone">Phone</label>
            <input  type="text" name="phone" id="phone" required />
          </div>
          <div className="column half">
            <label htmlFor="comments">Message</label>
            <textarea  name="comments" id="comments" required></textarea>
            <input className="btn" type="submit" value="Get In Contact" />
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