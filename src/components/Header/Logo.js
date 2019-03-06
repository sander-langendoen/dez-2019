import React from 'react'
import logo from '../../img/logo-dietist-eline-zuiderwijk.jpg'
import { Link } from 'gatsby'


import styled from 'styled-components'


const logoMaxWidth = "460px"


const HeaderLogo = styled.div`
	max-width: ${props => props.maxWidth || "300px"}
	width: 100%
	grid-area: headerlogo;
`;


const Logo = class extends React.Component {
 
 	render() {
        return (

	        <HeaderLogo title="Logo" maxWidth={logoMaxWidth}>
	       		
	       		<Link to="/">
	       			<img src={logo} alt="logo eline zuiderwijk" />
                </Link>
		       	
	        </HeaderLogo>

		)
    }
}

export default Logo