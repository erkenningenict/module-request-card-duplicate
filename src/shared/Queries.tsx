import gql from 'graphql-tag';

export const GET_MY_LICENSES_AND_DUPLICATE_PRICE = gql`
  query getMyAndDuplicatePrice {
    my {
      Certificeringen(inclusiefPassen: true) {
        CertificeringID
        NummerWeergave
        BeginDatum
        EindDatum
        Status
        Certificaat {
          Naam
        }
        Passen {
          PasID
          DatumAanvraag
          DatumUitgeleverd
          Aantal
          Status
          Geadresseerde
          PasRetouren {
            PasID
            DatumRetour
          }
        }
      }
    }
    tariefDuplicaat {
      TotaalExtBtw
    }
  }
`;

export const ORDER_DUPLICATE = gql`
  mutation requestDuplicate($input: requestDuplicateInput!) {
    requestDuplicate(input: $input) {
      invoiceLink
      cards {
        PasID
        CertificeringID
        DatumAanvraag
        Status
        Aantal
      }
    }
  }
`;
