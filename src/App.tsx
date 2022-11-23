import React from 'react'
import logo from './logo.svg'
import './App.css'
// import { NameForm } from './NameForm'
import { ContactUsForm } from './ContactUsForm'

function App() {
	return (
		<div className='App'>
			{/* <form>
				<label htmlFor='fname'>First name:</label>
				<br />
				<input type='text' name='fname' data-testid='first-name-input' />
				<br />
				<label htmlFor='lname'>Last name:</label>
				<br />
				<input type='text' name='lname' data-testid='last-name-input' />
				<br />
				<input type='submit' value='Submit' />
			</form> */}
			{/* <h1>Form to test</h1>
			<NameForm></NameForm> */}
			<h1>Contact Us Form</h1>
			<ContactUsForm></ContactUsForm>
		</div>
	)
}

export default App
