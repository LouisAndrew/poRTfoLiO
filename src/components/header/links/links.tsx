import React, { useEffect, useState, useContext } from 'react'
// import styling libs
// import { Link as GatsbyLink } from 'gatsby'
import { Link } from 'gatsby'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import { Flex } from 'rebass'
// import local components
import PageContext from 'context'
import texts from 'styles/texts'
/**
 * Component that contains link within the site. to be rendered on header!
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
        <Flex
            as="nav"
            id="links"
            flexDirection={['column', 'column', 'row']}
            sx={{ '& a': { ...texts.headerLinks } }}
        >
            {LINKS.map(link => {
                const { path, text } = link
                const id = `header-link-${path.replace('/#', '')}` // replacing the /# into a empty string

                return inRoot ? (
                    // gatsby link => why custom cursor not identifying it?
                    <Link
                        key={`header-link-${path}`}
                        to={path}
                        onMouseEnter={() => {
                            setIsHovering(true)
                        }}
                        onMouseLeave={() => {
                            setIsHovering(false)
                        }}
                        id={id}
                    >
                        {text}
                    </Link>
                ) : (
                    <AniLink
                        key={`header-link-${path}`}
                        fade={true}
                        to={path}
                        onMouseEnter={() => {
                            setIsHovering(true)
                        }}
                        onMouseLeave={() => {
                            setIsHovering(false)
                        }}
                        id={id}
                    >
                        {text}
                    </AniLink>
                )
            })}
            <Link id="header-link-contact" to="#contact">
                CONTACT
            </Link>
        </Flex>
    )
}

export { Links }
