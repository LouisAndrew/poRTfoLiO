import React, { useContext, useEffect } from 'react'
// import styling libs
import { Flex, Box, Heading } from 'rebass'

import ProjectImgs from './project-imgs'
// import local components
import PageContext from 'context'
import { QueryData } from '.'

type Props = QueryData

/**
 * Wrapper component for project page. Used to view individual project
 * A little bit closer.
 */
const Project: React.FC<Props> = ({ projectScreenshots }) => {
    const { setIsHeroNotVisible } = useContext(PageContext)

    useEffect(() => {
        setIsHeroNotVisible(true) // set hero to not visible when component is rendered
    }, [])

    return (
        <Flex variant="wrapper" py={[96, 96, 96, 96, 96, 7]}>
            <Box width="100%">
                <Heading>I love sushi</Heading>
                <ProjectImgs screenshots={projectScreenshots} />
            </Box>
        </Flex>
    )
}

export { Project }
