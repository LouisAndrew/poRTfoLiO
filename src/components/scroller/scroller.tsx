import React from 'react'
// import styling libs
import { Box, Text } from 'rebass'
// import local components

// custom stylings
import './index.scss'

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
                top: [64, 48, 64],
            }}
            role="complementary"
            className="scroller"
        >
            <Text variant="utils" as="h4">
                SCROLL DOWN TO SEE MY PROJECTS
            </Text>
            <Box
                mt={[2]}
                height={[24, 24, 32]}
                width={[14, 14, 18]}
                mx="auto"
                sx={{
                    borderStyle: 'solid',
                    borderWidth: 2,
                    borderColor: 'primary',
                    borderRadius: [8],
                    position: 'relative',
                }}
                role="button"
                className="scroller__box"
            >
                <Box
                    height={[6, 6, 10]}
                    width={[6, 6, 10]}
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
                    className="scroller__thumb"
                    data-testid="scroller-thumb"
                />
            </Box>
        </Box>
    )
}

export { Scroller }
