import React from 'react'
// React Router routing
import { Link } from 'react-router-dom';
// Material UI Icons
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';

export default function NotFound() {
  return (
    <div class="mainbox">
      <div class="err">4</div>
      <HelpOutlineIcon />
      <div class="err2">4</div>
      <div class="msg">Maybe this page moved? Got deleted? Is hiding out in quarantine? Never existed in the first place?<p>Let's go <Link to="/">home</Link> and try from there.</p></div>
    </div>
  )
};