import React from 'react'
import { Link, graphql } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'

import pic01 from '../assets/images/pic01.jpg'
import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.jpg'
import pic05 from '../assets/images/pic05.jpg'
import pic06 from '../assets/images/pic06.jpg'

class Template extends React.Component {
  render() {
    console.log(this.props);
    const data = this.props.data;
    const { markdownRemark } = data; // data.markdownRemark holds our post data
    if (!markdownRemark) {
      return <h1>404 - no data</h1>;
    }
    const { frontmatter, fields, html } = markdownRemark;
    const articles = this.props.data.allMarkdownRemark.edges.map(function (e) {
      return (
        <article key={e.node.id} style={{ backgroundImage: `url(//api.gbif.org/v1/image/unsafe/800x500/${encodeURIComponent(e.node.frontmatter.imageUrl)})` }}>
          <header className="major">
            <h3>{e.node.frontmatter.title}</h3>
            <p>{e.node.excerpt}</p>
          </header>
          <Link to={e.node.fields.slug} className="link primary" />
        </article>
      )
    })

    return (
      <Layout>
        <Helmet
          title="Gatsby Starter - Forty"
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        />

        <Banner title={frontmatter.title} backgroundImage={frontmatter.imageUrl}/>

        <div id="main">
          <section id="one" className="tiles">
            {articles}
          </section>
          <section id="two">
            <div className="inner">
            <div dangerouslySetInnerHTML={{ __html: markdownRemark.html }} />
              <ul className="actions">
                <li>
                  <Link to="/occurrences" className="button next">
                    Start exploring
                  </Link>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </Layout>
    )
  }
}

export default Template;

export const pageQuery = graphql`
query($path: String!, $langKey: String!) {
    markdownRemark(
      fields: {slug: {eq: $path}}
      ) {
      html
      frontmatter {
        date
        title
        imageUrl
      }
    },
    allMarkdownRemark(
      filter: {
        fields: { langKey: { eq: $langKey } }
        frontmatter: { collection: { eq: "intro" } }
      }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date
            imageUrl
          }
          fields {
            slug
            langKey
          }
          excerpt
        }
      }
    }
  }
`