import React, { useEffect } from 'react'
import { TweenLite } from 'gsap'
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
    const ref = React.useRef<HTMLDivElement>()

    // apply animation when the component is mounted
    useEffect(() => {
        const el = ref.current
        if (el) {
            TweenLite.to('#header-link-contact', 0.4, {
                scrollTrigger: {
                    trigger: el,
                    start: '-=100',
                    end: '-=150',
                    toggleActions: 'play reverse play reverse',
                },
                opacity: 1,
            })
        }
    }, [])

    return (
        <Flex
            variant="wrapper"
            as="footer"
            py={[5, 5, 5, 5, 5, 6]}
            bg="secondary"
            ref={ref}
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
