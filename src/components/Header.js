import React from 'react'

import Logo from '../components/Header/Logo'

import styled from 'styled-components'


const HeaderWrap = styled.header`
    display: grid;
    grid-template-columns: repeat(12, 1fr);
`;

const Header = class extends React.Component {

	render() {

		return (

			<HeaderWrap>

				<Logo />

			</HeaderWrap>
		)
	}

}

export default Header