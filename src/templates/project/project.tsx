import React, { useContext, useEffect } from 'react'
// import styling libs
import { TweenLite } from 'gsap'
import { Flex, Box, Heading, Button, Text, Link } from 'rebass'
import { AiOutlineGlobal, AiFillCode } from 'react-icons/ai'
import Markdown from 'markdown-to-jsx'
// import local components
import ProjectImgs from './project-imgs'
import Skillcard from 'components/skillcard'

import PageContext from 'context'
import { QueryData } from '.'

// custom styling for small phones.
import './index.scss'

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
    techs,
}) => {
    // const [opacity, setOpacity] = useState(1)
    const { setIsHeroNotVisible } = useContext(PageContext)

    const flexRef = React.createRef<HTMLDivElement>()

    useEffect(() => {
        setIsHeroNotVisible(true) // set hero to not visible when component is rendered

        // animating
        const flexEl = flexRef.current
        if (flexEl) {
            // waiting for flexEl children to be rendered first
            setTimeout(() => {
                flexEl.childNodes.forEach((child, index) => {
                    TweenLite.from(child, 0.4, {
                        scrollTrigger: {
                            trigger: flexEl,
                            start: 'bottom bottom',
                        },
                        opacity: 0,
                        delay: 0.2 * index,
                    })
                })
            }, 100)
        }

        // return () => {
        //     setOpacity(0)
        // }
    }, [])

    return (
        <Flex
            className="project"
            variant="wrapper"
            py={[96, 96, 96, 96, 96, 7]}
            // sx={{ opacity, transition: '500ms' }}
        >
            <Box width="100%">
                <ProjectImgs screenshots={projectScreenshots} />
                <Box width="100%">
                    <Flex flexDirection="column" alignItems={['center']}>
                        <Heading mt={[3]} mb={4} as="h2">
                            {projectName}
                        </Heading>
                        <Flex>
                            <Link
                                href={webUrl}
                                target="_blank"
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
                                    target="_blank"
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
                    <Box width="100%" mt={[4]}>
                        <Heading variant="heading" textAlign="center" as="h2">
                            Techonologies Used
                        </Heading>
                        <Flex
                            mt={[3, 3, 2]}
                            ref={flexRef}
                            flexWrap="wrap"
                            id="techs-used"
                        >
                            {techs.map(tech => (
                                <Skillcard
                                    techName={tech}
                                    key={`technologies-${projectName}-${tech}`}
                                />
                            ))}
                        </Flex>
                    </Box>
                </Box>
            </Box>
        </Flex>
    )
}

export { Project }
