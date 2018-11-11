/* eslint react/jsx-filename-extension: 0 */
import React from 'react'
import { render } from 'react-dom'

import './styles/style.css'
import ErrorCatcher from './utilities/ErrorCatcher'
import App from './components/App'

const app = (
	<ErrorCatcher>
		<App />
	</ErrorCatcher>
)

render( app, document.getElementById( 'root' ) )
