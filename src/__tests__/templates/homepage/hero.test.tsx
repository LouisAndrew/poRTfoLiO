import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'

import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom'

import Hero from 'templates/homepage/hero'
// import '/__mocks__/window.js'

import * as Gatsby from 'gatsby'

const useStaticQuery = jest.spyOn(Gatsby, 'useStaticQuery')

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
    })

    it('renders without crashing', () => {
        const div = document.createElement('div')
        ReactDOM.render(Element, div)
    })

    it('Should render the headline and content correctly', () => {
        const { queryByText, getByTestId } = render(Element)

        const headline = queryByText(mockHeroHeadline)
        const content = getByTestId('content')

        expect(headline).toBeInTheDocument()
        expect(content).toHaveTextContent(mockHeroContent)
    })

    it('matches snapshot', () => {
        const run = true

        if (run) {
            const tree = renderer.create(Element).toJSON()
            expect(tree).toMatchSnapshot()
        }
    })
})
