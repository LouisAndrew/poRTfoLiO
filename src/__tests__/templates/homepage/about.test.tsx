import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'

import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom'

import About from 'templates/homepage/about'

import * as Gatsby from 'gatsby'

const useStaticQuery = jest.spyOn(Gatsby, 'useStaticQuery')

const mockAboutcontent = 'Hello, World!'

describe('About', () => {
    const Element = <About />

    afterEach(cleanup)
    beforeEach(() => {
        useStaticQuery.mockImplementationOnce(() => ({
            aboutData: {
                frontmatter: {
                    about: {
                        about_content: mockAboutcontent,
                    },
                },
            },
            imgS: {
                frontmatter: {
                    about: {
                        about_imgs: [
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
                    about: {
                        about_imgs: [
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
                    about: {
                        about_imgs: [
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
                    about: {
                        about_imgs: [
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

    it('Should render the "about me" content correctly', () => {
        const { getByTestId } = render(Element)

        const aboutMeContent = getByTestId('content')

        expect(aboutMeContent).toHaveTextContent(mockAboutcontent)
    })

    it('matches snapshot', () => {
        const run = true

        expect(run).toBeTruthy()

        const tree = renderer.create(Element).toJSON()
        expect(tree).toMatchSnapshot()
    })
})
