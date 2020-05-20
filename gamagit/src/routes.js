import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route
} from 'react-router-dom';

import Home from './pages/Home';
import Repositories from './pages/Repositories';

export default function Routes () {
	return (
		<Router>
			<Switch>
				<Route path='/' exact component={Home}/>
				<Route path='/repositories' component={Repositories}/>
			</Switch>
		</Router>
	);
}