// Add IE11 support
import 'core-js/es/map';
import 'core-js/es/set';
import 'es6-shim';
import 'react-app-polyfill/ie11';

import { ERKENNINGEN_GRAPHQL_API_URL, ERKENNINGEN_SITE_TYPE } from '@erkenningen/config';
import React from 'react';
import ReactDOM from 'react-dom';

import { ApolloClient, ApolloProvider, HttpLink, InMemoryCache } from '@apollo/client';

import { App } from './App';
import { ThemeContext, ThemeBureauErkenningen } from '@erkenningen/ui/layout/theme';

const cache = new InMemoryCache({
  typePolicies: {
    Certificering: {
      keyFields: ['CertificeringID'],
      merge: true,
    },
    Pas: {
      keyFields: ['PasID'],
    },
  },
});

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
