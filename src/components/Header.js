import React from 'react'

import Navbar from '../components/Navbar'
import Logo from '../components/Logo'
import styled from 'styled-components'

const Header = class extends React.Component {

	render() {

		const Container = styled.container`
		  	max-width: 960px;
			margin: 0 auto;
			display: flex;
		`;

		return (

			<header>

				<Container>
			
					<Logo />
					<Navbar/>
			
				</Container>
			
			</header>
		)
	}

}

export default Header