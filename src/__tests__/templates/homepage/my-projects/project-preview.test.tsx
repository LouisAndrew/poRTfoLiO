import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'

import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom'

import ProjectPreview from 'templates/homepage/my-projects/project-preview'

const mockName = 'Sample Project 1'
const mockDesc = 'Sample desc'

const mockProjectData = {
    projectName: mockName,
    previewDesc: mockDesc,
    projectScreenshot: {
        screenshotLabel: '',
        sources: [],
    },
}

describe('ProjectPreview', () => {
    const Element = <ProjectPreview {...mockProjectData} />

    afterEach(cleanup)

    it('renders without crashing', () => {
        const div = document.createElement('div')
        ReactDOM.render(Element, div)
    })

    it('Should render the content correctly', () => {
        const { getByTestId } = render(Element)

        const name = getByTestId('name')
        const desc = getByTestId('desc')

        expect(name).toHaveTextContent(mockName)
        expect(desc).toHaveTextContent(mockDesc)
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
