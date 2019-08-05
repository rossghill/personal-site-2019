import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/simple-line-icons/2.4.1/css/simple-line-icons.css" />
    {/* <p>Welcome to my new Gatsby site.</p> */}
    <h1 id="title">Test</h1>
      {/* <Image /> */}
      <div class="type1">
        <div class="social-row">
        <a href="https://github.com/rossghill"><i class="icon-social-github icons"></i></a>
        <a href="https://www.linkedin.com/in/rossghill/"><i class="icon-social-linkedin icons"></i></a>
      </div> 
        <div class="social-row">
        <a href="https://www.instagram.com/raspylines/"><i class="icon-social-instagram icons"></i></a>
        <a href="https://twitter.com/ross_edin"><i class="icon-social-twitter icons"></i></a>
          
        </div> 
      </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
