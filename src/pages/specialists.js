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
        <h6 className="university">{school}</h6>
      </div>
    );
  });

  const moreInfo = moreInfoOpen ? (
    <div id="aboutPaulTryon" >
      <div className="row">
        <div
          className="content-column right"
          dangerouslySetInnerHTML={{__html: JSONData.founderLearnMore__HTML}}
        />
      </div>
    </div>
  ) : null;

  const chevron = moreInfoOpen ? 'fa-chevron-up' : 'fa-chevron-down';

  return (
    <>
      <MetaData title={JSONData.metaTitle}  description={JSONData.metaDescription} />
      <Header />
      <Content extraClass='specialists'>
        <section className="specialists-header">
          <div className="row">
            <h1>{JSONData.title}</h1>
            <h2>{JSONData.subtitle}</h2>
            <p>{JSONData.description}</p>
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
              <h5>{JSONData.founderName}</h5>
              <h6>{JSONData.founderTitle}</h6>
              <h6>{JSONData.founderSchool}</h6>
            </div>
          </div>
          <div className="more-information-toggle">
            <div className="row">
              <h3 id="clickForPaulTryon">
                <button onClick={() => setMoreInfoOpen(!moreInfoOpen)}>
                  {JSONData.founderLearnMoreLink} <i className={`fa ${chevron}`} aria-hidden="true"></i>
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
