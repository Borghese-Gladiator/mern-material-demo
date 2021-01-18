# mern-material-demo
Fullstack App with auth (JWT) using MERN and Material UI.


Original Features:
- ES6 Node.js (Express) backend with authentication
- Mongoose schemas for User
- React frontend

# Custom Changes
- upgraded Babel version 5.x to 7.x
- added babel config files (babel.config.json & .browserslistrc)
- add Babel build scripts & heroku-postbuild to package.json
- deployed to Heroku (using Changes) [https://desolate-escarpment-33302.herokuapp.com/](https://desolate-escarpment-33302.herokuapp.com/)

# Client Changes
- simplify classes to functions when only render function is used (Hooks as necessary)
- upgraded Material UI from 3.x to 4.x (new components: Box, Container)
- fixed errors of deprecated theme.spacing.unit
- upgraded React Router from 4.x to 5.x (and changed withRouter to useLocation function & used NavLink component)
- added Material UI Lab - error messages use new Alert component
- new theme colors in client/src/App.js
- fix hard-coded colors not using themes in navbar & sign in
- added mobile support to navbar (smaller sizes will make dropdown menu)
- rewrote login & signup pages UI