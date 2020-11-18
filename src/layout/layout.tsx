import React, { useState } from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import { Box } from 'rebass'
import { ThemeProvider, ColorMode } from 'theme-ui'
import theme from '../styles'
import Cursor from 'components/cursor'
import { ContextProvider } from 'context'
// Components

const Layout: React.FC = ({ children }) => {
    // State to determine if custom cursor is to be used.
    const [applyCustomCursor, setApplyCustomCursor] = useState(true)

    const data = useStaticQuery(graphql`
        query SiteTitleQuery {
            site {
                siteMetadata {
                    title
                    description
                }
            }
        }
    `)

    // const { title, description } = data.site.siteMetadata as any;

    const useLightTheme = true
    const accent = '#FFA5A5'

    const lightTheme: ColorMode = {
        accent,
        background: '#F9F9F9',
        primary: '#000000',
        text: '#646464',
        secondary: '#F1F1F1',
        ffff: '#390',
    }

    const darkTheme: ColorMode = {
        accent,
        background: '#000000',
        primary: '#F9F9F9',
        text: '#ABABAB',
        secondary: '#232323',
    }

    return (
        <ThemeProvider
            theme={{ ...theme, colors: useLightTheme ? lightTheme : darkTheme }}
        >
            <ContextProvider>
                {/* <GlobalStyles /> */}
                <Box
                    bg={
                        useLightTheme
                            ? lightTheme.background
                            : darkTheme.background
                    }
                    sx={{
                        cursor: applyCustomCursor ? 'none' : 'unset',
                        position: 'relative',
                        'cursor:hover': applyCustomCursor ? 'none' : 'unset',
                        'a, button': {
                            cursor: applyCustomCursor ? 'none' : 'unset',
                        },
                    }}
                >
                    <Box as="main">{children}</Box>
                    {applyCustomCursor && <Cursor />}
                </Box>
            </ContextProvider>
        </ThemeProvider>
    )
}

export { Layout }
