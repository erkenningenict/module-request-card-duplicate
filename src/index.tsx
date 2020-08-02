// Add IE11 support
import 'core-js/es/map';
import 'core-js/es/set';
import 'es6-shim';
import 'react-app-polyfill/ie11';

import { ERKENNINGEN_GRAPHQL_API_URL, ERKENNINGEN_SITE_TYPE } from '@erkenningen/config';
import React from 'react';
import ReactDOM from 'react-dom';

import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { ApolloProvider } from '@apollo/react-hooks';

import { App } from './App';
import { ThemeContext, ThemeBureauErkenningen } from '@erkenningen/ui/layout/theme';

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
    <ThemeBureauErkenningen>
      <ThemeContext.Provider value={{ mode: ERKENNINGEN_SITE_TYPE }}>
        <App />
      </ThemeContext.Provider>
    </ThemeBureauErkenningen>
  </ApolloProvider>,
  document.getElementById('erkenningen-module-request-card-duplicate'),
);
