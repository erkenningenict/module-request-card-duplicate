import React from 'react';
import { Alert, TableResponsive } from '@erkenningen/ui';
import { ICertificering, IPas } from '../models/types';
import PassRow from './PassRow';

const PassTable: React.FC<{ licenseDetails: ICertificering }> = (props) => {
  if (!props.licenseDetails) {
    return null;
  }
  return (
    <>
      {props.licenseDetails.Passen.length === 0 && (
        <Alert>U heeft voor deze licentie (nog) geen pas ontvangen.</Alert>
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
                {props.licenseDetails.Passen.map((pass: IPas) => (
                  <PassRow
                    key={pass.PasID}
                    pass={pass}
                    license={props.licenseDetails}
                  ></PassRow>
                ))}
              </tbody>
            </table>
          </TableResponsive>
        </>
      )}
    </>
  );
};

export default PassTable;
