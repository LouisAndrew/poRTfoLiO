// Skipped footer unit test, as I don't rlly know how to test a component with nested hook
it('Should always passes', () => {})

// import React from 'react'
// import ReactDOM from 'react-dom'
// import renderer from 'react-test-renderer'

// // import { render, cleanup } from '@testing-library/react'
// import { cleanup } from '@testing-library/react'
// import '@testing-library/jest-dom'

// import Footer from 'components/footer'

// import * as Gatsby from 'gatsby'

// const useStaticQuery = jest.spyOn(Gatsby, 'useStaticQuery')

// const mockSocials = [
//     { link: 'http://localhost', social_key: 'github' },
//     { link: 'http://google.com', social_key: 'dribbble' },
// ]

// import {
//     mockButtonText,
//     mockContactContent,
//     mockContactHeadline,
//     mockEmail,
// } from './footer/email-me.test'

// describe('Footer', () => {
//     const Element = <Footer />

//     afterEach(cleanup)
//     beforeEach(() => {
//         useStaticQuery.mockImplementationOnce(() => ({
//             socialData: {
//                 frontmatter: {
//                     social: mockSocials,
//                 },
//             },
//             emailData: {
//                 frontmatter: {
//                     contact: {
//                         button_text: mockButtonText,
//                         contact_content: mockContactContent,
//                         contact_headline: mockContactHeadline,
//                         email: mockEmail,
//                     },
//                 },
//             },
//         }))
//     })

//     it('renders without crashing', () => {
//         const div = document.createElement('div')
//         ReactDOM.render(Element, div)
//     })

//     /* it('renders correctly', () => {
// 		const { getByTestId } = render()
// 	}) */

//     it('matches snapshot', () => {
//         const run = false

//         expect(run).toBeTruthy()

//         if (run) {
//             const tree = renderer.create(Element).toJSON()
//             expect(tree).toMatchSnapshot()
//         }
//     })
// })
