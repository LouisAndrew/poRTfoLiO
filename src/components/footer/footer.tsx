import React from 'react'
// import styling libs
// import local components
import Socials from './socials'
import Links from './links'

type Props = {}

const Footer: React.FC<Props> = () => {
    return (
        <>
            <Socials />
            <Links />
        </>
    )
}

export { Footer }
