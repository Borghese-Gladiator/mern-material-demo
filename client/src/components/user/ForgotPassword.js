import React, { Component } from 'react';
import { signin } from '../../utils/api-auth.js';
import auth from '../../utils/auth-helper';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import { Redirect } from 'react-router-dom';
// Material UI components
import Link from '@material-ui/core/Link';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Container from '@material-ui/core/Container';
// Material UI Lab component
import Alert from '@material-ui/lab/Alert';

const styles = theme => ({
	card: {
		maxWidth: 600,
		margin: 'auto',
		textAlign: 'center',
		marginTop: theme.spacing.unit * 5,
		paddingBottom: theme.spacing.unit * 2
	},
	error: {
		verticalAlign: 'middle'
	},
	title: {
		marginTop: theme.spacing.unit * 2,
		color: theme.palette.primary.dark
	},
	textField: {
		marginLeft: theme.spacing.unit,
		marginRight: theme.spacing.unit,
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
        <Box mt={2} p={2}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography variant="subtitle1">
            Reset your password
          </Typography>
        </Box>
        <Paper className={classes.wrapper} style={{backgroundColor: "#eaecef"}}>
          <div>
            {this.state.error && (
              <Alert className={classes.marginTop} severity="error">{this.state.error}</Alert>
            )}
            <Typography variant="subtitle2">
              Enter your user account's verified email address and we will send you a password reset link.
            </Typography>
            <form className={classes.form} noValidate>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label={"Enter your email address"}
                name="email"
                autoComplete="email"
                autoFocus
                value={this.state.email}
                onChange={this.handleChange('email')}
              />
              <Button
                type="button"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={this.clickSubmit}
              >
                {"Send password reset email"}
              </Button>
            </form>
          </div>
        </Paper>
        <Paper>
          <Box mt={2} p={2} display="flex" justifyContent="center">
            <Typography variant="body2">
              New to App?                      
            </Typography>
            <Typography variant="body2">
              {" "}                      
            </Typography>
            <Link to="/signup" variant="body2">
              {"Create an account"}
            </Link>
          </Box>
        </Paper>
        <Box mt={8}>
          <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
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
