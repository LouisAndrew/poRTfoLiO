import React from 'react'
// import styling libs
import { Box, Link } from 'rebass'
// import local components

/**
 * Comopnent to wrap links within the site
 */
const Links: React.FC<unknown> = () => {
    return (
        <Box id="links" ml={[48, 48, 4, 5, 5, 6]} mt={[2]}>
            <Link variant="text.links" as="a" mt={[0, 0, 0, 0, 0]}>
                HOME
            </Link>
            <Link variant="text.links" as="a">
                MY PROJECTS
            </Link>
            <Link variant="text.links" as="a">
                ABOUT ME
            </Link>
            <Link variant="text.links" as="a">
                CONTACT
            </Link>
        </Box>
    )
}

export { Links }
