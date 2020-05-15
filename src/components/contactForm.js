import React, {useState} from 'react';
import JSONData from "../content/contact.json";
import axios from 'axios';

//eslint-disable-next-line
const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//eslint-disable-next-line
const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

const ContactForm = () => {

  const [mousetrapValue, setMousetrapValue] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [zip, setZip] = useState('');
  const [message, setMessage] = useState('');

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
    zip: '',
    message: '',
  });

  const contactSections = JSONData.contactInfo.map(({location, phone, email}) => (
    <React.Fragment key={location + email + phone}>
      <p>
        <strong className="contact-info-header">{location}</strong>
        <a href={`tel:${phone}`} className="contact-link"><i className="fa fa-phone" alt="Call Us"></i><span>{phone}</span></a>
        <a href={`mailto:${email}`} className="contact-link"><i className="fa fa-envelope" alt="Email Us"></i><span>{email}</span></a>
      </p>
    </React.Fragment>
  ));

  const validateFields = () => {
    const newErrors = {
      name: '',
      email: '',
      phone: '',
      zip: '',
      message: '',
    }
    let hasError = false;
    if (name.length < 2) {
      newErrors.name = 'Name must be at two least characters';
      hasError = true;
    }
    if (!email.length) {
      newErrors.email = 'Please enter an email';
      hasError = true;
    }
    if (!emailRegex.test(String(email).toLowerCase())) {
      newErrors.email = 'Please enter a valid email address';
      hasError = true;
    }
    if (!phone.length) {
      newErrors.phone = 'Please enter a phone number';
      hasError = true;
    }
    if (!phoneRegex.test(phone)) {
      newErrors.phone = 'Please enter a valid phone number';
      hasError = true;
    }
    if (!zip.length) {
      newErrors.zip = 'Please enter a zip code';
      hasError = true;
    }
    if (isNaN(parseFloat(zip))) {
      newErrors.zip = 'Please enter a valid zip code';
      hasError = true;
    }
    if (message.length < 2) {
      newErrors.message = 'Please enter a message';
      hasError = true;
    }
    if (mousetrapValue.length) {
      hasError = true;
    }
    setErrors({...newErrors});
    return hasError;
  }

  const onFakeSubmit = () => {
    const hasError = validateFields();
    if (hasError === false) {
      const formData = new FormData();
      formData.set('name', name);
      formData.set('email', email);
      formData.set('zip', zip);
      formData.set('phone', phone);
      formData.set('message', message);
      axios({
        method: 'post',
        url: 'https://getform.io/f/33e7a0e2-a111-4445-8535-be71b4deba48',
        data: formData,
        headers: {
          'Content-Type': 'multipart/form-data',
          'Accept': 'application/json',
        }
      })
      .then(function () {
          //handle success
          setShowSuccessMessage(true);
          setName('');
          setEmail('');
          setPhone('');
          setZip('');
          setMessage('');
      })
      .catch(function () {
          //handle error
          setShowErrorMessage(true)
      });
    }
  }

  const emailSuccessMessage = showSuccessMessage ? (
    <div className="email-success-message" style={{display: 'block'}}>
      <div className="modalBackdrop"></div>
      <div className="success-container">
        <button className="close" onClick={() => setShowSuccessMessage(false)}>
          <i className="fa fa-times" alt="close"></i>
        </button>
        <p>Thank you for reaching out to us. Our founder, Paul Tryon, will be in touch within 24 hours.</p>
      </div>
    </div>
  ) : null;

  const emailErrorMessage = showErrorMessage ? (
    <div className="email-success-message" style={{display: 'block'}}>
      <div className="modalBackdrop"></div>
      <div className="success-container">
        <button className="close" onClick={() => setShowErrorMessage(false)}>
          <i className="fa fa-times" alt="close"></i>
        </button>
        <p>Something went wrong and your submission didn't go through. Try contacting us directly through our email or phone numbers provided.</p>
      </div>
    </div>
  ) : null;

  return (
    <>
      <div className="row" id="contactform">
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
          <input
            type="text"
            name={"website"}
            className="mousetrap"
            value={mousetrapValue}
            onChange={e => setMousetrapValue(e.target.value)}
          />
          <div className='form-label'>
            Name
            <small className='error-message'><em>{errors.name}</em></small>
          </div>
          <input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <div className='form-label'>
            Email
            <small className='error-message'><em>{errors.email}</em></small>
          </div>
          <input
            type="text"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <div className='form-label'>
            Phone
            <small className='error-message'><em>{errors.phone}</em></small>
          </div>
          <input
            type="text"
            value={phone}
            onChange={e => setPhone(e.target.value)}
          />
          <div className='form-label'>
            Zip Code
            <small className='error-message'><em>{errors.zip}</em></small>
          </div>
          <input
            type="text"
            value={zip}
            onChange={e => setZip(e.target.value)}
          />
          <div className='form-label'>
            Message
            <small className='error-message'><em>{errors.message}</em></small>
          </div>
          <textarea
            name="comments"
            id="comments"
            required
            value={message}
            onChange={e => setMessage(e.target.value)}
          />
          <button className="btn" onClick={onFakeSubmit}>
            {JSONData.contactButton}
          </button>
        </div>
      </div>

      {emailSuccessMessage}
      {emailErrorMessage}

    </>
  );
}

export default ContactForm;
