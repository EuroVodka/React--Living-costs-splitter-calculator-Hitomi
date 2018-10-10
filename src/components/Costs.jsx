import React from 'react'

class Costs extends React.Component {
	setCosts = ( event ) => {
		// eslint-disable-next-line react/prop-types
		this.props.onChangeCosts( event.target.value, 'totalCost' )
	}

	render() {
		return (
			<form>
				<input
					onChange={ this.setCosts }
					defaultValue={
						// eslint-disable-next-line react/prop-types
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
