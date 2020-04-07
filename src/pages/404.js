import React from "react"
import Content from "../components/content"
import Header from "../components/header"
import Footer from "../components/footer"
import MetaData from "../components/metadata"

const NotFoundPage = () => (
  <>
    <MetaData title="404: Not found" />
    <Header />
    <Content>
      <h1>404: Page not found</h1>
    </Content>
    <Footer />
  </>
)

export default NotFoundPage
