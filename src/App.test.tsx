import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'

// test('renders learn react link', () => {
// 	render(<App />)
// 	const linkElement = screen.getByText(/learn react/i)
// 	expect(linkElement).toBeInTheDocument()
// 	screen.debug()
// })

describe('App', () => {
	it('will have all expected fields', () => {
		const component = render(<App />)

		//by passing through regex a string: /name/. This will retrieve all
		//of the labels which have the text that contains name.
		//therefore, it will return both the first name and last name labels.
		const labels = component.getAllByText(/name/)
		//it should be two lables with the string name
		expect(labels.length).toEqual(2)

		const firstNameInput = component.getByTestId('first-name-input')
		const lastNameInput = component.getByTestId('last-name-input')
		//expect the input field will be in the document
		expect(firstNameInput).toBeInTheDocument()
		expect(lastNameInput).toBeInTheDocument()

		const submitButton = component.getByText('Submit')
		expect(submitButton).toBeInTheDocument()
	})
})
