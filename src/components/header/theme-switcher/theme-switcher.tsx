import React, { useContext } from 'react'
// import styling libs
import { Flex, Text } from 'rebass'
import { BiMoon, BiSun } from 'react-icons/bi'
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
            mt={[2, 2, 0]}
            flexDirection={lightTheme ? 'row' : 'row-reverse'}
            sx={{
                background: 'none',
                px: 0,
                borderStyle: 'solid',
                borderWidth: 2,
                borderLeftWidth: lightTheme ? [0, 0, 0] : [2, 2, 0],
                borderRightWidth: lightTheme ? [2, 2, 0] : [0, 0, 0],
                borderColor: 'primary',
                borderRadius: [32],
                transition: '200ms, border-width: 0ms',
                svg: { path: { fill: 'primary' } },
                overflow: 'hidden',
                height: [32],
                cursor: 'pointer',
                '&:hover': {
                    borderLeftWidth: lightTheme ? [0, 0, 0] : [2, 2, 2],
                    borderRightWidth: lightTheme ? [2, 2, 2] : [0, 0, 0],
                    p: {
                        maxWidth: '50vh',
                        ml: lightTheme ? [2, 2, 2] : [3, 3, 3],
                        mr: lightTheme ? [3, 3, 3] : [2, 2, 2],
                    },
                },
            }}
        >
            <Flex
                variant="center"
                height={[32]}
                width={[32]}
                sx={{
                    borderStyle: 'solid',
                    borderWidth: 2,
                    borderColor: 'primary',
                    borderRadius: '50%',
                }}
            >
                {lightTheme ? (
                    <BiMoon data-testid="button-dark" />
                ) : (
                    <BiSun data-testid="button-light" />
                )}
            </Flex>
            <Text
                fontFamily="body"
                as="p"
                color="primary"
                fontWeight="bold"
                ml={lightTheme ? [2, 2, 0] : [3, 3, 0]}
                mr={lightTheme ? [3, 3, 0] : [2, 2, 0]}
                sx={{
                    maxWidth: ['unset', 'unset', 0],
                    overflow: 'hidden',
                    transition: '300ms',
                }}
            >
                {lightTheme ? 'Go dark' : 'Light it up'}
            </Text>
        </Flex>
    )
}

export { ThemeSwitcher }
