import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'

import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom'

import Hero from 'templates/homepage/hero'
import withContext from 'helper/utils/with-context'
// import '/__mocks__/window.js'
// Reference on why these values are asserted -> __mocks__/gatsby.js
const mockHeroContent = 'Hello, World!'
// const mockHeroHeadline = 'I am headline'

describe('Hero', () => {
    const Element = withContext({
        children: <Hero />,
    })

    afterEach(cleanup)

    it('renders without crashing', () => {
        const div = document.createElement('div')
        ReactDOM.render(Element, div)

        expect(true).toBe(true)
    })

    it('Should render the headline and content correctly', () => {
        const { queryByTestId, getByTestId } = render(Element)

        const headline = queryByTestId('heading')
        const content = getByTestId('content')

        expect(headline).toBeInTheDocument()
        expect(content).toHaveTextContent(mockHeroContent)
    })

    it('matches snapshot', () => {
        const run = true

        if (run) {
            const tree = renderer.create(Element).toJSON()
            expect(tree).toMatchSnapshot()
        }
    })
})
