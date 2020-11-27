import React, { useState, useEffect, useContext } from 'react'
// import styling libs
import { Box } from 'rebass'
// import local components
import PageContext from 'context'

// type CursorPosition = {
//     x: number
//     y: number
// }

/**
 * Custom cursor component
 * ⚠ Limited rendering. Not available on all browsers
 */
const Cursor: React.FC<unknown> = () => {
    // const [position, setPosition] = useState<CursorPosition>({ x: 0, y: 0 })\
    const [el, setEl] = useState<HTMLElement | null>(null)
    const {
        lightTheme,
        cursorState,
        setIsClicking,
        setIsHidden,
        setIsHovering,
    } = useContext(PageContext)

    const { isHidden, isClicking, isHovering } = cursorState

    useEffect(() => {
        addEventListeners()
        addListenersLinks()

        const cursor = document.getElementById('cursor')
        setEl(cursor)

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

        window.addEventListener('mouseover', displayCursor)

        window.addEventListener('mouseout', hideCursor)

        // listen on click event
        document.addEventListener('mousedown', setClicked)
        document.addEventListener('mouseup', unsetClicked)
    }

    /**
     * Function to remove the event listener when component umounts.
     */
    const removeEventListeners = () => {
        document.removeEventListener('mousemove', onMouseMove)

        // listen, if cursor is in-view
        document.removeEventListener('mouseover', displayCursor)
        document.removeEventListener('mouseout', hideCursor)

        // listen on click event
        document.removeEventListener('mousedown', setClicked)
        document.removeEventListener('mouseup', unsetClicked)
    }

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
    const removeListenersLinks = () => {
        const buttons = document.querySelectorAll('button')
        const links = document.querySelectorAll('a')

        buttons.forEach(el => {
            el.removeEventListener('mouseover', hover)
            el.removeEventListener('mouseout', unhover)
        })

        links.forEach(el => {
            el.removeEventListener('mouseover', hover)
            el.removeEventListener('mouseout', unhover)
        })
    }

    /**
     * Function to adjust position of custom cursor based on the current position of native cursor
     * @param ev Mouse event
     */
    const onMouseMove = (ev: MouseEvent) => {
        // const scrollTop = window.scrollY
        // const scrollLeft = window.scrollX
        // setPosition({ x: ev.clientX + scrollLeft, y: ev.clientY + scrollTop })
        // eslint-disable-next-line

        const cursor = document.getElementById('cursor')

        if (cursor) {
            cursor.style.left = `${ev.pageX}px`
            cursor.style.top = `${ev.pageY}px`
        }
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
        setIsHidden(false)
    }

    return (
        <Box
            height={40}
            width={40}
            // bg={isHovering || isClicking ? 'background' : 'unset'}
            bg={`rgba(${lightTheme ? '255, 255, 255' : '0, 0, 0'}, 0.35)`}
            id="cursor"
            sx={{
                borderWidth: 2,
                borderStyle: 'solid',
                borderColor: 'text',
                borderRadius: '100%',
                position: 'absolute',
                pointerEvents: 'none',
                transition: 'all 0.15s ease, opacity 0.25s',
                zIndex: 9999,
                // mixBlendMode: 'difference',
                opacity: isHidden ? 0 : 1,
                transform: `translate(-50%, -50%) scale(${
                    isClicking ? '0.5' : isHovering ? '1.5' : '1'
                })`,
                top: 0,
                left: 0,
            }}
        />
    )
}

export { Cursor }
