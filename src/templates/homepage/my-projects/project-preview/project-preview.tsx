import React from 'react'
import { Link } from 'gatsby'
// import styling libs
import { Flex, Box, Heading, Text, Button } from 'rebass'
import Img from 'gatsby-image'
// import local components

import { ProjectPreviewData } from '../my-projects'

import './index.scss'

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
                pb={[4, 4]}
                px={[4]}
                sx={{
                    height: 'fit-container',
                    width: '100%',
                    textAlign: ['center', 'center', 'left'],
                    borderStyle: 'solid',
                    borderWidth: 1,
                    borderRadius: 16,
                    borderTopRightRadius: [0, 0, 0, 16],
                    borderBottomLeftRadius: [16, 16, 16, 0],
                    borderTopLeftRadius: 0,
                    borderColor: 'secondary',
                    position: 'relative',
                    a: {
                        width: '100%',
                        m: 0,
                        mt: [4, 4, 4, 0],
                        display: 'block',
                        flexShrink: 0,
                        position: [
                            'relative',
                            'relative',
                            'relative',
                            'absolute',
                        ],
                        bottom: [0, 0, 0, 32],
                        left: 0,
                        px: [0, 0, 0, 4],
                    },
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
                <Text as="p" variant="body" data-testid="misc">
                    {previewDesc}
                </Text>
                <Link to={nameToSlug(projectName)}>
                    <Button width="100%" sx={{ justifyContent: 'center' }}>
                        View Project
                    </Button>
                </Link>
            </Box>
        </Flex>
    )
}

export { ProjectPreview }
