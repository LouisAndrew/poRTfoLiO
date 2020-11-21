import React from 'react'
// import styling libs
import { Flex, Text } from 'rebass'
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
        techLogo: { xs, s, l },
    } = tech

    const sourcesSmall = [{ ...s, media: '(max-width: 640px)' }, l] as unknown
    const sourcesBig = [{ ...xs, media: '(max-width: 640px)' }, l] as unknown

    return (
        <Flex
            flexDirection="column"
            alignItems="center"
            data-testid="wrapper"
            bg="secondary"
            variant={`skillcard-${variant}`}
            sx={{ borderRadius: 8 }}
        >
            <Img
                imgStyle={{ objectPosition: 'center', height: 'auto' }}
                fixed={
                    variant === 'small'
                        ? (sourcesSmall as FixedObject[])
                        : (sourcesBig as FixedObject[])
                }
            />
            <Text variant="utils" mt={[3]}>
                {name}
            </Text>
        </Flex>
    )
}

export { Skillcard }
