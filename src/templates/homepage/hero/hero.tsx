import React, { useState, useEffect, useContext } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { TweenLite } from 'gsap'

// import styling libs
import Img, { FixedObject } from 'gatsby-image'
import { Box, Heading, Flex, Text } from 'rebass'
// import local components
import Scroller from 'components/scroller'

import PageContext from 'context'

// custom very specific styling and animation
import './index.scss'

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
                                fixed(width: 200, height: 200, quality: 100) {
                                    ...GatsbyImageSharpFixed
                                }
                            }
                        }
                    }
                }
            }
            imgM: markdownRemark(
                frontmatter: { template_key: { eq: "page" } }
            ) {
                frontmatter {
                    hero {
                        hero_imgs {
                            childImageSharp {
                                fixed(width: 150, height: 150, quality: 100) {
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
            imgXL: markdownRemark(
                frontmatter: { template_key: { eq: "page" } }
            ) {
                frontmatter {
                    hero {
                        hero_imgs {
                            childImageSharp {
                                fixed(width: 500, height: 500, quality: 100) {
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
    const imgM = data.imgM.frontmatter.hero.hero_imgs[0].childImageSharp.fixed
    const imgL = data.imgL.frontmatter.hero.hero_imgs[0].childImageSharp.fixed
    const imgXL = data.imgXL.frontmatter.hero.hero_imgs[0].childImageSharp.fixed

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
    const { hero_content: heroContent } = pageData
    const [scrollTop, setScrollTop] = useState(0)
    const [heroHeight, setHeroHeight] = useState(0)
    const [percentage, setPercentage] = useState(0)

    const { setIsHeroNotVisible } = useContext(PageContext)

    const heroRef = React.createRef<HTMLDivElement>()
    const heroImgRef = React.createRef<HTMLDivElement>()
    const contentRef = React.createRef<HTMLDivElement>()

    useEffect(() => {
        getHeight()
        window.addEventListener('scroll', () => {
            setScrollTop(window.scrollY)
        })

        const imgEl = heroImgRef.current
        const contentEl = contentRef.current
        const heroEl = heroRef.current

        // add animations.
        if (imgEl && contentEl && heroEl) {
            TweenLite.from(imgEl, 0.8, { opacity: 0 })
            TweenLite.from(contentEl, 0.8, {
                opacity: 0,
                y: 50,
                delay: 0.4,
            })

            // set the header-link-hero brightness to 1.
            TweenLite.to('#header-link-hero', 0.4, {
                scrollTrigger: {
                    trigger: heroEl,
                    start: 'top center',
                    end: 'bottom center',
                    // https://ihatetomatoes.net/scrolltrigger-tutorial-toggleactions-toggleclass/
                    toggleActions: 'play reverse play reverse',
                },
                opacity: 1,
            })
        }

        return () => {
            window.removeEventListener('scroll', () => {
                setScrollTop(window.scrollY)
            })
        }
    }, [])

    useEffect(() => {
        setPercentage(scrollTop / heroHeight)
    }, [scrollTop, heroHeight])

    useEffect(() => {
        setIsHeroNotVisible(percentage >= 1)
    }, [percentage])

    /**
     * Function to get the height of hero element.
     */
    const getHeight = () => {
        if (heroRef.current) {
            setHeroHeight(heroRef.current.scrollHeight)
        }
    }

    return (
        <Flex variant="wrapper" id="hero" ref={heroRef}>
            <Flex
                minHeight={['100vh', '100vh', '100vh', 'fit-content']}
                flexDirection={['column']}
                justifyContent={['center']}
                alignItems="center"
                py={['unset', 'unset', 'unset', 6, 6, 7]}
            >
                <Flex
                    flexDirection={['column', 'row', 'column', 'row']}
                    alignItems={['center']}
                    className="hero__flex-wrapper"
                >
                    <Box
                        bg="secondary"
                        width="fit-content"
                        ref={heroImgRef}
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
                        mt={['2vh', 0, 4, 0]}
                        ml={[0, 4, 0, 5]}
                        px={[1]}
                        sx={{
                            textAlign: ['center', 'left', 'center', 'left'],
                            textOverflow: 'wrap',
                        }}
                        width="100%"
                        className="hero__details-box"
                        ref={contentRef}
                    >
                        <Heading
                            as="h1"
                            variant="primHeading"
                            color="primary"
                            data-testid="heading"
                            my={[3, 3, 4]}
                        >
                            Hello{' '}
                            <span
                                role="img"
                                id="hello"
                                style={{
                                    display: 'inline-block',
                                    transition: '200ms',
                                }}
                            >
                                👋
                            </span>
                            <br />
                            My name is{' '}
                            <Text
                                as="span"
                                variant="articleLink"
                                color="primaryHeading"
                                sx={{
                                    filter: 'brightness(1.1)',
                                    '&:before': {
                                        height: 8,
                                    },
                                    '&:hover': { '&:before': { height: 8 } },
                                }}
                            >
                                Louis Andrew
                            </Text>
                            . I'm a front end developer.
                        </Heading>
                        <Text as="p" variant="body" data-testid="content">
                            {heroContent}
                        </Text>
                    </Box>
                </Flex>
                <Scroller percentage={percentage} />
            </Flex>
        </Flex>
    )
}

export { Hero }
