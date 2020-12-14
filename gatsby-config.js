const siteTitle = 'Louis Andrew | Portfolio Site'
const siteDescription =
    'Portfolio site of Louis Andrew 🚀. Showcasing my best works as beautiful as possible.'
const siteAuthor = '@louisandrew'
const siteUrl = 'https://louis-andrew.com'
const siteImage = `${siteUrl}/icons/icon_512x512.PNG`
const siteKeywords = [
    'web-developer',
    'front-end developer',
    'front end',
    'React',
    'Portfolio',
]

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
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/static/img`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/content/project`,
                name: `markdown-pages`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/content/tech`,
                name: `markdown-pages`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/content/page`,
                name: `markdown-pages`,
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
                styles: path.join(__dirname, 'src/styles'),
                components: path.join(__dirname, 'src/components'),
                layout: path.join(__dirname, 'src/layout'),
                templates: path.join(__dirname, 'src/templates'),
                context: path.join(__dirname, 'src/context'),
                helper: path.join(__dirname, 'src/helper'),
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: siteTitle,
                short_name: siteTitle,
                description: siteDescription,
                start_url: `/`,
                background_color: `#2b5797`,
                theme_color: `#2b5797`,
                display: `minimal-ui`,
                icon: 'src/images/icon.png',
                icons: [
                    {
                        src: 'icons/icon_512x512.PNG',
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
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    // gatsby-remark-relative-images must go before gatsby-remark-images
                    {
                        resolve: `gatsby-remark-relative-images`,
                        options: {
                            // [Optional] The root of "media_folder" in your config.yml
                            // Defaults to "static"
                            staticFolderName: 'static',
                            // [Optional] Include the following fields, use dot notation for nested fields
                            // All fields are included by default
                            // include: ['featured'],
                            // [Optional] Exclude the following fields, use dot notation for nested fields
                            // No fields are excluded by default
                            // exclude: ['featured.skip'],
                        },
                    },
                    {
                        resolve: `gatsby-remark-images`,
                        options: { maxWidth: 1024 },
                    },
                ],
            },
        },
        'gatsby-plugin-netlify-cms',
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        'gatsby-plugin-react-helmet',
        `gatsby-plugin-typescript`,
        `gatsby-plugin-offline`,
        'gatsby-plugin-theme-ui',
        'gatsby-plugin-sass',
        `gatsby-plugin-transition-link`,
    ],
}
