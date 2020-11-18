import React, { useState, useEffect, useContext } from 'react'
// import styling libs
import { Box } from 'rebass'
// import local components
import PageContext from 'context'

type CursorPosition = {
    x: number
    y: number
}

/**
 * Custom cursor component
 * ⚠ Limited rendering. Not available on all browsers
 */
const Cursor: React.FC<unknown> = () => {
    const [position, setPosition] = useState<CursorPosition>({ x: 0, y: 0 })
    const {
        cursorState,
        setIsClicking,
        setIsHidden,
        setIsHovering,
    } = useContext(PageContext)

    const { isHidden, isClicking, isHovering } = cursorState

    useEffect(() => {
        addEventListeners()
        addListenersLinks()

        return () => {
            removeEventListeners()
            removeListenersLinks()
        }
    }, [])

    /**
     * Function to add event listener to window -> to move the custom cursor
     */
    const addEventListeners = () => {
        document.addEventListener('mousemove', onMouseMove)

        // listen, if cursor is in-view
        document.addEventListener('mouseenter', displayCursor)
        document.addEventListener('mouseleave', hideCursor)

        // listen on click event
        document.addEventListener('mousedown', setClicked)
        document.addEventListener('mouseup', unsetClicked)
    }

    /**
     * Function to remove the event listener when component umounts.
     */
    const removeEventListeners = () => {}

    /**
     * Function to attach event listener to add custom styling when custom cursor hovers over a button or link
     */
    const addListenersLinks = () => {
        const buttons = document.querySelectorAll('button')
        const links = document.querySelectorAll('a')

        buttons.forEach(el => {
            el.addEventListener('mouseover', hover)
            el.addEventListener('mouseout', unhover)
        })

        links.forEach(el => {
            el.addEventListener('mouseover', hover)
            el.addEventListener('mouseout', unhover)
        })
    }

    /**
     * Function to remove event listeners attached by the function "addListenersLinks"
     */
    const removeListenersLinks = () => {}

    /**
     * Function to adjust position of custom cursor based on the current position of native cursor
     * @param ev Mouse event
     */
    const onMouseMove = (ev: MouseEvent) => {
        setPosition({ x: ev.clientX, y: ev.clientY })
    }

    /**
     * Function to set the state clicking of custom cursor to true
     */
    const setClicked = () => {
        setIsClicking(true)
    }

    /**
     * Function to reset the custom cursor (remove custom styling on click event)
     */
    const unsetClicked = () => {
        setIsClicking(false)
    }

    /**
     * Function to set the cursor into its hovering state
     */
    const hover = () => {
        setIsHovering(true)
    }

    /**
     * Function to restore cursor from hovering state
     */
    const unhover = () => {
        setIsHovering(false)
    }

    /**
     * Function to hide the cursor when e.g user's native cursor is out of window
     */
    const hideCursor = () => {
        setIsHidden(true)
    }

    /**
     * Function to display custom cursor when user's native cursor is in view
     */
    const displayCursor = () => {
        console.log('hide')
        setIsHidden(false)
    }

    return (
        <Box
            height={40}
            width={40}
            bg={isHovering || isClicking ? 'background' : 'unset'}
            sx={{
                borderWidth: 2,
                borderStyle: 'solid',
                borderColor: 'background',
                borderRadius: '100%',
                position: 'absolute',
                pointerEvents: 'none',
                transition: 'all 0.15s ease, opacity 0.25s',
                zIndex: 9999,
                mixBlendMode: 'difference',
                opacity: isHidden ? 0 : 1,
                transform: `translate(-50%, -50%) scale(${
                    isClicking ? '0.5' : isHovering ? '1.5' : '1'
                })`,
                left: position.x,
                top: position.y,
            }}
        />
    )
}

export { Cursor }
