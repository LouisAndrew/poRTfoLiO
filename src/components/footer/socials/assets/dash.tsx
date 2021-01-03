import React from 'react'

const SvgDash = (props: any) => {
    return (
        <svg
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <rect
                x={2}
                y={2}
                width={96}
                height={96}
                rx={48}
                stroke="#000"
                strokeWidth={4}
            />
        </svg>
    )
}

export default SvgDash
