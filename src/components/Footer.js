import React from 'react'

import FooterCol from '../components/Footer/Col'
import Colophon from '../components/Footer/Colophon'

import styled from 'styled-components'


const FooterWrapper = styled.div`
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

			<footer>

				<FooterWrapper>

					<FooterInner>

						<FooterCol title="Snelmenu" content="" />
						<FooterCol title="Mijn algemene beoordeling" content="" />
																								 	
						<FooterCol title="Mijn contactgegevens" content="" />

					</FooterInner>
			
				</FooterWrapper>

				<Colophon />

			</footer>
				
		)
	}

}

export default Footer