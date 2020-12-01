import React from 'react'
import { get } from 'lodash'
import { useStaticQuery, graphql } from 'gatsby'
// import styling libs
import { FluidObject } from 'gatsby-image'
// import local components

export type ProjectPreviewData = {
    projectName: string
    previewDesc: string
    projectScreenshot: {
        screenshotLabel: string
        sources: FluidObject[]
    }
}

/**
 * Function that transforms a project name to a slug (identic to function at gatsby-node.js)
 * @param name
 */
export const nameToSlug = (name: string) =>
    name
        .toLowerCase()
        .split(' ')
        .join('_')

/**
 * Helper function to get fluid img from query..
 * @param queryResult Result of the query to graphql store
 * @returns array of fluid images.
 */
const getImgFromQuery = (queryResult: any) => {
    const imgs = queryResult.edges.map((edge: any) => edge.node)
    // return imgs.map((projectImg: any) => {
    //     const img = get(projectImg, 'frontmatter.project_screenshots')
    //     return img.map((dt: any) => get(dt, 'screenshot.childImageSharp.fluid'))
    // })
    return imgs.map((projectImg: any) => {
        const img = get(projectImg, 'frontmatter.project_screenshots[0]')
        return img
    })
}

/**
 * Component to show projects on homepage.
 */
const MyProjects: React.FC<unknown> = () => {
    const result = useStaticQuery(graphql`
        query {
            projects: allMarkdownRemark(
                filter: { frontmatter: { template_key: { eq: "project" } } }
            ) {
                edges {
                    node {
                        frontmatter {
                            preview_desc
                            project_name
                            project_screenshots {
                                screenshot_label
                            }
                        }
                    }
                }
            }
            imgSQuery: allMarkdownRemark(
                filter: { frontmatter: { template_key: { eq: "project" } } }
            ) {
                edges {
                    node {
                        frontmatter {
                            project_screenshots {
                                screenshot {
                                    childImageSharp {
                                        fluid(maxWidth: 400, quality: 100) {
                                            ...GatsbyImageSharpFluid
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            imgMQuery: allMarkdownRemark(
                filter: { frontmatter: { template_key: { eq: "project" } } }
            ) {
                edges {
                    node {
                        frontmatter {
                            project_screenshots {
                                screenshot {
                                    childImageSharp {
                                        fluid(maxWidth: 700, quality: 100) {
                                            ...GatsbyImageSharpFluid
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            imgLQuery: allMarkdownRemark(
                filter: { frontmatter: { template_key: { eq: "project" } } }
            ) {
                edges {
                    node {
                        frontmatter {
                            project_screenshots {
                                screenshot {
                                    childImageSharp {
                                        fluid(maxWidth: 700, quality: 100) {
                                            ...GatsbyImageSharpFluid
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            imgXLQuery: allMarkdownRemark(
                filter: { frontmatter: { template_key: { eq: "project" } } }
            ) {
                edges {
                    node {
                        frontmatter {
                            project_screenshots {
                                screenshot {
                                    childImageSharp {
                                        fluid(maxWidth: 1100, quality: 100) {
                                            ...GatsbyImageSharpFluid
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    `)

    const { projects, imgSQuery, imgMQuery, imgLQuery, imgXLQuery } = result

    const imgS = getImgFromQuery(imgSQuery)
    const imgM = getImgFromQuery(imgMQuery)
    const imgL = getImgFromQuery(imgLQuery)
    const imgXL = getImgFromQuery(imgXLQuery)

    const data = projects.edges.map((project: any, i: number) => {
        const projectDt = project.node.frontmatter
        return {
            projectName: projectDt.project_name,
            previewDesc: projectDt.preview_desc,
            projectScreenshot: {
                screenshotLabel:
                    projectDt.project_screenshots[0].screenshot_label,
                sources: [
                    {
                        ...imgS[i],
                        media: '(max-width: 48em) and (orientation: portrait)',
                    },
                    {
                        ...imgM[i],
                        media: '(max-width: 60em) and (orientation: landscape)',
                    },
                    { ...imgXL[i], media: '(min-width: 122em)' },
                    imgL[i],
                ] as FluidObject[],
            },
        }
    })

    console.log(data)

    return <></>
}

export { MyProjects }
