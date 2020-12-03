import React from 'react'

import Hero from './hero'
import About from './about'
import MySkills from './my-skills'
import MyProjects from './my-projects'
// import styling libs
// import local components

/**
 * Used as a wrapper element for all sections in the homepage
 */
const Homepage: React.FC<unknown> = () => {
    return (
        <>
            <Hero />
            <MyProjects />
            <About />
            <MySkills />
        </>
    )
}

export { Homepage }
