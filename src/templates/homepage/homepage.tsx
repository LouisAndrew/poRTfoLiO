import React from 'react'

import Hero from './hero'
import About from './about'
import Skillcard from 'components/skillcard'
// import styling libs
// import local components

/**
 * Used as a wrapper element for all sections in the homepage
 */
const Homepage: React.FC<unknown> = () => {
    return (
        <>
            <Hero />
            <div style={{ height: '200vh', backgroundColor: '#faa' }} />
            <About />
            <Skillcard techName="React" />
            <Skillcard techName="Typescript" variant="big" />
        </>
    )
}

export { Homepage }
