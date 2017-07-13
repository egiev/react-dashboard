import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';

import './index.css';

const sidebarItem = [
	{
		to: '/dashboard',
		title: 'Home',
		classname: 'fa fa-home'
	},
	{
		to: '/statistics',
		title: 'Statistics',
		classname: 'fa fa-line-chart'
	},
	{
		to: '/workflow',
		title: 'Workflow',
		classname: 'fa fa-bell'
	},
	{
		to: '/calendar',
		title: 'Calendar',
		classname: 'fa fa-calendar'
	},
	{
		to: '/users',
		title: 'Users',
		classname: 'fa fa-user'
	},
	{
		to: '/extra',
		title: 'Extra',
		classname: 'fa fa-signal'
	},
	{
		to: '/settings',
		title: 'Settings',
		classname: 'fa fa-cog'
	}
]

class Sidebar extends Component {
	constructor(){
		super();
	}

	createItem(){
		return sidebarItem.map((i) => {
			return(
				<li key={i.title}>
					<NavLink to={i.to} activeClassName="active">
						<FontAwesome name="test" className={i.classname} />
						{i.title}
					</NavLink>
				</li>
			)
		})
	}

	render(){
		return(
			<div className="sidebar">
				<div className="logo">
					<p>Company Logo</p>
				</div>
				<ul>
					{this.createItem()}
				</ul>
			</div>
		)
	}
}

export default Sidebar