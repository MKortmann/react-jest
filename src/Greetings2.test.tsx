import React from 'react'
import { render } from '@testing-library/react'
import { Greetings2 } from './Greetings2'

describe('Greetings2', () => {
	it('will match snapshot', () => {
		const component: any = render(<Greetings2 name={'hello'} />)
		expect(component).toMatchSnapshot()
	})
	it('will match snapshot', () => {
		const component: any = render(<Greetings2 />)
		expect(component).toMatchSnapshot()
	})
})
