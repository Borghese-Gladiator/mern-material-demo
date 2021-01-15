# mern-material-demo
Fullstack App with auth (JWT) using MERN and Material UI

# Custom Changes
- upgraded Babel version 5.x to 7.x
- added babel config files (babel.config.json & .browserslistrc)
- add Babel build scripts & heroku-postbuild to package.json
- deployed to Heroku (using Changes) [https://desolate-escarpment-33302.herokuapp.com/](https://desolate-escarpment-33302.herokuapp.com/)

# Client Changes
- rewrite to use Layouts rather than hard-coded navbar (AuthLayout, GuestLayout, NoLayout)
- Fix Material UI Warnings (typography upgrade && raised property replaced by contained)
- upgraded Material UI from 3.x to 4.x (new components: Box, Container)
- upgraded React Router from 4.x to 5.x (and changed withRouter to useLocation function)
- new theme colors in client/src/App.js
- fix hard-coded colors not using themes in navbar & sign in
- error message use Alert component