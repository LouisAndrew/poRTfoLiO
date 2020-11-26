import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'

import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom'

import Socials from 'components/footer/socials'

import * as Gatsby from 'gatsby'

const useStaticQuery = jest.spyOn(Gatsby, 'useStaticQuery')

const mockSocials = [
    { link: 'http://localhost', social_key: 'github' },
    { link: 'http://google.com', social_key: 'dribbble' },
]

describe('Socials', () => {
    const Element = <Socials />

    afterEach(cleanup)
    beforeEach(() => {
        useStaticQuery.mockImplementationOnce(() => ({
            socialData: {
                frontmatter: {
                    social: mockSocials,
                },
            },
        }))
    })

    it('renders without crashing', () => {
        const div = document.createElement('div')
        ReactDOM.render(Element, div)
    })

    it('it should render the fetched social links correctly', () => {
        const { queryByTestId } = render(Element)

        mockSocials.forEach(social => {
            const el = queryByTestId(social.social_key)

            expect(el).toBeInTheDocument()
            expect((el as HTMLLinkElement).href).toBe(social.link + '/')
        })
    })

    it('Should not render other social key(s) if not provided from graphql store, even though it is in the socialKeys type', () => {
        const { queryByTestId } = render(Element)

        const el = queryByTestId('linkedin')
        expect(el).not.toBeInTheDocument()
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
