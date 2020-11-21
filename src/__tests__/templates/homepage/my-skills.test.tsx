import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'

import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom'

import MySkills from 'templates/homepage/my-skills'

import * as Gatsby from 'gatsby'

const useStaticQuery = jest.spyOn(Gatsby, 'useStaticQuery')

const mockSkills = ['React', 'Typescript']

describe('MySkills', () => {
    const Element = <MySkills />

    afterEach(cleanup)
    beforeEach(() => {
        useStaticQuery.mockImplementationOnce(() => ({
            markdownRemark: {
                frontmatter: {
                    skills: mockSkills,
                },
            },
        }))
    })

    it('renders without crashing', () => {
        const div = document.createElement('div')
        ReactDOM.render(Element, div)
    })

    it('Should render all fetched skill cards correctly', () => {
        const { queryByTestId } = render(Element)

        mockSkills.forEach(name => {
            const testId = `homepage-skill-${name}`

            const el = queryByTestId(testId)
            expect(el).toBeInTheDocument()
        })
    })

    it('matches snapshot', () => {
        const run = false

        expect(run).toBeTruthy()

        if (run) {
            const tree = renderer.create(Element).toJSON()
            expect(tree).toMatchSnapshot()
        }
    })
})
