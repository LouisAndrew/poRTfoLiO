import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
// import styling libs
import Img from 'gatsby-image'
import { Box, Heading, Flex, Text } from 'rebass'
// import local components

/**
 * Hero section of the mainpage
 */
const Hero: React.FC<unknown> = () => {
    const data = useStaticQuery(graphql`
        {
            heroData: markdownRemark(
                frontmatter: { template_key: { eq: "page" } }
            ) {
                frontmatter {
                    hero {
                        hero_content
                        hero_headline
                    }
                }
            }
            imgS: markdownRemark(
                frontmatter: { template_key: { eq: "page" } }
            ) {
                frontmatter {
                    hero {
                        hero_imgs {
                            childImageSharp {
                                fixed(width: 250, height: 250, quality: 100) {
                                    ...GatsbyImageSharpFixed
                                }
                            }
                        }
                    }
                }
            }
            imgL: markdownRemark(
                frontmatter: { template_key: { eq: "page" } }
            ) {
                frontmatter {
                    hero {
                        hero_imgs {
                            childImageSharp {
                                fixed(width: 300, height: 300, quality: 100) {
                                    ...GatsbyImageSharpFixed
                                }
                            }
                        }
                    }
                }
            }
        }
    `)

    // extract all queries here.
    const pageData = data.heroData.frontmatter.hero
    const imgS = data.imgS.frontmatter.hero.hero_imgs[0].childImageSharp.fixed
    const imgL = data.imgL.frontmatter.hero.hero_imgs[0].childImageSharp.fixed

    const sources = [{ ...imgS, media: '(max-width: 640px)' }, imgL]

    return (
        <Box variant="wrapper">
            <Flex minHeight={['100vh']} flexDirection={['column']}>
                <Flex flexDirection={['column']}>
                    <Box
                        bg="secondary"
                        width="fit-content"
                        sx={{ borderRadius: '50%' }}
                    >
                        <Img fixed={sources} />
                    </Box>
                </Flex>
            </Flex>
        </Box>
    )
}

export { Hero }
