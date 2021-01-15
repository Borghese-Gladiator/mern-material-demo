import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import { Link, NavLink } from 'react-router-dom';

import Home from '@material-ui/icons/Home';
import MenuIcon from '@material-ui/icons/Menu';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import LockOpenIcon from '@material-ui/icons/LockOpen';

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
	},
	link: {
		color: "white"
	},
	mobileLink: {
		textDecoration: 'none',
		color: "black"
	},
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

function Navbar() {
	const classes = useStyles();
	const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
	const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

	// mobile menu
	const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
	};
	const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

	const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
			<Link to="/signin" className={classes.mobileLink}>
				<MenuItem>
					<IconButton
						aria-label="account of current user"
						aria-controls="primary-search-account-menu"
						aria-haspopup="true"
						color="inherit"
					>
						<ExitToAppIcon />
					</IconButton>
					<p>Signin</p>
				</MenuItem>
			</Link>
			<Link to="/signup" className={classes.mobileLink}>
				<MenuItem>
					<IconButton
						aria-label="account of current user"
						aria-controls="primary-search-account-menu"
						aria-haspopup="true"
						color="inherit"
					>
						<LockOpenIcon />
					</IconButton>
					<p>Register</p>
				</MenuItem>
			</Link>
    </Menu>
	);

	return (
    <div className={classes.grow}>
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
          <div className={classes.sectionDesktop}>
						<NavLink
							to="/signup"
							activeStyle={{
								fontWeight: "bold",
								color: '#F44336'
							}}
							className={classes.link}
						>
							<Button color="inherit" variant="outlined">Sign up</Button>
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
					</div>
          <div className={classes.sectionMobile}>
						<IconButton
							aria-label="show more"
							aria-controls={mobileMenuId}
							aria-haspopup="true"
							onClick={handleMobileMenuOpen}
							color="inherit"
						>
							<MenuIcon />
						</IconButton>
					</div>
				</Toolbar>
			</AppBar>
			{renderMobileMenu}
		</div>
	);
}

export default Navbar;