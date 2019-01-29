import React from 'react'

import FooterCol from '../components/Footer/Col'
import Colophon from '../components/Footer/Colophon'
import Image from '../components/Global/Image'
// import { Link } from 'gatsby'
import locatiedordt from '../img/dietist-locatie-dordrecht.jpg'

import styled from 'styled-components'


const FooterWrapper = styled.footer`
	padding: 2em 0;
	background: #cce5cc;
`;

const FooterInner = styled.section`
	max-width: 1024px;
	width: 100%;
	margin: 0 auto;
	display: grid;
	grid-template-areas: 
		"column1"
		"column2"
		"column3"
		"column4"
	;

	@media (min-width: 768px) and (max-width: 1023px) {
		grid-template-columns: 1fr 1fr;
	    grid-template-areas:
	    	"column1 column2"
	    	"column3 column4"
	   	;
	}

	@media (min-width: 1024px) {
		grid-template-columns: 1fr 1fr 1fr 1fr;
	    grid-template-areas:
	    	"column1 column2 column3 column4";
	}

`;

const Footer = class extends React.Component {

	render() {

		return (

			<div>

				<FooterWrapper>

					<FooterInner>

						<FooterCol title="Snelmenu" content="" />
						<FooterCol title="Mijn algemene beoordeling" content="" />
						
						<Image src={locatiedordt} alt="dietistenpraktijk locatie dordrecht" />	
						<Image src={locatiedordt} alt="dietistenpraktijk locatie leidschendam voorburg" />	
																		 	
						<FooterCol title="Mijn contactgegevens" content="" />

					</FooterInner>
			
				</FooterWrapper>

				<Colophon />
				
			</div>
		)
	}

}

export default Footer