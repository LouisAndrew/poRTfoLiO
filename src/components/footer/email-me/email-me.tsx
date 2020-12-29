import React, { useContext } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
// import styling libs
import { Box, Heading, Text, Button } from 'rebass'
import { AiOutlineMail } from 'react-icons/ai'
// import local components
import PageContext from 'context'
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
    const { lightTheme } = useContext(PageContext)

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
                }}
            >
                <AiOutlineMail className="left" />
                {btnText}
            </Button>
        </Box>
    )
}

export { EmailMe }
