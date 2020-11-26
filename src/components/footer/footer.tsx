import React from 'react'
// import styling libs
import { Flex } from 'rebass'
// import local components
import Socials from './socials'
import Links from './links'
import EmailMe from './email-me'

// custom styling for iphone 5s
import './index.scss'

/**
 * Footer reusablae component
 */
const Footer: React.FC<unknown> = () => {
    return (
        <Flex
            variant="wrapper"
            as="footer"
            py={[5, 5, 5, 5, 5, 6]}
            bg="secondary"
        >
            <Flex
                className="footer__inner-section"
                flexDirection={['column-reverse', 'row']}
                justifyContent={['space-between']}
                width="100%"
            >
                <Flex pt={[4, 0]}>
                    <Socials />
                    <Links />
                </Flex>
                <EmailMe />
            </Flex>
        </Flex>
    )
}

export { Footer }
