import React from 'react'


const Image = class extends React.Component {

 
 	render() {
        return (
        	<div>
        		<img src={this.props.src} alt={this.props.alt} />
        	</div>
		)
    }
}

export default Image