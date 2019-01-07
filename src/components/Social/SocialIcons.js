import React from 'react'
import fbicon from '../img/fb.jpg'


const SocialIcons = class extends React.Component {
 
 	render() {
        return (

	        <div className="SocialIcon" title="Social Icon">
	       		
	       		<img src={fbicon} alt="Social Icon" />

	        </div>

		)
    }
}

export default SocialIcons