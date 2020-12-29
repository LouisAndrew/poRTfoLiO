const base = {
    fontFamily: 'body',
    fontSize: [1, 1, 2, 2, 2, 3],
    display: 'flex',
    alignItems: 'flex-start',
    py: [2, 2, 2, 2, 2, 3],
    px: [3, 3, 3, 3, 3, 4],
    borderRadius: [4, 4, 4, 4, 4, 8],
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'transparent',
    svg: {
        height: [18, 18, 20, 20, 20, 32],
        width: [18, 18, 20, 20, 20, 32],
        mr: [12, 12, 3],
    },
    cursor: 'pointer',
}

export default {
    primary: {
        ...base,
        bg: 'primary',
        color: 'background',
    },
    secondary: {
        ...base,
        bg: 'background',
        color: 'primary',
        borderColor: 'primary',
    },
}
