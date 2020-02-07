import React from 'react';
import { Alert, TableResponsive, toDutchDate } from '@erkenningen/ui';
import { ICertificering, IPas } from '../models/types';
import CardRow from './CardRow';

const CardsTable: React.FC<{ licenseDetails: ICertificering }> = (props) => {
  if (!props.licenseDetails) {
    return null;
  }
  return (
    <>
      {props.licenseDetails.Passen.length === 0 &&
        new Date(props.licenseDetails.BeginDatum) >= new Date() && (
          <Alert>
            U heeft voor deze licentie (nog) geen pas ontvangen.{' '}
            <strong>
              U ontvangt uw pasje automatisch 3 maanden voor ingangsdatum{' '}
              {toDutchDate(props.licenseDetails.BeginDatum)} op uw woonadres.
            </strong>
          </Alert>
        )}
      {props.licenseDetails.Passen.length > 0 && (
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
                {props.licenseDetails.Passen.map((card: IPas) => (
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
