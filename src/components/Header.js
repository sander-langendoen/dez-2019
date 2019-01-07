import React from 'react'

import Navbar from '../components/Header/Navbar'
import Logo from '../components/Header/Logo'
import styled from 'styled-components'

const Header = class extends React.Component {

	render() {

		return (

			<header>

				<div className="container">
			
					<Logo />
					<Navbar/>
			
				</div>
			
			</header>
		)
	}

}

export default Header