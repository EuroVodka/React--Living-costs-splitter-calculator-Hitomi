import React from 'react'
import PropTypes from 'prop-types'

class Costs extends React.Component {
	static propTypes = {
		onChangeCosts: PropTypes.func.isRequired,
		totalCost: PropTypes.number.isRequired,
	}

	setCosts = ( event ) => {
		this.props.onChangeCosts( event.target.value, 'totalCost' )
	}

	render() {
		return (
			<form>
				<input
					onChange={ this.setCosts }
					defaultValue={
						this.props.totalCost
					}
					type="number"
					placeholder="..Total cost.."
				/>
			</form>
		)
	}
}

export default Costs
