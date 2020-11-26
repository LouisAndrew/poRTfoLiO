export default {
    center: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    wrapper: {
        justifyContent: 'center',
        width: '100vw',
        pt: ['unset', 'unset', 'unset', 'unset', 'unset', 5],
        '& > div': {
            maxWidth: ['85%', '85%', '85%', '85%', 1024, 1640],
        },
    },
    'skillcard-big': {
        width: ['32%', '32%', '23%'],
        py: [3, 3, 4],
    },
    'skillcard-small': {
        width: ['48%', '23%', '23%'],
        // height: ['35vw'],
        py: [3, 4, 4, 4, 4, 5],
        my: [2],
    },
    navWrapper: {
        justifyContent: 'center',
        width: '100vw',
        pt: ['unset', 'unset', 'unset', 'unset', 'unset', 5],
        '& > div': {
            maxWidth: ['100%', '100%', '100%', '100%', 1060, 1800],
        },
    },
}
