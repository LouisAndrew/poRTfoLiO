import React, { useState } from 'react'
// import styling libs
import { Box, Flex } from 'rebass'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
// import local components
import Links from './links'
import ThemeSwitcher from './theme-switcher'

// custom styling for larger phones
import './index.scss'

/**
 * Header component to render on top of screen
 */
const Header: React.FC<unknown> = () => {
    const [openNav, setOpenNav] = useState(false)

    // contains logo and links

    return (
        <Flex variant="navWrapper" as="header">
            <Flex
                width="100%"
                px={[3]}
                py={[3]}
                alignItems="center"
                sx={{ position: 'fixed', zIndex: 2 }}
            >
                <Box
                    bg="secondary"
                    height={[48]}
                    width={[48]}
                    sx={{ borderRadius: '50%', flexShrink: 0 }}
                ></Box>
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
