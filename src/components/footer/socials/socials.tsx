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
import Dash from './assets/dash'

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
            href={socialKey === 'email' ? `mailto:${link}` : link}
            target={socialKey !== 'email' ? '_blank' : undefined}
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
                svg: {
                    height: [25, 25, 25, 25, 25, 50],
                    width: [25, 25, 25, 25, 25, 50],
                    position: 'relative',
                    zIndex: 2,
                    path: {
                        fill: 'primary',
                    },
                },
                'svg.dash': {
                    height: '100%',
                    width: '100%',
                    position: 'absolute',
                    zIndex: 1,
                    rect: {
                        transition: '0.8s',
                        stroke: 'primary',
                        strokeWidth: 6,
                        strokeDashoffset: 400,
                        strokeDasharray: 400,
                    },
                },
                '&:hover': {
                    transition: '0.3s',
                    transitionDelay: '0.6s',
                    bg: 'primary',
                    svg: {
                        path: {
                            transition: '0.2s',
                            transitionDelay: '0.6s',
                            fill: 'secondary',
                        },
                    },
                    'svg.dash rect': { strokeDashoffset: 0 },
                },
            }}
        >
            <Dash className="dash" />
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
