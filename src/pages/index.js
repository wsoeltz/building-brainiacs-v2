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

const IndexPage = () => (
  <>
    <MetaData title="Building Brainiacs" />
    <Header extraClass='cover-photo-homepage'>
      <h1>Every child deserves the gift of&nbsp;reading.</h1>
      <h2>Our reading specialists turn the sentiment into&nbsp;a&nbsp;reality.</h2>
      <Link to="/contact" className="btn">Set up a free consultation with our&nbsp;founder</Link>
    </Header>
    <Content extraClass='homepage'>
      <section className="primary-row">
        <div className="row">
          <h4>Whether your child is just learning to read, struggling with a reading-based challenge like dyslexia, or fine-tuning a higher level comprehension skill, we can help your child make accelerated progress.</h4>
        </div>
      </section>
      <section className="secondary-row">
        <div className="row">
          <div className="column left">
            <h3>Diagnostic Literacy Evaluations</h3>
            <p>Every child's first session starts with a comprehensive literacy evaluation. We analyze the data to create a customized tutoring program, tailored to reflect your child's unique interests, strengths and needs. This evaluation is the cornerstone to our students' success.</p>
          </div>
          <div className="column middle">
            <img src={LearnigIcon} alt="Learning Icon" title="Learning Icon" />
          </div>
          <div className="column right">
            <h3>Customized Tutoring</h3>
            <p>We take a systematic, targeted, and joyful approach when it comes to tutoring your child. Our techniques are research based and data driven, and we provide monthly progress reports to keep you in the loop! Plus, we come to <em>you</em> to provide an unparalleled in-home tutoring experience.</p>
          </div>
        </div>
        <div className="row">
          <Link to="/services" className="btn">Read more about our tutoring services</Link>
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
            <h3>Our Specialists</h3>
            <p>Our tutors are Certified Literacy Specialists and Special Education teachers. They have been carefully selected to join our team of literacy experts.</p>
            <Link to="/specialists" className="btn">Get To Know our Specialists</Link>
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
          I sincerely believe that being introduced to Paul Tryon has altered the course of my son's life, and in turn, our family's life.
          <cite>Kiva D.</cite>
        </blockquote>
        <blockquote className="column half">
          We will be forever grateful to both Paul and Alicia. We know it has changed Owen's view on school work, and he is now eager and loving to learn.
          <cite>Wendy</cite>
        </blockquote>
      </div>
      <div className="row">
        <Link to="/testimonials" className="btn">See What Everyone’s Saying About Us</Link>
      </div>
    </section>

    <section className="contact-row">
      <div className="row">
        <h3>Schedule a free phone consultation with our&nbsp;founder, Paul&nbsp;Tryon</h3>
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
