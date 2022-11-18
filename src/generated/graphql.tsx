import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T;
export type InputMaybe<T> = T;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: Date;
  Email: any;
  SafeString: any;
  Upload: any;
};

export type AangemeldeCursusDeelname = {
  __typename?: 'AangemeldeCursusDeelname';
  Begintijd: Scalars['String'];
  CursusDeelnameID: Scalars['Int'];
  CursusID: Scalars['Int'];
  Datum: Scalars['Date'];
  Eindtijd: Scalars['String'];
  IsDigitaalAanbod: Scalars['Boolean'];
  Locatie: Scalars['String'];
  Prijs: Scalars['Float'];
  Status: CursusDeelnameStatusEnum;
  Titel: Scalars['String'];
};

export type AuthenticateInput = {
  password: Scalars['String'];
  username: Scalars['String'];
};

export type AuthenticateResult = {
  __typename?: 'AuthenticateResult';
  Persoon: Persoon;
  accessToken: Scalars['String'];
  refreshToken: Scalars['String'];
  roles: Array<Scalars['String']>;
};

export type Beoordeling = {
  __typename?: 'Beoordeling';
  Beoordelaar?: Maybe<Persoon>;
  BeoordelingID: Scalars['Int'];
  DatumGepland?: Maybe<Scalars['Date']>;
  DatumRapport?: Maybe<Scalars['Date']>;
  PersoonID?: Maybe<Scalars['Int']>;
  Rapport?: Maybe<Scalars['String']>;
  RapportCijfer?: Maybe<Scalars['Int']>;
  Status: BeoordelingStatusEnum;
  VakID: Scalars['Int'];
};

export enum BeoordelingStatusEnum {
  Afgekeurd = 'Afgekeurd',
  CommentaarGevraagd = 'CommentaarGevraagd',
  Goedgekeurd = 'Goedgekeurd',
  TerBeoordeling = 'TerBeoordeling',
}

export type Bijeenkomst = {
  __typename?: 'Bijeenkomst';
  Cursus?: Maybe<Cursus>;
  Vaknorm?: Maybe<Vaknorm>;
};

export type Certificaat = {
  __typename?: 'Certificaat';
  CertificaatID: Scalars['Int'];
  Code: Scalars['String'];
  Naam: Scalars['String'];
};

export type Certificering = {
  __typename?: 'Certificering';
  BeginDatum: Scalars['Date'];
  Certificaat?: Maybe<Certificaat>;
  CertificaatID: Scalars['Int'];
  CertificeringAantekeningen?: Maybe<Array<Maybe<CertificeringAantekening>>>;
  CertificeringID: Scalars['Int'];
  DatumAangemaakt: Scalars['Date'];
  DatumIngetrokkenTot?: Maybe<Scalars['Date']>;
  DatumIngetrokkenVan?: Maybe<Scalars['Date']>;
  /** Date on which all required sessions were taken */
  DatumVoldaan?: Maybe<Scalars['Date']>;
  EindDatum: Scalars['Date'];
  IsVerlengingVan?: Maybe<Scalars['Int']>;
  NormVersieID: Scalars['Int'];
  Nummer: Scalars['String'];
  NummerWeergave: Scalars['String'];
  Opmerkingen: Scalars['String'];
  Passen?: Maybe<Array<Maybe<Pas>>>;
  Persoon?: Maybe<Persoon>;
  PersoonID: Scalars['Int'];
  Status: CertificeringStatusEnum;
  UitstelTot?: Maybe<Scalars['Date']>;
  UitstelVerleend?: Maybe<Scalars['Boolean']>;
};

export type CertificeringAantekening = {
  __typename?: 'CertificeringAantekening';
  /** Can only contain KBA of KBA-GB */
  AantekeningCode: Scalars['String'];
  CertificeringID: Scalars['Int'];
  DatumAangemaakt?: Maybe<Scalars['Date']>;
  DatumGewijzigd?: Maybe<Scalars['Date']>;
  DatumPasAangemaakt?: Maybe<Scalars['Date']>;
  Opmerkingen?: Maybe<Scalars['String']>;
  PersoonIDAangemaakt?: Maybe<Scalars['Int']>;
  PersoonIDGewijzigd?: Maybe<Scalars['Int']>;
  VanafDatum: Scalars['Date'];
};

export enum CertificeringStatusEnum {
  DiplomaAfgekeurd = 'DiplomaAfgekeurd',
  Geldig = 'Geldig',
  Ingenomen = 'Ingenomen',
  Ingetrokken = 'Ingetrokken',
  TerGoedkeuring = 'TerGoedkeuring',
  Verlopen = 'Verlopen',
}

