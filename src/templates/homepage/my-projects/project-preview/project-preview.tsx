import React, { useEffect } from 'react'

import { TweenLite } from 'gsap'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
// import styling libs
import { Flex, Box, Heading, Text, Link } from 'rebass'
import Img from 'gatsby-image'
import { AiOutlineArrowRight } from 'react-icons/ai'

// import local components
import Button from 'components/button'

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
    finishedDate,
    webUrl,
}) => {
    const wrapperRef = React.createRef<HTMLDivElement>()
    const buttonRef = React.createRef<HTMLButtonElement>()
    const contentRef = React.createRef<HTMLParagraphElement>()

    useEffect(() => {
        const wrapperEl = wrapperRef.current
        const buttonEl = buttonRef.current
        const contentEl = contentRef.current

        if (wrapperEl && buttonEl && contentEl) {
            TweenLite.from(buttonEl, 0.6, {
                opacity: 0,
                scrollTrigger: {
                    trigger: wrapperEl,
                    start: 'bottom bottom',
                    end: '+=100',
                },
            })
        }
    }, [])

    return (
        <Flex
            flexDirection={['column', 'column', 'column', 'row']}
            mb={[4, 4, 5]}
            sx={{
                borderRadius: 8,
                overflow: 'hidden',
                boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.1)',
            }}
            ref={wrapperRef}
        >
            <Box
                // variant="center"
                width={['100%', '100%', '100%', 510, 600, 999]}
                height={[
                    'calc(85vw * 0.66)',
                    'calc(85vw * 0.66)',
                    'calc(85vw * 0.66)',
                    340,
                    400,
                    666,
                ]}
                sx={{
                    overflow: 'hidden',
                    flexShrink: 0,
                    // border: '1px solid transparent',
                }}
            >
                <Img
                    style={{ height: '100%', width: '100%' }}
                    imgStyle={{ objectPosition: 'center' }}
                    fluid={projectScreenshot.sources}
                    alt={projectScreenshot.screenshotLabel}
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
                    textAlign: 'left',
                    borderRadius: 16,
                    borderTopRightRadius: [0, 0, 0, 16],
                    borderBottomLeftRadius: [16, 16, 16, 0],
                    borderTopLeftRadius: 0,
                    position: 'relative',
                    'a:last-child': {
                        width: 'fit-content',
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
                <Heading as="h2" variant="heading" data-testid="name" mb={12}>
                    {projectName}
                </Heading>
                <Text as="p" variant="body" data-testid="misc" ref={contentRef}>
                    {previewDesc}
                </Text>
                <Link
                    as="a"
                    variant="text.utils"
                    mt={12}
                    mb={[1]}
                    sx={{
                        display: 'block',
                        fontWeight: 'heading',
                    }}
                    href={webUrl}
                    target="_blank"
                >
                    <span role="img" style={{ marginRight: 8 }}>
                        🔗
                    </span>{' '}
                    {webUrl}
                </Link>
                <Text
                    as="span"
                    variant="utils"
                    fontWeight="heading"
                    sx={{ display: 'block' }}
                >
                    <span role="img" style={{ marginRight: 8 }}>
                        📆
                    </span>{' '}
                    {finishedDate}
                </Text>
                <AniLink fade={true} to={nameToSlug(projectName)}>
                    <Button ref={buttonRef} sx={{ justifyContent: 'center' }}>
                        View Project
                        <AiOutlineArrowRight className="right" />
                    </Button>
                </AniLink>
            </Box>
        </Flex>
    )
}

export { ProjectPreview }
