import React from 'react'
import { graphql } from 'gatsby'
import { FluidObject } from 'gatsby-image'

import { get } from 'lodash'

import { Project } from './project'
import Layout from 'layout'
import { SEO } from 'components/seo'

export type Screenshot = {
    screenshotLabel: string
    sources: FluidObject[]
    publicURL: string
}

export type QueryData = {
    desc: string
    finishedDate: string
    previewDesc: string
    projectName: string
    projectScreenshots: Screenshot[]
    projectGif: {
        gif: string
        gifMobile: string
    }
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
        data: { projectData, imgSQuery, imgLQuery, imgXLQuery },
    } = props

    const frontmatter = projectData.frontmatter

    const imgS = getImgFromQuery(true, imgSQuery)
    // const imgM = getImgFromQuery(false, imgMQuery)
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
                    {
                        ...imgS[index],
                        media: '(max-width: 48em) and (orientation: portrait)',
                    },
                    // {
                    //     ...imgM[index],
                    //     media: '(max-width: 64em)',
                    // },
                    { ...imgXL[index], media: '(min-width: 122em)' },
                    imgL[index],
                ] as FluidObject[],
                publicURL: p.screenshot.publicURL,
            })
        ),
        projectGif: {
            gif: frontmatter.project_gif[0].gif.publicURL,
            gifMobile: frontmatter.project_gif[0].gif_mobile.publicURL,
        },
        repoUrl: frontmatter.repo_url,
        webUrl: frontmatter.web_url,
        finishedDate: frontmatter.finished_date,
    }

    const seoProps = {
        title: `Louis Andrew | ${data.projectName}`,
        image: `http://louis-andrew.com${frontmatter.project_screenshots[0].screenshot.publicURL}`,
        description: data.previewDesc,
    }

    return (
        <Layout>
            <SEO {...seoProps} />
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
                        publicURL
                    }
                }
                project_gif {
                    gif {
                        publicURL
                    }
                    gif_mobile {
                        publicURL
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
                    screenshot {
                        childImageSharp {
                            fluid(maxWidth: 400, quality: 90) {
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
                            fluid(maxWidth: 900, maxHeight: 600, quality: 90) {
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
                            fluid(maxWidth: 1024, maxHeight: 683, quality: 90) {
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
                            fluid(
                                maxWidth: 1700
                                maxHeight: 1094
                                quality: 100
                            ) {
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
