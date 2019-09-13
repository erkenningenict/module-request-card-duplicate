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
  CertificeringID: number;
  DatumAanvraag: number;
  DatumUitgeleverd: number;
  Aantal: number;
  Status: string;
  Geadresseerde: string | null;
  PasRetouren: IPasRetour[];
}

export interface IPasRetour {
  PasID: string;
  DatumRetour: number;
}

export interface ITariefDuplicaat {
  TotaalExtBtw: number;
}

export interface IRequestDuplicate {
  invoiceLink: string;
  cards: IPas[];
}
