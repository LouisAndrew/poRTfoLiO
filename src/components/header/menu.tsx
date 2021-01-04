import React from 'react'

const Menu = (props: any) => {
    return (
        <svg
            width="1em"
            height="1em"
            viewBox="0 0 1024 1024"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M115.5 219v-38c0-9.941 8.059-18 18-18H895c9.941 0 18 8.059 18 18v38c0 9.941-8.059 18-18 18H133.5c-9.941 0-18-8.059-18-18z"
                id="top"
            />
            <path
                d="M113 531v-38c0-9.941 8.059-18 18-18h761.5c9.941 0 18 8.059 18 18v38c0 9.941-8.059 18-18 18H131c-9.941 0-18-8.059-18-18z"
                id="mid"
            />
            <path
                d="M110.5 843v-38c0-9.941 8.059-18 18-18H890c9.941 0 18 8.059 18 18v38c0 9.941-8.059 18-18 18H128.5c-9.941 0-18-8.059-18-18z"
                id="bot"
            />
        </svg>
    )
}

export default Menu
