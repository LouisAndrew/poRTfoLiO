import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'

import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom'

import Skillcard from 'components/skillcard'

// import * as Gatsby from 'gatsby'
import * as CustomHook from 'helper/hooks/use-all-techs'

// const useStaticQuery = jest.spyOn(Gatsby, 'useStaticQuery')
const useAllTechs = jest.spyOn(CustomHook, 'useAllTechs')
const mockTechName = 'React'
const mockTech = {
    techName: mockTechName,
    techLogo: {
        s: [],
        xs: [],
        m: [],
        l: [],
        xl: [],
    },
}

describe('Skillcard', () => {
    const Element = <Skillcard techName={mockTechName} />
    const ElementNotAvailable = <Skillcard techName="Java" />

    afterEach(cleanup)
    beforeEach(() => {
        useAllTechs.mockImplementationOnce(() => ({
            techs: [mockTech],
            getTechByName: name => {
                if (name === mockTechName) {
                    return mockTech
                } else {
                    return null
                }
            },
        }))
        // useStaticQuery.mockImplementationOnce(() => ({
        //     techName: {
        //         edges: [
        //             {
        //                 node: {
        //                     frontmatter: {
        //                         tech_name: mockTechName,
        //                     },
        //                 },
        //             },
        //         ],
        //     },
        //     imgXS: {
        //         edges: [
        //             {
        //                 node: {
        //                     frontmatter: {
        //                         tech_logo: {
        //                             childImageSharp: {
        //                                 fixed: {},
        //                             },
        //                         },
        //                     },
        //                 },
        //             },
        //         ],
        //     },
        //     imgS: {
        //         edges: [
        //             {
        //                 node: {
        //                     frontmatter: {
        //                         tech_logo: {
        //                             childImageSharp: {
        //                                 fixed: {},
        //                             },
        //                         },
        //                     },
        //                 },
        //             },
        //         ],
        //     },
        //     imgM: {
        //         edges: [
        //             {
        //                 node: {
        //                     frontmatter: {
        //                         tech_logo: {
        //                             childImageSharp: {
        //                                 fixed: {},
        //                             },
        //                         },
        //                     },
        //                 },
        //             },
        //         ],
        //     },
        //     imgL: {
        //         edges: [
        //             {
        //                 node: {
        //                     frontmatter: {
        //                         tech_logo: {
        //                             childImageSharp: {
        //                                 fixed: {},
        //                             },
        //                         },
        //                     },
        //                 },
        //             },
        //         ],
        //     },
        // }))
    })

    it('renders without crashing', () => {
        const div = document.createElement('div')
        ReactDOM.render(Element, div)
    })

    it('Should render the skillcard given the correct tech name', () => {
        const { queryByTestId, queryByText } = render(Element)

        const wrapper = queryByTestId('wrapper')
        const text = queryByText(mockTechName)

        expect(wrapper).toBeInTheDocument()
        expect(text).toBeInTheDocument()
    })

    it('Should not render the skillcard when the given tech name is not available in the graphql store', () => {
        const { queryByTestId, queryByText } = render(ElementNotAvailable)

        const wrapper = queryByTestId('wrapper')
        const text = queryByText(mockTechName)

        expect(wrapper).not.toBeInTheDocument()
        expect(text).not.toBeInTheDocument()
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
