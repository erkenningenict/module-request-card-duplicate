import React, { useState } from 'react';
import { Alert } from '@erkenningen/ui/components/alert';
import { Select } from '@erkenningen/ui/components/select';
import { Panel } from '@erkenningen/ui/layout/panel';
import { Button } from '@erkenningen/ui/components/button';
import { toDutchDate } from '@erkenningen/ui/utils';
import CardsTable from '../components/CardsTable';
import './CardsContainer.css';
import OrderDuplicate from '../components/OrderDuplicate';
import { useEffect } from 'react';
import type { CertificeringenFieldsFragment } from '../generated/graphql';

const CardsContainer: React.FC<{
  list: CertificeringenFieldsFragment[];
  priceExVat: number;
}> = (props) => {
  const [selectedLicense, setSelectedLicense] = useState(
    props.list.length >= 0 ? props.list[0] : undefined,
  );
  const [selectedLicenseId, setSelectedLicenseId] = useState(
    props.list.length >= 0 ? props.list[0]?.CertificeringID : undefined,
  );

  useEffect(() => {
    if (selectedLicenseId) {
      setSelectedLicense(props.list.find((c) => c.CertificeringID === selectedLicenseId));
    }
  }, [props.list, selectedLicenseId]);

  const [invoiceLink, setInvoiceLink] = useState<string>('');
  if (!props.list) {
    return null;
  }
  const getInvoiceJsLink = (link: string, labelText: string): { __html: string } => {
    if (!link) {
      return { __html: '' };
    }
    return {
      __html: `<a href="javascript: void(0)" class="btn btn-primary" onclick="${link};return false;">${labelText}</a>`,
    };
  };
  if (invoiceLink !== '') {
    return (
      <Panel title="Mijn Passen">
        <h4>Uw bestelling is verwerkt</h4>
        <p>
          Als u de factuur via iDeal betaald ontvangt u over enkele dagen de pas op uw{' '}
          <strong>woonadres</strong>.
        </p>
        <p>Open de factuur om met iDeal te betalen.</p>
        <div dangerouslySetInnerHTML={getInvoiceJsLink(invoiceLink, 'Bekijk factuur')} />
        <p className="marginTop">
          <Button
            type="button"
            buttonType="secondary"
            label="Nog een duplicaat bestellen"
            onClick={() => setInvoiceLink('')}
          ></Button>
        </p>
      </Panel>
    );
  }

  const itemTemplate = (option) => {
    const o = props.list.find((l) => l.CertificeringID === option.value);
    if (!o) {
      return <div>Licentie type niet gevonden</div>;
    }
    return (
      <div style={{ display: 'flex', flexDirection: 'column', height: '60px' }}>
        <div>
          <strong>{o.Certificaat?.Naam}</strong>
        </div>
        <div>
          Pasnummer: <strong>{o.NummerWeergave}</strong>
        </div>
        <div>
          Geldig vanaf {toDutchDate(o.BeginDatum)}, einddatum {toDutchDate(o.EindDatum)}
        </div>
      </div>
    );
  };

  return (
    <>
      <Panel title="Mijn Passen">
        {props.list.length === 0 && (
          <>
            <Alert type="info">U heeft (nog) geen geldige licentie.</Alert>
            Als u een geldige licentie heeft kun u hier een duplicaat van uw pas bestellen. Voor KBA
            licenties kunt u geen duplicaat pasjes meer bestellen.
          </>
        )}
        {props.list.length > 0 && (
          <>
            <p>
              Kies de licentie waarvoor u een duplicaat wilt bestellen (alleen geldige passen worden
              getoond en KBA duplicaat pasjes kunt u niet meer bestellen).
            </p>

            <Select
              className="fullWidth"
              options={props.list.map((license: CertificeringenFieldsFragment) => ({
                value: license.CertificeringID,
                label: `${license.NummerWeergave} - ${
                  license.Certificaat?.Naam
                } (geldig vanaf: ${toDutchDate(license.BeginDatum)}, einddatum: ${toDutchDate(
                  license.EindDatum,
                )})
            `,
              }))}
              placeholder="Kies licentie"
              itemTemplate={itemTemplate}
              value={selectedLicenseId}
              onChange={(e) => {
                setSelectedLicense(props.list.find((c) => c.CertificeringID === selectedLicenseId));
                setSelectedLicenseId(e.value);
              }}
            ></Select>
            {selectedLicense && <CardsTable licenseDetails={selectedLicense}></CardsTable>}
            {selectedLicense &&
              ((selectedLicense.Passen && selectedLicense.Passen.length > 0) ||
                (new Date(selectedLicense.BeginDatum) <= new Date() &&
                  new Date(selectedLicense.EindDatum) >= new Date())) && (
                <>
                  <p>
                    Wilt u een duplicaat pas aanvragen? Kies dan het aantal en klik op bestellen. U
                    ontvangt dan een factuur die met iDeal betaald kan worden. Na betaling ontvangt
                    u uw duplicaat pas binnen enkele dagen op uw woonadres.
                  </p>
                  {selectedLicense && invoiceLink === '' && (
                    <OrderDuplicate
                      license={selectedLicense}
                      priceExVat={props.priceExVat}
                      onInvoiceLink={(e: string) => setInvoiceLink(e)}
                    ></OrderDuplicate>
                  )}
                </>
              )}
          </>
        )}
      </Panel>
    </>
  );
};
export default CardsContainer;
