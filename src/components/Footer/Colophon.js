import React from 'react'


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

	        <div className="colophon">
				<span id="colophonDate">&#169; {this.state.date} Eline Zuiderwijk &#124; </span>
				<span>door Sander Langendoen</span> 
			</div>

		)
    }
}

export default Colophon