const siteTitle = 'gatsby-starter-typescript-deluxe'
const siteDescription =
    'A Gatsby starter with TypeScript, Storybook, Styled Components, Framer Motion, Jest, and more.'
const siteAuthor = '@gojutin'
const siteUrl = 'https://gatsby-starter-typescript-deluxe.netlify.com'
const siteImage = `${siteUrl}/icons/icon_512x512.png`
const siteKeywords = ['gatsby', 'typescript', 'starter', 'javascript', 'react']

const path = require('path')

module.exports = {
    siteMetadata: {
        title: siteTitle,
        description: siteDescription,
        author: siteAuthor,
        url: siteUrl,
        keywords: siteKeywords,
        image: siteImage,
    },
    plugins: [
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/src/images`,
                name: 'images',
            },
        },
        {
            resolve: 'gatsby-plugin-react-axe',
            options: {
                showInProduction: false,
                // Options to pass to axe-core.
                // See: https://github.com/dequelabs/axe-core/blob/master/doc/API.md#api-name-axeconfigure
                axeOptions: {
                    // Your axe-core options.
                },
            },
        },
        {
            resolve: 'gatsby-plugin-root-import',
            options: {
                pages: path.join(__dirname, 'src/pages'),
                styles: path.join(__dirname, 'src /pages'),
                components: path.join(__dirname, 'src/components'),
                layout: path.join(__dirname, 'src/layout'),
                templates: path.join(__dirname, 'src/templates'),
                context: path.join(__dirname, 'src/context'),
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: siteTitle,
                short_name: siteTitle,
                description: siteDescription,
                start_url: `/`,
                background_color: `#663399`,
                theme_color: `#663399`,
                display: `minimal-ui`,
                icon: 'src/images/icon.png',
                icons: [
                    {
                        src: 'icons/icon_512x512.png',
                        sizes: '512x512',
                        types: 'image/png',
                    },
                    {
                        src: 'icons/icon_192x192.png',
                        sizes: '192x192',
                        types: 'image/png',
                    },
                ],
            },
        },
        'gatsby-pluign-netlify-cms',
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        'gatsby-plugin-react-helmet',
        `gatsby-plugin-typescript`,
        `gatsby-plugin-offline`,
        'gatsby-plugin-theme-ui',
    ],
}
