import React from 'react'
import { render, screen } from '@testing-library/react'
import { Greetings } from './Greetings'

describe('Greetings', () => {
	it('will match snapshot', () => {
		const component: any = render(<Greetings />)
		expect(component).toMatchSnapshot()
	})
})
