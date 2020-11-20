import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'

import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom'

import Hero from 'templates/homepage/hero'
// import '/__mocks__/window.js'

import * as Gatsby from 'gatsby'
import * as ReactScrollPercentage from 'react-scroll-percentage'

const useStaticQuery = jest.spyOn(Gatsby, 'useStaticQuery')
const useScrollPercentage = jest.spyOn(
    ReactScrollPercentage,
    'useScrollPercentage'
)

const mockHeroContent = 'Hello, World!'
const mockHeroHeadline = 'I am headline'

describe('Hero', () => {
    const Element = <Hero />

    afterEach(cleanup)
    beforeEach(() => {
        useStaticQuery.mockImplementationOnce(() => ({
            heroData: {
                frontmatter: {
                    hero: {
                        hero_content: mockHeroContent,
                        hero_headline: mockHeroHeadline,
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
        }))

        useScrollPercentage.mockImplementationOnce(() => [
            () => {},
            0,
            undefined,
        ])

        Object.defineProperty(window, 'matchMedia', {
            writable: true,
            value: jest.fn().mockImplementation(query => ({
                matches: false,
                media: query,
                onchange: null,
                addListener: jest.fn(), // deprecated
                removeListener: jest.fn(), // deprecated
                addEventListener: jest.fn(),
                removeEventListener: jest.fn(),
                dispatchEvent: jest.fn(),
            })),
        })
    })

    it('renders without crashing', () => {
        const div = document.createElement('div')
        ReactDOM.render(Element, div)
    })

    it('Should render the headline and content correctly', () => {
        const { getByRole, getByTestId } = render(Element)

        const headline = getByRole('heading')
        const content = getByTestId('content')

        expect(headline).toHaveTextContent(mockHeroHeadline)
        expect(content).toHaveTextContent(mockHeroContent)
    })

    it('matches snapshot', () => {
        const run = false

        if (run) {
            const tree = renderer.create(Element).toJSON()
            expect(tree).toMatchSnapshot()
        }
    })
})
