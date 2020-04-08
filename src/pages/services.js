import React from "react"
import Content from "../components/content"
import MetaData from "../components/metadata"
import Header from "../components/header"
import Footer from "../components/footer"
import { Link } from "gatsby"

const ServicesPage = () => (
  <>
    <MetaData title="Services" />
    <Header />
    <Content extraClass='services'>
      <section className="services-cover-photo">
        <div className="row">
          <h1>Our Services</h1>
          <h2>We systematically target the following areas according to each student's strengths and needs:</h2>
          <ul>
            <li>Phonological Awareness</li>
            <li>Phonemic Awareness (phonics)</li>
            <li>Fluency</li>
            <li>Vocabulary</li>
            <li>Comprehension</li>
            <li>Automatic Sight Word Recognition​</li>
            <li>Accuracy / Word-Attack Strategies</li>
            <li>Self-Corrections</li>
            <li>Monitoring for Meaning</li>
            <li>Writing quality and output</li>
          </ul>
        </div>
      </section>
      <section className="services-content">
        <div className="row">
          <div className="card matchHeight">
            <h3>Diagnostic Literacy Evaluations</h3>
            <p>The diagnostic literacy evaluation is the cornerstone to our students' success. Using data gathered from diagnostic and norm-referenced assessments, we create a customized tutoring program tailored to the unique interests, strengths, and needs of your child.</p>
            <p>We also offer a 15-20 page written report that provides an in-depth analysis of the test results, identifies percentiles, outlines instructional recommendations, and sets targeted goals. Parents use this report to communicate their child's precise needs to teachers and school officials, who might otherwise not know how to help. We are pretty sure you've never seen a report like this one.</p>
            </div>
          <div className="card matchHeight">
            <h3>Tutoring</h3>
            <p>Unlike scripted programs and homework help centers, our specialists systematically address underlying deficits through a multi-sensory, targeted approach to literacy instruction. Instead of subscribing to any one program, we build instruction from the ground up to reflect the unique needs of each child.</p>
            <p>Our literacy tutoring services are offered to students of all ages. We specialize in helping struggling readers, particularly those with dyslexia, fill the gaps and become proficient readers.</p>
          </div>
        </div>
      </section>
      <section className="services-rates">
        <div className="row">
          <h3>Our Rates</h3>
          <p>Our hourly rates are based on factors that vary from family to family.  We are happy to provide you with a quote after learning about your child and what you're looking for.  We offer personalized payment plans to ensure finances don't interfere with your child's education.</p>
          <div className="learning-icon"><i className="fa fa-book" aria-hidden="true" alt="Book"></i></div>
        </div>
        <div className="row">
          <h3>Learn More About Our Services</h3>
          <Link to="/contact" className="btn">Set up a free consultation with our founder</Link>
        </div>
      </section>
    </Content>
    <Footer />
  </>
)

export default ServicesPage
