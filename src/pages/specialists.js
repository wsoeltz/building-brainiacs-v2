import React from "react"
import Content from "../components/content"
import MetaData from "../components/metadata"
import Header from "../components/header"
import Footer from "../components/footer"
import JSONData from "../content/specialists.json";

const SpecialistsPage = () => {
  const specialists = JSONData.specialists.map(({name, type, school, image}) => {
    return (
      <div className="specialist-avatar matchHeight" key={name + type + school + image}>
        <img src={require(`../images/specialists/${image}`)} alt={name} />
        <h5>{name}</h5>
        <h6>{type}</h6>
        <h6 className="university">{school}</h6>
      </div>
    );
  });
  const managers = JSONData.managers.map(({name, title, school, image, htmlContent}) => {
    return (
      <div className="manager-row">
        <div className="image image-small">
          <img
            src={require(`../images/managers/${image}`)}
            alt={name}
            title={name}
          />
          <div className="text">
            <h5>{name}</h5>
            <h6>{title}</h6>
            <h6>{school}</h6>
          </div>
        </div>
        <div className="content"
          dangerouslySetInnerHTML={{__html: htmlContent}}
        />
      </div>
    );
  });
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
        <section className="specialists-managers">
          <h1>Leadership</h1>
          {managers}
        </section>
        <section className="specialists-managers founder">
          <div className="manager-row">
            <div className="image">
              <img
                src={require("../images/homepage/paul-tryon-profile.png")}
                alt="Paul Tryon"
                title="Paul Tryon, Literary Tutoring Specialist"
              />
              <div className="text">
                <h5>{JSONData.founderName}</h5>
                <h6>{JSONData.founderTitle1}</h6>
                <h6>{JSONData.founderTitle2}</h6>
                <h6>{JSONData.founderSchool}</h6>
              </div>
            </div>
            <div className="content"
              dangerouslySetInnerHTML={{__html: JSONData.founderLearnMore__HTML}}
            />
          </div>
        </section>
      </Content>
      <Footer />
    </>
  );
}
export default SpecialistsPage
