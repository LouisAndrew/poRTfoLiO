import React, { useState, useEffect } from 'react'
// import styling libs
import { Box } from 'rebass'
// import local components

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
    const [isHovering, setIsHovering] = useState(false)
    const [isClicking, setIsClicking] = useState(false)

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
        window.addEventListener('mousemove', onMouseMove)
        window.addEventListener('mousedown', setClicked)
        window.addEventListener('mouseup', unsetClicked)
    }

    /**
     * Function to remove the event listener when component umounts.
     */
    const removeEventListeners = () => {}

    /**
     * Function to attach event listener to add custom styling when custom cursor hovers over a button or link
     */
    const addListenersLinks = () => {
        console.log('Listening hover event for button and link..')

        const buttons = document.querySelectorAll('button')
        const links = document.querySelectorAll('a')

        console.log({ buttons, links })

        buttons.forEach(el => {
            el.addEventListener('mouseover', () => setIsHovering(true))
            el.addEventListener('mouseout', () => setIsHovering(false))
        })

        links.forEach(el => {
            el.addEventListener('mouseover', () => setIsHovering(true))
            el.addEventListener('mouseout', () => setIsHovering(false))
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
                transition: 'all 0.15s ease',
                zIndex: 9999,
                mixBlendMode: 'difference',
                transform: `translate(-50%, 0%) scale(${
                    isHovering ? '0.8' : isClicking ? '0.3' : '1'
                })`,
                left: position.x,
                top: position.y,
            }}
        />
    )
}

export { Cursor }
