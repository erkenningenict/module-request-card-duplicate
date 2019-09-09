export interface ICertificering {
  CertificeringID: string;
  NummerWeergave: string;
  Status: string;
  BeginDatum: number;
  EindDatum: number;
  Certificaat: {
    Naam: string;
  };
  Passen: IPas[];
}

export interface IPas {
  PasID: string;
  DatumAanvraag: number;
  DatumUitgeleverd: number;
  Aantal: number;
  Status: string;
  Geadresseerde: string;
  PasRetouren: IPasRetour[];
}

export interface IPasRetour {
  PasID: string;
  DatumRetour: number;
}
