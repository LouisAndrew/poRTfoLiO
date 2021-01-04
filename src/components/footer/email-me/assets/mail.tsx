import * as React from 'react'

const Mail = (props: any) => {
    return (
        <svg
            width="1em"
            height="1em"
            viewBox="0 0 359 359"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <defs>
                <clipPath id="mail-me_svg__clip0">
                    <path fill="#fff" d="M0 0h359v359H0z" />
                </clipPath>
            </defs>
            <g clipPath="url(#mail-me_svg__clip0)">
                <path
                    d="M358.5 131H1l54.162 53.5 53.338 53 71.534-66.312L253 237.5 358.5 131zM195.3 18.16L353 129H4L160.732 18.206a30 30 0 0134.568-.046z"
                    stroke="#000"
                    strokeWidth={10}
                    id="open"
                />
                <path
                    d="M221.601 267.157L353 129H4l130.53 138.032c23.626 24.984 63.374 25.041 87.071.125z"
                    fill="#000"
                    id="close"
                />
                <path
                    d="M5 336V136l105 100.251L5 336zM354 336V136L252 236l102 100zM0 343l359-1.006"
                    stroke="#000"
                    strokeWidth={10}
                />
                <path
                    d="M84 111c0-8.284 6.716-15 15-15h168c8.284 0 15 6.716 15 15v91l-29.5 28.5-73-67-71 67.5L84 206v-95z"
                    fill="#F7F2CD"
                    id="letter"
                />
            </g>
        </svg>
    )
}

export default Mail
