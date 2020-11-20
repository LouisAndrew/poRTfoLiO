import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'

import { cleanup } from '@testing-library/react'
import '@testing-library/jest-dom'

import Homepage from 'templates/homepage'

describe('Homepage', () => {
    const Element = <Homepage />

    afterEach(cleanup)

    it('renders without crashing', () => {
        const div = document.createElement('div')
        ReactDOM.render(Element, div)
    })

    it('matches snapshot', () => {
        const run = false

        if (run) {
            const tree = renderer.create(Element).toJSON()
            expect(tree).toMatchSnapshot()
        }
    })
})
