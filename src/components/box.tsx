import React, { useContext } from 'react'

import { Heading, Text, Box as ReBox, Button, Link } from 'rebass'
import { Link as GatsbyLink } from 'gatsby'

import PageContext from 'context'

const Box = () => {
    const { lightTheme, setTheme } = useContext(PageContext)

    const buttonClick = () => {
        console.log('changing theme')
        setTheme(!lightTheme)
    }

    return (
        <ReBox minHeight="100vh">
            <Heading color="text">Hello, World</Heading>
            <Text color="ffff">Helewale;aw</Text>

            <ReBox my={3}>
                <Button onClick={buttonClick}>Click to change theme</Button>
            </ReBox>

            <ReBox my={3}>
                <Link as={GatsbyLink} to="/404">
                    This is a link
                </Link>
            </ReBox>

            <button>regular button</button>
            <a>regular link</a>
        </ReBox>
    )
}

export default Box
