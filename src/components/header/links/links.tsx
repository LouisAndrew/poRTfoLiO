import React from 'react'
// import styling libs
// import { Link as GatsbyLink } from 'gatsby'
import { Flex, Link } from 'rebass'
// import local components

/**
 * Component that contains link within the site. to be rendered on header!
 */
const Links: React.FC<unknown> = () => {
    return (
        <Flex as="nav" id="links" flexDirection={['column', 'column', 'row']}>
            <Link variant="text.headerLinks" as="a" href="/#hero">
                HOME
            </Link>
            <Link variant="text.headerLinks" as="a" href="/#projects">
                MY PROJECTS
            </Link>
            <Link variant="text.headerLinks" as="a" href="/#about">
                ABOUT ME
            </Link>
            <Link variant="text.headerLinks" as="a" href="/#contact">
                CONTACT
            </Link>
        </Flex>
    )
}

export { Links }
