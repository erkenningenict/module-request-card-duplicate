import React from 'react';
import { toDutchDate } from '@erkenningen/ui';
import { ICertificering, IPas, IPasRetour } from '../models/types';

const PassRow: React.FC<{
  pass: IPas;
  license: ICertificering;
}> = (props) => {
  return (
    <>
      <tr>
        <td>{props.license.NummerWeergave}</td>
        <td>
          {props.license.Certificaat.Naam} (geldig vanaf: {toDutchDate(props.license.BeginDatum)})
        </td>
        <td>{toDutchDate(props.pass.DatumAanvraag)}</td>
        <td>{toDutchDate(props.pass.DatumUitgeleverd)}</td>
        <td>
          {props.pass.PasRetouren.map(
            (passReturn: IPasRetour) =>
              `Post onbestelbaar, retour ontvangen op ${toDutchDate(passReturn.DatumRetour)}`,
          )}
        </td>
        <td>{props.pass.Status}</td>
        <td>{props.pass.Aantal}</td>
      </tr>
    </>
  );
};
export default PassRow;
