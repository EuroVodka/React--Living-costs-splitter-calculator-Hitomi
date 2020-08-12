import React from 'react'
import { Heading, Pane, minorScale } from 'evergreen-ui'

import Income from './Income'
import Costs from './Costs'
import Output from './Output'
import ErrorCatcher from './../utilities/ErrorCatcher'

class App extends React.Component {
	state = {
		a_Income: 0,
		b_Income: 0,
		totalCost: 0,
	}

	onChangeAmount = ( value, stateField ) => {
		this.setState( {
			[stateField]: parseInt( value, 10 ) || 0,
		} )
	}

	render() {
		const { a_Income, b_Income, totalCost } = this.state

		const totalSalaries = a_Income + b_Income

		const percentageX = ( 100 * a_Income ) / totalSalaries
		const percentageY = ( 100 * b_Income ) / totalSalaries

		const amoutCostX = ( ( totalCost * percentageX ) / 100 ).toFixed( 2 )
		const amoutCostY = ( ( totalCost * percentageY ) / 100 ).toFixed( 2 )

		return (
			<ErrorCatcher>
				<div className="main">
					<Pane padding={ minorScale( 2 ) }>
						<Heading size={ 800 } marginTop={ 16 } className="title" >
							Hitomi
						</Heading>
					</Pane>
					<form>
						<Pane elevation={ 2 } padding={ minorScale( 4 ) } border="default" background="tint1">
							<Income
								a_Income={ this.state.a_Income }
								b_Income={ this.state.b_Income }
								onChangeIncome={ this.onChangeAmount }
							/>
						</Pane>
						<Pane elevation={ 2 } padding={ minorScale( 4 ) } border="default" background="tint1">
							<Costs
								totalCost={ this.state.totalCost }
								onChangeCosts={ this.onChangeAmount }
							/>
						</Pane>
					</form>
					<Pane elevation={ 1 } padding={ minorScale( 1 ) } margin={ minorScale( 3 ) } border="default" background="tint1" className="separate-context">
						<Output amount={ +amoutCostX } />
						<Output amount={ +amoutCostY } />
					</Pane>
				</div>

			</ErrorCatcher>
		)
	}
}

export default App

/*
X 2000
Z 1000

Costs: 1000

X 66.6% = 799.2
*/
