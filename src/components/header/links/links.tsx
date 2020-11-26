import React from 'react'
// import styling libs
import { Flex, Link } from 'rebass'
// import local components

/**
 * Component that contains link within the site. to be rendered on header!
 */
const Links: React.FC<unknown> = () => {
    return (
        <Flex as="nav" id="links" flexDirection={['column', 'column', 'row']}>
            <Link variant="text.headerLinks" as="a">
                HOME
            </Link>
            <Link variant="text.headerLinks" as="a">
                MY PROJECTS
            </Link>
            <Link variant="text.headerLinks" as="a">
                ABOUT ME
            </Link>
            <Link variant="text.headerLinks" as="a">
                CONTACT
            </Link>
        </Flex>
    )
}

export { Links }
