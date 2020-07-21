import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import { ThemeProvider } from 'emotion-theming';
import * as Sentry from '@sentry/browser';
import { ZeitProvider, CssBaseline } from '@zeit-ui/react';
import App from './App';
import * as serviceWorker from './serviceWorker';
import client from './apolloClient';
import theme from './theme';
import { SENTRY_DNS } from './config/sentry';

Sentry.init({
  dsn: SENTRY_DNS,
});

export const myTheme = {
  palette: {
    selection: '#f5a623',
  },
};

export const NOOP = () => ({});
ReactDOM.render(
  <ThemeProvider theme={theme}>
    <ZeitProvider theme={myTheme}>
      <CssBaseline />
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </ZeitProvider>
  </ThemeProvider>,
  document.getElementById('root'),
);
serviceWorker.unregister();
