/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require('path')
// const { createFilePath } = require(`gatsby-source-filesystem`)

// exports.onCreateNode = ({ node, getNode }) => {
//     // search for the MarkdownRemark type of node(s)
//     if (node.internal.type === `MarkdownRemark`) {
//         console.log(createFilePath({ node, getNode, basePath: `pages` }))
//     }
// }

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions

    const nameToSlug = name =>
        name
            .toLowerCase()
            .split(' ')
            .join('_')

    // **Note:** The graphql function call returns a Promise
    // see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise for more info
    const result = await graphql(`
        query {
            allMarkdownRemark(
                filter: { frontmatter: { template_key: { eq: "project" } } }
            ) {
                edges {
                    node {
                        frontmatter {
                            project_name
                        }
                    }
                }
            }
        }
    `)
    // console.log(JSON.stringify(result, null, 4))

    const projects = await result.data.allMarkdownRemark.edges.map(
        edge => edge.node.frontmatter.project_name
    )

    projects.forEach(projectName => {
        createPage({
            path: nameToSlug(projectName),
            component: path.resolve(`./src/templates/project/index.tsx`),
            context: {
                // Data passed to context is available
                // in page queries as GraphQL variables.
                name: projectName,
            },
        })
    })
}
