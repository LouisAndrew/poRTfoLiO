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

    const lightColors: ColorMode = {
        accent: '#F5F5F5',
        background: '#F9F9F9',
        primary: '#000000',
        text: '#646464',
        secondary: '#ECECEC',
    }

    const darkColors: ColorMode = {
        accent: '#3A3A3A',
        background: '#000000',
        primary: '#F9F9F9',
        text: '#ABABAB',
        secondary: '#232323',
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
