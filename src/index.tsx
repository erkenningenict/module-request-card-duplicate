// Add IE11 support
import 'core-js/es/map';
import 'core-js/es/set';
import 'es6-shim';
import 'react-app-polyfill/ie11';

import { ERKENNINGEN_GRAPHQL_API_URL, ERKENNINGEN_SITE_TYPE } from '@erkenningen/config';
import React from 'react';
import ReactDOM from 'react-dom';

// import ThemeContext from '@erkenningen/ui2/dist/es/src/layout/theme/ThemeContext';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { ApolloProvider } from 'react-apollo';

import { App } from './App';
import { ThemeContext } from '@erkenningen/ui';

const cache = new InMemoryCache();

const client = new ApolloClient({
  link: new HttpLink({
    uri: ERKENNINGEN_GRAPHQL_API_URL,
    credentials: 'include',
  }),
  cache,
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <ThemeContext.Provider value={{ mode: ERKENNINGEN_SITE_TYPE }}>
      <App />
    </ThemeContext.Provider>
  </ApolloProvider>,
  document.getElementById('module-certificates-info'),
);
