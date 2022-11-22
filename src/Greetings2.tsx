import React from 'react'

interface Props {
	name?: string
}

export const Greetings2: React.FC<Props> = ({ name }) => {
	return <h1>{name ? 'Welcome back ' + name + '!' : 'Welcome!'}</h1>
}
