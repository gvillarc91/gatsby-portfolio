import React from "react"
import Layout from "../components/layout"
import SEO from "../components/SEO"

const IndexPage = ({ pageContext: { data } }: any) => {


  return (
    <Layout>
      <SEO />
      <h1>About me</h1>
    </Layout>
  )
}

export default IndexPage
