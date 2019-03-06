import React from 'react'

import Logo from '../components/Header/Logo'
import Navbar from '../components/Header/Navbar'

import styled from 'styled-components'


const HeaderWrap = styled.header`
	grid-area: header;

	a {
		text-decoration: none;
	}
`;

const Header = class extends React.Component {

	render() {

		return (

			<HeaderWrap>

				<Logo />
				<Navbar />

			</HeaderWrap>
		)
	}

}

export default Header