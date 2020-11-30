import React from 'react'
// import styling libs
import { Box, Heading } from 'rebass'
import { QueryData } from '.'
// import local components

type Props = QueryData

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
