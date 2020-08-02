import React from 'react';

import { Alert } from '@erkenningen/ui/components/alert';
import { Spinner } from '@erkenningen/ui/components/spinner';

import { GET_MY_LICENSES_AND_DUPLICATE_PRICE } from './shared/Queries';
import { useQuery } from '@apollo/react-hooks';

import 'primeicons/primeicons.css';
import 'primereact/resources/primereact.min.css';
import { ICertificering, ITariefDuplicaat } from './models/types';
import CardsContainer from './containers/CardsContainer';

export const App: React.FC<any> = () => {
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
  if (!data) {
    return <Alert type="danger">Kan geen gegevens ophalen</Alert>;
  }
  return (
    <CardsContainer
      list={
        data?.my &&
        data?.my.Certificeringen.sort((a: ICertificering, b: ICertificering) =>
          a.BeginDatum > b.BeginDatum ? -1 : 1,
        ).filter((license: ICertificering) => license.Status === 'Geldig')
      }
      priceExVat={data?.tariefDuplicaat && data?.tariefDuplicaat.TotaalExtBtw}
    ></CardsContainer>
  );
};
