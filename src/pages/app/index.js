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
		(this.state.isToggled) ? this.setState({isToggled: false}) : this.setState({isToggled: true})
	}

	render(){
		const isToggled = (this.state.isToggled) ? 'toggle': '';
		const children = this.props.children;

		return(
			<div className={`app ${isToggled}`}>
				<Sidebar />
				<div className="content">
					<ContentNavbar onClick={this.toggleSidebar.bind(this)}/>
					{children}
				</div>
			</div>		
		)
	}
}

export default App