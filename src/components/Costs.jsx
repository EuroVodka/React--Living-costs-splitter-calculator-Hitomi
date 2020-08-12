import React from 'react'
import PropTypes from 'prop-types'
import { TextInput } from 'evergreen-ui'

class Costs extends React.Component {
	setCosts = ( event ) => {
		const value = event.target.value
		!isNaN( value ) && this.props.onChangeCosts( event.target.value, 'totalCost' )
	}

	render() {
		return (
			<div className="input-field">
				<label htmlFor="costs">Total costs</label>
				<TextInput
					onChange={ this.setCosts }
					name="costs"
					value={ this.props.totalCost }
					placeholder="..Total cost.."
					height={ 48 }
				/>
			</div>
		)
	}

	static propTypes = {
		onChangeCosts: PropTypes.func.isRequired,
		totalCost: PropTypes.number.isRequired,
	}
}

export default Costs
