import React from 'react'
import { Link } from 'gatsby'
// import styling libs
import { Flex, Box, Heading, Text } from 'rebass'
import Img from 'gatsby-image'
// import local components

import { ProjectPreviewData } from '../my-projects'

/**
 * Function that transforms a project name to a slug (identic to function at gatsby-node.js)
 * @param name
 */
export const nameToSlug = (name: string) =>
    name
        .toLowerCase()
        .split(' ')
        .join('_')

type Props = ProjectPreviewData

/**
 * Function to show project preview on homepage
 */
const ProjectPreview: React.FC<Props> = ({
    projectName,
    previewDesc,
    projectScreenshot,
}) => {
    return (
        <Link to={`/${nameToSlug(projectName)}`}>
            <Flex
                flexDirection={['column', 'column', 'column', 'row']}
                mb={[4, 4, 5]}
                sx={{
                    borderRadius: 16,
                    overflow: 'hidden',
                    boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.1)',
                }}
            >
                <Box
                    // variant="center"
                    width={['100%', '100%', '100%', 600, 600, 999]}
                    height={[
                        'calc(85vw * 0.66)',
                        'calc(85vw * 0.66)',
                        'calc(85vw * 0.66)',
                        400,
                        400,
                        666,
                    ]}
                    sx={{
                        overflow: 'hidden',
                        flexShrink: 0,
                        border: '1px solid transparent',
                    }}
                >
                    <Img
                        style={{ height: '100%', width: '100%' }}
                        imgStyle={{ objectPosition: 'center' }}
                        fluid={projectScreenshot.sources}
                    />
                </Box>
                <Box
                    bg="secondary"
                    pt={[3, 3, 4]}
                    pb={[4, 4, 5]}
                    px={[4]}
                    sx={{
                        width: '100%',

                        textAlign: ['center', 'center', 'left'],
                        borderStyle: 'solid',
                        borderWidth: 1,
                        borderTopWidth: [0, 0, 0, 1],
                        borderLeftWidth: [1, 1, 1, 0],
                        borderRadius: 16,
                        borderTopRightRadius: [0, 0, 0, 16],
                        borderBottomLeftRadius: [16, 16, 16, 0],
                        borderTopLeftRadius: 0,
                        borderColor: 'secondary',
                        // flexShrink: 0,
                    }}
                >
                    <Heading
                        as="h2"
                        variant="heading"
                        data-testid="name"
                        mb={[2, 2, 3, 4]}
                    >
                        {projectName}
                    </Heading>
                    <Text as="p" variant="body">
                        {previewDesc}
                    </Text>
                </Box>
            </Flex>
        </Link>
    )
}

export { ProjectPreview }
