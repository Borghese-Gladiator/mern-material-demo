import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Home from '@material-ui/icons/Home';
import Button from '@material-ui/core/Button';
import { Link, withRouter } from 'react-router-dom';

const isActive = (history, path) => {
	if (history.location.pathname === path) return { color: '#F44336' };
	else return { color: '#ffffff' };
};
const Menu = withRouter(({ history }) => (
	<AppBar position="static">
		<Toolbar>
			<Typography type="title" color="inherit">
				MERN App
			</Typography>
			<Link to="/">
				<IconButton aria-label="Home" style={isActive(history, '/')}>
					<Home />
				</IconButton>
			</Link>
			<span>
				<Link to="/signup">
					<Button style={isActive(history, '/signup')}>Sign up</Button>
				</Link>
				<Link to="/signin">
					<Button style={isActive(history, '/signin')}>Sign In</Button>
				</Link>
			</span>
		</Toolbar>
	</AppBar>
));

export default Menu;