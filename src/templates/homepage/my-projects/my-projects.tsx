import React, { useEffect } from 'react'
import { get } from 'lodash'
import { useStaticQuery, graphql } from 'gatsby'
import { TweenLite } from 'gsap'

// import styling libs
import { FluidObject } from 'gatsby-image'
import { Flex, Heading } from 'rebass'
// import local components

import ProjectPreview from './project-preview'

export type ProjectPreviewData = {
    projectName: string
    previewDesc: string
    projectScreenshot: {
        screenshotLabel: string
        sources: FluidObject[]
    }
}

/**
 * Helper function to get fluid img from query..
 * @param queryResult Result of the query to graphql store
 * @returns array of fluid images.
 */
const getImgFromQuery = (queryResult: any) => {
    const imgs = queryResult.edges.map((edge: any) => edge.node)
    return imgs.map((projectImg: any) =>
        get(
            projectImg,
            'frontmatter.project_screenshots[0].screenshot.childImageSharp.fluid'
        )
    )
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
                                        fluid(
                                            maxWidth: 600
                                            maxHeight: 400
                                            quality: 90
                                        ) {
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

    const wrapperRef = React.createRef<HTMLDivElement>()

    useEffect(() => {
        // apply animation when the component is mounted
        const wrapperEl = wrapperRef.current
        if (wrapperEl) {
            //  set opacity of link pointing to this section to 1.
            TweenLite.to('#header-link-projects', 0.4, {
                scrollTrigger: {
                    trigger: wrapperEl,
                    start: 'top center',
                    end: 'bottom center',
                    // https://ihatetomatoes.net/scrolltrigger-tutorial-toggleactions-toggleclass/
                    toggleActions: 'play reverse play reverse',
                },
                opacity: 1,
            })
        }
    }, [])

    return (
        <Flex ref={wrapperRef} variant="wrapper" id="projects">
            <Flex
                width="100%"
                flexDirection="column"
                sx={{
                    a: {
                        width: ['100%', '100%', '100%', '100%'],
                        textDecoration: 'none',
                    },
                }}
            >
                <Heading as="h2" variant="heading" textAlign="center" mb={[48]}>
                    My Projects
                </Heading>
                {data.map((dt: ProjectPreviewData) => (
                    <ProjectPreview {...dt} />
                ))}
            </Flex>
        </Flex>
    )
}

export { MyProjects }
