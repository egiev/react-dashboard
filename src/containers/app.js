import React from 'react';
import { Switch, Route } from 'react-router-dom';

import App from '../pages/app';
import Dashboard from '../pages/dashboard-page';
import Users from '../pages/users-page';
import Settings from '../pages/settings-page';

const AppContainer = () => {
	return(
		<App>
			<Switch>
				<Route exact path='/' component={Dashboard} />
				<Route  path="/dashboard" component={Dashboard} />
				<Route  path="/users" component={Users} />
				<Route  path="/settings" component={Settings} />
			</Switch>
		</App>
	)
}

export default AppContainer