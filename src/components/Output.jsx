import React from 'react'

const Output = ( props ) => {
	// eslint-disable-next-line react/prop-types
	const amount = props.amount && !isNaN( props.amount ) ? props.amount : 0
	return (
		<span>
			<output>{ amount }</output>
		</span>
	)
}

export default Output
