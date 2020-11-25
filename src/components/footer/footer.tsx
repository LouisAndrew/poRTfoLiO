import React from 'react'
// import styling libs
// import local components
import Socials from './socials'
import Links from './links'
import EmailMe from './email-me'

type Props = {}

const Footer: React.FC<Props> = () => {
    return (
        <>
            <EmailMe />
            <Socials />
            <Links />
        </>
    )
}

export { Footer }
