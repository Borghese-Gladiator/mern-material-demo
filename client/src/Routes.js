import React from 'react';
import { Route, Switch } from 'react-router-dom';
// components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import NotFound from './components/NotFound';
import Home from './components/Home';
import PrivateRoutes from './components/auth/PrivateRoutes';
import Signin from './components/auth/Signin';
import Profile from './components/user/Profile';
import Signup from './components/user/Signup';
import ForgotPassword from './components/user/ForgotPassword';

function Routes() {
	return (
		<div>
			<Navbar />
			<div style={{minHeight: "90vh"}}>
				<Switch>
					<Route exact path="/" component={Home} />
					<PrivateRoutes path="/user/edit/:userId" />
					<Route path="/user/:userId" component={Profile} />
					<Route path="/signup" component={Signup} />
					<Route path="/signin" component={Signin} />
					<Route path="/password_reset" component={ForgotPassword} />
					<Route component={NotFound} />
				</Switch>
			</div>
 			<Footer />
		</div>
	);
}

export default Routes;