"use strict"

const path = require('path')
const fs = require('fs')
const _ = require('lodash')

// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = ({ actions, graphql }) => {
  // need createRedirect action in actions collection
  // to make the redirection magic happen.
  // https://www.gatsbyjs.org/docs/bound-action-creators/
  const { createRedirect } = actions

  // A more modern approach might use forEach rather than for...of
  // Compare
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration#for...of_statement
  // and
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
  let redirectBatch2 = [
    { f: `/soda`, t: `/` },
    { f: `/donut`, t: `` },
    { f: `/randorect`, t: `` },
  ]

  redirectBatch2.forEach(({ f, t }) => {
    if (t === ``) {
      t = `/`
    }
    createRedirect({
      fromPath: f,
      redirectInBrowser: true,
      toPath: t,
    })
    // Uncomment next line to see forEach in action during build
    // console.log('\nRedirecting:\n' + f + '\nTo:\n' + t + '\n');
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === 'MarkdownRemark') {
    const fileNode = getNode(node.parent)
    const parsedFilePath = path.parse(fileNode.relativePath)

    if (!!parsedFilePath.dir && _.includes(fileNode.relativePath, 'README')) {
      const value = `/proposal/${parsedFilePath.dir}`
      createNodeField({ node, name: 'slug', value })
      createNodeField({ node, name: 'bg', value: `${value}.svg` })

      const dir = './public/proposal'
      if (!fs.existsSync(dir)) fs.mkdirSync(dir)
      const path = `./public${_.replace(value, '/lib', '')}.svg`
      writePattern(path, node.frontmatter.name)
    }
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const component = path.resolve('src/templates/proposal.js')
    resolve(
      graphql(
        `
          {
            allMarkdownRemark(filter: { frontmatter: { name: { ne: null } } }) {
              edges {
                node {
                  frontmatter {
                    name
                    description
                    author
                  }
                  fields {
                    slug
                  }
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        _.forEach(result.data.allMarkdownRemark.edges, edge => {
          createPage({
            path: edge.node.fields.slug,
            component,
            context: {
              slug: edge.node.fields.slug
            }
          })
        })
      })
    )
  })
}