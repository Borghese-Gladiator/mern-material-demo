import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
// layout
import NoLayout from "./components/_layouts/NoLayout";
import GuestLayout from "./components/_layouts/GuestLayout";
import AuthLayout from "./components/_layouts/AuthLayout/AuthLayout";
// auth utils
import auth from './utils/auth-helper';
// components
import Home from './components/Home';
import PrivateRoutes from './components/auth/PrivateRoutes';
import Signin from './components/auth/Signin';
import Profile from './components/user/Profile';
import Signup from './components/user/Signup';
import ForgotPassword from './components/user/ForgotPassword';

function Routes() {
/*
	const Layout = function() {
		const isLoggedIn = auth.isAuthenticated();
		if (isLoggedIn) {
			console.log("AUTH LAYOUT")
			return AuthLayout;
		} else {
			const { pathname } = useLocation();
			if (pathname === "/signin") {
				console.log("NO LAYOUT")
				return NoLayout;
			} else {
				console.log("GUEST LAYOUT")
				return GuestLayout;
			}	
		}
	}()
*/
	const Layout = function() {
		const isLoggedIn = auth.isAuthenticated();
		if (isLoggedIn) {
			console.log("AUTH LAYOUT")
			return AuthLayout;
		} else {
			console.log("GUEST LAYOUT")
			return GuestLayout;
		}
	}()

	return (
		<div>
			<Layout>
				<Switch>
					<Route exact path="/" component={Home} />
					<PrivateRoutes path="/user/edit/:userId" />
					<Route path="/user/:userId" component={Profile} />
					<Route path="/signup" component={Signup} />
					<Route path="/signin" component={Signin} />
					<Route path="/password_reset" component={ForgotPassword} />
				</Switch>
			</Layout>
		</div>
	);
}

export default Routes;