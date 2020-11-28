import React from 'react'
// import styling libs
import { Box, Heading } from 'rebass'
// import local components

type Props = {}

/**
 * Wrapper component for project page. Used to view individual project
 * A little bit closer.
 */
const Project: React.FC<Props> = () => {
    return (
        <Box>
            <Heading>I love sushi</Heading>
        </Box>
    )
}

export { Project }
