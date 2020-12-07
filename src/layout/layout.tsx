import React, { useState, useEffect } from 'react'
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
    const [applyCustomCursor, setApplyCustomCursor] = useState(false)

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

    // copy pasted from https://dev.to/andrewchmr/awesome-animated-cursor-with-react-hooks-5ec3
    const isMobile = () => {
        const ua = navigator.userAgent
        return /Android|Mobi/i.test(ua) // returns if the user agent is a mobile device
    }

    /**
     * Function to check if the cursor should be rendered when the page first loaded
     */

    const checkCursor = () => {
        if (typeof navigator !== 'undefined' && isMobile()) {
            setApplyCustomCursor(false)
            return true
        }

        return false
    }

    useEffect(() => {
        // no listener needed if the userAgent is clearly an ihpone / android.
        // const noListenerNeeded = checkCursor() // checking if the custom cursor should be rendered.
        const noListenerNeeded = true

        const removeCursor = () => {
            setApplyCustomCursor(false)
        }

        const showCursor = () => {
            setApplyCustomCursor(true)
        }

        if (!noListenerNeeded) {
            // also, removing cursor when display is touched
            document.addEventListener('touchstart', removeCursor)
            // and adding it when display is not touched anymore..
            document.addEventListener('touchend', showCursor)
        }

        return () => {
            if (!noListenerNeeded) {
                document.removeEventListener('touchstart', removeCursor)
                document.removeEventListener('touchend', showCursor)
            }
        }
    }, [])

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
                        cursor: applyCustomCursor ? 'none' : 'hover',
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
