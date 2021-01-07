import React, { useContext, useRef } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
// import styling libs
import { Box, Heading, Text, Button } from 'rebass'
import { Player } from '@lottiefiles/react-lottie-player'
// import local components
import PageContext from 'context'
import Mail from './assets/mail'
// custom styling for ipohne 5s
import './index.scss'

/**
 * Contact element to provide user a quick accesss to developer's email.
 */
const EmailMe: React.FC<unknown> = () => {
    const data = useStaticQuery(graphql`
        query {
            emailData: markdownRemark(
                frontmatter: { template_key: { eq: "page" } }
            ) {
                frontmatter {
                    contact {
                        button_text
                        contact_content
                        contact_headline
                        email
                    }
                }
            }
        }
    `)

    const lottieRef = useRef<Player>(null)

    const {
        button_text: btnText,
        contact_content: contactContent,
        contact_headline: contactHeadline,
        email,
    } = data.emailData.frontmatter.contact as any
    const { lightTheme } = useContext(PageContext)

    /**
     * Function to play the confetti animation when email button is clicked.
     */
    const playConfettiAnim = () => {
        lottieRef.current?.play()
    }

    return (
        <Box
            width={['unset', '50%']}
            id="contact"
            sx={{ textAlign: ['center', 'left'] }}
        >
            <Heading variant="heading">
                {contactHeadline.split('\\n').map((text: string, i: number) => (
                    <React.Fragment key={`contact-heading-${i}`}>
                        {text}
                        <br />
                    </React.Fragment>
                ))}
            </Heading>
            <Text
                variant="body"
                as="p"
                data-testid="content"
                mt={[3]}
                mb={[3, 4]}
            >
                {contactContent}
            </Text>
            <Button
                as="a"
                href={`mailto:${email}`}
                width="fit-content"
                bg="linkColor"
                mx={['auto', 'unset']}
                color="#000"
                sx={{
                    boxShadow: `6px 6px 0px ${
                        lightTheme ? '#2e2e2e' : '#eeeeee'
                    }`,
                    borderStyle: 'solid',
                    borderWidth: 1,
                    borderColor: 'primary',
                    position: 'relative',
                    overflow: 'unset',
                    'svg.mail': {
                        transform: 'translateY(-15%)',
                        transition: '200ms',
                        '#letter': {
                            opacity: 0,
                            transform: 'translateY(20%)',
                            transition: '400ms',
                        },
                        '#open': {
                            opacity: 0,

                            transition: '400ms',
                            fill: '#000',
                        },
                        '#close': {
                            transition: '400ms',
                            fill: 'transparent',
                            stroke: '#000',
                            strokeWidth: 12,
                        },
                    },
                    '&:hover svg.mail': {
                        transform: 'translateY(0)',
                        '#letter': {
                            opacity: 1,
                            transform: 'translateY(0)',
                            transitionDelay: '200ms',
                        },
                        '#open': {
                            opacity: 1,
                        },
                        '#close': {
                            opacity: 0,
                        },
                    },
                }}
                onClick={playConfettiAnim}
            >
                <Player
                    ref={lottieRef}
                    autoplay={false}
                    loop={false}
                    controls={false}
                    src="https://assets8.lottiefiles.com/packages/lf20_REOnx3.json"
                    style={{
                        height: 300,
                        width: 300,
                        position: 'absolute',
                        top: -200,
                        left: -50,
                        zIndex: 2,
                    }}
                />
                <Mail className="left mail" />
                {btnText}
            </Button>
        </Box>
    )
}

export { EmailMe }
