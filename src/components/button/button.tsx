import React from 'react'
// import styling libs
import { Button as ReButton, ButtonProps } from 'rebass'
// import local components
type Props = ButtonProps & {
    [key: string]: any
}

/**
 * Button component extension.
 */
const Button: React.FC<Props> = ({ children, css, sx, ...rest }) => {
    const unused = false

    // bug with css
    if (unused) {
        // avoid console logging undefined
        console.log({ css, sx })
    }

    return <ReButton {...rest}>{children}</ReButton>
}

export { Button }
