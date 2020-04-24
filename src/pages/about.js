import React from "react"
import Header from "../components/header"
import Layout from "../components/layout"
import { graphql } from "gatsby"

export default ({ data }) => (
  <Layout>
    <div style={{ color: `teal` }}>
      <Header headerText={`About ${data.site.siteMetadata.title}`} />
      <Header headerText="It's pretty cool" />
      <p>Such wow. Very React.</p>
    </div>
  </Layout>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
