import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/simple-line-icons/2.4.1/css/simple-line-icons.css" />
    <link rel="shortcut icon" type="image/png" href="..images/favicon.png"></link>
    {/* <p>Welcome to my new Gatsby site.</p> */}
    <h1 id="title">Ross Hill</h1>
    <h2>Web Developer</h2>
    <h2>Drupal Site-Builder</h2>
      {/* <Image /> */}
      <div class="type1">
        <div class="social-row">
          <a class="coral-icon" target="_blank" href="https://github.com/rossghill"><i class="icon-social-github icons"></i></a>
          <a class="aqua-icon" target="_blank" href="https://www.linkedin.com/in/rossghill/"><i class="icon-social-linkedin icons"></i></a>
      </div> 
        <div class="social-row">
          <a class="aqua-icon" target="_blank" href="https://www.instagram.com/raspylines/"><i class="icon-social-instagram icons"></i></a>
          <a class="coral-icon" target="_blank" href="https://twitter.com/ross_edin"><i class="icon-social-twitter icons"></i></a>         
        </div> 
      </div>
  </Layout>
)

export default IndexPage
