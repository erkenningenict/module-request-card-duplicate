import React from 'react';
import { Alert } from '@erkenningen/ui/components/alert';
import { TableResponsive } from '@erkenningen/ui/layout/table';
import { toDutchDate } from '@erkenningen/ui/utils';
import CardRow from './CardRow';
import type { CertificeringenFieldsFragment, PasFieldsFragment } from '../generated/graphql';

const CardsTable: React.FC<{ licenseDetails: CertificeringenFieldsFragment }> = (props) => {
  if (!props.licenseDetails) {
    return null;
  }

  const sortedRows =
    (props.licenseDetails.Passen &&
      ([...props.licenseDetails.Passen] as PasFieldsFragment[]).sort(
        (a: PasFieldsFragment, b: PasFieldsFragment) =>
          new Date(a.DatumAanvraag) > new Date(b.DatumAanvraag) ? -1 : 1,
      )) ||
    ([] as PasFieldsFragment[]);

  return (
    <>
      {sortedRows.length === 0 && new Date(props.licenseDetails.BeginDatum) >= new Date() && (
        <Alert>
          U heeft voor deze licentie (nog) geen pas ontvangen.{' '}
          <strong>
            U ontvangt uw pasje automatisch 3 maanden voor ingangsdatum{' '}
            {toDutchDate(props.licenseDetails.BeginDatum)} op uw woonadres.
          </strong>
        </Alert>
      )}
      {sortedRows.length > 0 && (
        <>
          <h4>Passen reeds door u ontvangen voor de gekozen licentie:</h4>
          <TableResponsive>
            <table className="table table-striped" key="table">
              <thead>
                <tr>
                  <th>Pasnummer</th>
                  <th>Licentie</th>
                  <th>Datum aanvraag</th>
                  <th>Datum uitgeleverd</th>
                  <th>Datum retour ontvangen</th>
                  <th>Status</th>
                  <th>Aantal</th>
                </tr>
              </thead>
              <tbody>
                {sortedRows?.map((card: PasFieldsFragment) => (
                  <CardRow key={card.PasID} card={card} license={props.licenseDetails}></CardRow>
                ))}
              </tbody>
            </table>
          </TableResponsive>
        </>
      )}
    </>
  );
};

export default CardsTable;
