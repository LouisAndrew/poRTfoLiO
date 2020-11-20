import React from 'react'
import Hero from './hero'
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
        </>
    )
}

export { Homepage }
