import React from 'react';

import { ThemeContext, Spinner, Alert } from '@erkenningen/ui';
import { ERKENNINGEN_SITE_TYPE } from '@erkenningen/config';

import { GET_MY_LICENSES } from './shared/Queries';
import { useQuery } from '@apollo/react-hooks';

import 'primeicons/primeicons.css';
import 'primereact/resources/primereact.min.css';
import { ICertificering } from './models/types';
import PassesContainer from './containers/PassesContainer';

export const App: React.FC<{}> = () => {
  const { loading, error, data } = useQuery(GET_MY_LICENSES);
  if (loading) {
    return <Spinner></Spinner>;
  }
  if (error) {
    // Check if auth error and ignore if set
    for (const err of error.graphQLErrors) {
      if (err.extensions && err.extensions.code === 'UNAUTHENTICATED') {
        return <Alert type="warning">U bent niet ingelogd. Log eerst in.</Alert>;
      }
    }
    return <Alert type="danger">Er is een fout opgetreden, probeer het later opnieuw.</Alert>;
  }
  return (
    <ThemeContext.Provider value={{ mode: ERKENNINGEN_SITE_TYPE }}>
      <PassesContainer
        list={
          data.my &&
          data.my.Certificeringen.sort((a: ICertificering, b: ICertificering) =>
            a.BeginDatum > b.BeginDatum ? -1 : 1,
          ).filter((license: ICertificering) => license.Status === 'Geldig')
        }
      ></PassesContainer>
    </ThemeContext.Provider>
  );
};
