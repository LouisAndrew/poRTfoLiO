import React, { useContext } from 'react'

import { Box, BoxProps } from 'rebass'
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
    const { lightTheme, setIsHidden } = useContext(PageContext)

    // const { title, description } = data.site.siteMetadata as any;

    const accent = '#FFA5A5'

    const lightColors: ColorMode = {
        accent,
        background: '#F9F9F9',
        primary: '#000000',
        text: '#646464',
        secondary: '#F1F1F1',
        ffff: '#390',
    }

    const darkColors: ColorMode = {
        accent,
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
