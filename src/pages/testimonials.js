/* eslint jsx-a11y/click-events-have-key-events: 0 */
/* eslint jsx-a11y/no-noninteractive-element-interactions: 0 */
import React, {useState} from "react"
import Content from "../components/content"
import MetaData from "../components/metadata"
import Header from "../components/header"
import Footer from "../components/footer"
import JSONData from "../content/testimonials.json";
import { Link } from 'gatsby';

const TestimonialBlock = ({snippet, name, status, htmlContent, fullColumn}) => {
  const statusElm = status ? <small>{status}</small> : null;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const activeClass = isModalOpen ? ' active' : '';
  const className = fullColumn ? 'testimonialContainer column' : 'testimonialContainer column half';
  return (
    <div className={className + activeClass}>
      <blockquote onClick={() => setIsModalOpen(true)}>
        {snippet}
        <cite>{name}</cite>
      </blockquote>
      <button
        className="btn testimonialLink"
        onClick={() => setIsModalOpen(true)}
      >
        {JSONData.openTestimonialButton}
      </button>
      <div className="testimonialModal">
        <div className="testimonialFull" dangerouslySetInnerHTML={{__html: htmlContent}} />
        <cite>{name}{statusElm}</cite>
        <button
          className="btn closeModal"
          onClick={() => setIsModalOpen(false)}
        >
          {JSONData.closeTestimonialButton}
        </button>
      </div>
    </div>
  );
}

const TestimonialPage = () => {
  const testimonials = [];
  for (let i = 0; i < JSONData.testimonials.length; i += 2) {
    const datum = JSONData.testimonials[i];
    const secondItem = datum.fullColumn === false && JSONData.testimonials[i + 1] !== undefined ? (
      <TestimonialBlock {...JSONData.testimonials[i + 1]} />
    ) : null;
    testimonials.push(
      <div className="row" key={datum.snippet + i}>
        <TestimonialBlock {...datum} />
        {secondItem}
      </div>
    );
    if (datum.fullColumn === true) {
      i += 1;
    }
  }
  return (
    <>
      <MetaData title={JSONData.metaTitle}  description={JSONData.metaDescription} />
      <Header />
      <Content extraClass='testimonials'>
        <section className="testimonials-header">
          <div className="row">
            <h1>{JSONData.title}</h1>
            <h2>{JSONData.subtitle}</h2>
            <div className="learning-icon">
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
            </div>
          </div>
        </section>
        <section className="testimonials-content">
          {testimonials}
          <div className="row">
            <Link to="/contact" className="btn testimonialCta">{JSONData.cta}</Link>
          </div>
        </section>
      </Content>
      <Footer />
    </>
  );
}
export default TestimonialPage
