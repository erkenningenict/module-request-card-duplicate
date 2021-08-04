import React, { useState } from 'react';
import { Alert } from '@erkenningen/ui/components/alert';
import { Select } from '@erkenningen/ui/components/select';
import { Panel } from '@erkenningen/ui/layout/panel';
import { Button } from '@erkenningen/ui/components/button';
import { toDutchDate } from '@erkenningen/ui/utils';
import CardsTable from '../components/CardsTable';
import './CardsContainer.css';
import { ICertificering } from '../models/types';
import OrderDuplicate from '../components/OrderDuplicate';
import { useEffect } from 'react';

const CardsContainer: React.FC<{
  list: ICertificering[];
  priceExVat: number;
}> = (props) => {
  const [selectedLicense, setSelectedLicense] = useState(
    props.list.length >= 0 ? props.list[0] : undefined,
  );
  const [selectedLicenseId, setSelectedLicenseId] = useState(
    props.list.length >= 0 ? props.list[0].CertificeringID : undefined,
  );

  useEffect(() => {
    if (selectedLicenseId) {
      setSelectedLicense(props.list.find((c) => c.CertificeringID === selectedLicenseId));
    }
  }, [selectedLicenseId]);

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
            buttonType="button"
            type="link"
            label="Nog een duplicaat bestellen"
            onClick={() => setInvoiceLink('')}
          ></Button>
        </p>
      </Panel>
    );
  }

  return (
    <>
      <Panel title="Mijn Passen">
        {props.list.length === 0 && (
          <>
            <Alert type="info">U heeft (nog) geen geldige licentie.</Alert>
            Als u een geldige licentie heeft kun u hier een duplicaat van uw pas bestellen.
          </>
        )}
        {props.list.length > 0 && (
          <>
            <p>
              Kies de licentie waarvoor u een duplicaat wilt bestellen (alleen geldige passen worden
              getoond).
            </p>
            <Select
              className="fullWidth"
              options={props.list.map((license: ICertificering) => ({
                value: license.CertificeringID,
                label: `${license.NummerWeergave} - ${
                  license.Certificaat.Naam
                } (startdatum licentie: ${toDutchDate(
                  license.BeginDatum,
                )}, einddatum licentie: ${toDutchDate(license.EindDatum)})
            `,
              }))}
              placeholder="Kies licentie"
              value={selectedLicenseId}
              onChange={(e) => {
                setSelectedLicenseId(e.value);
              }}
            ></Select>
            {selectedLicense && <CardsTable licenseDetails={selectedLicense}></CardsTable>}
            {selectedLicense &&
              (selectedLicense.Passen.length > 0 ||
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
