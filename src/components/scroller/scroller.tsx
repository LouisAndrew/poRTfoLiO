import React from 'react'
// import styling libs
import { Box, Text } from 'rebass'
// import local components

type Props = {
    /**
     * Percentage of the element scrolled
     */
    percentage: number
}

/**
 * Scroll CTA Element on hero section
 */
const Scroller: React.FC<Props> = ({ percentage }) => {
    // console.log({ percentage, defaultPercentage })

    const transformY = percentage < 0 ? 0 : percentage

    return (
        <Box
            sx={{
                position: 'relative',
                top: [64],
            }}
        >
            <Text variant="utils">SCROLL DOWN TO SEE MY PROJECTS</Text>
            <Box
                mt={[2]}
                height={[32]}
                width={[16]}
                mx="auto"
                sx={{
                    borderStyle: 'solid',
                    borderWidth: 2,
                    borderColor: 'primary',
                    borderRadius: 8,
                    position: 'relative',
                }}
            >
                <Box
                    height={[10]}
                    width={[10]}
                    mx="auto"
                    bg="primary"
                    sx={{
                        borderRadius: '50%',
                        position: 'absolute',
                        top: '2px',
                        left: '50%',
                        transition: '0.1s',
                        transform: `translate(-50%, ${Math.floor(
                            transformY * 100
                        )}%)`,
                    }}
                />
            </Box>
        </Box>
    )
}

export { Scroller }
