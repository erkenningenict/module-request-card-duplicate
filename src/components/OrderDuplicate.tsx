import React, { useState } from 'react';
import { Alert } from '@erkenningen/ui/components/alert';
import { Select } from '@erkenningen/ui/components/select';
import { Button } from '@erkenningen/ui/components/button';
import { toDutchMoney } from '@erkenningen/ui/utils';
import { ICertificering, IRequestDuplicate } from '../models/types';
import './OrderDuplicate.css';
import { useMutation } from 'react-apollo';
import { ORDER_DUPLICATE, GET_MY_LICENSES_AND_DUPLICATE_PRICE } from '../shared/Queries';

const OrderDuplicate: React.FC<{
  license: ICertificering;
  priceExVat: number;
  onInvoiceLink: any;
}> = (props) => {
  const [nrOfCards, setNrOfCards] = useState<number>(1);
  const [requestDuplicate, { loading, data, error }] = useMutation<{
    requestDuplicate: IRequestDuplicate;
  }>(ORDER_DUPLICATE, {
    update(cache, { data: mutationResult }) {
      const cacheData: any = cache.readQuery({ query: GET_MY_LICENSES_AND_DUPLICATE_PRICE });
      const licenses: ICertificering[] = cacheData.my.Certificeringen;
      const licenseToUpdate: ICertificering | undefined = licenses.find(
        (lic: ICertificering) => lic.CertificeringID === props.license.CertificeringID,
      );
      if (licenseToUpdate && mutationResult) {
        let newCard = mutationResult.requestDuplicate.cards[0];
        newCard = {
          ...newCard,
          PasRetouren: [],
        };

        // update the cache (by reference)
        licenseToUpdate.Passen.push(newCard);
      }
    },
  });
  if (data) {
    props.onInvoiceLink(data.requestDuplicate.invoiceLink);
  }
  const list = [1, 2, 3, 4, 5];
  return (
    <form
      className="form form-horizontal"
      onSubmit={(e) => {
        e.preventDefault();
        requestDuplicate({
          variables: {
            input: {
              licenseIds: [+props.license.CertificeringID],
              remark: 'Duplicaat pas',
              count: nrOfCards,
            },
          },
        });
      }}
    >
      <div className="form-group">
        <label className="control-label col-md-4">Aantal duplicaten bestellen</label>
        <div className="smallSelect">
          <Select
            options={list.map((value: number) => ({
              value,
              label: `${value}`,
            }))}
            placeholder="Kies licentie"
            value={nrOfCards}
            onChange={(e) => {
              setNrOfCards(e.value);
            }}
          ></Select>
        </div>
        <div className="col-md-5 form-control-static">
          Prijs (ex. btw): {toDutchMoney(props.priceExVat)} per stuk
        </div>
      </div>
      <div className="col-md-offset-4">
        <Button type="primary" buttonType="submit" label="Bestellen" disabled={loading} />
      </div>
      {error && (
        <Alert type="danger" className="marginTop">
          Er is iets fout gegaan bij het bestellen. Probeer het later opnieuw.
        </Alert>
      )}
    </form>
  );
};
export default OrderDuplicate;
