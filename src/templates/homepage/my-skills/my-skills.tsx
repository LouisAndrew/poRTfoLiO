import React, { useEffect } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
// import styling libs
import { TweenLite } from 'gsap'
import { Box, Flex, Heading } from 'rebass'
// import local components
import Skillcard from 'components/skillcard'

import './index.scss'

/**
 * component to showcase my skills on the homepage.
 */
const MySkills: React.FC<unknown> = () => {
    const data = useStaticQuery(graphql`
        query {
            markdownRemark(frontmatter: { template_key: { eq: "page" } }) {
                frontmatter {
                    skills
                }
            }
        }
    `)

    const mySkills: string[] = data.markdownRemark.frontmatter.skills

    // const wrapperRef = React.createRef<HTMLDivElement>()
    const flexRef = React.createRef<HTMLDivElement>()

    useEffect(() => {
        const flexEl = flexRef.current

        if (flexEl) {
            // wait for 100 ms before applying animation to the child nodes -> if not, the child nodes of flexEl wouldnot be rendered yet.
            setTimeout(() => {
                flexEl.childNodes.forEach((child, index) => {
                    TweenLite.to(child, 0.4, {
                        scrollTrigger: flexEl,
                        opacity: 1,
                        delay: 0.2 * index,
                    })
                })
            }, 100)
        }
    }, [])

    return (
        <Flex variant="wrapper" id="skills">
            <Box width="100%">
                <Heading as="h2" variant="heading" textAlign="center">
                    Some Things I'm Familiar With
                </Heading>
                <Flex
                    mt={[4]}
                    mb={[5]}
                    flexWrap="wrap"
                    justifyContent={[
                        'flex-start',
                        'flex-start',
                        'space-between',
                    ]}
                    sx={{ '& > div': { opacity: 0 } }}
                    ref={flexRef}
                >
                    {mySkills.map(skill => (
                        <Skillcard
                            techName={skill}
                            key={`homepage-skill-${skill}`}
                            variant="big"
                        />
                    ))}
                </Flex>
            </Box>
        </Flex>
    )
}

export { MySkills }
