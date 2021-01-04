import React, { useState, useContext } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
// import styling libs
import Img from 'gatsby-image'
import { Box, Flex } from 'rebass'
// import local components
import Links from './links'
import ThemeSwitcher from './theme-switcher'
import Menu from './menu'

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
                backdropFilter: 'blur(4px)',
            }}
            pt={[0, 0, 0, 0, 0, 0]}
            bg="transHeader"
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
                    <Links />
                    {/* <Button mt={[3, 3, 0]}>Theme switcher</Button> */}
                    <ThemeSwitcher />
                </Flex>
                <Box
                    onClick={() => {
                        setOpenNav(prev => !prev)
                    }}
                    sx={{
                        display: ['block', 'block', 'none'],
                        position: 'relative',
                        zIndex: 1111,
                        transition: '200ms',
                        svg: {
                            height: 24,
                            width: 24,
                            path: { fill: 'primary' },
                            '#top': {
                                transition: '300ms',
                                transform: openNav
                                    ? 'rotate(45deg) scale(1.2) translate(10%, -10%)'
                                    : '',
                            },
                            '#mid': {
                                transition: '400ms',
                                opacity: openNav ? 0 : 1,
                                transform: openNav ? 'translateX(-20%)' : '',
                            },
                            '#bot': {
                                transition: '300ms',
                                transform: openNav
                                    ? 'rotate(-45deg) scale(1.2) translate(-60%, -20%)'
                                    : '',
                            },
                        },
                    }}
                    className="open-button"
                    role="button"
                >
                    <Menu />
                </Box>
            </Flex>
        </Flex>
    )
}

export { Header }
