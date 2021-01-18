import React, { Component } from 'react';
// Routing
import { Link } from 'react-router-dom';
// Material UI Styling
import { withStyles } from '@material-ui/core/styles';
// Material UI components
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogContent from '@material-ui/core/DialogContent';
import Dialog from '@material-ui/core/Dialog';
import MaterialLink from '@material-ui/core/Link';
// Material UI Lab component
import Alert from '@material-ui/lab/Alert';
// utils
import { registerUser } from '../../utils/api-user.js';

const styles = theme => ({
  root: {
    marginTop: theme.spacing(2),
  },
	submit: {
		margin: 'auto',
    marginBottom: theme.spacing(2),
    width: '100%',
    padding: '15px'
  },
  containerCenter: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  }
});

class Signup extends Component {
	state = {
		username: '',
		password: '',
		email: '',
		open: false,
		error: ''
	};

	handleChange = name => event => {
		this.setState({ [name]: event.target.value });
	};

	clickSubmit = () => {
		const user = {
			name: this.state.username || undefined,
			email: this.state.email || undefined,
			password: this.state.password || undefined
		};
		registerUser(user).then(data => {
			if (data.error) {
				this.setState({ error: data.error });
			} else {
				this.setState({ error: '', open: true });
			}
		});
	};

	render() {
		const { classes } = this.props;
		return (
			<div>
        <Container>
          <div className={classes.root}>
            <div className={classes.containerCenter}>
              <Typography variant="subtitle1">Join GitHub</Typography>
              <Typography variant="h2">Create your account</Typography>
            </div>
            <Container maxWidth="sm">
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="username"
                label={"Username"}
                name="username"
                autoComplete="username"
                autoFocus
                value={this.state.username}
                onChange={this.handleChange('username')}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label={"Email address"}
                name="email"
                autoComplete="email"
                autoFocus
                value={this.state.email}
                onChange={this.handleChange('email')}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label={"Password"}
                type="password"
                id="password"
                autoComplete="current-password"
                value={this.state.password}
                onChange={this.handleChange('password')}
              />
              <Typography variant="caption">Make sure it's at least 15 characters OR at least 8 characters including a number and a lowercase letter. <MaterialLink href="https://docs.github.com/en/github/authenticating-to-github/creating-a-strong-password" target="_blank" rel="noopener noreferrer">Learn more.</MaterialLink></Typography>
              <br />{' '}
              {this.state.error && (
                <Alert className={classes.marginTop} severity="error">{this.state.error}</Alert>
              )}
              <br />
              <br />
              <Button
                color="primary"
                variant="contained"
                onClick={this.clickSubmit}
                className={classes.submit}
              >
                Create account
              </Button>
            </Container>
          </div>
        </Container>
				<Dialog open={this.state.open} disableBackdropClick={true}>
					<DialogTitle>New Account</DialogTitle>
					<DialogContent>
						<DialogContentText>
							New account successfully created.
						</DialogContentText>
					</DialogContent>
					<DialogActions>
						<Link to="/signin">
							<Button color="primary" autoFocus="autoFocus" variant="contained">
								Sign In
							</Button>
						</Link>
					</DialogActions>
				</Dialog>
			</div>
		);
	}
}

export default withStyles(styles)(Signup);
