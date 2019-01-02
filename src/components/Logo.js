import React from 'react'
import logo from '../img/logo-dietist-eline-zuiderwijk.jpg'


const Logo = class extends React.Component {
 
 	render() {
        return (

	        <div className="HeaderLogo" title="Logo">
	       		
	       		<img src={logo} alt="Logo Dietist Eline Zuiderwijk" />

	        </div>

		)
    }
}

export default Logo