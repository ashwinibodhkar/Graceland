import React from "react"
import { graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Link } from "gatsby"
import '../css/postTemplate.css'
import ContactForm from '../components/contact'
import Footer from '../components/footer'
import ButtonAppBar from '../components/navbar'
import Helmet from 'react-helmet'
import { HeadsetMic } from "@material-ui/icons"

const shortcodes = { Link } // Provide common components here

export default function PageTemplate({ data: { mdx } }) {
  return (
      <>
        <Helmet>
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
        </Helmet>
        <ButtonAppBar/>
        <div className='temp-wrap'>
          <div className='head-wrap'>
            <h2 className='Book-head'>
                  Book Your
                  <br/> 
                  Plot Today
            </h2>
            <h1 className='temp-title'>At {mdx.frontmatter.title}</h1>
          </div>
            
        </div>
        <div className='mdx-content'>
            <MDXProvider components={shortcodes}>
                <MDXRenderer>{mdx.body}</MDXRenderer>
            </MDXProvider>
        </div> 
        <ContactForm/>
        <Footer/>
      </>
  )
}

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
      }
    }
  }
`