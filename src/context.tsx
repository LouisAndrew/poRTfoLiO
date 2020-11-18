import React, { useState } from 'react'

type CustomCursorState = {
    isClicking: boolean
    isHovering: boolean
    isHidden: boolean
}

type Context = {
    lightTheme: boolean
    customCursor: CustomCursorState
    setIsClicking: (isClicking: boolean) => void
    setIsHovering: (isHovering: boolean) => void
    setIsHidden: (isHidden: boolean) => void
    setTheme: (setToLight: boolean) => void
}

const customCursorInitial = {
    isClicking: false,
    isHovering: false,
    isHidden: true,
}

const PageContext = React.createContext<Context>({
    lightTheme: true,
    customCursor: customCursorInitial,
    setIsClicking: () => {},
    setIsHovering: () => {},
    setIsHidden: () => {},
    setTheme: () => {},
})

const ContextProvider: React.FC<{ children: any }> = ({ children }) => {
    const [lightTheme, setLightTheme] = useState(false)
    const [cursorState, setCursorState] = useState<CustomCursorState>(
        customCursorInitial
    )

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
                customCursor,
                setIsClicking,
                setIsHovering,
                setIsHidden,
                setTheme,
            }}
        >
            {children}
        </PageContext.Provider>
    )
}
