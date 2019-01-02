import React from 'react'

import Navbar from '../components/Navbar'
import Logo from '../components/Logo'

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