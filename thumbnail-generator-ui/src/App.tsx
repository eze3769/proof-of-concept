import React from 'react';
import { Auth0Provider } from '@auth0/auth0-react';
import './App.css';
import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material';
import Router from './hoc/Router/Router';

let theme = createTheme();
theme = responsiveFontSizes(theme);
const domain: string = process.env.REACT_APP_AUTH0_DOMAIN as string;
const clientId: string = process.env.REACT_APP_AUTH0_CLIENT_ID as string;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Auth0Provider
        domain={domain}
        clientId={clientId}
        redirectUri={window.location.origin}
      >
        <Router />
      </Auth0Provider>
    </ThemeProvider>
  );
}

export default App;
