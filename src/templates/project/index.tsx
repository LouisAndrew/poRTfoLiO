import React from 'react'
import { graphql } from 'gatsby'
import { FluidObject } from 'gatsby-image'

import { get } from 'lodash'

import { Project } from './project'
import Layout from 'layout'

export type Screenshot = {
    screenshotLabel: string
    sources: FluidObject[]
}

export type QueryData = {
    desc: string
    finishedDate: string
    previewDesc: string
    projectName: string
    projectScreenshots: Screenshot[]
    repoUrl: string
    webUrl: string
    techs: string[]
}

/**
 * Helper function to get fluid img from query..
 * @param isMobile identifier if the img should be taken from screenshot or screenshot_mobile attr
 * @param queryResult Result of the query to graphql store
 * @returns array of fluid images.
 */
const getImgFromQuery = (isMobile: boolean, queryResult: any) => {
    const img = get(queryResult, 'frontmatter.project_screenshots')
    return img.map((dt: any) =>
        get(
            dt,
            `${
                isMobile ? 'screenshot_mobile' : 'screenshot'
            }.childImageSharp.fluid`
        )
    )
}

/**
 * Template for all projectpage
 */
const ProjectPage = (props: any) => {
    const {
        data: { projectData, imgSQuery, imgMQuery, imgLQuery, imgXLQuery },
    } = props

    const frontmatter = projectData.frontmatter

    const imgS = getImgFromQuery(true, imgSQuery)
    const imgM = getImgFromQuery(false, imgMQuery)
    const imgL = getImgFromQuery(false, imgLQuery)
    const imgXL = getImgFromQuery(false, imgXLQuery)

    const data: QueryData = {
        ...frontmatter,
        previewDesc: frontmatter.preview_desc,
        projectName: frontmatter.project_name,
        projectScreenshots: frontmatter.project_screenshots.map(
            (p: any, index: number) => ({
                screenshotLabel: p.screenshot_label,
                sources: [
                    { ...imgS[index], media: '(max-width: 48em)' },
                    {
                        ...imgM[index],
                        media: '(max-width: 60em) and (orientation: landscape)',
                    },
                    { ...imgXL[index], media: '(min-width: 122em)' },
                    imgL[index],
                ] as FluidObject[],
            })
        ),
        repoUrl: frontmatter.repo_url,
        webUrl: frontmatter.web_url,
    }

    return (
        <Layout>
            <Project {...data} />
        </Layout>
    )
}

export const query = graphql`
    query($name: String!) {
        projectData: markdownRemark(
            frontmatter: { project_name: { eq: $name } }
        ) {
            frontmatter {
                desc
                finished_date(formatString: "LL")
                preview_desc
                project_name
                project_screenshots {
                    screenshot_label
                    screenshot {
                        childImageSharp {
                            fluid(maxWidth: 400, quality: 100) {
                                ...GatsbyImageSharpFluid
                            }
                        }
                    }
                    screenshot_mobile {
                        childImageSharp {
                            fluid(maxWidth: 400, quality: 100) {
                                ...GatsbyImageSharpFluid
                            }
                        }
                    }
                }
                techs
                web_url
                repo_url
            }
        }
        imgSQuery: markdownRemark(
            frontmatter: { project_name: { eq: $name } }
        ) {
            frontmatter {
                project_screenshots {
                    screenshot_mobile {
                        childImageSharp {
                            fluid(maxWidth: 400, quality: 100) {
                                ...GatsbyImageSharpFluid
                            }
                        }
                    }
                }
            }
        }
        imgMQuery: markdownRemark(
            frontmatter: { project_name: { eq: $name } }
        ) {
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
        imgLQuery: markdownRemark(
            frontmatter: { project_name: { eq: $name } }
        ) {
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
        imgXLQuery: markdownRemark(
            frontmatter: { project_name: { eq: $name } }
        ) {
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
`

export default ProjectPage
