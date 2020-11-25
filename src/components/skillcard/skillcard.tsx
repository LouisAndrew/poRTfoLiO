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
        techLogo: { xs, s, l, m, xl },
    } = tech

    const sourcesSmall = [
        { ...s, media: '(max-width: 640px)' },
        { ...s, media: '(max-width: 832px) and (orientation: landscape)' },
        { ...m, media: '(max-width: 1040px)' },
        { ...xl, media: '(min-width: 1952px)' },
        l,
    ] as unknown
    const sourcesBig = [{ ...xs, media: '(max-width: 640px)' }, s] as unknown

    return (
        <Flex
            flexDirection="column"
            alignItems="center"
            // justifyContent="space-between"
            data-testid="wrapper"
            variant={`skillcard-${variant}`}
            sx={{ borderRadius: 8 }}
            className="skillcard"
            // width={variant === 'small' ? 'unset' : ['50%']}
        >
            <Box p={[3]} bg="secondary" sx={{ borderRadius: 8, flexShrink: 0 }}>
                <Flex
                    variant="center"
                    minHeight={
                        variant === 'small'
                            ? [60, 60, 80, 120, 120, 150]
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
                    />
                </Flex>
            </Box>
            <Text variant="utils" mt={[3, 3, 4]}>
                {/* <Text variant="utils" ml={[24]}> */}
                {name}
            </Text>
        </Flex>
    )
}

export { Skillcard }
