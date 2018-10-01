/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const { createFilePath } = require(`gatsby-source-filesystem`);
const _ = require('lodash');
const path = require("path");

exports.createPages = createPages;

async function createPages({ actions, graphql }) {
  await articlePages(actions, graphql);
  await homePages(actions, graphql);
}

async function articlePages(actions, graphql) {
  const { createPage } = actions

  const postTemplate = path.resolve(`src/templates/articleTemplate.js`)

  return graphql(`
    {
      allMarkdownRemark(
        limit: 1000
        filter: {frontmatter: {template: {eq: "article"}}}
      ) {
        edges {
          node {
            frontmatter {
              path
            }
            fields {
              slug
              langKey
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.fields.slug,
        component: postTemplate,
        context: {
          langKey: node.fields.langKey
        }, // additional data can be passed via context
      })
    })
  })
}

async function homePages(actions, graphql) {
  const { createPage } = actions

  const homeTemplate = path.resolve(`src/templates/homeTemplate.js`)

  return graphql(`
    {
      allMarkdownRemark(
        limit: 1000
        filter: {frontmatter: {template: {eq: "home"}}}
      ) {
        edges {
          node {
            frontmatter {
              path
            }
            fields {
              slug
              langKey
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.fields.slug.replace('index/', ''),
        component: homeTemplate,
        context: {
          langKey: node.fields.langKey
        }, // additional data can be passed via context
      })
    })
  })
}

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark` && _.get(node, 'frontmatter.template') === 'home') {
    // console.log(node);
    const slug = createFilePath({ node, getNode, basePath: `pages/markdown` })
    createNodeField({
      node,
      name: `index_slug`,
      value: slug.replace('index', '').replace('.', '').replace('//', '/')
    })
  }
}

/*
Al indhold bør vel komme fra templates og configuration. Så ingen js i pages-folderen.

Hvad afgør typen. en template værdi i yml. navnet. placeringen?
yml

hvordan styres sprogudgaver? ved filnavn? yml?
filnavn

Hvordan håndteres fallback sprog? kopier af alle sider hvis ingen eksisterer? Har de samme url, eller skal de mappes til en anden sprog url?
Det er bekvemt hvis de har samme url.

kopier alle sider med seperat script.
behold samme url.

måske skulel man seperere sider (med prosa) fra landing sider (som muligvis har prosa tilknyttet, men som er mere entry points)
pages/something.md
pages/something_else.md
ladingPages/something.json
ladingPages/something.md
*/