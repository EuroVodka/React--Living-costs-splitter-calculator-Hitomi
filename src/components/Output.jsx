import React from 'react'
import PropTypes  from 'prop-types'

Output.propTypes = {
	amount: PropTypes.number.isRequired,
}

const Output = ( props ) => {
	const amount = props.amount && !isNaN( props.amount ) ? props.amount : 0
	return (
		<span>
			<output>{ amount }</output>
		</span>
	)
}

export default Output
