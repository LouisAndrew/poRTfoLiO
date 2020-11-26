import React, { useState, useContext } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
// import styling libs
import Img from 'gatsby-image'
import { Box, Flex } from 'rebass'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
// import local components
import Links from './links'
import ThemeSwitcher from './theme-switcher'

import PageContext from 'context'

// custom styling for larger phones
import './index.scss'

/**
 * Header component to render on top of screen
 */
const Header: React.FC<unknown> = () => {
    const data = useStaticQuery(graphql`
        query {
            logoImg: markdownRemark(
                frontmatter: { template_key: { eq: "page" } }
            ) {
                frontmatter {
                    hero {
                        hero_imgs {
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
    `)

    const [openNav, setOpenNav] = useState(false)
    const { isHeroNotVisible } = useContext(PageContext)

    return (
        <Flex
            variant="navWrapper"
            as="header"
            sx={{
                position: 'fixed',
                zIndex: 2,
                transition: '200ms',
                backdropFilter: isHeroNotVisible ? 'blur(4px)' : 'unset',
            }}
            bg={isHeroNotVisible ? 'transHeader' : 'transparent'}
        >
            <Flex width="100%" px={[3]} py={[3]} alignItems="center">
                <Flex
                    variant="center"
                    bg="secondary"
                    height={[48]}
                    width={[48]}
                    sx={{
                        borderRadius: '50%',
                        flexShrink: 0,
                        transition: '300ms',
                        opacity: isHeroNotVisible ? 1 : 0,
                    }}
                >
                    <Img
                        fixed={
                            data.logoImg.frontmatter.hero.hero_imgs[0]
                                .childImageSharp.fixed
                        }
                    />
                </Flex>
                <Box width="100%" />
                <Flex
                    flexDirection={['column', 'column', 'row']}
                    alignItems={['flex-start', 'flex-start', 'center']}
                    bg={['secondary', 'secondary', 'unset']}
                    height={['100vh', '100vh', 'unset']}
                    px={[4, 4, 0]}
                    py={[48, 48, 0]}
                    flexShrink={0}
                    className="links-and-theme"
                    sx={{
                        position: ['absolute', 'absolute', 'relative'],
                        transition: '200ms',
                        right: [
                            openNav ? 0 : '-100vw',
                            openNav ? 0 : '-100vw',
                            0,
                        ],
                        top: [0],
                    }}
                >
                    <Box
                        onClick={() => {
                            setOpenNav(false)
                        }}
                        sx={{
                            position: 'absolute',
                            right: 24,
                            top: 24,
                            display: ['block', 'block', 'none'],
                            svg: {
                                height: 24,
                                width: 24,
                                path: { fill: 'primary' },
                            },
                        }}
                        className="close-button"
                        role="button"
                    >
                        <AiOutlineClose />
                    </Box>
                    <Links />
                    {/* <Button mt={[3, 3, 0]}>Theme switcher</Button> */}
                    <ThemeSwitcher />
                </Flex>
                <Box
                    onClick={() => {
                        setOpenNav(true)
                    }}
                    sx={{
                        display: ['block', 'block', 'none'],
                        opacity: openNav ? 0 : 1,
                        transition: '200ms',
                        svg: {
                            height: 24,
                            width: 24,
                            path: { fill: 'primary' },
                        },
                    }}
                    className="open-button"
                    role="button"
                >
                    <AiOutlineMenu />
                </Box>
            </Flex>
        </Flex>
    )
}

export { Header }
