"use strict"

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
    { f: `/proposal/success.php`, t: `/success` },
    { f: `/soda`, t: `/` },
    { f: `/donut`, t: page2Path },
    { f: `/randorect`, t: `` },
  ]

  redirectBatch2.forEach(({ f, t }) => {
    if (t === ``) {
      t = page2Path
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