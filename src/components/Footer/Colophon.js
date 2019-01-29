import React from 'react'
import styled from 'styled-components'

const ColophonWrapper = styled.div`
    text-align: center;
    font-size: 0.8rem;
`;

const Colophon = class extends React.Component {
 
	constructor() {
        super();

        var today = new Date(),
            date = today.getFullYear();

        this.state = {
            date: date
        };
    }

 	render() {
        return (

	        <ColophonWrapper>
				<span id="colophonDate">&#169; {this.state.date} Eline Zuiderwijk &#124; </span>
				<span>door Sander Langendoen</span> 
			</ColophonWrapper>

		)
    }
}

export default Colophon