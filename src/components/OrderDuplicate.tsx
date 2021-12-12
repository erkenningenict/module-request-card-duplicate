import React, { useState } from 'react';
import { Alert } from '@erkenningen/ui/components/alert';
import { Select } from '@erkenningen/ui/components/select';
import { Button } from '@erkenningen/ui/components/button';
import { toDutchMoney } from '@erkenningen/ui/utils';
import './OrderDuplicate.css';
import {
  CertificeringenFieldsFragment,
  PasFieldsFragmentDoc,
  useRequestDuplicateMutation,
} from '../generated/graphql';

const OrderDuplicate: React.FC<{
  license: CertificeringenFieldsFragment;
  priceExVat: number;
  onInvoiceLink: any;
}> = (props) => {
  const [nrOfCards, setNrOfCards] = useState<number>(1);
  const [requestDuplicate, { loading, error }] = useRequestDuplicateMutation({
    update(cache, { data: mutationResult }) {
      cache.modify({
        // get the Certificering record
        id: cache.identify(props.license),
        fields: {
          // update the Passen field
          Passen(existingPassenRefs = [], {}) {
            // first write the new Pas data to the cache
            const newPasRef = cache.writeFragment({
              data: {
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                ...mutationResult!.requestDuplicate!.cards[0],
                // include the fields that are not returned from the server
                PasRetouren: [],
                DatumUitgeleverd: null,
                Geadresseerde: null,
              },
              // refer to the PasFields fragment
              fragment: PasFieldsFragmentDoc,
            });

            // return the existing passen refs and the ref of the new one
            const retVal = [...existingPassenRefs, newPasRef];
            return retVal;
          },
        },
      });
    },
  });

  const list = [1, 2, 3, 4, 5];
  return (
    <form
      className="row form form-horizontal"
      onSubmit={async (e) => {
        e.preventDefault();
        const res = await requestDuplicate({
          variables: {
            input: {
              licenseIds: [props.license.CertificeringID],
              remark: 'Duplicaat pas',
              count: nrOfCards,
            },
          },
        });
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        props.onInvoiceLink(res.data!.requestDuplicate.invoiceLink);
      }}
    >
      <div className="form-group">
        <label className="control-label col-md-4">Aantal duplicaten bestellen</label>
        <div className="col-md-2">
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
        <div className="col-md-6 form-control-static">
          Prijs (ex. btw): {toDutchMoney(props.priceExVat)} per stuk
        </div>
      </div>
      <div className="form-group ">
        <div className="col-md-offset-4 col-md-8">
          <Button buttonType="primary" type="submit" label="Bestellen" disabled={loading} />
        </div>
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
