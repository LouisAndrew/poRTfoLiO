import { useEffect, useState } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { FixedObject } from 'gatsby-image'

import { Tech } from 'helper/schema/Tech'

const useAllTechs = () => {
    const data = useStaticQuery(graphql`
        query {
            techData: allMarkdownRemark(
                filter: { frontmatter: { template_key: { eq: "tech" } } }
            ) {
                edges {
                    node {
                        frontmatter {
                            tech_name
                        }
                    }
                }
            }
            imgXS: allMarkdownRemark(
                filter: { frontmatter: { template_key: { eq: "tech" } } }
            ) {
                edges {
                    node {
                        frontmatter {
                            tech_logo {
                                childImageSharp {
                                    fixed(width: 40, height: 40, quality: 100) {
                                        ...GatsbyImageSharpFixed
                                    }
                                }
                            }
                        }
                    }
                }
            }
            imgS: allMarkdownRemark(
                filter: { frontmatter: { template_key: { eq: "tech" } } }
            ) {
                edges {
                    node {
                        frontmatter {
                            tech_logo {
                                childImageSharp {
                                    fixed(width: 60, height: 60, quality: 100) {
                                        ...GatsbyImageSharpFixed
                                    }
                                }
                            }
                        }
                    }
                }
            }
            imgM: allMarkdownRemark(
                filter: { frontmatter: { template_key: { eq: "tech" } } }
            ) {
                edges {
                    node {
                        frontmatter {
                            tech_logo {
                                childImageSharp {
                                    fixed(
                                        width: 100
                                        height: 100
                                        quality: 100
                                    ) {
                                        ...GatsbyImageSharpFixed
                                    }
                                }
                            }
                        }
                    }
                }
            }
            imgL: allMarkdownRemark(
                filter: { frontmatter: { template_key: { eq: "tech" } } }
            ) {
                edges {
                    node {
                        frontmatter {
                            tech_logo {
                                childImageSharp {
                                    fixed(
                                        width: 120
                                        height: 120
                                        quality: 100
                                    ) {
                                        ...GatsbyImageSharpFixed
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    `)

    const [techs, setTechs] = useState<Tech[]>([])

    useEffect(() => {
        const { techData, imgS, imgM, imgL, imgXS } = data as any

        console.log({ techData, imgS, imgM, imgL, imgXS })

        const temp: Tech[] = techData.edges.map((edge: any, i: number) => {
            const techName = edge.node.frontmatter.tech_name
            const xs =
                imgXS.edges[i].node.frontmatter.tech_logo.childImageSharp.fixed
            const s =
                imgS.edges[i].node.frontmatter.tech_logo.childImageSharp.fixed
            const m =
                imgM.edges[i].node.frontmatter.tech_logo.childImageSharp.fixed
            const l =
                imgL.edges[i].node.frontmatter.tech_logo.childImageSharp.fixed
            const xl: FixedObject[] = []

            return {
                techName,
                techLogo: {
                    xs,
                    s,
                    m,
                    l,
                    xl,
                },
            }
        })

        setTechs(temp)
    }, [])

    /**
     * Get a single tech by filtering its name
     * @param name Name of the technology
     * @returns the queried tech, and null if the tech is not available..
     */
    const getTechByName = (name: string) => {
        const techArr = techs.filter(
            tech => tech.techName.toLowerCase() === name.toLowerCase()
        )

        if (techArr.length === 0) {
            return null
        } else {
            return techArr[0]
        }
    }

    return { getTechByName, techs }
}

export { useAllTechs }
