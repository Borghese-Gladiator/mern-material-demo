import React from 'react';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
import red from '@material-ui/core/colors/red';
import { BrowserRouter } from 'react-router-dom';

import Routes from './Routes';

const theme = createMuiTheme({
	palette: {
		primary: {
			light: '#C8E6C9',
			main: '#24292e',
			dark: '#2E7D32',
			contrastText: '#fff'
		},
		secondary: {
			light: '#EF9A9A',
			main: '#F44336',
			dark: '#C62828',
			contrastText: '#000'
		},
		darkBackground: '#424242',
		openTitle: green['400'],
		protectTitle: red['400']
	}
});

function App() {
	return (
		<BrowserRouter>
			<MuiThemeProvider theme={theme}>
				<Routes />
			</MuiThemeProvider>
		</BrowserRouter>
	);
}

export default App;
