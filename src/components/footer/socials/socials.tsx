import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
// import styling libs
import { Link, Box } from 'rebass'
import {
    AiFillGithub,
    AiFillLinkedin,
    AiFillDribbbleCircle,
    AiFillMail,
} from 'react-icons/ai'
// import local components

type socialKeys = 'github' | 'dribbble' | 'email' | 'linkedin'

type SocialCardProps = {
    link: string
    socialKey: socialKeys
}

/**
 * Component to display some small social cards, which user can click on and be redirected
 * to the appropriate link
 */
const Socials: React.FC<unknown> = () => {
    const data = useStaticQuery(graphql`
        query {
            socialData: markdownRemark(
                frontmatter: { template_key: { eq: "page" } }
            ) {
                frontmatter {
                    social {
                        link
                        social_key
                    }
                }
            }
        }
    `)

    const socials = data.socialData.frontmatter.social

    return (
        <Box>
            {socials.map((social: { link: string; social_key: socialKeys }) => (
                <SocialCard link={social.link} socialKey={social.social_key} />
            ))}
        </Box>
    )
}

/**
 * The small cards which is going to be rendered within Socials component.
 */
const SocialCard: React.FC<SocialCardProps> = ({ link, socialKey }) => {
    // rendering logo based on the social key. a lil bit messy but gets the job done
    return (
        <Link
            href={socialKey === 'email' ? 'mailto:link' : link}
            target="_blank"
            data-testid={socialKey}
            as="a"
            bg="background"
            height={[50, 50, 60, 60, 60, 80]}
            width={[50, 50, 60, 60, 60, 80]}
            mt={[2]}
            variant="center"
            sx={{
                display: 'flex',
                borderRadius: 8,

                svg: {
                    height: [25, 25, 25, 30, 30, 50],
                    width: [25, 25, 25, 30, 30, 50],
                    path: { fill: 'text' },
                },
                '&:hover': {
                    svg: {
                        height: [30, 30, 30, 40, 40, 60],
                        width: [30, 30, 30, 40, 40, 60],
                        path: { fill: 'primary' },
                        transition: '200ms',
                    },
                },
            }}
        >
            {socialKey === 'github' ? (
                <AiFillGithub />
            ) : socialKey === 'dribbble' ? (
                <AiFillDribbbleCircle />
            ) : socialKey === 'linkedin' ? (
                <AiFillLinkedin />
            ) : socialKey === 'email' ? (
                <AiFillMail />
            ) : null}
        </Link>
    )
}

export { Socials }
