import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'

import { cleanup } from '@testing-library/react'
import '@testing-library/jest-dom'

import MyProjects from 'templates/homepage/my-projects'
// import { nameToSlug } from 'templates/homepage/my-projects/my-projects'

import * as Gatsby from 'gatsby'

const useStaticQuery = jest.spyOn(Gatsby, 'useStaticQuery')

const mockDesc = 'description'
const mockName = 'Sample Project'
const mockLabel = 'Label'

describe('MyProjects', () => {
    const Element = <MyProjects />

    afterEach(cleanup)
    beforeEach(() => {
        useStaticQuery.mockImplementationOnce(() => ({
            projects: {
                edges: [
                    {
                        node: {
                            frontmatter: {
                                preview_desc: mockDesc,
                                project_name: mockName,
                                project_screenshots: [
                                    {
                                        screenshot_label: mockLabel,
                                    },
                                ],
                            },
                        },
                    },
                ],
            },
            imgSQuery: {
                edges: [
                    {
                        node: {
                            frontmatter: {
                                project_screenshots: [
                                    {
                                        screenshot: {
                                            childImageSharp: {
                                                fluid: {},
                                            },
                                        },
                                    },
                                ],
                            },
                        },
                    },
                ],
            },
            imgMQuery: {
                edges: [
                    {
                        node: {
                            frontmatter: {
                                project_screenshots: [
                                    {
                                        screenshot: {
                                            childImageSharp: {
                                                fluid: {},
                                            },
                                        },
                                    },
                                ],
                            },
                        },
                    },
                ],
            },
            imgLQuery: {
                edges: [
                    {
                        node: {
                            frontmatter: {
                                project_screenshots: [
                                    {
                                        screenshot: {
                                            childImageSharp: {
                                                fluid: {},
                                            },
                                        },
                                    },
                                ],
                            },
                        },
                    },
                ],
            },
            imgXLQuery: {
                edges: [
                    {
                        node: {
                            frontmatter: {
                                project_screenshots: [
                                    {
                                        screenshot: {
                                            childImageSharp: {
                                                fluid: {},
                                            },
                                        },
                                    },
                                ],
                            },
                        },
                    },
                ],
            },
        }))
    })

    it('renders without crashing', () => {
        const div = document.createElement('div')
        ReactDOM.render(Element, div)
    })

    it('matches snapshot', () => {
        const run = true

        expect(run).toBeTruthy()

        if (run) {
            const tree = renderer.create(Element).toJSON()
            expect(tree).toMatchSnapshot()
        }
    })
})
