import React, { Component } from 'react';

import Sidebar from '../../components/sidebar';
import ContentNavbar from '../../components/content-navbar';

import './index.css';

class App extends Component {
	constructor(props){
		super(props);
		this.state = {
			isToggled: false
		}
	}

	toggleSidebar(){
		if(this.state.isToggled) {
			this.setState({isToggled: false});
		} else {
			this.setState({isToggled: true});
		}
	}

	render(){
		const isToggled = (this.state.isToggled) ? 'toggle': '';
		const children = this.props.children;

		console.log(isToggled);
		return(
			<div className={`app ${isToggled}`}>
				<Sidebar />
				<div className="content">
					<ContentNavbar />
					{children}
				</div>
			</div>		
		)
	}
}

export default App