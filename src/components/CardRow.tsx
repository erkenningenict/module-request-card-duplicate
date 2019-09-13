import React from 'react';
import { ICertificering, IPas, IPasRetour } from '../models/types';
import { toDutchDate } from '@erkenningen/ui';

const CardRow: React.FC<{
  card: IPas;
  license: ICertificering;
}> = (props) => {
  return (
    <>
      <tr>
        <td>{props.license.NummerWeergave}</td>
        <td>
          {props.license.Certificaat.Naam} (geldig vanaf: {toDutchDate(props.license.BeginDatum)})
        </td>
        <td>{toDutchDate(props.card.DatumAanvraag)}</td>
        <td>
          {toDutchDate(props.card.DatumUitgeleverd, { defaultValue: 'Nog niet uitgeleverd' })}
        </td>
        <td>
          {props.card.PasRetouren.map(
            (passReturn: IPasRetour) =>
              `Post onbestelbaar, retour ontvangen op ${toDutchDate(passReturn.DatumRetour)}`,
          )}
          {props.card.PasRetouren.length === 0 && 'Er zijn geen retouren ontvangen'}
        </td>
        <td>{props.card.Status}</td>
        <td>{props.card.Aantal}</td>
      </tr>
    </>
  );
};
export default CardRow;
