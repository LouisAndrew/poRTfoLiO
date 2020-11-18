import React from 'react'

import { Heading, Text, Box as ReBox, Button, Link } from 'rebass'
import { Link as GatsbyLink } from 'gatsby'

const Box = () => {
    return (
        <ReBox minHeight="100vh">
            <Heading color="text">Hello, World</Heading>
            <Text color="ffff">Helewale;aw</Text>

            <ReBox my={3} onClick={() => console.log('Hello, World!')}>
                <Button>This is a button</Button>
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
