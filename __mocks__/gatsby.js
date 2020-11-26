const React = require('react')
const gatsby = jest.requireActual('gatsby')

const mockSocials = [
    { link: 'http://localhost', social_key: 'github' },
    { link: 'http://google.com', social_key: 'dribbble' },
]

const mockButtonText = 'Click me'
const mockContactContent = 'Content'
const mockContactHeadline = 'Headline'
const mockEmail = 'john@doe.com'

module.exports = {
    ...gatsby,
    graphql: jest.fn(),
    Link: jest.fn().mockImplementation(
        // these props are invalid for an `a` tag
        ({
            activeClassName,
            activeStyle,
            getProps,
            innerRef,
            ref,
            replace,
            to,
            ...rest
        }) =>
            React.createElement('a', {
                ...rest,
                href: to,
            })
    ),
    StaticQuery: jest.fn(),
    // can I mock return value here?
    useStaticQuery: jest.fn(() => ({
        socialData: {
            frontmatter: {
                social: mockSocials,
            },
        },
        emailData: {
            frontmatter: {
                contact: {
                    button_text: mockButtonText,
                    contact_content: mockContactContent,
                    contact_headline: mockContactHeadline,
                    email: mockEmail,
                },
            },
        },

        // forced to write the hero-page-query mock here.
        heroData: {
            frontmatter: {
                hero: {
                    hero_content: 'Hello, World!', // hard coded from hero.test.tsx
                    hero_headline: 'I am headline', // Also hard coded from hero.test.tsx
                },
            },
        },
        imgS: {
            frontmatter: {
                hero: {
                    hero_imgs: [
                        {
                            childImageSharp: {
                                fixed: {},
                            },
                        },
                    ],
                },
            },
        },
        imgM: {
            frontmatter: {
                hero: {
                    hero_imgs: [
                        {
                            childImageSharp: {
                                fixed: {},
                            },
                        },
                    ],
                },
            },
        },
        imgL: {
            frontmatter: {
                hero: {
                    hero_imgs: [
                        {
                            childImageSharp: {
                                fixed: {},
                            },
                        },
                    ],
                },
            },
        },
        imgXL: {
            frontmatter: {
                hero: {
                    hero_imgs: [
                        {
                            childImageSharp: {
                                fixed: {},
                            },
                        },
                    ],
                },
            },
        },
    })),
}
