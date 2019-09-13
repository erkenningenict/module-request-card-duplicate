import React from 'react';

import { ThemeContext, Spinner, Alert } from '@erkenningen/ui';
import { ERKENNINGEN_SITE_TYPE } from '@erkenningen/config';

import { GET_MY_LICENSES_AND_DUPLICATE_PRICE } from './shared/Queries';
import { useQuery } from '@apollo/react-hooks';

import 'primeicons/primeicons.css';
import 'primereact/resources/primereact.min.css';
import { ICertificering, ITariefDuplicaat } from './models/types';
import CardsContainer from './containers/CardsContainer';

export const App: React.FC<{}> = () => {
  const { loading, error, data } = useQuery<{
    my: { Certificeringen: ICertificering[] };
    tariefDuplicaat: ITariefDuplicaat;
  }>(GET_MY_LICENSES_AND_DUPLICATE_PRICE);
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
      {data && (
        <CardsContainer
          list={
            data.my &&
            data.my.Certificeringen.sort((a: ICertificering, b: ICertificering) =>
              a.BeginDatum > b.BeginDatum ? -1 : 1,
            ).filter((license: ICertificering) => license.Status === 'Geldig')
          }
          priceExVat={data.tariefDuplicaat && data.tariefDuplicaat.TotaalExtBtw}
        ></CardsContainer>
      )}
    </ThemeContext.Provider>
  );
};
