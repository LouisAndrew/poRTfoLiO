import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
// import styling libs
// import local components

const Hero: React.FC<unknown> = () => {
    const data = useStaticQuery(graphql`
        {
            markdownRemark(frontmatter: { template_key: { eq: "page" } }) {
                frontmatter {
                    hero {
                        hero_content
                        hero_headline
                        hero_imgs
                    }
                }
            }
        }
    `)

    const pageData = data.markdownRemark.frontmatter.hero

    console.log(pageData)

    return <></>
}

export { Hero }
