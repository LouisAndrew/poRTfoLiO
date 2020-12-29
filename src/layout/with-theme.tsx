import React, { useContext } from 'react'

import { Box } from 'rebass'
import { ThemeProvider, ColorMode } from 'theme-ui'

import theme from '../styles'
import PageContext from 'context'

type Props = {
    /**
     * Props to be passed on Box component
     */
    [key: string]: any
    /**
     * Page component
     */
    children: any
}

/**
 * Component which serves as a wrapper for all element inside the layout and provides theme and/or backgroundto the page
 */
const WithTheme: React.FC<Props> = ({ children, css, ...rest }) => {
    const { lightTheme } = useContext(PageContext)

    // const { title, description } = data.site.siteMetadata as any;

    const linkColor = '#aec6cf'

    const lightColors: ColorMode = {
        accent: '#e4e4e4',
        background: '#F9F9F9',
        primary: '#2e2e2e',
        text: '#646464',
        secondary: '#ffffff',
        transHeader: 'rgba(255, 255, 255, 0.5)',
        primaryHeading: '#000',
        linkColor,
    }

    const darkColors: ColorMode = {
        accent: '#3A3A3A',
        background: '#000000',
        primary: '#eeeeee',
        text: '#ABABAB',
        secondary: '#232323',
        transHeader: 'rgba(0, 0, 0, 0.5)',
        primaryHeading: '#fff',

        linkColor,
    }

    return (
        <ThemeProvider
            theme={{
                ...theme,
                colors: lightTheme ? lightColors : darkColors,
            }}
        >
            <Box
                bg={lightTheme ? lightColors.background : darkColors.background}
                {...rest}
            >
                {children}
            </Box>
        </ThemeProvider>
    )
}

export default WithTheme
