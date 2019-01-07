import React from 'react'
import logo from '../../img/logo-dietist-eline-zuiderwijk.jpg'


const Logo = class extends React.Component {
 
 	render() {
        return (

	        <div className="HeaderLogo" title="Logo">
	       		
	       		<a href="/" title="Link naar homepage">
		       		<img src={logo} alt="Logo Dietist Eline Zuiderwijk" />
		       	</a>

	        </div>

		)
    }
}

export default Logo