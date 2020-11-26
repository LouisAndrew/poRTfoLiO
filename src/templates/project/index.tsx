import React from 'react'
import { graphql } from 'gatsby'

import { Project } from './project'
import Layout from 'layout'

const ProjectPage = (props: any) => {
    const {
        data: { projectData },
    } = props

    console.log(projectData)

    return (
        <Layout>
            <Project />
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
                }
                techs
                web_url
                repo_url
            }
        }
    }
`

export default ProjectPage
