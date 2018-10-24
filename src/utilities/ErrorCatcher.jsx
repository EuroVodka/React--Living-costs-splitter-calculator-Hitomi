/* eslint  no-console: off */
import React from 'react'
import { PropTypes } from 'prop-types'

export default class ErrorCatcher extends React.Component {
	constructor( props ) {
		super( props )
		this.state = {
			errorFound: false,
		}
	}

	static propTypes = {
		children: PropTypes.element,
	}

	componentDidCatch( error, info ) {
		this.setState( ( state ) => ( {
			errorFound: !state.errorFound,
		} ) )
		console.log( 'error: ', error )
		console.log( 'info: ', info )
	}

	render() {
		return this.state.errorFound ? (
			<p>
				Error caught!
				{ }
				The calculator becomes useless with just a single error.
			</p>
		) : (
			this.props.children
		)
	}
}
