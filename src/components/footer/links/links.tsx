import React from 'react'
// import styling libs
// import { Link as GatsbyLink } from 'gatsby'
import { Box, Link } from 'rebass'
// import local components

/**
 * Comopnent to wrap links within the site
 */
const Links: React.FC<unknown> = () => {
    return (
        <Box id="links" ml={[48, 48, 4, 5, 5, 6]} mt={[2]}>
            <Link
                variant="text.links"
                as="a"
                mt={[0, 0, 0, 0, 0]}
                href="/#hero"
            >
                HOME
            </Link>
            <Link variant="text.links" as="a" href="/#projects">
                MY PROJECTS
            </Link>
            <Link variant="text.links" as="a" href="/#about">
                ABOUT ME
            </Link>
            <Link variant="text.links" as="a" href="/#contact">
                CONTACT
            </Link>
        </Box>
    )
}

export { Links }
