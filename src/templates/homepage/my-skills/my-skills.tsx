import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
// import styling libs
// import local components

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

    return <></>
}

export { MySkills }
