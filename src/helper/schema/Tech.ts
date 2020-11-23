import { FixedObject } from 'gatsby-image'

interface Tech {
    techName: string
    techLogo: {
        xs: FixedObject[]
        s: FixedObject[]
        m: FixedObject[]
        l: FixedObject[]
        xl: FixedObject[]
    }
}

export { Tech }
