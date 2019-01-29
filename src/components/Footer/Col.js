import React from 'react'

const FooterCol = class extends React.Component {
 
 	render() {
        return (

        	<div className="footer-col">

        		<h3 className="title">{this.props.title}</h3>
        		<div className="content">{this.props.content}</div>

        	</div>

		)
    }
}

export default FooterCol