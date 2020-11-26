const base = {
    fontFamily: 'body',
    fontSize: [1, 1, 3, 3, 3, 5],
    display: 'flex',
    alignItems: 'flex-start',
    py: [2, 12, 12, 12, 12, 3],
    px: [3, 3, 24, 24, 24, 4],
    borderRadius: [4, 4, 4, 4, 4, 8],
    svg: {
        height: [18, 18, 24, 24, 24, 32],
        width: [18, 18, 24, 24, 24, 32],
        mr: [12, 12, 3],
    },
}

export default {
    primary: {
        ...base,
        bg: 'primary',
        color: 'background',
    },
}