export type Comment = {
  __typename?: 'Comment';
  author?: Maybe<Scalars['String']>;
  comment?: Maybe<Scalars['String']>;
  dateOfComment?: Maybe<Scalars['Date']>;
  sort?: Maybe<Scalars['Int']>;
  source?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type Competentie = {
  __typename?: 'Competentie';
  Code: Scalars['String'];
  CompetentieID: Scalars['Int'];
  Naam: Scalars['String'];
  UniversiteitID?: Maybe<Scalars['Int']>;
};

export type Contactgegevens = {
  __typename?: 'Contactgegevens';
  Adresregel1: Scalars['String'];
  Adresregel2?: Maybe<Scalars['String']>;
  ContactgegevensID: Scalars['Int'];
  DisplayAddress?: Maybe<Scalars['String']>;
  DisplayPostalCodeCity?: Maybe<Scalars['String']>;
  DisplayStreetHouseNr?: Maybe<Scalars['String']>;
  Email?: Maybe<Scalars['String']>;
  EmailWerkgever?: Maybe<Scalars['String']>;
  Fax?: Maybe<Scalars['String']>;
  Huisnummer: Scalars['String'];
  HuisnummerToevoeging?: Maybe<Scalars['String']>;
  Land: Scalars['String'];
  Postcode: Scalars['String'];
  RekeningNummer?: Maybe<Scalars['String']>;
  Telefoon?: Maybe<Scalars['String']>;
  TerAttentieVan?: Maybe<Scalars['String']>;
  Website?: Maybe<Scalars['String']>;
  Woonplaats: Scalars['String'];
};

export type CreateCourseInput = {
  Begintijd: Scalars['Date'];
  Datum: Scalars['Date'];
  Docent?: InputMaybe<Scalars['SafeString']>;
  Eindtijd: Scalars['Date'];
  IsBesloten: Scalars['Boolean'];
  LokatieID: Scalars['Int'];
  MaximumCursisten: Scalars['Int'];
  Opmerkingen?: InputMaybe<Scalars['SafeString']>;
  Prijs: Scalars['Float'];
  Promotietekst: Scalars['SafeString'];
  Titel: Scalars['SafeString'];
  VakID: Scalars['Int'];
};

export type CreateInvoiceCollectionInput = {
  invoiceIds?: InputMaybe<Array<Scalars['Int']>>;
};

export type CreateInvoiceCollectionResult = {
  __typename?: 'CreateInvoiceCollectionResult';
  invoiceCollectionId?: Maybe<Scalars['Int']>;
  message?: Maybe<Scalars['String']>;
  success: Scalars['Boolean'];
};

export type CreatePasInput = {
  amount?: InputMaybe<Scalars['Int']>;
  createInvoice?: InputMaybe<Scalars['Boolean']>;
  licenseId: Scalars['Int'];
  recipient?: InputMaybe<Scalars['SafeString']>;
  remark?: InputMaybe<Scalars['SafeString']>;
  requestDate: Scalars['Date'];
};

export type CreatePasResult = {
  __typename?: 'CreatePasResult';
  Pas?: Maybe<Pas>;
  success: Scalars['Boolean'];
};

export enum CrediteurTypeEnum {
  Persoon = 'persoon',
  Universiteit = 'universiteit',
}

export type Cursus = {
  __typename?: 'Cursus';
  /**  Only available when sub query is available  */
  AantalCursusDeelnames?: Maybe<Scalars['Int']>;
  AantalDeelnamesAangemeld?: Maybe<Scalars['Int']>;
  AantalDeelnamesVerwerkt?: Maybe<Scalars['Int']>;
  /**  Only available when associated entity CursusDeelname is available  */
  AantalDeelnamesVoorlopig?: Maybe<Scalars['Int']>;
  AocKenmerk?: Maybe<Scalars['String']>;
  CursusCode?: Maybe<Scalars['String']>;
  CursusDeelnames?: Maybe<Array<Maybe<CursusDeelname>>>;
  CursusID: Scalars['Int'];
  CursusleiderID?: Maybe<Scalars['Int']>;
  DatumAangemaakt?: Maybe<Scalars['Date']>;
  DatumGewijzigd?: Maybe<Scalars['Date']>;
  ExamenCursusID?: Maybe<Scalars['Int']>;
  IsBesloten?: Maybe<Scalars['Boolean']>;
  MaximumCursisten?: Maybe<Scalars['Int']>;
  Opmerkingen?: Maybe<Scalars['String']>;
  PersoonIDAangemaakt?: Maybe<Scalars['Int']>;
  PersoonIDGewijzigd?: Maybe<Scalars['Int']>;
  Prijs?: Maybe<Scalars['Float']>;
  Promotietekst?: Maybe<Scalars['String']>;
  Sessies?: Maybe<Array<Maybe<Sessie>>>;
  Status: CursusStatusEnum;
  Titel?: Maybe<Scalars['String']>;
  Vak: Vak;
  VakID?: Maybe<Scalars['Int']>;
};

export type CursusDeelname = {
  __typename?: 'CursusDeelname';
  Certificering?: Maybe<Certificering>;
  CertificeringID?: Maybe<Scalars['Int']>;
  Cursus: Cursus;
  CursusDeelnameID: Scalars['Int'];
  CursusID: Scalars['Int'];
  DatumAangemaakt?: Maybe<Scalars['Date']>;
  Opmerkingen?: Maybe<Scalars['String']>;
  Persoon?: Maybe<Persoon>;
  PersoonID: Scalars['Int'];
  Status: CursusDeelnameStatusEnum;
};

export enum CursusDeelnameStatusEnum {
  Aangemeld = 'Aangemeld',
  Aanwezig = 'Aanwezig',
  Afgemeld = 'Afgemeld',
  Afgewezen = 'Afgewezen',
  Betaald = 'Betaald',
  Geregistreerd = 'Geregistreerd',
  Geslaagd = 'Geslaagd',
  GeslaagdPraktijkGezaktTheorie = 'GeslaagdPraktijk_GezaktTheorie',
  GeslaagdTheorieGezaktPraktijk = 'GeslaagdTheorie_GezaktPraktijk',
  Gezakt = 'Gezakt',
  Voorlopig = 'Voorlopig',
}

export type CursusNodes = {
  __typename?: 'CursusNodes';
  nodes?: Maybe<Array<Maybe<Cursus>>>;
  pageInfo?: Maybe<PageInfo>;
  totalCount: Scalars['Int'];
};

export type CursusSessie = {
  __typename?: 'CursusSessie';
  CanUnRegister: Scalars['Boolean'];
  Competence: Scalars['String'];
  CourseCode: Scalars['String'];
  CourseId: Scalars['Int'];
  Date: Scalars['Date'];
  Distance?: Maybe<Scalars['Int']>;
  EndTime: Scalars['String'];
  LocationAddress?: Maybe<LocationAddress>;
  LocationName: Scalars['String'];
  Organizer: Scalars['String'];
  OrganizerEmail?: Maybe<Scalars['String']>;
  OrganizerPhone?: Maybe<Scalars['String']>;
  OrganizerWebsite?: Maybe<Scalars['String']>;
  Price: Scalars['Float'];
  PromoText?: Maybe<Scalars['String']>;
  Registered: Scalars['Boolean'];
  RegisteredDate?: Maybe<Scalars['Date']>;
  SpecialtyId: Scalars['Int'];
  SpecialtyWebsite?: Maybe<Scalars['String']>;
  StartTime: Scalars['String'];
  Theme: Scalars['String'];
  Title: Scalars['String'];
};

export enum CursusStatusEnum {
  Betaald = 'Betaald',
  DeelnemersAangemeld = 'DeelnemersAangemeld',
  Goedgekeurd = 'Goedgekeurd',
  Voorlopig = 'Voorlopig',
}

export enum DebiteurTypeEnum {
  Exameninstelling = 'exameninstelling',
  Persoon = 'persoon',
  Universiteit = 'universiteit',
  Vakgroep = 'vakgroep',
}

export type DeclarationInvoiceCreatedResult = {
  __typename?: 'DeclarationInvoiceCreatedResult';
  FactuurNummer: Scalars['String'];
  InvoiceLink: Scalars['String'];
};

export type DeleteBijeenkomstInput = {
  CursusID?: InputMaybe<Scalars['Int']>;
};

export type DeleteBijeenkomstResult = {
  __typename?: 'DeleteBijeenkomstResult';
  success: Scalars['Boolean'];
};

export type DeleteExamInput = {
  CursusID?: InputMaybe<Scalars['Int']>;
};

export type DeleteExamResult = {
  __typename?: 'DeleteExamResult';
  success: Scalars['Boolean'];
};

export type DeletePersoonHandelshuisvestigingForPersoonIdInput = {
  PersoonHandelshuisVestigingID: Scalars['Int'];
};

export type DeletePersoonVakgroepForPersoonIdInput = {
  PersoonVakgroepID: Scalars['Int'];
};

export type DigitaalExamen = {
  __typename?: 'DigitaalExamen';
  AssementId: Scalars['String'];
  DigitaalExamenId: Scalars['Int'];
  ExamenNaam: Scalars['String'];
  ExamenType: Scalars['String'];
};

export type DiscussieVisitatie = {
  __typename?: 'DiscussieVisitatie';
  Commentaar?: Maybe<Scalars['String']>;
  DatumTijd?: Maybe<Scalars['Date']>;
  DiscussieVisitatieID: Scalars['Int'];
  IsAuteurInspecteur?: Maybe<Scalars['Boolean']>;
  IsAuteurVakgroep?: Maybe<Scalars['Boolean']>;
  Persoon?: Maybe<Persoon>;
  PersoonID?: Maybe<Scalars['Int']>;
  VakgroepID?: Maybe<Scalars['Int']>;
  VisitatieID: Scalars['Int'];
};

export type Exam = {
  __typename?: 'Exam';
  Cursus?: Maybe<Cursus>;
  Vaknorm?: Maybe<Vaknorm>;
};

export type ExamenInstelling = {
  __typename?: 'ExamenInstelling';
  Code: Scalars['String'];
  Contactgegevens: Contactgegevens;
  ExamenInstellingID: Scalars['Int'];
  Examinator: Examinator;
  IsActief: Scalars['Boolean'];
  IsBtwPlichtig: Scalars['Boolean'];
  Naam: Scalars['String'];
};

export type ExamenInstellingLink = {
  __typename?: 'ExamenInstellingLink';
  Actief: Scalars['Boolean'];
  ExamenInstelling?: Maybe<ExamenInstelling>;
  ExamenInstellingID: Scalars['Int'];
  ExaminatorID: Scalars['Int'];
  PersoonID: Scalars['Int'];
};

export type Examinator = {
  __typename?: 'Examinator';
  Actief: Scalars['Boolean'];
  ExamenInstelling?: Maybe<ExamenInstelling>;
  ExamenInstellingID: Scalars['Int'];
  ExaminatorID: Scalars['Int'];
  Persoon?: Maybe<Persoon>;
  PersoonID: Scalars['Int'];
};

export enum FactuurHistorieStatusEnum {
  Aangemaakt = 'Aangemaakt',
  Betaald = 'Betaald',
  Creditfactuur = 'Creditfactuur',
  DoorBeAfgehandeld = 'Door_BE_Afgehandeld',
  Oninbaar = 'Oninbaar',
  OnjuistAangemaakt = 'OnjuistAangemaakt',
}

export type FactuurNodes = {
  __typename?: 'FactuurNodes';
  nodes?: Maybe<Array<Maybe<Invoice>>>;
  pageInfo?: Maybe<PageInfo>;
  totalCount: Scalars['Int'];
};

export type File = {
  __typename?: 'File';
  encoding: Scalars['String'];
  filename: Scalars['String'];
  id: Scalars['ID'];
  mimetype: Scalars['String'];
  path: Scalars['String'];
};

export type FilterInvoicesInput = {
  CrediteurID?: InputMaybe<Scalars['Int']>;
  CrediteurType?: InputMaybe<Scalars['SafeString']>;
  CursusCode?: InputMaybe<Scalars['SafeString']>;
  DebiteurID?: InputMaybe<Scalars['Int']>;
  DebiteurType?: InputMaybe<DebiteurTypeEnum>;
  ExamenInstellingID?: InputMaybe<Scalars['Int']>;
  FactuurNummer?: InputMaybe<Scalars['SafeString']>;
  ForReviewersOnly?: InputMaybe<Scalars['Boolean']>;
  FromDate?: InputMaybe<Scalars['Date']>;
  InvoiceCollectionFilter?: InputMaybe<InvoiceCollectionsFilterEnum>;
  InvoiceStatusFilterList?: InputMaybe<Array<InputMaybe<Scalars['SafeString']>>>;
  PaymentStatus?: InputMaybe<PaymentStatusEnum>;
  ToDate?: InputMaybe<Scalars['Date']>;
  VakgroepID?: InputMaybe<Scalars['Int']>;
};

export type GetInspectionPlanningInput = {
  isInspector: Scalars['Boolean'];
  isRector: Scalars['Boolean'];
  plannable: Scalars['Boolean'];
  shouldOnlyBePlanned: Scalars['Boolean'];
  showStatsForPeriod: Scalars['Boolean'];
  startDate: Scalars['Date'];
  targetSettings: TargetSettings;
};

export type GetInspectionReportsInput = {
  competentieId: Scalars['Int'];
  datumVisitatieTot: Scalars['Date'];
  datumVisitatieVan: Scalars['Date'];
  examenInstellingId: Scalars['Int'];
  inspecteurId: Scalars['Int'];
  rapportCijfer: Scalars['Int'];
  themaId: Scalars['Int'];
  vakId: Scalars['Int'];
  vakgroepId: Scalars['Int'];
  volgensIntentieAanbod: Scalars['Int'];
};

export type Handelshuis = {
  __typename?: 'Handelshuis';
  ApiKey?: Maybe<Scalars['String']>;
  CDGdeelnemer?: Maybe<Scalars['Boolean']>;
  CdgBedrijfId?: Maybe<Scalars['Int']>;
  Code: Scalars['String'];
  Contactgegevens: Contactgegevens;
  ContactgegevensID: Scalars['Int'];
  EindDatumCertificaat?: Maybe<Scalars['Date']>;
  GegevensVerzamelen: Scalars['Boolean'];
  HandelshuisID: Scalars['Int'];
  IsActief: Scalars['Boolean'];
  IsBtwPlichtig: Scalars['Boolean'];
  Naam: Scalars['String'];
  UniversiteitID: Scalars['Int'];
  VKLHandel?: Maybe<Scalars['Boolean']>;
  WebserviceEnabled: Scalars['Boolean'];
};

export type HandelshuisVestiging = {
  __typename?: 'HandelshuisVestiging';
  CDGdeelnemer?: Maybe<Scalars['Boolean']>;
  CdgBedrijfId?: Maybe<Scalars['Int']>;
  CdgNevenvestigingId?: Maybe<Scalars['Int']>;
  Code: Scalars['String'];
  Contactgegevens: Contactgegevens;
  ContactgegevensID: Scalars['Int'];
  HandelshuisID: Scalars['Int'];
  HandelshuisVestigingID: Scalars['Int'];
  IsActief: Scalars['Boolean'];
  IsBtwPlichtig: Scalars['Boolean'];
  IsHoofdVestiging: Scalars['Boolean'];
  Naam: Scalars['String'];
  VKLHandel?: Maybe<Scalars['Boolean']>;
};

export enum InkoopVerkoopEnum {
  Inkoop = 'INKOOP',
  Verkoop = 'VERKOOP',
}

export type InsertPersoonHandelshuisvestigingForPersoonIdInput = {
  DebiteurNr?: InputMaybe<Scalars['SafeString']>;
  HandelshuisVestigingID: Scalars['Int'];
};

export type InsertPersoonVakgroepForPersoonIdInput = {
  DebiteurNr?: InputMaybe<Scalars['SafeString']>;
  VakgroepID: Scalars['Int'];
};

export type InspectionPlanningData = {
  __typename?: 'InspectionPlanningData';
  NrOfDaysSinceLastVisit?: Maybe<Scalars['Int']>;
  OrganizerTargetActual: Scalars['Float'];
  SessieData: PlanningData;
  ShouldBeVisited: Scalars['Boolean'];
  SpecialtyTargetActual: Scalars['Float'];
};

export type InspectionResult = {
  __typename?: 'InspectionResult';
  InspectionStatisticsOverall?: Maybe<VisitingData>;
  PlanningData: Array<Maybe<InspectionPlanningData>>;
  StatisticsPerOrganizer?: Maybe<Array<Maybe<StatisticsPerOrganizer>>>;
};

export type Inspector = {
  __typename?: 'Inspector';
  id: Scalars['Int'];
  name: Scalars['String'];
};

export type Invoice = {
  __typename?: 'Invoice';
  BedragExBtw: Scalars['Float'];
  BedragIncBtw: Scalars['Float'];
  BtwBedrag: Scalars['Float'];
  CreditFactuurID?: Maybe<Scalars['Int']>;
  CreditFactuurNummer?: Maybe<Scalars['String']>;
  CreditInvoiceLink?: Maybe<Scalars['String']>;
  CrediteurID: Scalars['Int'];
  CrediteurType: Scalars['String'];
  CursusCode: Scalars['String'];
  DebiteurID: Scalars['Int'];
  DebiteurNaam: Scalars['String'];
  DebiteurType: DebiteurTypeEnum;
  FactuurDatum: Scalars['Date'];
  FactuurID: Scalars['Int'];
  FactuurJaar: Scalars['Int'];
  FactuurNummer: Scalars['String'];
  FactuurStatus: Scalars['String'];
  InVerzamelfactuur: Scalars['Int'];
  InvoiceLink: Scalars['String'];
  IsBetaald: Scalars['Boolean'];
  IsCreditFactuur?: Maybe<Scalars['Boolean']>;
  Kenmerk?: Maybe<Scalars['String']>;
  KenmerkJaarFactuurNummer: Scalars['String'];
  OrigineleFactuurID?: Maybe<Scalars['Int']>;
  OrigineleFactuurNummer?: Maybe<Scalars['String']>;
  OrigineleInvoiceLink?: Maybe<Scalars['String']>;
  ProductCode: Scalars['String'];
  ProductNaam: Scalars['String'];
  StatusOpmerkingen?: Maybe<Scalars['String']>;
  VerzamelFactuurBTWBedrag: Scalars['Float'];
  VerzamelFactuurBedrag: Scalars['Float'];
  VerzamelFactuurDatum?: Maybe<Scalars['Date']>;
  VerzamelFactuurDatumBetaald?: Maybe<Scalars['Date']>;
  VerzamelFactuurID: Scalars['Int'];
  VerzamelFactuurIsBetaald: Scalars['Boolean'];
  VerzamelFactuurOpmerking?: Maybe<Scalars['String']>;
};

export enum InvoiceCollectionsFilterEnum {
  Both = 'BOTH',
  InvoiceCollections = 'INVOICE_COLLECTIONS',
  NormalInvoices = 'NORMAL_INVOICES',
}

export type Kennisgebied = {
  __typename?: 'Kennisgebied';
  KennisgebiedID: Scalars['Int'];
  Naam: Scalars['String'];
  UniversiteitID?: Maybe<Scalars['Int']>;
};

export type Landen = {
  __typename?: 'Landen';
  Text: Scalars['String'];
  Value: Scalars['String'];
};

export type LastVisitData = {
  __typename?: 'LastVisitData';
  AccordingIntention?: Maybe<Scalars['Boolean']>;
  InspectorId?: Maybe<Scalars['Int']>;
  ReportCreatedDate?: Maybe<Scalars['Date']>;
  ReportGrade?: Maybe<Scalars['Float']>;
  VisitedDate?: Maybe<Scalars['Date']>;
};

export type LocationAddress = {
  __typename?: 'LocationAddress';
  City?: Maybe<Scalars['String']>;
  Email?: Maybe<Scalars['String']>;
  HouseNr: Scalars['String'];
  HouseNrExtension?: Maybe<Scalars['String']>;
  Street: Scalars['String'];
  Website?: Maybe<Scalars['String']>;
  Zipcode?: Maybe<Scalars['String']>;
};

export type Lokatie = {
  __typename?: 'Lokatie';
  Contactgegevens: Contactgegevens;
  ContactgegevensID?: Maybe<Scalars['Int']>;
  ExamenInstellingID?: Maybe<Scalars['Int']>;
  IsActief: Scalars['Boolean'];
  LokatieID: Scalars['Int'];
  Naam: Scalars['String'];
  Routebeschrijving: Scalars['String'];
  VakgroepID?: Maybe<Scalars['Int']>;
};

export type Monitor = {
  __typename?: 'Monitor';
  Achternaam: Scalars['SafeString'];
  Email: Scalars['Email'];
  ExamenInstellingID: Scalars['Int'];
  Geslacht: Scalars['SafeString'];
  MonitorID: Scalars['Int'];
  SortableFullName?: Maybe<Scalars['SafeString']>;
  Tussenvoegsel?: Maybe<Scalars['SafeString']>;
  Voornaam: Scalars['SafeString'];
};

export type MultiUploadResult = {
  __typename?: 'MultiUploadResult';
  result: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  DeletePersoonHandelshuisvestigingForPersoonId: Scalars['Boolean'];
  DeletePersoonVakgroepForPersoonId: Scalars['Boolean'];
  InsertPersoonHandelshuisvestigingForPersoonId: PersoonHandelshuisVestiging;
  InsertPersoonVakgroepForPersoonId: PersoonVakgroep;
  UpdatePersoonHandelshuisvestigingForPersoonId: PersoonHandelshuisVestiging;
  UpdatePersoonVakgroepForPersoonId: PersoonVakgroep;
  addVisitationComment?: Maybe<DiscussieVisitatie>;
  assignMonitor?: Maybe<Scalars['Boolean']>;
  authenticate?: Maybe<AuthenticateResult>;
  /**
   * Checks if person exists in the database by bsn and birth date and if not,
   * checks the person in the GBA
   */
  checkForExistingPersonByBsn?: Maybe<CheckForExistingPersonByBsnResult>;
  /** Checks if the person exists by initials, last name and birth date in the database */
  checkForExistingPersonByPersonData?: Maybe<CheckForExistingPersonByPersonDataResult>;
  createCourse?: Maybe<Cursus>;
  createDeclarationInvoice: DeclarationInvoiceCreatedResult;
  createDuplicateCardWithoutInvoice: Scalars['Boolean'];
  createInvoiceCollection: CreateInvoiceCollectionResult;
  /** The createLicense mutation is used to create a new license and a card for a person */
  createLicense: Certificering;
  createPas?: Maybe<CreatePasResult>;
  /** The `decoupleLicense` can be used to decouple an XX + KBA license */
  decoupleLicense: DecoupleLicenseResult;
  deleteBijeenkomst?: Maybe<DeleteBijeenkomstResult>;
  deleteExam?: Maybe<DeleteExamResult>;
  logout: Scalars['Boolean'];
  /** Manually start processing of graduates */
  manuallyProcessGraduates: ManuallyProcessGraduatesResult;
  multiUpload: MultiUploadResult;
  multipleUpload: Array<File>;
  regenerateAccessToken?: Maybe<RegenerateAccessTokenResult>;
  registerCardReturn: Scalars['Boolean'];
  /** Register for course */
  registerForCourse: RegisterResult;
  registerForCourseByHoogleraar: RegisterResult;
  removeBijeenkomstParticipant?: Maybe<RemoveBijeenkomstParticipantResult>;
  removeParticipant?: Maybe<RemoveParticipantResult>;
  /** The `requestDuplicate` can be used to request a license card duplicate */
  requestDuplicate: RequestDuplicateResult;
  /** The `requestLicense` can be used to request a certificate */
  requestLicense: RequestLicenseResult;
  saveBijeenkomst?: Maybe<SaveBijeenkomstResult>;
  saveExam?: Maybe<SaveExamResult>;
  /** Create or update a location */
  saveLocation: Lokatie;
  /** Create or update a monitor */
  saveMonitor: Monitor;
  singleUpload: File;
  submitBijeenkomstParticipants?: Maybe<SubmitBijeenkomstParticipantsResult>;
  submitParticipants?: Maybe<SubmitParticipantsResult>;
  submitToRemindo?: Maybe<SubmitToRemindoResult>;
  /** Un-register for course. Input is CursusDeelnameID */
  unRegisterForCourse: UnRegisterResult;
  unRegisterForCourseByCourseId: UnRegisterResult;
  unassignMonitor?: Maybe<Scalars['Boolean']>;
  unregisterForCourseByHoogleraar: UnRegisterResult;
  updateContactgegevens?: Maybe<Contactgegevens>;
  updateInvoiceStatus: UpdateInvoiceStatusResult;
  updatePlanning: UpdatePlanningResult;
  updateVisitationReport: Visitatie;
  uploadBijeenkomstParticipantsExcel?: Maybe<UploadBijeenkomstParticipantsExcelResult>;
  uploadParticipantsExcel?: Maybe<UploadParticipantsExcelResult>;
};

export type MutationDeletePersoonHandelshuisvestigingForPersoonIdArgs = {
  input: DeletePersoonHandelshuisvestigingForPersoonIdInput;
};

export type MutationDeletePersoonVakgroepForPersoonIdArgs = {
  input: DeletePersoonVakgroepForPersoonIdInput;
};

export type MutationInsertPersoonHandelshuisvestigingForPersoonIdArgs = {
  input: InsertPersoonHandelshuisvestigingForPersoonIdInput;
};

export type MutationInsertPersoonVakgroepForPersoonIdArgs = {
  input: InsertPersoonVakgroepForPersoonIdInput;
};

export type MutationUpdatePersoonHandelshuisvestigingForPersoonIdArgs = {
  input: UpdatePersoonHandelshuisvestigingForPersoonIdInput;
};

export type MutationUpdatePersoonVakgroepForPersoonIdArgs = {
  input: UpdatePersoonVakgroepForPersoonIdInput;
};

export type MutationAddVisitationCommentArgs = {
  input: AddVisitationCommentInput;
};

export type MutationAssignMonitorArgs = {
  input: AssignMonitorInput;
};

export type MutationAuthenticateArgs = {
  input: AuthenticateInput;
};

export type MutationCheckForExistingPersonByBsnArgs = {
  birthDate: Scalars['Date'];
  bsn: Scalars['Int'];
};

export type MutationCheckForExistingPersonByPersonDataArgs = {
  birthDate: Scalars['Date'];
  initials: Scalars['String'];
  lastName: Scalars['String'];
};

export type MutationCreateCourseArgs = {
  input: CreateCourseInput;
};

export type MutationCreateDeclarationInvoiceArgs = {
  input: CreateDeclarationInvoiceInput;
};

export type MutationCreateDuplicateCardWithoutInvoiceArgs = {
  pasId: Scalars['Int'];
};

export type MutationCreateInvoiceCollectionArgs = {
  input: CreateInvoiceCollectionInput;
};

export type MutationCreateLicenseArgs = {
  input: CreateLicenseInput;
};

export type MutationCreatePasArgs = {
  input: CreatePasInput;
};

export type MutationDecoupleLicenseArgs = {
  input: DecoupleLicenseInput;
};

export type MutationDeleteBijeenkomstArgs = {
  input: DeleteBijeenkomstInput;
};

export type MutationDeleteExamArgs = {
  input: DeleteExamInput;
};

export type MutationMultiUploadArgs = {
  file1: Scalars['Upload'];
  file2: Scalars['Upload'];
};

export type MutationMultipleUploadArgs = {
  files: Array<Scalars['Upload']>;
};

export type MutationRegenerateAccessTokenArgs = {
  refreshToken: Scalars['String'];
};

export type MutationRegisterCardReturnArgs = {
  input: RegisterCardReturnInput;
};

export type MutationRegisterForCourseArgs = {
  input: RegisterForCourseInput;
};

export type MutationRegisterForCourseByHoogleraarArgs = {
  input: RegisterForCourseByHoogleraarInput;
};

export type MutationRemoveBijeenkomstParticipantArgs = {
  input: RemoveBijeenkomstParticipantInput;
};

export type MutationRemoveParticipantArgs = {
  input: RemoveParticipantInput;
};

export type MutationRequestDuplicateArgs = {
  input: RequestDuplicateInput;
};

export type MutationRequestLicenseArgs = {
  createPersonByBsnInput?: InputMaybe<CreatePersonByBsn>;
  createPersonByPersonDataInput?: InputMaybe<CreatePersonByPersonData>;
  input: RequestLicenseInput;
  personDataInput?: InputMaybe<BasicPersonData>;
};

export type MutationSaveBijeenkomstArgs = {
  input: SaveBijeenkomstInput;
};

export type MutationSaveExamArgs = {
  input: SaveExamInput;
};

export type MutationSaveLocationArgs = {
  input: SaveLocationInput;
};

export type MutationSaveMonitorArgs = {
  input: SaveMonitorInput;
};

export type MutationSingleUploadArgs = {
  file: Scalars['Upload'];
};

export type MutationSubmitBijeenkomstParticipantsArgs = {
  input: SubmitBijeenkomstParticipantsInput;
};

export type MutationSubmitParticipantsArgs = {
  input: SubmitParticipantsInput;
};

export type MutationSubmitToRemindoArgs = {
  input: SubmitToRemindoInput;
};

export type MutationUnRegisterForCourseArgs = {
  CursusDeelnameID: Scalars['Int'];
};

export type MutationUnRegisterForCourseByCourseIdArgs = {
  input: UnRegisterForCourseByCourseIdInput;
};

export type MutationUnassignMonitorArgs = {
  input: UnassignMonitorInput;
};

export type MutationUnregisterForCourseByHoogleraarArgs = {
  input: UnregisterForCourseByHoogleraarInput;
};

export type MutationUpdateContactgegevensArgs = {
  input: UpdateContactgegevensInput;
};

export type MutationUpdateInvoiceStatusArgs = {
  input: UpdateInvoiceStatusInput;
};

export type MutationUpdatePlanningArgs = {
  inspectorId: Scalars['Int'];
  sessieId: Scalars['Int'];
  visitDate: Scalars['Date'];
};

export type MutationUpdateVisitationReportArgs = {
  input: UpdateVisitationReportInput;
};

export type MutationUploadBijeenkomstParticipantsExcelArgs = {
  input: UploadBijeenkomstParticipantsExcelInput;
};

export type MutationUploadParticipantsExcelArgs = {
  input: UploadParticipantsExcelInput;
};

export type My = {
  __typename?: 'My';
  AangemeldeCursusDeelnames?: Maybe<Array<Maybe<AangemeldeCursusDeelname>>>;
  AangemeldeCursusDeelnamesPerCertificeringId?: Maybe<Array<Maybe<CursusDeelname>>>;
  /**
   * Fetches only current licenses when 'alleenGeldig' is true.
   * When false (default), fetches all licenses.
   * 'perDatum' sets the date that the licenses should be valid (default today)
   */
  Certificeringen?: Maybe<Array<Maybe<Certificering>>>;
  CursusDeelnames?: Maybe<Array<Maybe<CursusDeelname>>>;
  /** Link to exameninstelling(en), via Examinator table */
  ExamenInstellingLinks?: Maybe<Array<Maybe<ExamenInstellingLink>>>;
  Persoon: Persoon;
  Roles?: Maybe<Array<Maybe<Scalars['String']>>>;
  Studieresultaten?: Maybe<Array<Maybe<Studieresultaat>>>;
  StudyProgress: Array<StudyProgress>;
  /** Link to vakgroep(en), via Hoogleraar table */
  VakgroepLinks?: Maybe<Array<Maybe<VakgroepLink>>>;
  personId: Scalars['Int'];
};

export type MyAangemeldeCursusDeelnamesPerCertificeringIdArgs = {
  certificeringId: Scalars['Int'];
};

export type MyCertificeringenArgs = {
  alleenGeldig?: InputMaybe<Scalars['Boolean']>;
  inclusiefPassen?: InputMaybe<Scalars['Boolean']>;
  perDatum?: InputMaybe<Scalars['Date']>;
};

export type MyCursusDeelnamesArgs = {
  certificeringId?: InputMaybe<Scalars['Int']>;
};

export type MyExamenInstellingLinksArgs = {
  activeOnly?: InputMaybe<Scalars['Boolean']>;
};

export type MyStudieresultatenArgs = {
  certificeringId?: InputMaybe<Scalars['Int']>;
  fullDetails?: InputMaybe<Scalars['Boolean']>;
  isExamen?: InputMaybe<Scalars['Boolean']>;
};

export type MyStudyProgressArgs = {
  skipParticipationDetails?: InputMaybe<Scalars['Boolean']>;
};

export type MyVakgroepLinksArgs = {
  activeOnly?: InputMaybe<Scalars['Boolean']>;
};

export type Nationaliteiten = {
  __typename?: 'Nationaliteiten';
  Text: Scalars['String'];
  Value: Scalars['String'];
};

export type NormVersie = {
  __typename?: 'NormVersie';
  BeginDatum?: Maybe<Scalars['Date']>;
  Definitief?: Maybe<Scalars['Boolean']>;
  EindDatum?: Maybe<Scalars['Date']>;
  NormVersieID: Scalars['Int'];
  Opmerkingen?: Maybe<Scalars['String']>;
  UniversiteitID?: Maybe<Scalars['Int']>;
  Versienummer?: Maybe<Scalars['String']>;
};

export type OrderByArgs = {
  field: Scalars['String'];
  sortDirection: SortDirectionEnum;
};

export type PageInfo = {
  __typename?: 'PageInfo';
  hasNextPage?: Maybe<Scalars['Boolean']>;
  hasPreviousPage?: Maybe<Scalars['Boolean']>;
};

export type ParticipationPoint = {
  __typename?: 'ParticipationPoint';
  CountedPoints: Scalars['Int'];
  DonePoints: Scalars['Int'];
  RequiredPoints: Scalars['Int'];
  ThemaId: Scalars['Int'];
  ThemaNaam: Scalars['String'];
};

export type Pas = {
  __typename?: 'Pas';
  Aantal: Scalars['Int'];
  BriefVerstuurd: Scalars['Boolean'];
  CertificeringID: Scalars['Int'];
  ContactgegevensID?: Maybe<Scalars['Int']>;
  DatumAanvraag: Scalars['Date'];
  DatumUitgeleverd?: Maybe<Scalars['Date']>;
  Geadresseerde?: Maybe<Scalars['String']>;
  Licentie?: Maybe<Certificering>;
  PasAdres?: Maybe<Contactgegevens>;
  PasID: Scalars['Int'];
  PasRetouren?: Maybe<Array<Maybe<PasRetour>>>;
  Status: PasStatusEnum;
};

export type PasRetour = {
  __typename?: 'PasRetour';
  AangemaaktDoor: Scalars['String'];
  DatumAangemaakt: Scalars['Date'];
  DatumRetour: Scalars['Date'];
  PasID: Scalars['Int'];
  PasRetourID: Scalars['Int'];
};

export enum PasStatusEnum {
  Aangevraagd = 'Aangevraagd',
  Betaald = 'Betaald',
  Error = 'Error',
  OnHold = 'OnHold',
  Uitgeleverd = 'Uitgeleverd',
}

export enum PaymentStatusEnum {
  All = 'ALL',
  NotPaid = 'NOT_PAID',
  Paid = 'PAID',
}

export type Persoon = {
  __typename?: 'Persoon';
  Achternaam: Scalars['String'];
  Actief?: Maybe<Scalars['Boolean']>;
  BSN?: Maybe<Scalars['Int']>;
  /** Fetches all licenses */
  Certificeringen?: Maybe<Array<Maybe<Certificering>>>;
  /** Gets the contact data */
  Contactgegevens: Contactgegevens;
  CursusDeelname?: Maybe<Array<Maybe<CursusDeelname>>>;
  /** Name in format 'Voorletters [tussenvoegsel] Achternaam */
  FullName?: Maybe<Scalars['String']>;
  GbaNummer: Scalars['String'];
  GbaUpdate?: Maybe<Scalars['Date']>;
  Geboortedatum?: Maybe<Scalars['Date']>;
  Geslacht: Scalars['String'];
  IsGbaGeregistreerd?: Maybe<Scalars['Boolean']>;
  Nationaliteit: Scalars['String'];
  PersoonID: Scalars['Int'];
  Roepnaam: Scalars['String'];
  /** Name in format 'Achternaam, Voorletters [tussenvoegsel]' */
  SortableFullName?: Maybe<Scalars['String']>;
  Tussenvoegsel: Scalars['String'];
  Voorletters: Scalars['String'];
};

export type PersoonCertificeringenArgs = {
  alleenGeldig?: InputMaybe<Scalars['Boolean']>;
  perDatum?: InputMaybe<Scalars['Date']>;
};

export type PersoonHandelshuisVestiging = {
  __typename?: 'PersoonHandelshuisVestiging';
  DebiteurNr?: Maybe<Scalars['String']>;
  HandelshuisVestiging: HandelshuisVestiging;
  HandelshuisVestigingID: Scalars['Int'];
  Persoon: Persoon;
  PersoonHandelshuisVestigingID: Scalars['Int'];
  PersoonID: Scalars['Int'];
};

export type PersoonVakgroep = {
  __typename?: 'PersoonVakgroep';
  DebiteurNr?: Maybe<Scalars['String']>;
  Persoon: Persoon;
  PersoonID: Scalars['Int'];
  PersoonVakgroepID: Scalars['Int'];
  Vakgroep: Vakgroep;
  VakgroepID: Scalars['Int'];
};

export type PlanningData = {
  __typename?: 'PlanningData';
  BeginDatum: Scalars['Date'];
  BeginDatumTijd?: Maybe<Scalars['Date']>;
  Begintijd?: Maybe<Scalars['String']>;
  CursusCode?: Maybe<Scalars['Int']>;
  CursusID: Scalars['Int'];
  CursusStatus?: Maybe<Scalars['String']>;
  DatumRapport?: Maybe<Scalars['Date']>;
  DatumVisitatie?: Maybe<Scalars['Date']>;
  Eindtijd?: Maybe<Scalars['String']>;
  InstellingID: Scalars['Int'];
  InstellingNaam: Scalars['String'];
  LocatieID?: Maybe<Scalars['Int']>;
  LocatieToevoeging?: Maybe<Scalars['String']>;
  Naam?: Maybe<Scalars['String']>;
  PersoonID?: Maybe<Scalars['Int']>;
  Rapportcijfer?: Maybe<Scalars['Int']>;
  SessieID: Scalars['Int'];
  SessieType?: Maybe<Scalars['String']>;
  Titel?: Maybe<Scalars['String']>;
  VakID: Scalars['Int'];
  VakType: Scalars['String'];
  VisitatieID?: Maybe<Scalars['Int']>;
  VisitatieStatus?: Maybe<Scalars['String']>;
  VolgensIntentieAanbod?: Maybe<Scalars['Boolean']>;
  Woonplaats?: Maybe<Scalars['String']>;
};

export enum ProductConfiguratieCodeEnum {
  Ad = 'AD',
  Aeikg = 'AEIKG',
  Aekg = 'AEKG',
  Aekt = 'AEKT',
  Beec = 'BEEC',
  Beke = 'BEKE',
  Bevi = 'BEVI',
  D1 = 'D1',
  D2 = 'D2',
  D3 = 'D3',
  D4 = 'D4',
  Detk = 'DETK',
  Mgeg = 'MGEG',
  Mgegi = 'MGEGI',
  Mgek = 'MGEK',
  Mgeki = 'MGEKI',
  Mgem = 'MGEM',
  Mgemi = 'MGEMI',
}

export enum ProductEnum {
  D1 = 'D1',
  D2 = 'D2',
  D3 = 'D3',
  D4 = 'D4',
}

export type Query = {
  __typename?: 'Query';
  BijeenkomstDetails?: Maybe<Bijeenkomst>;
  BijeenkomstenList?: Maybe<CursusNodes>;
  Certificaten?: Maybe<Array<Maybe<Certificaat>>>;
  Certificering?: Maybe<Certificering>;
  Certificeringen?: Maybe<Array<Maybe<Certificering>>>;
  Competenties: Array<Maybe<Competentie>>;
  Contactgegevens?: Maybe<Contactgegevens>;
  CursusDeelnameDetails?: Maybe<CursusDeelname>;
  CursusDeelnames?: Maybe<Array<Maybe<CursusDeelname>>>;
  CursusSessies?: Maybe<Array<Maybe<CursusSessie>>>;
  ExamDetails?: Maybe<Exam>;
  ExamSpecialties?: Maybe<Array<Maybe<Vak>>>;
  ExamenInstellingen: Array<Maybe<ExamenInstelling>>;
  Exams?: Maybe<CursusNodes>;
  GetCursusDeelnemer?: Maybe<Persoon>;
  GetCursusDeelnemers?: Maybe<Array<Maybe<CursusDeelname>>>;
  GetCursusInfoForHoogleraar?: Maybe<Cursus>;
  GetCursusSessiesForHoogleraar?: Maybe<Array<Maybe<Sessie>>>;
  GetHandelshuisVestigingen: Array<Maybe<HandelshuisVestiging>>;
  GetHandelshuizen: Array<Maybe<Handelshuis>>;
  GetPersoonHandelshuisvestigingenForPersoonId: Array<Maybe<PersoonHandelshuisVestiging>>;
  GetPersoonVakgroepenForPersoonId: Array<Maybe<PersoonVakgroep>>;
  Kennisgebieden: Array<Maybe<Kennisgebied>>;
  Landen: Array<Maybe<Landen>>;
  Nationaliteiten: Array<Maybe<Nationaliteiten>>;
  Persoon?: Maybe<Persoon>;
  SearchCursusDeelnemers?: Maybe<Array<Maybe<Persoon>>>;
  SearchExamOrganizers?: Maybe<Array<Maybe<SearchExamOrganizerResult>>>;
  SearchLocations?: Maybe<Array<Maybe<Lokatie>>>;
  SearchMonitors?: Maybe<Array<Maybe<Monitor>>>;
  SearchOrganizers?: Maybe<Array<Maybe<SearchOrganizerResult>>>;
  SearchSpecialties?: Maybe<Array<Maybe<SearchSpecialtyResult>>>;
  Sessie?: Maybe<Sessie>;
  Specialties?: Maybe<Array<Maybe<Vak>>>;
  Specialty?: Maybe<Vak>;
  Themas: Array<Maybe<Thema>>;
  Vakgroepen: Array<Maybe<Vakgroep>>;
  Visitation?: Maybe<Visitatie>;
  VisitationDeclaration?: Maybe<VisitationDeclaration>;
  Visitations?: Maybe<VisitationInfoNodes>;
  /**
   * Gets a list of all available pre educations (vooropleidingen)
   * Optionally pass a array of codes (similar in vooropleiding.code) to filter the list (i.e. ["30.00", "30.01"])
   */
  Vooropleidingen: Array<Maybe<Vooropleiding>>;
  /** Gets an array of Certificate's by the code of the pre-education (vooropleiding) */
  certificatesByPreEducation: Array<Maybe<Certificaat>>;
  getInspectionPlanning?: Maybe<InspectionResult>;
  getInspectionReports?: Maybe<Array<Maybe<Visitatie>>>;
  getInspectors?: Maybe<Array<Maybe<Inspector>>>;
  getStudyProgressByLicenseId: StudyProgress;
  getStudyProgressByLicenseNumber: StudyProgress;
  getStudyProgressByPersonId: Array<StudyProgress>;
  hasDuplicatePending: Scalars['Boolean'];
  invoices: FactuurNodes;
  /** In the input, either specialtyId or courseId must be supplied */
  isLicenseValidForSpecialty: IsLicenseValidForSpecialtyResult;
  /** Fetches data of the current logged in person */
  my?: Maybe<My>;
  /** Get all pre education categories ordered by ID */
  preEducationCategories: Array<Maybe<VooropleidingCategorie>>;
  searchCard?: Maybe<Certificering>;
  tariefByCertificaatCode?: Maybe<TotaalExtBtwTarief>;
  tariefDuplicaat?: Maybe<TotaalExtBtwTarief>;
  uploads?: Maybe<Array<Maybe<File>>>;
};

export type QueryBijeenkomstDetailsArgs = {
  input: SearchBijeenkomstInput;
};

export type QueryBijeenkomstenListArgs = {
  input: BijeenkomstenListInput;
};

export type QueryCertificatenArgs = {
  idList?: InputMaybe<Array<Scalars['Int']>>;
};

export type QueryCertificeringArgs = {
  certificeringId: Scalars['Int'];
};

export type QueryCertificeringenArgs = {
  personId: Scalars['Int'];
};

export type QueryContactgegevensArgs = {
  ContactgegevensID: Scalars['Int'];
};

export type QueryCursusDeelnameDetailsArgs = {
  cursusDeelnameId: Scalars['Int'];
};

export type QueryCursusDeelnamesArgs = {
  certificeringId?: InputMaybe<Scalars['Int']>;
};

export type QueryCursusSessiesArgs = {
  input: SearchCourseSessionsInput;
};

export type QueryExamDetailsArgs = {
  input: SearchExamInput;
};

export type QueryExamSpecialtiesArgs = {
  input: ExamSpecialtiesInput;
};

export type QueryExamenInstellingenArgs = {
  findById?: InputMaybe<Scalars['Int']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
};

export type QueryExamsArgs = {
  input: ExamsInput;
};

export type QueryGetCursusDeelnemerArgs = {
  input?: InputMaybe<GetCursusDeelnemerInput>;
};

export type QueryGetCursusDeelnemersArgs = {
  input?: InputMaybe<GetCursusDeelnemersInput>;
};

export type QueryGetCursusInfoForHoogleraarArgs = {
  input?: InputMaybe<GetCursusInfoForHoogleraarInput>;
};

export type QueryGetCursusSessiesForHoogleraarArgs = {
  input?: InputMaybe<CursusSessiesForHoogleraarInput>;
};

export type QueryGetHandelshuisVestigingenArgs = {
  findById?: InputMaybe<Scalars['Int']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
};

export type QueryGetHandelshuizenArgs = {
  findById?: InputMaybe<Scalars['Int']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
};

export type QueryPersoonArgs = {
  PersoonID: Scalars['Int'];
};

export type QuerySearchCursusDeelnemersArgs = {
  input?: InputMaybe<SearchCursusDeelnemersInput>;
};

export type QuerySearchLocationsArgs = {
  input: SearchLocationsInput;
};

export type QuerySearchMonitorsArgs = {
  input: SearchMonitorsInput;
};

export type QuerySearchSpecialtiesArgs = {
  input: SearchSpecialtyInput;
};

export type QuerySessieArgs = {
  sessieId: Scalars['Int'];
};

export type QuerySpecialtiesArgs = {
  input: SpecialtiesInput;
};

export type QuerySpecialtyArgs = {
  fullDetails?: InputMaybe<Scalars['Boolean']>;
  vakId: Scalars['Int'];
};

export type QueryVakgroepenArgs = {
  findById?: InputMaybe<Scalars['Int']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
};

export type QueryVisitationArgs = {
  input: VisitationInput;
};

export type QueryVisitationDeclarationArgs = {
  input: VisitationInput;
};

export type QueryVisitationsArgs = {
  input: VisitationsInput;
};

export type QueryVooropleidingenArgs = {
  codes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type QueryCertificatesByPreEducationArgs = {
  code: Scalars['String'];
};

export type QueryGetInspectionPlanningArgs = {
  input: GetInspectionPlanningInput;
};

export type QueryGetInspectionReportsArgs = {
  input: GetInspectionReportsInput;
};

export type QueryGetStudyProgressByLicenseIdArgs = {
  certificeringId: Scalars['Int'];
  skipParticipationDetails?: InputMaybe<Scalars['Boolean']>;
  studyResultsMustBePaid?: InputMaybe<Scalars['Boolean']>;
};

export type QueryGetStudyProgressByLicenseNumberArgs = {
  nummerweergave: Scalars['SafeString'];
  skipParticipationDetails?: InputMaybe<Scalars['Boolean']>;
  studyResultsMustBePaid?: InputMaybe<Scalars['Boolean']>;
};

export type QueryGetStudyProgressByPersonIdArgs = {
  personId: Scalars['Int'];
  skipParticipationDetails?: InputMaybe<Scalars['Boolean']>;
  studyResultsMustBePaid?: InputMaybe<Scalars['Boolean']>;
};

export type QueryHasDuplicatePendingArgs = {
  licenseId: Scalars['Int'];
};

export type QueryInvoicesArgs = {
  filterInvoices?: InputMaybe<FilterInvoicesInput>;
  orderBy?: InputMaybe<OrderByArgs>;
  pageNumber: Scalars['Int'];
  pageSize: Scalars['Int'];
};

export type QueryIsLicenseValidForSpecialtyArgs = {
  input: IsLicenseValidForSpecialtyInput;
};

export type QuerySearchCardArgs = {
  licenseNumber: Scalars['SafeString'];
};

export type QueryTariefByCertificaatCodeArgs = {
  certificaatCode: Scalars['String'];
  individueleAanvraag?: InputMaybe<Scalars['Boolean']>;
};

export type RegenerateAccessTokenResult = {
  __typename?: 'RegenerateAccessTokenResult';
  accessToken: Scalars['String'];
  refreshToken: Scalars['String'];
};

export type RegisterCardReturnInput = {
  DatumRetour: Scalars['Date'];
  PasID: Scalars['Int'];
};

export type RegisterResult = {
  __typename?: 'RegisterResult';
  message: Scalars['String'];
  success: Scalars['Boolean'];
};

export type RemoveBijeenkomstParticipantInput = {
  CursusDeelnameID?: InputMaybe<Scalars['Int']>;
  CursusID?: InputMaybe<Scalars['Int']>;
};

export type RemoveBijeenkomstParticipantResult = {
  __typename?: 'RemoveBijeenkomstParticipantResult';
  success: Scalars['Boolean'];
};

export type RemoveParticipantInput = {
  CursusDeelnameID?: InputMaybe<Scalars['Int']>;
  CursusID?: InputMaybe<Scalars['Int']>;
};

export type RemoveParticipantResult = {
  __typename?: 'RemoveParticipantResult';
  success: Scalars['Boolean'];
};

export type SaveBijeenkomstInput = {
  CursusID?: InputMaybe<Scalars['Int']>;
  IsBesloten?: InputMaybe<Scalars['Boolean']>;
  MaximumCursisten: Scalars['Int'];
  Opmerkingen?: InputMaybe<Scalars['SafeString']>;
  Prijs: Scalars['Float'];
  Promotietekst: Scalars['SafeString'];
  Sessies: Array<SaveBijeenkomstSessieInput>;
  Titel: Scalars['SafeString'];
  VakID: Scalars['Int'];
};

export type SaveBijeenkomstResult = {
  __typename?: 'SaveBijeenkomstResult';
  Cursus: Cursus;
};

export type SaveBijeenkomstSessieInput = {
  Begintijd: Scalars['Date'];
  CursusID: Scalars['Int'];
  Datum: Scalars['Date'];
  Docent?: InputMaybe<Scalars['SafeString']>;
  Eindtijd: Scalars['Date'];
  LokatieID: Scalars['Int'];
  SessieID?: InputMaybe<Scalars['Int']>;
};

export type SaveExamInput = {
  Begintijd: Scalars['Date'];
  CursusID?: InputMaybe<Scalars['Int']>;
  Datum: Scalars['Date'];
  Docent?: InputMaybe<Scalars['SafeString']>;
  Eindtijd: Scalars['Date'];
  IsBesloten?: InputMaybe<Scalars['Boolean']>;
  LokatieID: Scalars['Int'];
  MaximumCursisten: Scalars['Int'];
  Opmerkingen?: InputMaybe<Scalars['SafeString']>;
  Prijs: Scalars['Float'];
  Promotietekst: Scalars['SafeString'];
  SessieID?: InputMaybe<Scalars['Int']>;
  Titel: Scalars['SafeString'];
  VakID: Scalars['Int'];
};

export type SaveExamResult = {
  __typename?: 'SaveExamResult';
  Cursus: Cursus;
};

export type SchemaRegel = {
  __typename?: 'SchemaRegel';
  docent?: Maybe<Scalars['String']>;
  omschrijving?: Maybe<Scalars['String']>;
  tijd?: Maybe<Scalars['String']>;
};

export type SearchExamOrganizerResult = {
  __typename?: 'SearchExamOrganizerResult';
  ExamenInstellingID: Scalars['Int'];
  Naam?: Maybe<Scalars['String']>;
};

export type SearchOrganizerResult = {
  __typename?: 'SearchOrganizerResult';
  Naam?: Maybe<Scalars['String']>;
  VakgroepID: Scalars['Int'];
};

export type SearchSpecialtyResult = {
  __typename?: 'SearchSpecialtyResult';
  Code: Scalars['String'];
  Competence: Scalars['String'];
  Organizer: Scalars['String'];
  OrganizerEmail?: Maybe<Scalars['String']>;
  OrganizerPhone?: Maybe<Scalars['String']>;
  OrganizerWebsite?: Maybe<Scalars['String']>;
  Price: Scalars['Float'];
  PromoText?: Maybe<Scalars['String']>;
  SpecialtyId: Scalars['Int'];
  SpecialtyWebsite?: Maybe<Scalars['String']>;
  Theme: Scalars['String'];
  Title: Scalars['String'];
};

export type Sessie = {
  __typename?: 'Sessie';
  Begintijd: Scalars['Date'];
  Cursus?: Maybe<Cursus>;
  CursusID: Scalars['Int'];
  Datum: Scalars['Date'];
  DatumAangemaakt?: Maybe<Scalars['Date']>;
  DatumBegintijd: Scalars['Date'];
  DatumEindtijd: Scalars['Date'];
  DatumGewijzigd?: Maybe<Scalars['Date']>;
  DigitaalExamen?: Maybe<DigitaalExamen>;
  DigitaalExamenId?: Maybe<Scalars['Int']>;
  Docent: Scalars['String'];
  Eindtijd: Scalars['Date'];
  Lokatie?: Maybe<Lokatie>;
  LokatieID: Scalars['Int'];
  LokatieToevoeging: Scalars['String'];
  Monitors?: Maybe<Array<Maybe<Monitor>>>;
  Opmerkingen: Scalars['String'];
  PersoonIDAangemaakt?: Maybe<Scalars['Int']>;
  PersoonIDGewijzigd?: Maybe<Scalars['Int']>;
  SessieID: Scalars['Int'];
  SessieType: Scalars['String'];
  Visitatie?: Maybe<Visitatie>;
};

export enum SortDirectionEnum {
  Asc = 'ASC',
  Desc = 'DESC',
}

export type StatisticsPerOrganizer = {
  __typename?: 'StatisticsPerOrganizer';
  OrganizerId: Scalars['Int'];
  OrganizerName: Scalars['String'];
  OrganizerType: Scalars['String'];
  SpecialtyStatistics?: Maybe<Array<Maybe<StatisticsPerSpecialty>>>;
  VisitingData?: Maybe<VisitingData>;
};

export type StatisticsPerSpecialty = {
  __typename?: 'StatisticsPerSpecialty';
  Title: Scalars['String'];
  VakID: Scalars['Int'];
  VakType: Scalars['String'];
  VisitingData?: Maybe<VisitingData>;
};

export type Studieresultaat = {
  __typename?: 'Studieresultaat';
  Certificering?: Maybe<Certificering>;
  Cursus: Cursus;
  Datum: Scalars['Date'];
  NormVersie: NormVersie;
  Persoon: Persoon;
  Status: StudieresultaatStatusEnum;
  StudieresultaatID: Scalars['Int'];
  Vak: Vak;
};

export enum StudieresultaatStatusEnum {
  Betaald = 'Betaald',
  Definitief = 'Definitief',
  Voorlopig = 'Voorlopig',
}

export type StudyProgress = {
  __typename?: 'StudyProgress';
  Certificering: Certificering;
  Completed: Scalars['Boolean'];
  CountedPoints: Scalars['Int'];
  DonePoints: Scalars['Int'];
  ParticipationPoints?: Maybe<Array<Maybe<ParticipationPoint>>>;
  PointsToDo: Scalars['Int'];
  RequiredPoints: Scalars['Int'];
  RequiredPointsTodo: Scalars['Int'];
  Studieresultaten?: Maybe<Array<Maybe<Studieresultaat>>>;
};

export type SubmitBijeenkomstParticipantsInput = {
  CursusID?: InputMaybe<Scalars['Int']>;
};

export type SubmitBijeenkomstParticipantsResult = {
  __typename?: 'SubmitBijeenkomstParticipantsResult';
  success: Scalars['Boolean'];
};

export type SubmitParticipantsInput = {
  CursusID?: InputMaybe<Scalars['Int']>;
};

export type SubmitParticipantsResult = {
  __typename?: 'SubmitParticipantsResult';
  success: Scalars['Boolean'];
};

export type SubmitToRemindoInput = {
  CursusID?: InputMaybe<Scalars['Int']>;
};

export type SubmitToRemindoResult = {
  __typename?: 'SubmitToRemindoResult';
  success: Scalars['Boolean'];
};

export type TargetSettings = {
  organizerMargin: Scalars['Float'];
  organizerTarget: Scalars['Float'];
  overallMargin: Scalars['Float'];
  overallTarget: Scalars['Float'];
  specialtyMargin: Scalars['Float'];
  specialtyTarget: Scalars['Float'];
};

export type Thema = {
  __typename?: 'Thema';
  Code: Scalars['String'];
  Naam: Scalars['String'];
  ThemaID: Scalars['Int'];
  UniversiteitID?: Maybe<Scalars['Int']>;
};

export type TotaalExtBtwTarief = {
  __typename?: 'TotaalExtBtwTarief';
  TotaalExtBtw?: Maybe<Scalars['Float']>;
};

export type UnRegisterResult = {
  __typename?: 'UnRegisterResult';
  message: Scalars['String'];
  success: Scalars['Boolean'];
};

export type UpdateInvoiceStatusInput = {
  actionDate: Scalars['Date'];
  invoiceId: Scalars['Int'];
  isInvoiceCollection: Scalars['Boolean'];
  remarks?: InputMaybe<Scalars['SafeString']>;
  status: FactuurHistorieStatusEnum;
};

export type UpdateInvoiceStatusResult = {
  __typename?: 'UpdateInvoiceStatusResult';
  message?: Maybe<Scalars['String']>;
  success: Scalars['Boolean'];
};

export type UpdatePersoonHandelshuisvestigingForPersoonIdInput = {
  DebiteurNr: Scalars['SafeString'];
  PersoonHandelshuisVestigingID: Scalars['Int'];
};

export type UpdatePersoonVakgroepForPersoonIdInput = {
  DebiteurNr: Scalars['SafeString'];
  PersoonVakgroepID: Scalars['Int'];
};

export type UpdatePlanningResult = {
  __typename?: 'UpdatePlanningResult';
  planned: Scalars['Boolean'];
};

export type UploadBijeenkomstParticipantsExcelInput = {
  CursusID?: InputMaybe<Scalars['Int']>;
  file: Scalars['Upload'];
};

export type UploadBijeenkomstParticipantsExcelResult = {
  __typename?: 'UploadBijeenkomstParticipantsExcelResult';
  success: Scalars['Boolean'];
  validationErrors?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type UploadParticipantsExcelInput = {
  CursusID?: InputMaybe<Scalars['Int']>;
  file: Scalars['Upload'];
};

export type UploadParticipantsExcelResult = {
  __typename?: 'UploadParticipantsExcelResult';
  success: Scalars['Boolean'];
  validationErrors?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type Vaardigheid = {
  __typename?: 'Vaardigheid';
  Code: Scalars['String'];
  Omschrijving: Scalars['String'];
  VaardigheidID: Scalars['Int'];
};

export type Vak = {
  __typename?: 'Vak';
  Afkorting?: Maybe<Scalars['String']>;
  BeoordelaarNaam?: Maybe<Scalars['String']>;
  Beoordelingen?: Maybe<Array<Maybe<Beoordeling>>>;
  Code?: Maybe<Scalars['String']>;
  CompetentieID?: Maybe<Scalars['Int']>;
  CompetentieNaam?: Maybe<Scalars['String']>;
  Competenties?: Maybe<Array<Maybe<Competentie>>>;
  DatumAangemaakt?: Maybe<Scalars['Date']>;
  DigitaalAanbod?: Maybe<Scalars['Boolean']>;
  Docenten?: Maybe<Scalars['String']>;
  Doelgroep?: Maybe<Scalars['String']>;
  Doelstelling?: Maybe<Scalars['String']>;
  EvaluatieWijze?: Maybe<Scalars['String']>;
  ExamenInstelling?: Maybe<ExamenInstelling>;
  ExamenInstellingID?: Maybe<Scalars['Int']>;
  ExamenType?: Maybe<Scalars['String']>;
  GewijzigdDatum?: Maybe<Scalars['Date']>;
  Inhoud?: Maybe<Scalars['String']>;
  IsExamenVak?: Maybe<Scalars['Boolean']>;
  Kosten?: Maybe<Scalars['Float']>;
  MaximumCursisten?: Maybe<Scalars['Int']>;
  MaximumDatum?: Maybe<Scalars['Date']>;
  MinimumDatum?: Maybe<Scalars['Date']>;
  NormVersieID: Scalars['Int'];
  Praktijk?: Maybe<Scalars['String']>;
  Promotietekst?: Maybe<Scalars['String']>;
  Samenhang?: Maybe<Scalars['String']>;
  Samenvatting?: Maybe<Scalars['String']>;
  Schema?: Maybe<Array<Maybe<SchemaRegel>>>;
  Status: VakStatusEnum;
  ThemaID?: Maybe<Scalars['Int']>;
  ThemaNaam?: Maybe<Scalars['String']>;
  Themas?: Maybe<Array<Maybe<Thema>>>;
  Tijdsduur?: Maybe<Scalars['String']>;
  Titel?: Maybe<Scalars['String']>;
  VakDiscussie?: Maybe<Array<Maybe<VakDiscussie>>>;
  VakID: Scalars['Int'];
  VakKennisgebieden?: Maybe<Array<Maybe<Kennisgebied>>>;
  VakVaardigheden?: Maybe<Array<Maybe<Vaardigheid>>>;
  Vakgroep?: Maybe<Vakgroep>;
  VakgroepID?: Maybe<Scalars['Int']>;
  Vernieuwend?: Maybe<Scalars['String']>;
  Website?: Maybe<Scalars['String']>;
  Werkvorm?: Maybe<Scalars['String']>;
};

export type VakDiscussie = {
  __typename?: 'VakDiscussie';
  comments?: Maybe<Array<Maybe<Comment>>>;
  title?: Maybe<Scalars['String']>;
};

export enum VakExamenTypeEnum {
  Ad = 'AD',
  Agn = 'AGN',
  Ak = 'AK',
  Be = 'BE',
  Bk = 'BK',
  Bv = 'BV',
  Dk = 'DK',
  Ec = 'EC',
  Ek = 'EK',
  Et = 'ET',
  HercertificeringsExamen = 'HERCERTIFICERINGS_EXAMEN',
  StartExamen = 'START_EXAMEN',
  Tb = 'TB',
}

export enum VakStatusEnum {
  Afgekeurd = 'Afgekeurd',
  Goedgekeurd = 'Goedgekeurd',
  InOntwerp = 'InOntwerp',
  Ingediend = 'Ingediend',
  Ingetrokken = 'Ingetrokken',
  Voorlopig = 'Voorlopig',
  WordtBeoordeeld = 'WordtBeoordeeld',
}

export type Vakgroep = {
  __typename?: 'Vakgroep';
  ApiKey?: Maybe<Scalars['String']>;
  Code: Scalars['String'];
  Contactgegevens: Contactgegevens;
  ContactgegevensID: Scalars['Int'];
  IsActief: Scalars['Boolean'];
  IsBtwPlichtig: Scalars['Boolean'];
  Naam: Scalars['String'];
  UniversiteitID: Scalars['Int'];
  VakgroepID: Scalars['Int'];
  WebserviceEnabled: Scalars['Boolean'];
};

export type VakgroepLink = {
  __typename?: 'VakgroepLink';
  Actief: Scalars['Boolean'];
  HoogleraarID: Scalars['Int'];
  PersoonID: Scalars['Int'];
  Vakgroep?: Maybe<Vakgroep>;
  VakgroepID: Scalars['Int'];
};

export type Vaknorm = {
  __typename?: 'Vaknorm';
  CompetentieID: Scalars['Int'];
  MinimumPunten: Scalars['Int'];
  NormVersieID: Scalars['Int'];
  ThemaID: Scalars['Int'];
  VaknormID: Scalars['Int'];
};

export type Visitatie = {
  __typename?: 'Visitatie';
  AangemaaktDoor?: Maybe<Scalars['String']>;
  Cursus?: Maybe<Cursus>;
  DatumAangemaakt?: Maybe<Scalars['Date']>;
  DatumGewijzigd?: Maybe<Scalars['Date']>;
  DatumRapport?: Maybe<Scalars['Date']>;
  DatumVisitatie?: Maybe<Scalars['Date']>;
  DiscussieVisitaties?: Maybe<Array<Maybe<DiscussieVisitatie>>>;
  GewijzigdDoor?: Maybe<Scalars['String']>;
  Inspecteur?: Maybe<Persoon>;
  IsDeclarationPossible?: Maybe<Scalars['Boolean']>;
  IsDeclarationSubmitted?: Maybe<Scalars['Boolean']>;
  LastChangeBy?: Maybe<Scalars['String']>;
  LastChangeDate?: Maybe<Scalars['Date']>;
  PersoonID: Scalars['Int'];
  Rapport?: Maybe<Scalars['String']>;
  Rapportcijfer?: Maybe<Scalars['Int']>;
  Sessie?: Maybe<Sessie>;
  SessieID: Scalars['Int'];
  Status: VisitatieStatusEnum;
  VisitatieBeoordelingCategorieen?: Maybe<Array<Maybe<VisitatieBeoordelingCategorie>>>;
  VisitatieID: Scalars['Int'];
  VolgensIntentieAanbod: Scalars['Boolean'];
  VragenJson?: Maybe<Scalars['SafeString']>;
};

export type VisitatieBeoordelingCategorie = {
  __typename?: 'VisitatieBeoordelingCategorie';
  AangemaaktDoor?: Maybe<Scalars['String']>;
  CategorieNaam: Scalars['String'];
  CategorieTemplateID: Scalars['Int'];
  Cijfer?: Maybe<Scalars['Float']>;
  DatumAangemaakt: Scalars['Date'];
  DatumGewijzigd: Scalars['Date'];
  GewijzigdDoor?: Maybe<Scalars['String']>;
  TotaalPunten?: Maybe<Scalars['Float']>;
  VanafDatum: Scalars['Date'];
  Versie: Scalars['String'];
  VisitatieBeoordelingCategorieID: Scalars['ID'];
  VisitatieID: Scalars['Int'];
  Vragen?: Maybe<Array<Maybe<VisitatieBeoordelingCategorieVraag>>>;
  Weging: Scalars['Float'];
};

export type VisitatieBeoordelingCategorieVraag = {
  __typename?: 'VisitatieBeoordelingCategorieVraag';
  AangemaaktDoor?: Maybe<Scalars['String']>;
  CategorieTemplateID: Scalars['Int'];
  Cijfer?: Maybe<Scalars['Float']>;
  DatumAangemaakt: Scalars['Date'];
  DatumGewijzigd: Scalars['Date'];
  GewijzigdDoor?: Maybe<Scalars['String']>;
  Naam: Scalars['String'];
  Toelichting?: Maybe<Scalars['String']>;
  TotaalPunten?: Maybe<Scalars['Float']>;
  VanafDatum: Scalars['Date'];
  Versie: Scalars['String'];
  VisitatieBeoordelingCategorieID: Scalars['ID'];
  VisitatieBeoordelingCategorieVraagID: Scalars['ID'];
  VraagTemplateID: Scalars['Int'];
  Weging: Scalars['Float'];
};

export enum VisitatieStatusEnum {
  Ingediend = 'Ingediend',
  Ingepland = 'Ingepland',
  RapportWordtOpgesteld = 'RapportWordtOpgesteld',
}

export type VisitationDeclaration = {
  __typename?: 'VisitationDeclaration';
  FactuurNummer?: Maybe<Scalars['String']>;
  HasInvoice: Scalars['Boolean'];
  InvoiceLink?: Maybe<Scalars['String']>;
  TariffDayPart: Scalars['Float'];
  TariffKm: Scalars['Float'];
  Visitatie?: Maybe<Visitatie>;
};

export type VisitationInfoNodes = {
  __typename?: 'VisitationInfoNodes';
  nodes?: Maybe<Array<Maybe<Visitatie>>>;
  pageInfo?: Maybe<PageInfo>;
  totalCount: Scalars['Int'];
};

export type VisitingData = {
  __typename?: 'VisitingData';
  AverageRate?: Maybe<Scalars['Float']>;
  AverageScoreAccordingIntention?: Maybe<Scalars['Float']>;
  LastVisitData?: Maybe<LastVisitData>;
  NrOfCourses: Scalars['Int'];
  NrOfVisits: Scalars['Int'];
  VisitTarget: Scalars['Float'];
  VisitTargetActual: Scalars['Float'];
};

export type Vooropleiding = {
  __typename?: 'Vooropleiding';
  Categorie: VooropleidingCategorie;
  Certificaten?: Maybe<Array<Maybe<Certificaat>>>;
  Code: Scalars['String'];
  IsActief: Scalars['Boolean'];
  Naam: Scalars['String'];
  Omschrijving: Scalars['String'];
  UniversiteitID: Scalars['Int'];
  VooropleidingCategorieID: Scalars['Int'];
  VooropleidingID: Scalars['Int'];
};

export type VooropleidingCategorie = {
  __typename?: 'VooropleidingCategorie';
  Naam: Scalars['String'];
  VooropleidingCategorieID: Scalars['Int'];
};

export enum VrijstellingCertificaatStatusEnum {
  Betaald = 'Betaald',
  VoorlopigBetaald = 'VoorlopigBetaald',
}

export enum VrijstellingsVerzoekBetaalStatusEnum {
  Betaald = 'Betaald',
}

export enum VrijstellingsVerzoekStatusEnum {
  Aangevraagd = 'Aangevraagd',
  Afgekeurd = 'Afgekeurd',
  Betaald = 'Betaald',
  Geannuleerd = 'Geannuleerd',
  Goedgekeurd = 'Goedgekeurd',
}

export type AddVisitationCommentInput = {
  commentaar: Scalars['SafeString'];
  visitatieId: Scalars['Int'];
};

export type AssignMonitorInput = {
  MonitorID?: InputMaybe<Scalars['Int']>;
  SessieID?: InputMaybe<Scalars['Int']>;
};

export type BasicPersonData = {
  Email?: InputMaybe<Scalars['Email']>;
  PersoonID: Scalars['Int'];
};

export type BijeenkomstenListInput = {
  code?: InputMaybe<Scalars['SafeString']>;
  from?: InputMaybe<Scalars['Date']>;
  locationId?: InputMaybe<Scalars['Int']>;
  orderBy: OrderByArgs;
  pageNumber: Scalars['Int'];
  pageSize: Scalars['Int'];
  status?: InputMaybe<CursusStatusEnum>;
  title?: InputMaybe<Scalars['SafeString']>;
  to?: InputMaybe<Scalars['Date']>;
  vakId?: InputMaybe<Scalars['Int']>;
  vakgroepId?: InputMaybe<Scalars['Int']>;
  withoutParticipants?: InputMaybe<Scalars['Boolean']>;
};

export type CheckForExistingPersonByBsnResult = {
  __typename?: 'checkForExistingPersonByBsnResult';
  /** If personFound = true, the remarks how person is found (only on BSN, or on BSN and birth date) */
  message?: Maybe<Scalars['String']>;
  /** If person is found, true, not found is false */
  personFoundInDatabase: Scalars['Boolean'];
  /** Optional check if the person is found in the Gba (only executed when not found in database) */
  personFoundInGba?: Maybe<Scalars['Boolean']>;
  /** If personFound = true, an array of the found persons (of type Persoon, but limited fields) */
  persons?: Maybe<Array<Maybe<Persoon>>>;
};

export type CheckForExistingPersonByPersonDataResult = {
  __typename?: 'checkForExistingPersonByPersonDataResult';
  /** If personFound = true, the remarks how person is found (only on BSN, or on BSN and birth date) */
  message?: Maybe<Scalars['String']>;
  /** If person is found, true, not found is false */
  personFoundInDatabase: Scalars['Boolean'];
  /** If personFound = true, an array of the found persons (of type Persoon, but limited fields) */
  persons?: Maybe<Array<Maybe<Persoon>>>;
};

export type ContactgegevensInput = {
  Adresregel1: Scalars['SafeString'];
  Email?: InputMaybe<Scalars['SafeString']>;
  Huisnummer: Scalars['SafeString'];
  HuisnummerToevoeging?: InputMaybe<Scalars['SafeString']>;
  Land: Scalars['SafeString'];
  Postcode: Scalars['SafeString'];
  Telefoon?: InputMaybe<Scalars['SafeString']>;
  Website?: InputMaybe<Scalars['SafeString']>;
  Woonplaats: Scalars['SafeString'];
};

export type CreateDeclarationInvoiceInput = {
  NrOfDayParts?: InputMaybe<Scalars['Int']>;
  NrOfKilometers?: InputMaybe<Scalars['Int']>;
  Other?: InputMaybe<Scalars['Float']>;
  OtherDescription?: InputMaybe<Scalars['SafeString']>;
  PublicTransport?: InputMaybe<Scalars['Float']>;
  VisitatieID: Scalars['Int'];
};

export type CreateLicenseInput = {
  certificateId: Scalars['Int'];
  endDate: Scalars['Date'];
  /** licenseId that the new license should be based off from */
  isExtensionOf: Scalars['Int'];
  personId: Scalars['Int'];
  remark?: InputMaybe<Scalars['SafeString']>;
  startDate: Scalars['Date'];
};

export type CreatePersonByBsn = {
  /** BSN can be 8 or 9 digits long */
  BSN: Scalars['Int'];
  /** Email address is required */
  Email: Scalars['Email'];
  /**
   * Use i.e. `new Date(Date.UTC(1955, 8, 3)).getTime()`
   * which is: 3 sept 1955 00:00:00 GMT+2 (CEST)
   * Needed to match SQL Server database field value for a Date field
   */
  Geboortedatum: Scalars['Date'];
};

export type CreatePersonByPersonData = {
  /** Max 50 chars */
  Achternaam: Scalars['SafeString'];
  /** Max 100 chars */
  Adresregel1: Scalars['SafeString'];
  /** Max 100 chars */
  Adresregel2?: InputMaybe<Scalars['SafeString']>;
  /** Email address is required */
  Email: Scalars['Email'];
  /**
   * Use i.e. `new Date(Date.UTC(1955, 8, 3)).getTime()`
   * which is: 3 sept 1955 00:00:00 GMT+2 (CEST)
   * Needed to match SQL Server database field value for a Date field
   */
  Geboortedatum: Scalars['Date'];
  /** Can only be 'o', 'm, 'v' */
  Geslacht: Scalars['SafeString'];
  /** Max 20 chars */
  Huisnummer: Scalars['Int'];
  /** Max 20 chars */
  HuisnummerToevoeging?: InputMaybe<Scalars['SafeString']>;
  /** Use Landen endpoint */
  Land: Scalars['SafeString'];
  /** Use Nationaliteiten endpoint */
  Nationaliteit: Scalars['SafeString'];
  /** Max 20 chars */
  Postcode: Scalars['SafeString'];
  /** Max 50 chars */
  Tussenvoegsel?: InputMaybe<Scalars['SafeString']>;
  /** Max 50 chars */
  Voorletters: Scalars['SafeString'];
  /** Max 100 chars */
  Woonplaats: Scalars['SafeString'];
};

export type CursusSessiesForHoogleraarInput = {
  from?: InputMaybe<Scalars['Date']>;
  to?: InputMaybe<Scalars['Date']>;
};

export type DecoupleLicenseInput = {
  confirmationEmail?: InputMaybe<Scalars['String']>;
  /** Current XX + KBA license which should be decoupled */
  licenseId: Scalars['Int'];
};

export type DecoupleLicenseResult = {
  __typename?: 'decoupleLicenseResult';
  kbaLicense?: Maybe<Certificering>;
  updatedLicense?: Maybe<Certificering>;
};

export type ExamSpecialtiesInput = {
  examenInstellingId?: InputMaybe<Scalars['Int']>;
  validOnly?: InputMaybe<Scalars['Boolean']>;
};

export type ExamsInput = {
  examCode?: InputMaybe<Scalars['SafeString']>;
  from?: InputMaybe<Scalars['Date']>;
  locationId?: InputMaybe<Scalars['Int']>;
  orderBy: OrderByArgs;
  pageNumber: Scalars['Int'];
  pageSize: Scalars['Int'];
  status?: InputMaybe<CursusStatusEnum>;
  title?: InputMaybe<Scalars['SafeString']>;
  to?: InputMaybe<Scalars['Date']>;
  withoutParticipants?: InputMaybe<Scalars['Boolean']>;
};

export type GetCursusDeelnemerInput = {
  CursusID: Scalars['Int'];
  PasNummer?: InputMaybe<Scalars['String']>;
  PersoonID?: InputMaybe<Scalars['Int']>;
};

export type GetCursusDeelnemersInput = {
  CursusID: Scalars['Int'];
};

export type GetCursusInfoForHoogleraarInput = {
  cursusId?: InputMaybe<Scalars['Int']>;
};

export type IsLicenseValidForSpecialtyInput = {
  courseId?: InputMaybe<Scalars['Int']>;
  licenseId: Scalars['Int'];
  specialtyId?: InputMaybe<Scalars['Int']>;
};

export type IsLicenseValidForSpecialtyResult = {
  __typename?: 'isLicenseValidForSpecialtyResult';
  success: Scalars['Boolean'];
};

export type ManuallyProcessGraduatesResult = {
  __typename?: 'manuallyProcessGraduatesResult';
  message: Scalars['String'];
};

export type RegisterForCourseByHoogleraarInput = {
  courseId: Scalars['Int'];
  licenseId: Scalars['Int'];
  persoonId: Scalars['Int'];
};

export type RegisterForCourseInput = {
  city?: InputMaybe<Scalars['SafeString']>;
  code?: InputMaybe<Scalars['SafeString']>;
  country?: InputMaybe<Scalars['SafeString']>;
  courseDateTime?: InputMaybe<Scalars['Date']>;
  courseId: Scalars['Int'];
  email?: InputMaybe<Scalars['Email']>;
  houseNr?: InputMaybe<Scalars['SafeString']>;
  houseNrExtension?: InputMaybe<Scalars['SafeString']>;
  invoiceAddress?: InputMaybe<Scalars['SafeString']>;
  isDigitalSpecialty: Scalars['Boolean'];
  knowledgeArea?: InputMaybe<Scalars['SafeString']>;
  licenseId: Scalars['Int'];
  phoneNr?: InputMaybe<Scalars['SafeString']>;
  specialtyId?: InputMaybe<Scalars['Int']>;
  street?: InputMaybe<Scalars['SafeString']>;
  title: Scalars['SafeString'];
  zipcode?: InputMaybe<Scalars['SafeString']>;
};

export type RequestDuplicateInput = {
  /** Nr of cards */
  count?: InputMaybe<Scalars['Int']>;
  /** Licenses which should be duplicated */
  licenseIds: Array<InputMaybe<Scalars['Int']>>;
  /** Remark for invoice (required for anything other than KBA) */
  remark?: InputMaybe<Scalars['SafeString']>;
};

export type RequestDuplicateResult = {
  __typename?: 'requestDuplicateResult';
  /** One or multiple passes (1 for each license) */
  cards: Array<Pas>;
  /**
   * The link to the invoice in format
   * window.open('iDeal/Factuur.aspx?SafeKey=ZR6HXPxJ00YCgPIvrf3ciG00iwRcs0FDOXkJ6S9AYiOnRSYChcmsCc+/DyH1KeCh1ZL95PyapQQxIqFviIvWpWZjgR77CTAvsd1k/DFhQb5VXOx7SoHu+I0+NQiOpn1nTkeXHTYqsmggI81XDjnLowbb5qmDhynQpJqCMerD5iw=','FactuurVenster','left=100,top=50,width=700,height=800,location=0,resizable=1,toolbar=1')
   */
  invoiceLink: Scalars['String'];
};

export type RequestLicenseInput = {
  /** License the user is requesting, based on the limited list of pre-educations */
  CertificaatID: Scalars['Int'];
  /** Optional: Current license that the new license should be based off from */
  CertificeringID?: InputMaybe<Scalars['Int']>;
  /**
   * Date of pre-education result received
   * Must be between max 5 years in past or today
   */
  dateReceived: Scalars['Date'];
  /**
   * File to upload 1.
   * Eigen Verklaring or KVK uittreksel (legitimatiebewijs) or Registration certificate (inschrijvingsbewijs opleiding adviseren)
   */
  file1: Scalars['Upload'];
  /**
   * File to upload 2.
   * For normal license request: Diploma
   */
  file2?: InputMaybe<Scalars['Upload']>;
  /**
   * File to upload 3.
   * For normal license request: cijferlijst
   * For registration certificate: none
   */
  file3?: InputMaybe<Scalars['Upload']>;
  /** The Id of the pre-education (vooropleiding) */
  preEducationId: Scalars['Int'];
  /** Optional remarks */
  remarks?: InputMaybe<Scalars['SafeString']>;
};

export type RequestLicenseResult = {
  __typename?: 'requestLicenseResult';
  VrijstellingsVerzoekID: Scalars['Int'];
  invoiceLink: Scalars['String'];
  requestFormPdfLink: Scalars['String'];
};

export type SaveLocationInput = {
  Contactgegevens?: InputMaybe<ContactgegevensInput>;
  ContactgegevensID?: InputMaybe<Scalars['Int']>;
  ExamenInstellingID?: InputMaybe<Scalars['Int']>;
  IsActief: Scalars['Boolean'];
  LokatieID?: InputMaybe<Scalars['Int']>;
  Naam: Scalars['SafeString'];
  Routebeschrijving?: InputMaybe<Scalars['SafeString']>;
  VakgroepID?: InputMaybe<Scalars['Int']>;
};

export type SaveMonitorInput = {
  Achternaam: Scalars['SafeString'];
  Email: Scalars['Email'];
  ExamenInstellingID?: InputMaybe<Scalars['Int']>;
  Geslacht: Scalars['SafeString'];
  MonitorID?: InputMaybe<Scalars['Int']>;
  Tussenvoegsel?: InputMaybe<Scalars['SafeString']>;
  Voornaam: Scalars['SafeString'];
};

export type SearchBijeenkomstInput = {
  cursusId: Scalars['Int'];
};

export type SearchCourseSessionsForHoogleraarInput = {
  competenceId?: InputMaybe<Scalars['Int']>;
  currentCourseId?: InputMaybe<Scalars['Int']>;
  distanceRadius?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Scalars['Date']>;
  hoogleraarId?: InputMaybe<Scalars['Int']>;
  isOnlineCourse: Scalars['Boolean'];
  isWebinar: Scalars['Boolean'];
  knowledgeAreaId?: InputMaybe<Scalars['Int']>;
  themeId?: InputMaybe<Scalars['Int']>;
  to?: InputMaybe<Scalars['Date']>;
  zipcodeNumbers?: InputMaybe<Scalars['Int']>;
};

export type SearchCourseSessionsInput = {
  competenceId?: InputMaybe<Scalars['Int']>;
  currentCourseId?: InputMaybe<Scalars['Int']>;
  distanceRadius?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Scalars['Date']>;
  isOnlineCourse: Scalars['Boolean'];
  isWebinar: Scalars['Boolean'];
  knowledgeAreaId?: InputMaybe<Scalars['Int']>;
  themeId?: InputMaybe<Scalars['Int']>;
  to?: InputMaybe<Scalars['Date']>;
  zipcodeNumbers?: InputMaybe<Scalars['Int']>;
};

export type SearchCursusDeelnemersInput = {
  CursusID: Scalars['Int'];
  geboortejaar?: InputMaybe<Scalars['String']>;
  naam?: InputMaybe<Scalars['String']>;
  pasnummer?: InputMaybe<Scalars['String']>;
  postcode?: InputMaybe<Scalars['String']>;
};

export type SearchExamInput = {
  examId: Scalars['Int'];
};

export type SearchLocationsInput = {
  ExamenInstellingID?: InputMaybe<Scalars['Int']>;
  VakgroepID?: InputMaybe<Scalars['Int']>;
};

export type SearchMonitorsInput = {
  ExamenInstellingID?: InputMaybe<Scalars['Int']>;
};

export type SearchSpecialtyInput = {
  competenceId?: InputMaybe<Scalars['Int']>;
  isOnlineCourse: Scalars['Boolean'];
  knowledgeAreaId?: InputMaybe<Scalars['Int']>;
  specialtyId?: InputMaybe<Scalars['Int']>;
  themeId?: InputMaybe<Scalars['Int']>;
};

export type SpecialtiesInput = {
  vakgroepId?: InputMaybe<Scalars['Int']>;
};

export type UnRegisterForCourseByCourseIdInput = {
  cursusId: Scalars['Int'];
  dateTime: Scalars['Date'];
};

export type UnassignMonitorInput = {
  MonitorID?: InputMaybe<Scalars['Int']>;
  SessieID?: InputMaybe<Scalars['Int']>;
};

export type UnregisterForCourseByHoogleraarInput = {
  CursusDeelnameID: Scalars['Int'];
};

export type UpdateContactgegevensInput = {
  Email?: InputMaybe<Scalars['SafeString']>;
  EmailWerkgever?: InputMaybe<Scalars['SafeString']>;
  Telefoon?: InputMaybe<Scalars['SafeString']>;
};

export type UpdateVisitationReportInput = {
  DatumRapport?: InputMaybe<Scalars['Date']>;
  Rapport: Scalars['SafeString'];
  Rapportcijfer: Scalars['Int'];
  Status: VisitatieStatusEnum;
  VisitatieID: Scalars['Int'];
  VolgensIntentieAanbod: Scalars['Boolean'];
  VragenJson: Scalars['SafeString'];
  ratings?: InputMaybe<Array<VisitatieBeoordelingCategorieInput>>;
};

export type VisitatieBeoordelingCategorieInput = {
  CategorieNaam: Scalars['String'];
  CategorieTemplateID: Scalars['Int'];
  Cijfer?: InputMaybe<Scalars['Float']>;
  TotaalPunten?: InputMaybe<Scalars['Float']>;
  VanafDatum: Scalars['Date'];
  Versie: Scalars['String'];
  VisitatieBeoordelingCategorieID: Scalars['ID'];
  VisitatieID: Scalars['Int'];
  Vragen?: InputMaybe<Array<InputMaybe<VisitatieBeoordelingCategorieVraagInput>>>;
  Weging: Scalars['Float'];
};

export type VisitatieBeoordelingCategorieVraagInput = {
  CategorieTemplateID: Scalars['Int'];
  Cijfer?: InputMaybe<Scalars['Float']>;
  Naam: Scalars['String'];
  Toelichting?: InputMaybe<Scalars['String']>;
  TotaalPunten?: InputMaybe<Scalars['Float']>;
  VanafDatum: Scalars['Date'];
  Versie: Scalars['String'];
  VisitatieBeoordelingCategorieID: Scalars['ID'];
  VisitatieBeoordelingCategorieVraagID: Scalars['ID'];
  VraagTemplateID: Scalars['Int'];
  Weging: Scalars['Float'];
};

export type VisitationInput = {
  visitatieId: Scalars['Int'];
};

export type VisitationsInput = {
  courseCode?: InputMaybe<Scalars['SafeString']>;
  from?: InputMaybe<Scalars['Date']>;
  orderBy: OrderByArgs;
  pageNumber: Scalars['Int'];
  pageSize: Scalars['Int'];
  status?: InputMaybe<VisitatieStatusEnum>;
  title?: InputMaybe<Scalars['SafeString']>;
  to?: InputMaybe<Scalars['Date']>;
};

export type GetMyAndDuplicatePriceQueryVariables = Exact<{ [key: string]: never }>;

export type GetMyAndDuplicatePriceQuery = {
  my?: {
    __typename?: 'My';
    Certificeringen?: Array<{
      __typename?: 'Certificering';
      CertificeringID: number;
      CertificaatID: number;
      NummerWeergave: string;
      BeginDatum: Date;
      EindDatum: Date;
      Status: CertificeringStatusEnum;
      Certificaat?: { __typename?: 'Certificaat'; Naam: string };
      Passen?: Array<{
        __typename?: 'Pas';
        PasID: number;
        DatumAanvraag: Date;
        DatumUitgeleverd?: Date;
        Aantal: number;
        Status: PasStatusEnum;
        Geadresseerde?: string;
        PasRetouren?: Array<{ __typename?: 'PasRetour'; PasID: number; DatumRetour: Date }>;
      }>;
    }>;
  };
  tariefDuplicaat?: { __typename?: 'TotaalExtBtwTarief'; TotaalExtBtw?: number };
};

export type CertificeringenFieldsFragment = {
  __typename?: 'Certificering';
  CertificeringID: number;
  CertificaatID: number;
  NummerWeergave: string;
  BeginDatum: Date;
  EindDatum: Date;
  Status: CertificeringStatusEnum;
  Certificaat?: { __typename?: 'Certificaat'; Naam: string };
  Passen?: Array<{
    __typename?: 'Pas';
    PasID: number;
    DatumAanvraag: Date;
    DatumUitgeleverd?: Date;
    Aantal: number;
    Status: PasStatusEnum;
    Geadresseerde?: string;
    PasRetouren?: Array<{ __typename?: 'PasRetour'; PasID: number; DatumRetour: Date }>;
  }>;
};

export type PasFieldsFragment = {
  __typename?: 'Pas';
  PasID: number;
  DatumAanvraag: Date;
  DatumUitgeleverd?: Date;
  Aantal: number;
  Status: PasStatusEnum;
  Geadresseerde?: string;
  PasRetouren?: Array<{ __typename?: 'PasRetour'; PasID: number; DatumRetour: Date }>;
};

export type RequestDuplicateMutationVariables = Exact<{
  input: RequestDuplicateInput;
}>;

export type RequestDuplicateMutation = {
  requestDuplicate: {
    __typename?: 'requestDuplicateResult';
    invoiceLink: string;
    cards: Array<{
      __typename?: 'Pas';
      PasID: number;
      DatumAanvraag: Date;
      Status: PasStatusEnum;
      Aantal: number;
    }>;
  };
};

export const PasFieldsFragmentDoc = gql`
  fragment PasFields on Pas {
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
`;
export const CertificeringenFieldsFragmentDoc = gql`
  fragment CertificeringenFields on Certificering {
    CertificeringID
    CertificaatID
    NummerWeergave
    BeginDatum
    EindDatum
    Status
    Certificaat {
      Naam
    }
    Passen {
      ...PasFields
    }
  }
  ${PasFieldsFragmentDoc}
`;
export const GetMyAndDuplicatePriceDocument = gql`
  query getMyAndDuplicatePrice {
    my {
      Certificeringen(inclusiefPassen: true, alleenGeldig: true) {
        ...CertificeringenFields
      }
    }
    tariefDuplicaat {
      TotaalExtBtw
    }
  }
  ${CertificeringenFieldsFragmentDoc}
`;

/**
 * __useGetMyAndDuplicatePriceQuery__
 *
 * To run a query within a React component, call `useGetMyAndDuplicatePriceQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMyAndDuplicatePriceQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMyAndDuplicatePriceQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetMyAndDuplicatePriceQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetMyAndDuplicatePriceQuery,
    GetMyAndDuplicatePriceQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetMyAndDuplicatePriceQuery, GetMyAndDuplicatePriceQueryVariables>(
    GetMyAndDuplicatePriceDocument,
    options,
  );
}
export function useGetMyAndDuplicatePriceLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetMyAndDuplicatePriceQuery,
    GetMyAndDuplicatePriceQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetMyAndDuplicatePriceQuery, GetMyAndDuplicatePriceQueryVariables>(
    GetMyAndDuplicatePriceDocument,
    options,
  );
}
export type GetMyAndDuplicatePriceQueryHookResult = ReturnType<
  typeof useGetMyAndDuplicatePriceQuery
>;
export type GetMyAndDuplicatePriceLazyQueryHookResult = ReturnType<
  typeof useGetMyAndDuplicatePriceLazyQuery
>;
export type GetMyAndDuplicatePriceQueryResult = Apollo.QueryResult<
  GetMyAndDuplicatePriceQuery,
  GetMyAndDuplicatePriceQueryVariables
>;
export const RequestDuplicateDocument = gql`
  mutation requestDuplicate($input: requestDuplicateInput!) {
    requestDuplicate(input: $input) {
      invoiceLink
      cards {
        PasID
        DatumAanvraag
        Status
        Aantal
      }
    }
  }
`;
export type RequestDuplicateMutationFn = Apollo.MutationFunction<
  RequestDuplicateMutation,
  RequestDuplicateMutationVariables
>;

/**
 * __useRequestDuplicateMutation__
 *
 * To run a mutation, you first call `useRequestDuplicateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRequestDuplicateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [requestDuplicateMutation, { data, loading, error }] = useRequestDuplicateMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useRequestDuplicateMutation(
  baseOptions?: Apollo.MutationHookOptions<
    RequestDuplicateMutation,
    RequestDuplicateMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<RequestDuplicateMutation, RequestDuplicateMutationVariables>(
    RequestDuplicateDocument,
    options,
  );
}
export type RequestDuplicateMutationHookResult = ReturnType<typeof useRequestDuplicateMutation>;
export type RequestDuplicateMutationResult = Apollo.MutationResult<RequestDuplicateMutation>;
export type RequestDuplicateMutationOptions = Apollo.BaseMutationOptions<
  RequestDuplicateMutation,
  RequestDuplicateMutationVariables
>;
