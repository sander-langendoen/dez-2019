import React from 'react'

import Navbar from '../components/Navbar'
import Logo from '../components/Logo'

const Header = class extends React.Component {

	render() {
		return (

			<header>
				<Logo />
				<Navbar/>
			</header>
		)
	}

}

export default Header