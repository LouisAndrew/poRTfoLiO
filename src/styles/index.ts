import buttons from './buttons'
import text from './texts'
import variants from './variants'

const theme = {
    //             640,   832,     960,    1040,   1952px
    breakpoints: ['40em', '48em', '60em', '64em', '122em'],
    //          0,  1,  2,  3,  4,  5,  6,  7,  8
    fontSizes: [12, 14, 16, 18, 20, 24, 32, 48, 64],
    //      0, 1, 2, 3,  4,  5,  6,   7,   8
    space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
    fonts: {
        body: "'Nunito', sans-serif",
        heading: "'Montserrat', sans-serif",
        monospace: 'Menlo, monospace',
    },
    fontWeights: {
        body: 400,
        heading: 700,
        bold: 700,
    },
    lineHeights: {
        body: 1.5,
        heading: 1.25,
    },
    shadows: {
        small: '0 0 4px rgba(0, 0, 0, .125)',
        large: '0 0 24px rgba(0, 0, 0, .125)',
    },
    variants,
    text,
    buttons,
}

export default theme
