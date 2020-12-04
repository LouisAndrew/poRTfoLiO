import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'

// import { render, cleanup } from '@testing-library/react'
import { cleanup } from '@testing-library/react'
import '@testing-library/jest-dom'

import ProjectImgs from 'templates/project/project-imgs'

// export type Screenshot = {
//     screenshotLabel: string
//     screenshot: {
//         childImageSharp: {
//             fluid: FluidObject
//         }
//     }
//     screenshotMobile: {
//         childImageSharp: {
//             fluid: FluidObject
//         }
//     }
// }

describe('ProjectImgs', () => {
    const Element = (
        <ProjectImgs screenshots={[]} gifs={{ gif: '', gifMobile: '' }} />
    )

    afterEach(cleanup)

    it('renders without crashing', () => {
        const div = document.createElement('div')
        ReactDOM.render(Element, div)
    })

    /* it('renders correctly', () => {
		const { getByTestId } = render()
	}) */

    it('matches snapshot', () => {
        const run = true

        expect(run).toBeTruthy()

        if (run) {
            const tree = renderer.create(Element).toJSON()
            expect(tree).toMatchSnapshot()
        }
    })
})
