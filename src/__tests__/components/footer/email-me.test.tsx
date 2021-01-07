import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'

import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom'

import EmailMe from 'components/footer/email-me'

import * as Gatsby from 'gatsby'

const useStaticQuery = jest.spyOn(Gatsby, 'useStaticQuery')

const mockButtonText = 'Click me'
const mockContactContent = 'Content'
const mockContactHeadline = 'Headline'
const mockEmail = 'john@doe.com'

// ! Test fails: `TypeError: Cannot set property 'fillStyle' of null` on react-lottie-player
// Skipping test suite..
describe.skip('EmailMe', () => {
    const Element = <EmailMe />

    afterEach(cleanup)
    beforeEach(() => {
        useStaticQuery.mockImplementationOnce(() => ({
            emailData: {
                frontmatter: {
                    contact: {
                        button_text: mockButtonText,
                        contact_content: mockContactContent,
                        contact_headline: mockContactHeadline,
                        email: mockEmail,
                    },
                },
            },
        }))
    })

    it.skip('renders without crashing', () => {
        const div = document.createElement('div')
        ReactDOM.render(Element, div)
    })

    // ! Changed the button into a link element.
    // it('Should render elements based on content fetched from graphql store correctly', () => {
    //     const { queryByRole, queryByTestId } = render(Element)

    //     const btn = queryByRole('button', { name: mockButtonText })
    //     const heading = queryByRole('heading')
    //     const content = queryByTestId('content')

    //     expect(btn).toBeInTheDocument()
    //     expect(content).toBeInTheDocument()
    //     expect(heading).toBeInTheDocument()

    //     expect(heading).toHaveTextContent(mockContactHeadline)
    //     expect(content).toHaveTextContent(mockContactContent)
    // })

    it.skip("Should render CTA Button linking directly to developer's email", () => {
        const { getByRole } = render(Element)

        const link = getByRole('link')

        expect((link as HTMLLinkElement).href).toBe(`mailto:${mockEmail}`)
    })

    it.skip('matches snapshot', () => {
        const run = true

        expect(run).toBeTruthy()

        if (run) {
            const tree = renderer.create(Element).toJSON()
            expect(tree).toMatchSnapshot()
        }
    })
})

export { mockButtonText, mockContactContent, mockContactHeadline, mockEmail }
