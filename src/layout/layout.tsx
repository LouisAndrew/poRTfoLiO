import React, { useState } from 'react'
// import { useStaticQuery, graphql } from 'gatsby'

import { gsap, ScrollTrigger } from 'gsap/all'
import { Box } from 'rebass'

import Cursor from 'components/cursor'
import Footer from 'components/footer'
import Header from 'components/header'

import { ContextProvider } from 'context'
import WithTheme from './with-theme'
import { useGoogleFonts } from 'helper/hooks/use-google-fonts'
// Components

// global styling
import './index.scss'

const Layout: React.FC = ({ children }) => {
    // State to determine if custom cursor is to be used.
    const [applyCustomCursor, setApplyCustomCursor] = useState(true)

    // const data = useStaticQuery(graphql`
    //     query SiteTitleQuery {
    //         site {
    //             siteMetadata {
    //                 title
    //                 description
    //             }
    //         }
    //     }
    // `)

    // ignore this line, purposed to avoid err msg
    gsap.registerPlugin(ScrollTrigger)

    // apply custom fonts
    useGoogleFonts()

    return (
        <ContextProvider>
            <WithTheme
                sx={{
                    cursor: applyCustomCursor ? 'none' : 'unset',
                    position: 'relative',
                    maxWidth: '100vw',
                    overflowX: 'hidden',
                    'cursor:hover': applyCustomCursor ? 'none' : 'unset',
                    'a, button': {
                        cursor: applyCustomCursor ? 'none' : 'unset',
                    },
                }}
            >
                <Header />
                <Box as="main" sx={{ scrollBehavior: 'smooth' }}>
                    {children}
                </Box>
                <Footer />
                {applyCustomCursor && <Cursor />}
            </WithTheme>
        </ContextProvider>
    )
}

export { Layout }
