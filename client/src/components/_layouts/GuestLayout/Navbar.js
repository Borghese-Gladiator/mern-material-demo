import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Home from '@material-ui/icons/Home';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { Link, NavLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
	},
	link: {
		color: "white"
	},
}));

function Menu() {
	const classes = useStyles();
	return (
		<AppBar position="static">
			<Toolbar>
				<Typography type="title" color="inherit">
					MERN App
				</Typography>
				<div className={classes.grow} />
				<NavLink
					to="/"
					isActive={(match, location) => {
						if(!location) return false;
						const { pathname } = location;
						// check for HOME exact match
						return pathname === "/";
					}}
					activeStyle={{
						fontWeight: "bold",
						color: '#F44336'
					}}
					className={classes.link}
				>
					<IconButton aria-label="Home" color="inherit">
						<Home />
					</IconButton>
				</NavLink>
				<span>
					<NavLink
						to="/signup"
						activeStyle={{
							fontWeight: "bold",
							color: '#F44336'
						}}
						className={classes.link}
					>
						<Button color="inherit">Sign up</Button>
					</NavLink>
					<NavLink
						to="/signin"
						activeStyle={{
							fontWeight: "bold",
							color: '#F44336'
						}}
						className={classes.link}
					>
						<Button color="inherit">Sign in</Button>
					</NavLink>
				</span>
			</Toolbar>
		</AppBar>
	);
}

export default Menu;