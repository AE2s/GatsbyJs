import React from "react"
import Header from "../components/header"
import Layout from "../components/layout"

export default () => (
  <Layout>
    <div style={{ color: `teal` }}>
      <Header headerText="Contact" />
      <h1>I'd love to talk! Email me at the address below</h1>
      <p>
        <a href="mailto:anas.essaghir@gmail.com">anas.essaghir@gmail.com</a>
      </p>
    </div>
  </Layout>
)
