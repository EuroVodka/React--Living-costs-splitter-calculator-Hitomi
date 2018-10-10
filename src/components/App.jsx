import React from 'react'

import Income from './Income'
import Costs from './Costs'
import Output from './Output'

class App extends React.Component {
	state = {
		xSalary: 0,
		ySalary: 0,
		totalCost: 0,
	}

	onChangeAmount = ( value, stateField ) => {
		this.setState( {
			[stateField]: parseInt( value, 10 ) || 0,
		} )
	}

	render() {
		const { xSalary, ySalary, totalCost } = this.state

		const totalSalaries = xSalary + ySalary

		const percentageX = ( 100 * xSalary ) / totalSalaries
		const percentageY = ( 100 * ySalary ) / totalSalaries

		const amoutCostX = ( ( totalCost * percentageX ) / 100 ).toFixed( 2 )
		const amoutCostY = ( ( totalCost * percentageY ) / 100 ).toFixed( 2 )

		return (
			<section>
				<h2>Relative Expanses</h2>
				<Income
					xSalary={ this.state.xSalary }
					ySalary={ this.state.ySalary }
					onChangeIncome={ this.onChangeAmount }
				/>
				<hr />
				<Costs
					totalCost={ this.state.totalCost }
					onChangeCosts={ this.onChangeAmount }
				/>
				<Output amount={ amoutCostX } />
				<Output amount={ amoutCostY } />
			</section>
		)
	}
}

export default App

/*
X 2000
Z 1000

X 66.6%

X 799.2£
*/
