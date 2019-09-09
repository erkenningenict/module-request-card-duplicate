import gql from 'graphql-tag';

export const GET_MY_LICENSES = gql`
  query getMy {
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
  }
`;
