import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import { Box } from 'rebass'
import { ThemeProvider, ColorMode } from 'theme-ui'
import theme from '../styles'
// Components

const Layout: React.FC = ({ children }) => {
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
            {/* <GlobalStyles /> */}
            <div>
                <Box
                    as="main"
                    bg={
                        useLightTheme
                            ? lightTheme.background
                            : darkTheme.background
                    }
                >
                    {children}
                </Box>
            </div>
        </ThemeProvider>
    )
}

export { Layout }
