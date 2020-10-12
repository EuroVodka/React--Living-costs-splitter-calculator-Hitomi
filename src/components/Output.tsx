import React from 'react'
import PropTypes from 'prop-types'

const Output = (props) => {
	const amount = props.amount && !isNaN(props.amount) ? props.amount : 0
	return (
		<span>
			<output>{amount}</output>
		</span>
	)
}

Output.propTypes = {
	amount: PropTypes.number.isRequired,
}

export default Output
