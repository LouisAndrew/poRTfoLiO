import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'

import { render, cleanup } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'

import ThemeSwitcher from 'components/header/theme-switcher'
import withContext from 'helper/utils/with-context'

import { defaultValues } from 'context'

describe('ThemeSwitcher', () => {
    const mockSetTheme = jest.fn(() => {})
    const Element = withContext({
        children: <ThemeSwitcher />,
        contextValue: {
            ...defaultValues,
            lightTheme: true,
            setTheme: mockSetTheme,
        },
    })

    const ElementDark = withContext({
        children: <ThemeSwitcher />,
        contextValue: {
            ...defaultValues,
            lightTheme: false,
            setTheme: mockSetTheme,
        },
    })

    afterEach(cleanup)

    it('renders without crashing', () => {
        const div = document.createElement('div')
        ReactDOM.render(Element, div)
    })

    it('Should call  the setTheme function when element is clicked', () => {
        const { getByRole } = render(Element) // light element.

        const btn = getByRole('button')

        userEvent.click(btn)

        expect(mockSetTheme).toBeCalled()
        expect(mockSetTheme).toBeCalledWith(false) // dark them should be applied, bcs current context is light
    })

    it('Should render the appropriate svg element when light theme is applied', () => {
        const { queryByTestId } = render(Element)

        const btnDark = queryByTestId('button-dark')
        const btnLight = queryByTestId('button-light')

        expect(btnDark).toBeInTheDocument()
        expect(btnLight).not.toBeInTheDocument()
    })

    it('Should render the appropriate svg element when dark theme is applied', () => {
        const { queryByTestId } = render(ElementDark)

        const btnDark = queryByTestId('button-dark')
        const btnLight = queryByTestId('button-light')

        expect(btnDark).not.toBeInTheDocument()
        expect(btnLight).toBeInTheDocument()
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
