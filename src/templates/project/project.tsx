import React, { useContext, useEffect } from 'react'
// import styling libs
import { Flex, Box, Heading, Button, Text, Link } from 'rebass'
import { AiOutlineGlobal, AiFillCode } from 'react-icons/ai'
import Markdown from 'markdown-to-jsx'

import ProjectImgs from './project-imgs'
// import local components
import PageContext from 'context'
import { QueryData } from '.'

type Props = QueryData

/**
 * Wrapper component for project page. Used to view individual project
 * A little bit closer.
 */
const Project: React.FC<Props> = ({
    desc,
    // finishedDate,
    projectName,
    projectScreenshots,
    repoUrl,
    webUrl,
}) => {
    const { setIsHeroNotVisible } = useContext(PageContext)

    useEffect(() => {
        setIsHeroNotVisible(true) // set hero to not visible when component is rendered
    }, [])

    return (
        <Flex variant="wrapper" py={[96, 96, 96, 96, 96, 7]}>
            <Box width="100%">
                <ProjectImgs screenshots={projectScreenshots} />
                <Box width="100%">
                    <Flex flexDirection="column" alignItems={['center']}>
                        <Heading mt={[3]} mb={[2]}>
                            {projectName}
                        </Heading>
                        <Flex>
                            <Link
                                href={webUrl}
                                as="a"
                                sx={{ textDecoration: 'none' }}
                            >
                                <Button variant="secondary">
                                    <AiOutlineGlobal /> VISIT SITE
                                </Button>
                            </Link>
                            {repoUrl && (
                                <Link
                                    href={repoUrl}
                                    as="a"
                                    sx={{ textDecoration: 'none' }}
                                    ml={[2]}
                                >
                                    <Button>
                                        <AiFillCode /> VIEW CODE
                                    </Button>
                                </Link>
                            )}
                        </Flex>
                    </Flex>
                    <Box
                        id="desc"
                        mt={[4]}
                        sx={{
                            textAlign: ['center'],
                            // copy pasted from style/texts.ts
                            'p, span': {
                                fontFamily: 'body',
                                fontSize: ['2vh', 1, 4, 4, 4, 5],
                                color: 'text',
                            },
                            blockquote: {
                                bg: 'secondary',
                                px: [4],
                                py: [2],
                            },
                            a: {
                                color: 'text',
                                textDecoration: 'none',
                                position: 'relative',
                                zIndex: 2,
                                '&:before': {
                                    content: '""',
                                    display: 'block',
                                    width: '100%',
                                    height: 4,
                                    bg: 'linkColor',
                                    position: 'absolute',
                                    left: 0,
                                    bottom: '4px',
                                    opacity: 1,
                                    transition: '200ms',
                                    zIndex: -1,
                                },
                                '&:hover': {
                                    '&:before': {
                                        height: '100%',
                                        opacity: 0.5,
                                    },
                                },
                            },
                        }}
                    >
                        <Markdown
                            overrides={{
                                p: {
                                    component: Text,
                                    props: {
                                        variant: 'body',
                                        className: 'hey',
                                    },
                                },
                                a: {
                                    component: Link,
                                    props: { variant: 'text.link' },
                                },
                            }}
                            children={desc}
                        />
                    </Box>
                </Box>
            </Box>
        </Flex>
    )
}

export { Project }
