import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
// import styling libs
import { Link, Flex } from 'rebass'
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
        <Flex mt={[4]} justifyContent={['center', 'unset']}>
            {socials.map((social: { link: string; social_key: socialKeys }) => (
                <SocialCard
                    key={social.link}
                    link={social.link}
                    socialKey={social.social_key}
                />
            ))}
        </Flex>
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
            bg="secondary"
            height={[35, 35, 35, 35, 35, 80]}
            width={[35, 35, 35, 35, 35, 80]}
            mr={[3]}
            variant="center"
            sx={{
                display: 'flex',
                borderRadius: '100%',
                position: 'relative',
                transition: '0.3s',
                borderWidth: 2,
                borderStyle: 'solid',
                borderColor: 'primary',
                svg: {
                    transition: '0.2s',
                    height: [25, 25, 25, 25, 25, 50],
                    width: [25, 25, 25, 25, 25, 50],
                    path: { transition: '0.2s', fill: 'primary' },
                },
                '&:hover': {
                    bg: 'primary',
                    borderColor: 'transparent',
                    svg: {
                        path: { fill: 'secondary' },
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
