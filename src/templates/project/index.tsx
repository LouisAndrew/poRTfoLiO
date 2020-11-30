import React from 'react'
import { graphql } from 'gatsby'
import { FluidObject } from 'gatsby-image'

import { Project } from './project'
import Layout from 'layout'

export type Screenshot = {
    screenshotLabel: string
    screenshot: {
        childImageSharp: {
            fluid: FluidObject
        }
    }
    screenshotMobile: {
        childImageSharp: {
            fluid: FluidObject
        }
    }
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
 * Template for all projectpage
 */
const ProjectPage = (props: any) => {
    const {
        data: { projectData },
    } = props

    const frontmatter = projectData.frontmatter
    const data: QueryData = {
        ...frontmatter,
        previewDesc: frontmatter.preview_desc,
        projectName: frontmatter.project_name,
        projectScreenshots: frontmatter.project_screenshots.map((p: any) => ({
            ...p,
            screenshotLabel: p.screenshot_label,
            screenshotMobile: p.screenshot_mobile,
        })),
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
    }
`

export default ProjectPage
