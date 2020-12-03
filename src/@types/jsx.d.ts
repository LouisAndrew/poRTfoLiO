declare global {
    namespace JSX {
        interface IntrinsicAttributes {
            css?: InterpolationWithTheme<any> // <- here
            // sx?: any
        }
    }
}
