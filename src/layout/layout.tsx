import React, { useState } from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import { Box } from 'rebass'

import Cursor from 'components/cursor'

import { ContextProvider } from 'context'
import WithTheme from './with-theme'
import { useGoogleFonts } from 'helper/hooks/use-google-fonts'
// Components

// global styling
import './index.scss'

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

    // apply custom fonts
    useGoogleFonts()

    return (
        <ContextProvider>
            <WithTheme
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
            </WithTheme>
        </ContextProvider>
    )
}

export { Layout }
