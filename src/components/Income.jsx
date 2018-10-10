import React from 'react'

class Income extends React.Component {
	setIncome = ( event, field ) => {
		// eslint-disable-next-line react/prop-types
		this.props.onChangeIncome( event.target.value, field )
	}

	render() {
		return (
			<form>
				<input
					onChange={ ( e ) => this.setIncome( e, 'xSalary' ) }
					defaultValue={
						// eslint-disable-next-line react/prop-types
						this.props.xSalary
					}
					type="number"
					placeholder="..X net salary.."
				/>
				<input
					onChange={ ( e ) => this.setIncome( e, 'ySalary' ) }
					defaultValue={
						// eslint-disable-next-line react/prop-types
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
