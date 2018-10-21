import React from 'react'
import PropTypes from 'prop-types'

class Income extends React.Component {
	static propTypes = {
		onChangeIncome: PropTypes.func.isRequired,
		xSalary: PropTypes.number.isRequired,
		ySalary: PropTypes.number.isRequired,
	}

	setIncome = ( event, field ) => {
		this.props.onChangeIncome( event.target.value, field )
	}

	render() {
		return (
			<form>
				<input
					onChange={ ( e ) => this.setIncome( e, 'xSalary' ) }
					defaultValue={
						this.props.xSalary
					}
					type="number"
					placeholder="..X net salary.."
				/>
				<input
					onChange={ ( e ) => this.setIncome( e, 'ySalary' ) }
					defaultValue={
						this.props.ySalary
					}
					type="number"
					placeholder="..Y net salary.."
				/>
			</form>
		)
	}
}

export default Income
