import React from 'react'
import SidebarWidget from '../components/Sidebar/Widget'

const Aside = class extends React.Component {

	render() {

		return (

			<aside className="column is-4">
			
				<SidebarWidget />
				<SidebarWidget />
				
			</aside>
		)
	}

}

export default Aside