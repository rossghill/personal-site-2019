import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    {/* <p>Welcome to my new Gatsby site.</p> */}
    <h1 id="title">Test</h1>
      {/* <Image /> */}
      <div class="type1"></div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
