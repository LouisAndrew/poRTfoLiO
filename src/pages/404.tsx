import React from 'react'
import { graphql, PageProps } from 'gatsby'

import Img, { FixedObject } from 'gatsby-image'
import { Flex, Box, Heading, Text, Button } from 'rebass'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

import Layout from 'layout'
import { SEO } from 'components/seo'

// as usual, custom styling fo taller phones and extra smalls.
import 'templates/404.scss'

/**
 * Helper function to extract img from query Obj fast
 */
const getImg = (queryObj: any) => queryObj.childImageSharp.fixed

/**
 * 404 Page component
 */
const NotFoundPage: React.FC<PageProps> = ({ data }) => {
    const { imgSQuery, imgMQuery, imgLQuery, imgXLQuery } = data as any

    // extract all images datas.
    const imgS = getImg(imgSQuery)
    const imgM = getImg(imgMQuery)
    const imgL = getImg(imgLQuery)
    const imgXL = getImg(imgXLQuery)

    // sources elemenmt for gatsby-image
    const sources = [
        { ...imgS, media: '(max-width: 640px)' } as FixedObject,
        {
            ...imgM,
            media:
                '(max-width: 840px) and (max-height: 420px) and (orientation: landscape)',
        } as FixedObject,
        {
            ...imgXL,
            media: '(min-width: 1952px)',
        } as FixedObject,
        imgL as FixedObject,
    ]

    return (
        <Layout>
            <SEO title="Louis Andrew | Not found." />
            <Flex variant="wrapper" id="404">
                <Flex
                    flexDirection={['column', 'row', 'column']}
                    justifyContent={['center']}
                    alignItems="center"
                    pt={[6, 96, 96, 6, 6, 7]}
                    pb={[5, 5, 5, 6, 6, 7]}
                    className="err__flex-wrapper"
                    minHeight={[
                        'unset',
                        'unset',
                        'unset',
                        '72vh',
                        '72vh',
                        '50vh',
                        '60vh',
                    ]}
                >
                    <Box
                        bg="secondary"
                        width="fit-content"
                        sx={{
                            borderRadius: '50%',
                            flexShrink: 0,
                            borderColor: 'accent',
                            borderStyle: 'solid',
                            borderWidth: 1,
                        }}
                    >
                        <Img fixed={sources} alt="Cool-looking emoji of me" />
                    </Box>
                    <Box
                        mt={['2vh', 0, 4, 3]}
                        ml={[0, 4, 0]}
                        px={[1]}
                        sx={{
                            textAlign: ['center', 'left', 'center'],
                            textOverflow: 'wrap',
                            a: { width: '100%' },
                        }}
                        width="100%"
                        className="err__details-box"
                    >
                        <Heading
                            as="h1"
                            variant="primHeading"
                            data-testid="heading"
                            my={[3, 3, 4]}
                        >
                            Oops! 404 <span role="image">🙊</span>
                        </Heading>
                        <Text as="p" variant="body" data-testid="content">
                            You just hit a route that doesn&#39;t exist.
                        </Text>
                        <AniLink fade={true} to="/#hero">
                            <Button
                                width={['100%', 'fit-content']}
                                variant="primary"
                                mt={[4, 3]}
                                mx={['unset', 'unset', 'auto']}
                                sx={{
                                    justifyContent: 'center',
                                    fontSize: ['2vh', 1, 4, 4, 4, 5],
                                }}
                            >
                                GO HOME
                            </Button>
                        </AniLink>
                    </Box>
                </Flex>
            </Flex>
        </Layout>
    )
}

export const query = graphql`
    query {
        imgSQuery: file(relativePath: { eq: "404_img.PNG" }) {
            childImageSharp {
                fixed(width: 200, height: 200, quality: 100) {
                    ...GatsbyImageSharpFixed
                }
            }
        }
        imgMQuery: file(relativePath: { eq: "404_img.PNG" }) {
            childImageSharp {
                fixed(width: 150, height: 150, quality: 100) {
                    ...GatsbyImageSharpFixed
                }
            }
        }
        imgLQuery: file(relativePath: { eq: "404_img.PNG" }) {
            childImageSharp {
                fixed(width: 300, height: 300, quality: 100) {
                    ...GatsbyImageSharpFixed
                }
            }
        }
        imgXLQuery: file(relativePath: { eq: "404_img.PNG" }) {
            childImageSharp {
                fixed(width: 500, height: 500, quality: 100) {
                    ...GatsbyImageSharpFixed
                }
            }
        }
    }
`

export default NotFoundPage
