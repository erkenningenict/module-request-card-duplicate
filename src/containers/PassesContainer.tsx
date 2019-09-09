import React, { useState } from 'react';
import { Panel, Select, toDutchDate } from '@erkenningen/ui';
import PassTable from '../components/PassTable';
import './PassesContainer.css';
import { ICertificering } from '../models/types';

const PassesContainer: React.FC<{
  list: ICertificering[];
}> = (props) => {
  const [license, setLicense] = useState(props.list.length >= 0 ? props.list[0] : undefined);
  if (!props.list) {
    return null;
  }
  return (
    <>
      <Panel title="Mijn Passen">
        <p>Kies licentie waarvoor u een duplicaat wilt bestellen:</p>
        <Select
          className="fullWidth"
          options={props.list
            .map((license: ICertificering) => ({
              value: license,
              label: `${license.NummerWeergave} - ${
                license.Certificaat.Naam
              } (startdatum licentie: ${toDutchDate(
                license.BeginDatum,
              )}, einddatum licentie: ${toDutchDate(license.EindDatum)})
            `,
            }))}
          placeholder="Kies licentie"
          value={license}
          onChange={(e) => {
            setLicense(e.value);
          }}
        ></Select>
        {license && <PassTable licenseDetails={license}></PassTable>}
      </Panel>
    </>
  );
};
export default PassesContainer;
