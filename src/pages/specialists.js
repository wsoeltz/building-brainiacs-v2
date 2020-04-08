import React, {useState} from "react"
import Content from "../components/content"
import MetaData from "../components/metadata"
import Header from "../components/header"
import Footer from "../components/footer"
import JSONData from "../content/specialists.json";
import {SlideDown} from 'react-slidedown'
import 'react-slidedown/lib/slidedown.css'

const SpecialistsPage = () => {
  const {data} = JSONData;
  const [moreInfoOpen, setMoreInfoOpen] = useState(false);
  const specialists = data.map(({name, type, school, image}) => {
    return (
      <div className="specialist-avatar matchHeight" key={name + type + school + image}>
        <img src={require(`../images/specialists/${image}`)} alt={name} />
        <h5>{name}</h5>
        <h6>{type}</h6>
        <h6 className="university">Graduate of {school}</h6>
      </div>
    );
  });

  const moreInfo = moreInfoOpen ? (
    <div id="aboutPaulTryon" >
      <div className="row">
        <div className="content-column right">
          <p>Paul Tryon is the founder of Building Brainiacs and leads this NYC-based team of specialists.  As a New York State Certified Teacher and Certified Literacy Specialist, Paul has spent the last decade working as a reading interventionist and consulting in schools across NYC, Westchester and Long Island.</p>

          <p>In addition to his work with Building Brainiacs, Paul is a School Director at Classical Charter Schools, a high performing network of schools in the South Bronx.  A recipient of the National Blue Ribbon Award, Classical's students consistently and drastically out-perform their peers in New York City and State. Paul joined Classical in 2014 as a literacy specialist, working with the school's most struggling readers to systematically close deficits. He built key components of the literacy curriculum, coached teachers of varying tenure, and led the network's team of literacy specialists. Paul was also the Director of the network's Summer Learning Academy.</p>

          <p>Paul has worked as an adjunct professor at NYU where he designed and taught a class on Foundations of Literacy Development.  Prior to founding Building Brainiacs in 2011, Paul taught 3rd grade in Brooklyn and tutored extensively throughout New York City.</p>

          <p>Paul earned his masters degree in Literacy Education from NYU and his bachelor's degree in Childhood Education from SUNY Potsdam, minoring in mathematics.</p>
        </div>
      </div>
    </div>
  ) : null;

  const chevron = moreInfoOpen ? 'fa-chevron-up' : 'fa-chevron-down';

  return (
    <>
      <MetaData title="Specialists" />
      <Header />
      <Content extraClass='specialists'>
        <section className="specialists-header">
          <div className="row">
            <h1>Our Specialists</h1>
            <h2>We hire only the best and brightest, no exceptions.</h2>
            <p>Our tutors are hand-picked to join our team of specialists. They are certified, experienced teachers and boast a proven track record for helping  ​struggling readers and writers make accelerated progress.</p>
          </div>
        </section>
        <section className="specialists-content">
          <div className="row flex-row">
            {specialists}
          </div>
        </section>
        <section className="specialists-meet-paul">
          <div className="row paul-tryon-founder">
            <div className="image">
              <img
                src={require("../images/homepage/paul-tryon-profile.png")}
                alt="Paul Tryon"
                title="Paul Tryon, Literary Tutoring Specialist"
              />
            </div>
            <div className="text">
              <h5>Paul Tryon</h5>
              <h6>Founder</h6>
              <h6>Graduate of NYU</h6>
            </div>
          </div>
          <div className="more-information-toggle">
            <div className="row">
              <h3 id="clickForPaulTryon">
                <button onClick={() => setMoreInfoOpen(!moreInfoOpen)}>
                  Learn more about our founder, Paul&nbsp;Tryon. <i className={`fa ${chevron}`} aria-hidden="true"></i>
                </button>
              </h3>
            </div>
            <SlideDown>
              {moreInfo}
            </SlideDown>
          </div>
        </section>
      </Content>
      <Footer />
    </>
  );
}
export default SpecialistsPage
