import React from 'react';
import FontAwesome from 'react-fontawesome';

import './index.css';

const ContentNavbar = () => {
	return(
		<div className="content-navbar">
			<FontAwesome name="burger" className="fa-bars"/>
			<div className="pull-right">
				<img src="http://placehold.it/40x40"
					className="img-responsive img-circle" alt=""/>
			</div>
		</div>
	)
}

export default ContentNavbar