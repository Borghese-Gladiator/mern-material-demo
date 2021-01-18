import React from 'react'
// React Router routing
import { Link } from 'react-router-dom';
// Material UI Styling
import { withStyles } from '@material-ui/core/styles';
// Material UI components
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
// Material UI Icons
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
// spin animation
import './NotFound.css';

const styles = theme => ({
  root: {
    marginTop: theme.spacing(5),
  },
  bigText: {
    fontSize: '120px'
  }
});

function NotFound(props) {
  const { classes } = props;
  return (
    <Container className={classes.root}>
      <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
        <Box display="flex" flexDirection="row" justifyContent="center" alignItems="center" className={classes.bigText}>
          <div class="err">4</div>
          <HelpOutlineIcon className="App-logo" alt="logo" style={{ fontSize: "120px" }} />
          <div class="err2">4</div>
        </Box>
        <Container maxWidth="sm">
          <p>
            <Typography variant="subtitle1">
              Maybe this page moved? Got deleted? Is hiding out in quarantine? Never existed in the first place?
            </Typography>
          </p>
          <p>
            <Typography variant="subtitle1">
              Let's go <Link to="/">home</Link> and try from there.
            </Typography>
          </p>
        </Container>
      </Box>
    </Container>
  )
};

export default withStyles(styles)(NotFound);