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
// Material UI Lab component
import Alert from '@material-ui/lab/Alert';
// utils
import { signin } from '../../utils/api-auth.js';
import auth from '../../utils/auth-helper';

const styles = theme => ({
  formRoot: {
    marginTop: theme.spacing(3),
    padding: theme.spacing(2),
    backgroundColor: "#eaecef"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  alertMargin: {
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 1),
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
        <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography variant="h6">
            Reset your password
          </Typography>
        </Box>
        <Paper className={classes.formRoot} elevation={4} style={{backgroundColor: "#eaecef"}}>
          <div>
            {this.state.error && (
              <Alert className={classes.alertMargin} severity="error">{this.state.error}</Alert>
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
        <Paper style={{backgroundColor: "#eaecef"}} elevation={4}>
          <Box mt={2} p={1} display="flex" justifyContent="center">
            <Typography variant="body2" style={{margin:'5px'}}>
              {"New to App? "}
              <Link to="/signup" style={{margin:'5px'}}>
                {"Create an account"}
              </Link>
            </Typography>{" "}
          </Box>
        </Paper>
      </Container>
		);
	}
}

export default withStyles(styles)(Signin);
