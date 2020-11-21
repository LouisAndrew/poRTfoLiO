import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'

import { render, cleanup } from '@testing-library/react'
// import { cleanup } from '@testing-library/react'
import '@testing-library/jest-dom'

import Scroller from 'components/scroller'

describe('Scroller', () => {
    const Element = <Scroller percentage={0.4} />
    const ElementFullScrolled = <Scroller percentage={1} />

    afterEach(cleanup)

    it('renders without crashing', () => {
        const div = document.createElement('div')
        ReactDOM.render(Element, div)
    })

    it('should transform the scroller thumb based on its percentage correctly', () => {
        const { getByTestId } = render(Element)

        const scrollerThumb = getByTestId('scroller-thumb')

        expect(scrollerThumb).toHaveStyle('transform: translate(-50%,40%)')
    })

    it('Should transform scroller thumb by 100% percent when the percentage props is given as 1', () => {
        const { getByTestId } = render(ElementFullScrolled)

        const scrollerThumb = getByTestId('scroller-thumb')

        expect(scrollerThumb).toHaveStyle('transform: translate(-50%,100%)')
    })

    it('matches snapshot', () => {
        const run = true

        if (run) {
            const tree = renderer.create(Element).toJSON()
            expect(tree).toMatchSnapshot()
        }
    })
})
