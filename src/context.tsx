import React, { useState } from 'react'

type CustomCursorState = {
    isClicking: boolean
    isHovering: boolean
    isHidden: boolean
}

export type Context = {
    /**
     * If the current page is using light theme
     */
    lightTheme: boolean
    /**
     * States of the current user (is hidden / clicking / hovering)
     */
    cursorState: CustomCursorState
    /**
     * Attr to determine if the hero section is visible within the viewport
     */
    isHeroNotVisible: boolean
    /**
     * Function to set state of the current custom cursor (if it is clickign)
     */
    setIsClicking: (isClicking: boolean) => void
    /**
     * Function to set state of the current custom cursor (if it is hovering)
     */
    setIsHovering: (isHovering: boolean) => void
    /**
     * Function to set state of the current custom cursor (if it is hidden)
     */
    setIsHidden: (isHidden: boolean) => void
    /**
     * function to set the current theme.
     */
    setTheme: (setToLight: boolean) => void
    /**
     * Function to set the current identifier, IF the hero section is not visible within the viewport
     */
    setIsHeroNotVisible: (heroNotVisible: boolean) => void
}

const customCursorInitial = {
    isClicking: false,
    isHovering: false,
    isHidden: false,
}

export const defaultValues = {
    lightTheme: true,
    cursorState: customCursorInitial,
    isHeroNotVisible: false,
    setIsClicking: () => {},
    setIsHovering: () => {},
    setIsHidden: () => {},
    setTheme: () => {},
    setIsHeroNotVisible: () => {},
}

const PageContext = React.createContext<Context>(defaultValues)

const ContextProvider: React.FC<{ children: any }> = ({ children }) => {
    const [lightTheme, setLightTheme] = useState(true)
    const [cursorState, setCursorState] = useState<CustomCursorState>(
        customCursorInitial
    )
    const [isHeroNotVisible, setIsHeroNotVisible] = useState(false)

    /**
     * Function to set the custom cursor state based on its current clicking behavior
     * @param isClicking true, when the native cursor is currently clicking an element.
     */
    const setIsClicking = (isClicking: boolean) => {
        setCursorState(prev => ({ ...prev, isClicking }))
    }

    /**
     * Function to set the custom cursor state based on its current hover behavior
     * @param isHovering true, when the native cursor is currently hovering over an element
     */
    const setIsHovering = (isHovering: boolean) => {
        setCursorState(prev => ({ ...prev, isHovering }))
    }

    /**
     * Function to set the custom cursor state based on its current position
     * @param isHidden true, when the user's current user is out of window.
     */
    const setIsHidden = (isHidden: boolean) => {
        setCursorState(prev => ({ ...prev, isHidden }))
    }

    /**
     * Function to switch the current theme
     * @param setToLight true, when light theme is going to be setted.
     */
    const setTheme = (setToLight: boolean) => {
        setLightTheme(setToLight)
    }

    return (
        <PageContext.Provider
            value={{
                lightTheme,
                cursorState,
                setIsClicking,
                setIsHovering,
                setIsHidden,
                setTheme,
                isHeroNotVisible,
                setIsHeroNotVisible,
            }}
        >
            {children}
        </PageContext.Provider>
    )
}

export default PageContext
export { ContextProvider }
