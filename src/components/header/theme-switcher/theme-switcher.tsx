import React, { useContext } from 'react'
// import styling libs
import { Flex, Text } from 'rebass'
import { AiOutlineBulb, AiFillBulb } from 'react-icons/ai'
// import local components

import PageContext from 'context'

const ThemeSwitcher: React.FC<unknown> = () => {
    const { lightTheme, setTheme } = useContext(PageContext)

    return (
        <Flex
            alignItems="center"
            onClick={() => {
                setTheme(!lightTheme)
            }}
            role="button"
            mt={[2]}
            flexDirection={lightTheme ? 'row' : 'row-reverse'}
            sx={{
                borderStyle: 'solid',
                borderWidth: 1,
                borderLeftWidth: lightTheme ? 0 : 1,
                borderRightWidth: lightTheme ? 1 : 0,
                borderColor: 'text',
                borderRadius: [32],
                transition: '200ms, border-width: 0ms',
                svg: { path: { fill: 'primary' } },
            }}
        >
            <Flex
                variant="center"
                height={[32]}
                width={[32]}
                sx={{
                    borderStyle: 'solid',
                    borderWidth: 1,
                    borderColor: 'text',
                    borderRadius: '50%',
                }}
            >
                {lightTheme ? (
                    <AiOutlineBulb data-testid="button-dark" />
                ) : (
                    <AiFillBulb data-testid="button-light" />
                )}
            </Flex>
            <Text
                fontFamily="body"
                color="primary"
                ml={lightTheme ? [2] : [3]}
                mr={lightTheme ? [3] : [2]}
            >
                {lightTheme ? 'Go dark' : 'Light it up'}
            </Text>
        </Flex>
    )
}

export { ThemeSwitcher }
