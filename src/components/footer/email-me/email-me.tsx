import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
// import styling libs
import { Box, Heading, Text, Link } from 'rebass'
import { AiOutlineMail } from 'react-icons/ai'
// import local components

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

    const {
        button_text: btnText,
        contact_content: contactContent,
        contact_headline: contactHeadline,
        email,
    } = data.emailData.frontmatter.contact as any

    return (
        <Box
            id="contact"
            width={['unset', '50%']}
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
            <Link
                as="a"
                href={`mailto:${email}`}
                variant="buttons.secondary"
                width={['100%', 'fit-content']}
                sx={{
                    textDecoration: 'none',
                    cursor: 'pointer',
                    justifyContent: 'center',
                }}
            >
                <AiOutlineMail />
                {btnText}
            </Link>
        </Box>
    )
}

export { EmailMe }
