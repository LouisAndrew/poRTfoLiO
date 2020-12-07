import React from 'react'
// import styling libs
import { Flex, Text, Box } from 'rebass'
import Img, { FixedObject } from 'gatsby-image'
// import local components
import { useAllTechs } from 'helper/hooks/use-all-techs'

type Props = {
    /**
     * Name of the tech to be rendered
     */
    techName: string
    /**
     * Variant of the card (either big or small)
     */
    variant?: 'big' | 'small'
}

/**
 * Card component which shows technologies and its logo.
 */
const Skillcard: React.FC<Props> = ({ techName, variant = 'small' }) => {
    const { getTechByName } = useAllTechs()

    const tech = getTechByName(techName)

    if (!tech) {
        return null
    }

    const {
        techName: name,
        techLogo: { xs, s, m },
    } = tech

    const sourcesSmall = [
        { ...xs, media: '(max-width: 832px)' },
        // { ...s, media: '(max-width: 832px)' },
        // { ...m, media: '(max-width: 1040px)' },
        { ...m, media: '(min-width: 1952px)' },
        s,
    ] as unknown
    const sourcesBig = [{ ...s, media: '(max-width: 640px)' }, m] as unknown

    return (
        <Flex
            flexDirection={variant === 'small' ? [] : ['column', 'row', 'row']}
            alignItems="center"
            data-testid="wrapper"
            variant={`skillcard-${variant}`}
            flexShrink={0}
            sx={{ borderRadius: 8, flexShrink: 0 }}
            className="skillcard"
            width={
                variant === 'small'
                    ? ['50%', '33%', '33%', '25%']
                    : ['33%', '50%', '33%']
            }
        >
            <Box
                p={variant === 'small' ? [2] : [3]}
                bg="secondary"
                sx={{
                    borderRadius: 8,
                    flexShrink: 0,
                    borderWidth: 1,
                    borderStyle: 'solid',
                    borderColor: 'accent',
                    position: 'relative',
                }}
                mr={variant === 'small' ? [3] : [0, 4, 24, 4]}
                ml={variant === 'small' ? '25%' : []}
            >
                <Flex
                    variant="center"
                    height={
                        variant === 'small'
                            ? [30, 30, 40, 40, 40, 60]
                            : [40, 60]
                    }
                    width={
                        variant === 'small'
                            ? [30, 30, 40, 40, 40, 60]
                            : [40, 60]
                    }
                >
                    <Img
                        imgStyle={{ objectPosition: 'center', height: 'auto' }}
                        fixed={
                            variant === 'small'
                                ? (sourcesSmall as FixedObject[])
                                : (sourcesBig as FixedObject[])
                        }
                        alt={`${name} logo`}
                    />
                </Flex>
            </Box>
            <Text variant="utils" mt={variant === 'small' ? [] : [3, 0, 0]}>
                {name}
            </Text>
        </Flex>
    )
}

export { Skillcard }
