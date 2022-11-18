import React from 'react';

import { Alert } from '@erkenningen/ui/components/alert';
import { Spinner } from '@erkenningen/ui/components/spinner';

import 'primeicons/primeicons.css';
import 'primereact/resources/primereact.min.css';
import CardsContainer from './containers/CardsContainer';
import {
  CertificeringenFieldsFragment,
  CertificeringStatusEnum,
  useGetMyAndDuplicatePriceQuery,
} from './generated/graphql';

export const App: React.FC<any> = () => {
  const { loading, error, data } = useGetMyAndDuplicatePriceQuery({});

  if (loading) {
    return <Spinner></Spinner>;
  }
  if (error) {
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
  if (!data.my?.Certificeringen || !data?.tariefDuplicaat) {
    return <Alert type="danger">Kan geen gegevens ophalen</Alert>;
  }
  if (data.my?.Certificeringen && data.my.Certificeringen === undefined) {
    return <Alert type="danger">Kan geen gegevens ophalen</Alert>;
  }
  const sortedLicenses: CertificeringenFieldsFragment[] = [
    ...data?.my.Certificeringen?.filter(
      (license) =>
        license?.Status === CertificeringStatusEnum.Geldig &&
        license?.CertificaatID !== 22 &&
        license?.CertificaatID !== 23 &&
        license?.CertificaatID !== 24 &&
        license?.CertificaatID !== 25 &&
        license?.CertificaatID !== 26 &&
        license?.CertificaatID !== 27 &&
        license?.CertificaatID !== 28 &&
        license?.CertificaatID !== 1 &&
        license?.CertificaatID !== 29,
    ).sort((a, b) =>
      new Date(a?.BeginDatum || new Date()) > new Date(b?.BeginDatum || new Date()) ? -1 : 1,
    ),
  ] as CertificeringenFieldsFragment[];
  return (
    <CardsContainer
      list={sortedLicenses ?? []}
      priceExVat={(data?.tariefDuplicaat && data?.tariefDuplicaat.TotaalExtBtw) || 0}
    ></CardsContainer>
  );
};
