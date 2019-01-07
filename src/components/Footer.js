import React from 'react'

import FooterCol from '../components/Footer/Col'
import Colophon from '../components/Footer/Colophon'
import styled from 'styled-components'

const Footer = class extends React.Component {

	render() {

		return (

			<footer>

				<div className="container">
			
					<FooterCol />
					<FooterCol />
					<Colophon />
			
				</div>
			
			</footer>
		)
	}

}

export default Footer