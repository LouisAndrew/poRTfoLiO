
import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'

// import { render, cleanup } from '@testing-library/react'
import { cleanup } from '@testing-library/react'
import '@testing-library/jest-dom'

import Footer  from 'components/footer'

describe('Footer', () => {
    const Element = <Footer />

    afterEach(cleanup)

    it('renders without crashing', () => {
		const div = document.createElement('div')
		ReactDOM.render(Element, div)
	})
	
	/* it('renders correctly', () => {
		const { getByTestId } = render()
	}) */

	it('matches snapshot', () => {
		const run = false
	    
		expect(run).toBeTruthy()

        if (run) {
	        const tree = renderer.create(Element).toJSON()
	        expect(tree).toMatchSnapshot()
	    }
	})
})
