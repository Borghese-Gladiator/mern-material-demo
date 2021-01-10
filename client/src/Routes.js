import React from 'react';
import { Route, Switch } from 'react-router-dom';

// layout
import LoginLayout from "./components/_layouts/LoginLayout";
import AuthLayout from "./components/_layouts/AuthLayout";
// components
import Home from './components/Home';
import PrivateRoutes from './components/auth/PrivateRoutes';
import Signin from './components/auth/Signin';
import Profile from './components/user/Profile';
import Signup from './components/user/Signup';

function Routes() {
	const Layout = false ? AuthLayout : LoginLayout;
	
	return (
		<div>
			<Layout>
				<Switch>
					<Route exact path="/" component={Home} />
					<PrivateRoutes path="/user/edit/:userId" />
					<Route path="/user/:userId" component={Profile} />
					<Route path="/signup" component={Signup} />
					<Route path="/signin" component={Signin} />
				</Switch>
			</Layout>
		</div>
	);
}

export default Routes;