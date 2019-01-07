import React from 'react'


const Colophon = class extends React.Component {
 
 	render() {
        return (

	        <div className="colophon">
				<span>&#169; /*  echo date("Y"); Eline Zuiderwijk | */ </span>
				<a href="http://kleefaan.nl/" rel="WordPress designer en websitebouwer" title="WordPress websitebouwer">Kleefaan.nl</a> 
			</div>

		)
    }
}

export default Colophon