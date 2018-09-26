import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerLanding from '../components/BannerLanding'

import pic08 from '../assets/images/pic08.jpg'
import pic09 from '../assets/images/pic09.jpg'
import pic10 from '../assets/images/pic10.jpg'

const Landing = props => {
  const spotLights = props.data.allMarkdownRemark.edges.map(function(e) {
    return (
      <section>
        <Link to={e.node.frontmatter.path} className="image">
          <img src={'//api.gbif.org/v1/image/unsafe/576x515/' + e.node.frontmatter.imageUrl} alt="" />
        </Link>
        <div className="content">
          <div className="inner">
            <header className="major">
              <h3>{e.node.frontmatter.title}</h3>
            </header>
            <p>
              {e.node.excerpt}
            </p>
            <ul className="actions">
              <li>
                <Link to={e.node.frontmatter.path} className="button">
                  Learn more
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
    )
  })

  return (
    <Layout>
      <Helmet>
        <title>Features</title>
        <meta name="description" content="Landing Page" />
      </Helmet>

      <BannerLanding />

      <div id="main">
        <section id="one">
          <div className="inner">
            <header className="major">
              <h2>Where and how is data used?</h2>
            </header>
            <p>
                GBIF—the Global Biodiversity Information Facility—is an international network and research infrastructure funded by the world’s governments and aimed at providing anyone, anywhere, open access to data about all types of life on Earth.
            </p>
          </div>
        </section>
        <section id="two" className="spotlights">
          {spotLights}
          <section>
            <Link to="/generic" className="image">
              <img src={pic08} alt="" />
            </Link>
            <div className="content">
              <div className="inner">
                <header className="major">
                  <h3>Orci maecenas</h3>
                </header>
                <p>
                  Nullam et orci eu lorem consequat tincidunt vivamus et
                  sagittis magna sed nunc rhoncus condimentum sem. In efficitur
                  ligula tate urna. Maecenas massa sed magna lacinia magna
                  pellentesque lorem ipsum dolor. Nullam et orci eu lorem
                  consequat tincidunt. Vivamus et sagittis tempus.
                </p>
                <ul className="actions">
                  <li>
                    <Link to="/generic" className="button">
                      Learn more
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </section>
          <section>
            <Link to="/generic" className="image">
              <img src={pic09} alt="" />
            </Link>
            <div className="content">
              <div className="inner">
                <header className="major">
                  <h3>Rhoncus magna</h3>
                </header>
                <p>
                  Nullam et orci eu lorem consequat tincidunt vivamus et
                  sagittis magna sed nunc rhoncus condimentum sem. In efficitur
                  ligula tate urna. Maecenas massa sed magna lacinia magna
                  pellentesque lorem ipsum dolor. Nullam et orci eu lorem
                  consequat tincidunt. Vivamus et sagittis tempus.
                </p>
                <ul className="actions">
                  <li>
                    <Link to="/generic" className="button">
                      Learn more
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </section>
          <section>
            <Link to="/generic" className="image">
              <img src={pic10} alt="" />
            </Link>
            <div className="content">
              <div className="inner">
                <header className="major">
                  <h3>Sed nunc ligula</h3>
                </header>
                <p>
                  Nullam et orci eu lorem consequat tincidunt vivamus et
                  sagittis magna sed nunc rhoncus condimentum sem. In efficitur
                  ligula tate urna. Maecenas massa sed magna lacinia magna
                  pellentesque lorem ipsum dolor. Nullam et orci eu lorem
                  consequat tincidunt. Vivamus et sagittis tempus.
                </p>
                <ul className="actions">
                  <li>
                    <Link to="/generic" className="button">
                      Learn more
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </section>
      </div>
    </Layout>
  )
}

export default Landing

export const query = graphql`
  query {
    allMarkdownRemark(
        filter: { frontmatter: { type: { eq: "feature" } } }
        sort: { order: DESC, fields: [frontmatter___date] }
        ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date
            path
            imageUrl
          }
          excerpt
        }
      }
    }
  }
`
