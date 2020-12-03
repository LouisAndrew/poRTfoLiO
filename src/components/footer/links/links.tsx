import React, { useEffect, useState, useContext } from 'react'
// import styling libs
import { Link } from 'gatsby'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import { Box } from 'rebass'
// import local components
import PageContext from 'context'
import texts from 'styles/texts'
/**
 * Comopnent to wrap links within the site
 */
const Links: React.FC<unknown> = () => {
    const [location, setLocation] = useState('/')
    const { setIsHovering } = useContext(PageContext)

    useEffect(() => {
        setLocation(window.location.pathname)
    }, [])

    const inRoot = location === '/'

    const LINKS = [
        { text: 'HOME', path: '/#hero' },
        { text: 'MY PROJECTS', path: '/#projects' },
        { text: 'ABOUT ME', path: '/#about' },
    ]

    return (
        <Box
            id="links"
            ml={[48, 48, 4, 5, 5, 6]}
            mt={[2]}
            sx={{ '& a': { ...texts.links, '&:first-of-type': { mt: 0 } } }}
        >
            {LINKS.map(link => {
                return inRoot ? (
                    // gatsby link => why custom cursor not identifying it?
                    <Link
                        key={`footer-link-${link.path}`}
                        to={link.path}
                        onMouseEnter={() => {
                            setIsHovering(true)
                        }}
                        onMouseLeave={() => {
                            setIsHovering(false)
                        }}
                    >
                        {link.text}
                    </Link>
                ) : (
                    <AniLink
                        key={`footer-link-${link.path}`}
                        fade={true}
                        to={link.path}
                        onMouseEnter={() => {
                            setIsHovering(true)
                        }}
                        onMouseLeave={() => {
                            setIsHovering(false)
                        }}
                    >
                        {link.text}
                    </AniLink>
                )
            })}
            <Link to="#contact">CONTACT</Link>
        </Box>
    )
}

export { Links }
