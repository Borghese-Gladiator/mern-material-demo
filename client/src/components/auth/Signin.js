import React, { Component } from 'react';
// Routing
import { Link, Redirect } from 'react-router-dom';
// Material UI Styling
import { withStyles } from '@material-ui/core/styles';
// Material UI components
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Container from '@material-ui/core/Container';
import MaterialLink from '@material-ui/core/Link';
// Material UI Lab component
import Alert from '@material-ui/lab/Alert';
// utils
import { signin } from '../../utils/api-auth.js';
import auth from '../../utils/auth-helper';

const styles = theme => ({
	card: {
		maxWidth: 600,
		margin: 'auto',
		textAlign: 'center',
		marginTop: theme.spacing(5),
		paddingBottom: theme.spacing(2)
	},
	error: {
		verticalAlign: 'middle'
	},
	title: {
		marginTop: theme.spacing(2),
		color: theme.palette.primary.dark
	},
	textField: {
		marginLeft: theme.spacing(1),
		marginRight: theme.spacing(1),
		width: 300
  },
  
  wrapper: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    paddingBottom: theme.spacing(2)
  },
  formContainer: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  marginTop: {
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
});

class Signin extends Component {
	state = {
		email: '',
		password: '',
		error: '',
		redirectToReferrer: false
	};

	clickSubmit = () => {
		const user = {
			email: this.state.email || undefined,
			password: this.state.password || undefined
		};

		signin(user).then(data => {
			if (data.error) {
				this.setState({ error: data.error });
			} else {
				auth.authenticate(data, () => {
					this.setState({ redirectToReferrer: true });
				});
			}
		});
	};

	handleChange = name => event => {
		this.setState({ [name]: event.target.value });
	};

	render() {
		const { classes } = this.props;
		const { from } = this.props.location.state || {
			from: {
				pathname: '/'
			}
		};
		const { redirectToReferrer } = this.state;
		if (redirectToReferrer) {
			return <Redirect to={from} />;
		}

		return (
      <Container component="main" maxWidth="xs">
        <Paper className={classes.wrapper}>
          <div className={classes.formContainer}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography variant="subtitle1">
              Sign in to App
            </Typography>
            {this.state.error && (
              <Alert className={classes.marginTop} severity="error">{this.state.error}</Alert>
            )}
            <form className={classes.form} noValidate>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label={"Username or Email"}
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
              <Box display="flex" justifyContent="flex-end">
                <Link to="/password_reset">
                  <Typography variant="body2">
                    Forgot password?
                  </Typography>
                </Link>
              </Box>
              <Button
                type="button"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={this.clickSubmit}
              >
                {"Sign In"}
              </Button>
            </form>
          </div>
        </Paper>
        <Paper>
          <Box mt={2} p={1} display="flex" justifyContent="center">
            <Typography variant="body2" style={{margin:'5px'}}>
              {"New to App? "}
              <Link to="/signup" variant="body2" style={{margin:'5px'}}>
                {"Create an account"}
              </Link>
            </Typography>{" "}
          </Box>
        </Paper>
        <Box mt={8}>
          <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" to="/">
              Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
          </Typography>
        </Box>
      </Container>
		);
	}
}

export default withStyles(styles)(Signin);
