import React from "react"
import { graphql } from "gatsby"
import Helmet from 'react-helmet'
import Layout from '../components/layout'

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data; // data.markdownRemark holds our post data
  if (!markdownRemark) {
    return <h1>404 - no data</h1>;
  }
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
        <Helmet>
            <title>{frontmatter.title}</title>
            <meta name="description" content="Generic Page" />
        </Helmet>
        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>{frontmatter.title}</h1>
                    </header>
                    <span className="image main"><img src={'//api.gbif.org/v1/image/unsafe/1200x300/' + frontmatter.imageUrl} alt="" /></span>
                    <div
                        dangerouslySetInnerHTML={{ __html: html }}
                        />
                </div>
            </section>
        </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(
      fields: { slug: { eq: $path } }
      frontmatter: {template: {eq: "article"}}
      ) {
      html
      frontmatter {
        date
        title
        imageUrl
      }
    }
  }
`