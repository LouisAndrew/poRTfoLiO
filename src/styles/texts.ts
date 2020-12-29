export default {
    /**
     * Used on h1.
     */
    primHeading: {
        fontFamily: 'heading',
        fontWeight: 'bold',
        fontSize: ['3.5vh', 5, 6, 6, 6, 7],
        color: 'primary',
    },
    /**
     * Used on h2-h3
     */
    heading: {
        fontFamily: 'heading',
        fontWeight: 'heading',
        fontSize: ['3vh', 3, 5, 5, 5, 6],
        color: 'primary',
    },
    /**
     * Used on p
     */
    body: {
        fontFamily: 'body',
        fontSize: ['2vh', 1, 4, 4, 4, 5],
        color: 'text',
    },
    /**
     * Used on buttons
     */

    buttons: {
        fontFamily: 'body',
        fontSize: [1, 1, 3],
    },
    /**
     * Used on other utilities text element
     */
    utils: {
        fontFamily: 'heading',
        fontWeight: 'heading',
        fontSize: [0, 0, 1, 1, 1, 3],
        color: 'primary',
    },
    links: {
        fontFamily: 'body',
        fontWeight: 300,
        fontSize: [3, 3, 5, 5, 30, 40],
        display: 'block',
        color: 'primary',
        mt: [4, 4, 4, 4, 24],
    },
    headerLinks: {
        fontFamily: 'body',
        fontWeight: 700,
        mx: [0, 0, 3],
        my: [3, 3, 0],
        fontSize: [4, 4, 2],
        color: 'primary',
        opacity: 0.5,
        transition: '200ms',
        '&:hover': {
            opacity: 1,
        },
    },
    articleLink: {
        color: 'text',
        textDecoration: 'none',
        position: 'relative',
        zIndex: 2,
        '&:before': {
            content: '""',
            display: 'block',
            width: '100%',
            height: 4,
            bg: 'linkColor',
            position: 'absolute',
            left: 0,
            bottom: '4px',
            opacity: 0.7,
            transition: '200ms',
            zIndex: -1,
        },
        '&:hover': {
            '&:before': {
                height: '100%',
            },
        },
    },
}
