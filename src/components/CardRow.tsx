import React from 'react';
import { toDutchDate } from '@erkenningen/ui/utils';
import type { CertificeringenFieldsFragment, PasFieldsFragment } from '../generated/graphql';

const CardRow: React.FC<{
  card: PasFieldsFragment;
  license: CertificeringenFieldsFragment;
}> = (props) => {
  return (
    <tr key={props.card.PasID}>
      <td>{props.license.NummerWeergave}</td>
      <td>
        {props.license.Certificaat?.Naam} (geldig vanaf: {toDutchDate(props.license.BeginDatum)})
      </td>
      <td>{toDutchDate(props.card.DatumAanvraag)}</td>
      <td>{toDutchDate(props.card.DatumUitgeleverd, { defaultValue: 'Nog niet uitgeleverd' })}</td>
      <td>
        {props.card.PasRetouren?.map(
          (passReturn) =>
            `Post onbestelbaar, retour ontvangen op ${
              passReturn?.DatumRetour !== undefined
                ? toDutchDate(passReturn?.DatumRetour)
                : 'datum nog onbekend.'
            }`,
        )}
        {props.card.PasRetouren?.length === 0 && 'Er zijn geen retouren ontvangen'}
      </td>
      <td>{props.card.Status}</td>
      <td>{props.card.Aantal}</td>
    </tr>
  );
};
export default CardRow;
