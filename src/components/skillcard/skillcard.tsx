import React from 'react'
// import styling libs
import { Box, Text } from 'rebass'
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

    return (
        <Box data-testid="wrapper" variant={variant}>
            <Text>{tech.techName}</Text>
        </Box>
    )
}

export { Skillcard }
