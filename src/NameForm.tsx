import React from 'react'
import { useState } from 'react'

interface Props {}

export const NameForm: React.FC<Props> = ({}) => {
	const [success, setSuccess] = useState(false)
	const [error, setError] = useState(false)
	const [name, setName] = useState('')

	const handleNameChange = (e: any) => {
		setName(e.target.value)
	}

	const handleSubmit = (e: any) => {
		e.preventDefault()

		if (!name) {
			setSuccess(false)
			setError(true)
			return
		}

		setSuccess(true)
		setError(false)
	}

	return (
		<div className={'App'}>
			{success && (
				<h1 className={'Success'} data-testid='success-header'>
					Name Submitted!
				</h1>
			)}
			{error && (
				<h1 className={'Error'} data-testid='error-header'>
					Please enter a name.
				</h1>
			)}
			<form className={'Form'} onSubmit={handleSubmit}>
				<div>
					<label>Name:</label>
					<br />
					<input
						data-testid='name-input'
						type='text'
						value={name}
						onChange={handleNameChange}
					/>
				</div>
				<input data-testid='submit-button' type='submit' value='Submit' />
			</form>
		</div>
	)
}
