import React from "react"
import { Link } from "gatsby"
import Image from "../components/image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../compass/sass/_basic.scss"

const IndexPage = () => (
  <Layout>
    <SEO title="Ross Hill portfolio" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/simple-line-icons/2.4.1/css/simple-line-icons.css" />
    <link rel="shortcut icon" type="image/png" href="..images/favicon.png"></link>

    <svg viewBox="0 0 48 18">
      <text x="0" y="15" fill="#232924">Ross Hill</text>
    </svg>
  
    <div class="intro">
      <p>Hi, I'm Ross. I'm a web developer based in Edinburgh, UK.</p>
      <p>I build and maintain sites using Drupal, Wordpress and Shopify using my skills in HTML, CSS/Sass, Javascript, Liquid and React.</p>
      <p>See my work below!</p>
    </div>

    <div class="projects">
      <p class="projects__title">Projects</p>
      <div class="projects__info">
      {/* <Image /> */}
        <img src="https://i.ibb.co/ysN90hW/etch.png" alt="Shows a logo for Etch, a web app"></img>
        <p>Etch is a simple to use web app designed to simulate a life drawing class, using high-resolution photos from Unsplash</p>
        <p><a target="_blank" href="https://rossghill.github.io/Etch/" rel="noreferrer">Try it out here</a></p>
      </div>


      <div class="projects__info">
      {/* <Image /> */}
      <a target="_blank" href="https://raspylines.myshopify.com/" rel="noreferrer"><img src="https://i.ibb.co/y4gCPH8/shop.png" alt="Represents Raspylines, an online store"></img></a>
        <p>Personal online art store, built using Shopify/ SCSS and modified Liquid templates</p>
        <p><a target="_blank" href="https://raspylines.myshopify.com/" rel="noreferrer">See it here</a></p>
      </div>
    </div>


      <div class="type1">
        <div class="social-row">
          <a class="coral-icon" target="_blank" rel="noreferrer" href="https://github.com/rossghill"><i class="icon-social-github icons"></i></a>
          <a class="coral-icon" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/rossghill/"><i class="icon-social-linkedin icons"></i></a>
      </div> 
        <div class="social-row">
          <a class="coral-icon" target="_blank" rel="noreferrer" href="https://www.instagram.com/raspylines/"><i class="icon-social-instagram icons"></i></a>
          <a class="coral-icon" target="_blank" rel="noreferrer" href="https://twitter.com/ross_edin"><i class="icon-social-twitter icons"></i></a>         
        </div> 
      </div>
  </Layout>
)

export default IndexPage;

export const pageQuery = graphql`
  query {
    imageOne: file(relativePath: { eq: "etch.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
