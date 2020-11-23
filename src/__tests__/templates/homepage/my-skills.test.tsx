import React from 'react'
import ReactDOM from 'react-dom'
// import renderer from 'react-test-renderer'

// import { render, cleanup } from '@testing-library/react'
import { cleanup } from '@testing-library/react'
import '@testing-library/jest-dom'

import MySkills from 'templates/homepage/my-skills'

import * as Gatsby from 'gatsby'
import * as CustomHook from 'helper/hooks/use-all-techs'

const useStaticQuery = jest.spyOn(Gatsby, 'useStaticQuery')
const useAllTechs = jest.spyOn(CustomHook, 'useAllTechs')

const mockSkills = ['React', 'Typescript']
const mockTechs = [
    {
        techName: mockSkills[0],
        techLogo: {
            s: [],
            xs: [],
            m: [],
            l: [],
            xl: [],
        },
    },
    {
        techName: mockSkills[1],
        techLogo: {
            s: [],
            xs: [],
            m: [],
            l: [],
            xl: [],
        },
    },
]

// TODO: how to mock useStaticQuery and custom hook at the same time?
describe('MySkills', () => {
    const Element = <MySkills />

    afterEach(cleanup)
    beforeEach(() => {
        useAllTechs.mockImplementationOnce(() => ({
            techs: mockTechs,
            getTechByName: name => {
                if (name === mockSkills[0]) {
                    return mockTechs[0]
                } else {
                    return mockTechs[1]
                }
            },
        }))

        useStaticQuery.mockImplementationOnce(() => ({
            markdownRemark: {
                frontmatter: {
                    skills: mockSkills,
                },
            },
            techData: {
                edges: [
                    {
                        node: {
                            frontmatter: {
                                tech_name: mockSkills,
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

    // Failure in mocking custom hook and staticquery in the document at the same time..

    // it('Should render all fetched skill cards correctly', () => {
    //     const { queryByTestId } = render(Element)

    //     mockSkills.forEach(name => {
    //         const testId = `homepage-skill-${name}`

    //         const el = queryByTestId(testId)
    //         expect(el).toBeInTheDocument()
    //     })
    // })

    // it('matches snapshot', () => {
    //     const run = true

    //     expect(run).toBeTruthy()

    //     if (run) {
    //         const tree = renderer.create(Element).toJSON()
    //         expect(tree).toMatchSnapshot()
    //     }
    // })
})
