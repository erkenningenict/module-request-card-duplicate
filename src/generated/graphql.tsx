import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** Date custom scalar type */
  Date: Date;
  /** The Email scalar type represents E-Mail addresses compliant to RFC 822. */
  Email: any;
  /** Safe string custom scalar type that does not allow xss attacks */
  SafeString: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type AangemeldeCursusDeelname = {
  __typename?: 'AangemeldeCursusDeelname';
  CursusDeelnameID: Scalars['Int'];
  CursusID: Scalars['Int'];
  Titel: Scalars['String'];
  Datum: Scalars['Date'];
  Begintijd: Scalars['String'];
  Eindtijd: Scalars['String'];
  Prijs: Scalars['Float'];
  Locatie: Scalars['String'];
  Status: CursusDeelnameStatusEnum;
  IsDigitaalAanbod: Scalars['Boolean'];
};

export type Beoordeling = {
  __typename?: 'Beoordeling';
  BeoordelingID: Scalars['Int'];
  VakID: Scalars['Int'];
  PersoonID?: Maybe<Scalars['Int']>;
  Status: BeoordelingStatusEnum;
  Rapport?: Maybe<Scalars['String']>;
  RapportCijfer?: Maybe<Scalars['Int']>;
  DatumRapport?: Maybe<Scalars['Date']>;
  DatumGepland?: Maybe<Scalars['Date']>;
  Beoordelaar?: Maybe<Persoon>;
};

export enum BeoordelingStatusEnum {
  Afgekeurd = 'Afgekeurd',
  TerBeoordeling = 'TerBeoordeling',
  Goedgekeurd = 'Goedgekeurd',
  CommentaarGevraagd = 'CommentaarGevraagd',
}

export type Certificaat = {
  __typename?: 'Certificaat';
  CertificaatID: Scalars['Int'];
  Code: Scalars['String'];
  Naam: Scalars['String'];
};

export type Certificering = {
  __typename?: 'Certificering';
  CertificeringID: Scalars['Int'];
  CertificaatID: Scalars['Int'];
  NormVersieID: Scalars['Int'];
  PersoonID: Scalars['Int'];
  BeginDatum: Scalars['Date'];
  EindDatum: Scalars['Date'];
  Opmerkingen: Scalars['String'];
  Nummer: Scalars['String'];
  NummerWeergave: Scalars['String'];
  Status: CertificeringStatusEnum;
  /** Date on which all required sessions were taken */
  DatumVoldaan?: Maybe<Scalars['Date']>;
  IsVerlengingVan?: Maybe<Scalars['Int']>;
  DatumAangemaakt: Scalars['Date'];
  DatumIngetrokkenVan?: Maybe<Scalars['Date']>;
  DatumIngetrokkenTot?: Maybe<Scalars['Date']>;
  UitstelVerleend?: Maybe<Scalars['Boolean']>;
  UitstelTot?: Maybe<Scalars['Date']>;
  Certificaat?: Maybe<Certificaat>;
  CertificeringAantekeningen?: Maybe<Array<Maybe<CertificeringAantekening>>>;
  Passen?: Maybe<Array<Maybe<Pas>>>;
  Persoon?: Maybe<Persoon>;
};

export type CertificeringAantekening = {
  __typename?: 'CertificeringAantekening';
  CertificeringID: Scalars['Int'];
  /** Can only contain KBA of KBA-GB */
  AantekeningCode: Scalars['String'];
  VanafDatum: Scalars['Date'];
  DatumPasAangemaakt?: Maybe<Scalars['Date']>;
  Opmerkingen?: Maybe<Scalars['String']>;
  DatumAangemaakt?: Maybe<Scalars['Date']>;
  DatumGewijzigd?: Maybe<Scalars['Date']>;
  PersoonIDAangemaakt?: Maybe<Scalars['Int']>;
  PersoonIDGewijzigd?: Maybe<Scalars['Int']>;
};

export enum CertificeringStatusEnum {
  Geldig = 'Geldig',
  Verlopen = 'Verlopen',
  Ingetrokken = 'Ingetrokken',
  TerGoedkeuring = 'TerGoedkeuring',
  DiplomaAfgekeurd = 'DiplomaAfgekeurd',
  Ingenomen = 'Ingenomen',
}

export type Comment = {
  __typename?: 'Comment';
  title?: Maybe<Scalars['String']>;
  comment?: Maybe<Scalars['String']>;
  dateOfComment?: Maybe<Scalars['Date']>;
  source?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
  sort?: Maybe<Scalars['Int']>;
};

export type Competentie = {
  __typename?: 'Competentie';
  CompetentieID: Scalars['Int'];
  UniversiteitID?: Maybe<Scalars['Int']>;
  Naam: Scalars['String'];
  Code: Scalars['String'];
};

export type Contactgegevens = {
  __typename?: 'Contactgegevens';
  ContactgegevensID: Scalars['Int'];
  Adresregel1: Scalars['String'];
  Adresregel2?: Maybe<Scalars['String']>;
  Huisnummer: Scalars['String'];
  HuisnummerToevoeging?: Maybe<Scalars['String']>;
  Postcode: Scalars['String'];
  Woonplaats: Scalars['String'];
  Land: Scalars['String'];
  Email?: Maybe<Scalars['String']>;
  Telefoon?: Maybe<Scalars['String']>;
  Fax?: Maybe<Scalars['String']>;
  Website?: Maybe<Scalars['String']>;
  TerAttentieVan?: Maybe<Scalars['String']>;
  RekeningNummer?: Maybe<Scalars['String']>;
  EmailWerkgever?: Maybe<Scalars['String']>;
  DisplayAddress?: Maybe<Scalars['String']>;
};

export type CreateCourseInput = {
  VakID: Scalars['Int'];
  Titel: Scalars['SafeString'];
  Promotietekst: Scalars['SafeString'];
  Prijs: Scalars['Float'];
  MaximumCursisten: Scalars['Int'];
  IsBesloten: Scalars['Boolean'];
  Opmerkingen?: Maybe<Scalars['SafeString']>;
  Datum: Scalars['Date'];
  Begintijd: Scalars['Date'];
  Eindtijd: Scalars['Date'];
  LokatieID: Scalars['Int'];
  Docent?: Maybe<Scalars['SafeString']>;
};

export type CreateInvoiceCollectionInput = {
  invoiceIds?: Maybe<Array<Scalars['Int']>>;
};

export type CreateInvoiceCollectionResult = {
  __typename?: 'CreateInvoiceCollectionResult';
  success: Scalars['Boolean'];
  message?: Maybe<Scalars['String']>;
  invoiceCollectionId?: Maybe<Scalars['Int']>;
};

export enum CrediteurTypeEnum {
  Universiteit = 'universiteit',
  Persoon = 'persoon',
}

export type Cursus = {
  __typename?: 'Cursus';
  CursusID: Scalars['Int'];
  VakID?: Maybe<Scalars['Int']>;
  CursusleiderID?: Maybe<Scalars['Int']>;
  Prijs?: Maybe<Scalars['Float']>;
  Titel?: Maybe<Scalars['String']>;
  Promotietekst?: Maybe<Scalars['String']>;
  IsBesloten?: Maybe<Scalars['Boolean']>;
  MaximumCursisten?: Maybe<Scalars['Int']>;
  Opmerkingen?: Maybe<Scalars['String']>;
  Status: CursusStatusEnum;
  CursusCode?: Maybe<Scalars['String']>;
  AocKenmerk?: Maybe<Scalars['String']>;
  ExamenCursusID?: Maybe<Scalars['Int']>;
  DatumAangemaakt?: Maybe<Scalars['Date']>;
  DatumGewijzigd?: Maybe<Scalars['Date']>;
  PersoonIDAangemaakt?: Maybe<Scalars['Int']>;
  PersoonIDGewijzigd?: Maybe<Scalars['Int']>;
  Sessies?: Maybe<Array<Maybe<Sessie>>>;
  Vak: Vak;
  CursusDeelnames?: Maybe<Array<Maybe<CursusDeelname>>>;
  /**  Only available when sub query is available  */
  AantalCursusDeelnames?: Maybe<Scalars['Int']>;
};

export type CursusDeelname = {
  __typename?: 'CursusDeelname';
  CursusDeelnameID: Scalars['Int'];
  CursusID: Scalars['Int'];
  PersoonID: Scalars['Int'];
  Status: CursusDeelnameStatusEnum;
  Opmerkingen?: Maybe<Scalars['String']>;
  CertificeringID?: Maybe<Scalars['Int']>;
  DatumAangemaakt?: Maybe<Scalars['Date']>;
  Cursus: Cursus;
  Certificering?: Maybe<Certificering>;
  Persoon?: Maybe<Persoon>;
};

export enum CursusDeelnameStatusEnum {
  Aangemeld = 'Aangemeld',
  Aanwezig = 'Aanwezig',
  Voorlopig = 'Voorlopig',
  Betaald = 'Betaald',
  Afgemeld = 'Afgemeld',
  Geregistreerd = 'Geregistreerd',
  Afgewezen = 'Afgewezen',
  Geslaagd = 'Geslaagd',
  Gezakt = 'Gezakt',
  /** Geslaagd theorie, gezakt praktijk */
  GeslaagdTheorieGezaktPraktijk = 'GeslaagdTheorie_GezaktPraktijk',
  /** Gezakt theorie, geslaagd praktijk */
  GeslaagdPraktijkGezaktTheorie = 'GeslaagdPraktijk_GezaktTheorie',
}

export type CursusNodes = {
  __typename?: 'CursusNodes';
  totalCount: Scalars['Int'];
  nodes?: Maybe<Array<Maybe<Cursus>>>;
  pageInfo?: Maybe<PageInfo>;
};

export type CursusSessie = {
  __typename?: 'CursusSessie';
  CourseId: Scalars['Int'];
  SpecialtyId: Scalars['Int'];
  CourseCode: Scalars['String'];
  Title: Scalars['String'];
  Date: Scalars['Date'];
  StartTime: Scalars['String'];
  EndTime: Scalars['String'];
  Price: Scalars['Float'];
  LocationName: Scalars['String'];
  LocationAddress?: Maybe<LocationAddress>;
  Distance?: Maybe<Scalars['Int']>;
  Competence: Scalars['String'];
  Theme: Scalars['String'];
  Organizer: Scalars['String'];
  OrganizerEmail?: Maybe<Scalars['String']>;
  OrganizerPhone?: Maybe<Scalars['String']>;
  OrganizerWebsite?: Maybe<Scalars['String']>;
  PromoText?: Maybe<Scalars['String']>;
  Registered: Scalars['Boolean'];
  RegisteredDate?: Maybe<Scalars['Date']>;
  CanUnRegister: Scalars['Boolean'];
  SpecialtyWebsite?: Maybe<Scalars['String']>;
};

export enum CursusStatusEnum {
  Voorlopig = 'Voorlopig',
  Goedgekeurd = 'Goedgekeurd',
  Betaald = 'Betaald',
  ExamenAangemeld = 'ExamenAangemeld',
}

export enum DebiteurTypeEnum {
  Vakgroep = 'vakgroep',
  Universiteit = 'universiteit',
  Persoon = 'persoon',
  Exameninstelling = 'exameninstelling',
}

export type DeclarationInvoiceCreatedResult = {
  __typename?: 'DeclarationInvoiceCreatedResult';
  InvoiceLink: Scalars['String'];
  FactuurNummer: Scalars['String'];
};

export type DeleteExamInput = {
  CursusID?: Maybe<Scalars['Int']>;
};

export type DigitaalExamen = {
  __typename?: 'DigitaalExamen';
  DigitaalExamenId: Scalars['Int'];
  ExamenType: Scalars['String'];
  AssementId: Scalars['String'];
  ExamenNaam: Scalars['String'];
};

export type DiscussieVisitatie = {
  __typename?: 'DiscussieVisitatie';
  DiscussieVisitatieID: Scalars['Int'];
  VisitatieID: Scalars['Int'];
  PersoonID?: Maybe<Scalars['Int']>;
  VakgroepID?: Maybe<Scalars['Int']>;
  Commentaar?: Maybe<Scalars['String']>;
  DatumTijd?: Maybe<Scalars['Date']>;
  IsAuteurVakgroep?: Maybe<Scalars['Boolean']>;
  IsAuteurInspecteur?: Maybe<Scalars['Boolean']>;
  Persoon?: Maybe<Persoon>;
};

export type Exam = {
  __typename?: 'Exam';
  Cursus?: Maybe<Cursus>;
  Vaknorm?: Maybe<Vaknorm>;
};

export type ExamenInstelling = {
  __typename?: 'ExamenInstelling';
  ExamenInstellingID: Scalars['Int'];
  Naam: Scalars['String'];
  IsBtwPlichtig: Scalars['Boolean'];
  IsActief: Scalars['Boolean'];
  Code: Scalars['String'];
  Contactgegevens: Contactgegevens;
  Examinator: Examinator;
};

export type ExamenInstellingLink = {
  __typename?: 'ExamenInstellingLink';
  ExaminatorID: Scalars['Int'];
  ExamenInstellingID: Scalars['Int'];
  PersoonID: Scalars['Int'];
  Actief: Scalars['Boolean'];
  ExamenInstelling?: Maybe<ExamenInstelling>;
};

export type Examinator = {
  __typename?: 'Examinator';
  ExaminatorID: Scalars['Int'];
  ExamenInstellingID: Scalars['Int'];
  PersoonID: Scalars['Int'];
  Actief: Scalars['Boolean'];
  Persoon?: Maybe<Persoon>;
  ExamenInstelling?: Maybe<ExamenInstelling>;
};

export enum FactuurHistorieStatusEnum {
  Aangemaakt = 'Aangemaakt',
  Betaald = 'Betaald',
  DoorBeAfgehandeld = 'Door_BE_Afgehandeld',
  OnjuistAangemaakt = 'OnjuistAangemaakt',
  Oninbaar = 'Oninbaar',
  Creditfactuur = 'Creditfactuur',
}

export type FactuurNodes = {
  __typename?: 'FactuurNodes';
  /** Total nr of emails */
  totalCount: Scalars['Int'];
  /** The email objects */
  nodes?: Maybe<Array<Maybe<Invoice>>>;
  /** Page info */
  pageInfo?: Maybe<PageInfo>;
};

export type File = {
  __typename?: 'File';
  id: Scalars['ID'];
  path: Scalars['String'];
  filename: Scalars['String'];
  mimetype: Scalars['String'];
  encoding: Scalars['String'];
};

/** , orderBy: OrderByArgs */
export type FilterInvoicesInput = {
  PaymentStatus?: Maybe<PaymentStatusEnum>;
  FactuurNummer?: Maybe<Scalars['SafeString']>;
  FromDate?: Maybe<Scalars['Date']>;
  ToDate?: Maybe<Scalars['Date']>;
  CursusCode?: Maybe<Scalars['SafeString']>;
  InvoiceCollectionFilter?: Maybe<InvoiceCollectionsFilterEnum>;
  ForReviewersOnly?: Maybe<Scalars['Boolean']>;
  DebiteurType?: Maybe<DebiteurTypeEnum>;
  DebiteurID?: Maybe<Scalars['Int']>;
  VakgroepID?: Maybe<Scalars['Int']>;
  ExamenInstellingID?: Maybe<Scalars['Int']>;
  InvoiceStatusFilterList?: Maybe<Array<Maybe<Scalars['SafeString']>>>;
  CrediteurType?: Maybe<Scalars['SafeString']>;
  CrediteurID?: Maybe<Scalars['Int']>;
};

export type GetInspectionPlanningInput = {
  startDate: Scalars['Date'];
  showStatsForPeriod: Scalars['Boolean'];
  shouldOnlyBePlanned: Scalars['Boolean'];
  plannable: Scalars['Boolean'];
  targetSettings: TargetSettings;
  isInspector: Scalars['Boolean'];
  isRector: Scalars['Boolean'];
};

export type GetInspectionReportsInput = {
  datumVisitatieVan: Scalars['Date'];
  datumVisitatieTot: Scalars['Date'];
  inspecteurId: Scalars['Int'];
  rapportCijfer: Scalars['Int'];
  competentieId: Scalars['Int'];
  themaId: Scalars['Int'];
  vakgroepId: Scalars['Int'];
  vakId: Scalars['Int'];
  volgensIntentieAanbod: Scalars['Int'];
  examenInstellingId: Scalars['Int'];
};

export enum InkoopVerkoopEnum {
  Inkoop = 'INKOOP',
  Verkoop = 'VERKOOP',
}

export type InspectionPlanningData = {
  __typename?: 'InspectionPlanningData';
  SessieData: PlanningData;
  OrganizerTargetActual: Scalars['Float'];
  SpecialtyTargetActual: Scalars['Float'];
  NrOfDaysSinceLastVisit?: Maybe<Scalars['Int']>;
  ShouldBeVisited: Scalars['Boolean'];
};

export type InspectionResult = {
  __typename?: 'InspectionResult';
  PlanningData: Array<Maybe<InspectionPlanningData>>;
  StatisticsPerOrganizer?: Maybe<Array<Maybe<StatisticsPerOrganizer>>>;
  InspectionStatisticsOverall?: Maybe<VisitingData>;
};

export type Inspector = {
  __typename?: 'Inspector';
  id: Scalars['Int'];
  name: Scalars['String'];
};

export type Invoice = {
  __typename?: 'Invoice';
  FactuurID: Scalars['Int'];
  FactuurNummer: Scalars['String'];
  CursusCode: Scalars['String'];
  FactuurNr: Scalars['String'];
  KenmerkJaarFactuurNummer: Scalars['String'];
  FactuurStatus: Scalars['String'];
  StatusOpmerkingen?: Maybe<Scalars['String']>;
  FactuurJaar: Scalars['Int'];
  IsBetaald: Scalars['Boolean'];
  FactuurDatum: Scalars['Date'];
  BedragExBtw: Scalars['Float'];
  BedragIncBtw: Scalars['Float'];
  BtwBedrag: Scalars['Float'];
  ProductCode: Scalars['String'];
  ProductNaam: Scalars['String'];
  DebiteurID: Scalars['Int'];
  DebiteurType: DebiteurTypeEnum;
  DebiteurNaam: Scalars['String'];
  CrediteurID: Scalars['Int'];
  CrediteurType: Scalars['String'];
  InVerzamelfactuur: Scalars['Int'];
  VerzamelFactuurID: Scalars['Int'];
  VerzamelFactuurBedrag: Scalars['Float'];
  VerzamelFactuurBTWBedrag: Scalars['Float'];
  VerzamelFactuurDatum?: Maybe<Scalars['Date']>;
  VerzamelFactuurOpmerking?: Maybe<Scalars['String']>;
  VerzamelFactuurIsBetaald: Scalars['Boolean'];
  VerzamelFactuurDatumBetaald?: Maybe<Scalars['Date']>;
  InvoiceLink: Scalars['String'];
  Kenmerk?: Maybe<Scalars['String']>;
  IsCreditFactuur?: Maybe<Scalars['Boolean']>;
  OrigineleFactuurID?: Maybe<Scalars['Int']>;
  OrigineleFactuurNummer?: Maybe<Scalars['Int']>;
  OrigineleInvoiceLink?: Maybe<Scalars['String']>;
  CreditFactuurID?: Maybe<Scalars['Int']>;
  CreditFactuurNummer?: Maybe<Scalars['Int']>;
  CreditInvoiceLink?: Maybe<Scalars['String']>;
};

export enum InvoiceCollectionsFilterEnum {
  Both = 'BOTH',
  InvoiceCollections = 'INVOICE_COLLECTIONS',
  NormalInvoices = 'NORMAL_INVOICES',
}

export type Kennisgebied = {
  __typename?: 'Kennisgebied';
  KennisgebiedID: Scalars['Int'];
  UniversiteitID?: Maybe<Scalars['Int']>;
  Naam: Scalars['String'];
};

export type Landen = {
  __typename?: 'Landen';
  Value: Scalars['String'];
  Text: Scalars['String'];
};

export type LastVisitData = {
  __typename?: 'LastVisitData';
  VisitedDate?: Maybe<Scalars['Date']>;
  InspectorId?: Maybe<Scalars['Int']>;
  ReportGrade?: Maybe<Scalars['Float']>;
  ReportCreatedDate?: Maybe<Scalars['Date']>;
  AccordingIntention?: Maybe<Scalars['Boolean']>;
};

export type LocationAddress = {
  __typename?: 'LocationAddress';
  Street: Scalars['String'];
  HouseNr: Scalars['String'];
  HouseNrExtension?: Maybe<Scalars['String']>;
  Zipcode?: Maybe<Scalars['String']>;
  City?: Maybe<Scalars['String']>;
  Email?: Maybe<Scalars['String']>;
  Website?: Maybe<Scalars['String']>;
};

export type Lokatie = {
  __typename?: 'Lokatie';
  LokatieID: Scalars['Int'];
  VakgroepID?: Maybe<Scalars['Int']>;
  ExamenInstellingID?: Maybe<Scalars['Int']>;
  ContactgegevensID?: Maybe<Scalars['Int']>;
  Naam: Scalars['String'];
  Routebeschrijving: Scalars['String'];
  IsActief: Scalars['Boolean'];
  Contactgegevens: Contactgegevens;
};

export type MultiUploadResult = {
  __typename?: 'MultiUploadResult';
  result: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  /**
   * The `requestAdviseCertificate` endpoint can only be used for
   * already registered users. Users that have `IsGbaGeregistreerd` set to true
   * are not required to have the personInput entered.
   */
  requestAdviseCertificate?: Maybe<ExemptionRequestResult>;
  registerCardReturn: Scalars['Boolean'];
  createDuplicateCardWithoutInvoice: Scalars['Boolean'];
  /** Register for course */
  registerForCourse: RegisterResult;
  /** Un-register for course. Input is CursusDeelnameID */
  unRegisterForCourse: UnRegisterResult;
  createCourse?: Maybe<Cursus>;
  /** The `decoupleLicense` can be used to decouple an XX + KBA license */
  decoupleLicense: DecoupleLicenseResult;
  /** The `requestDuplicate` can be used to request a license card duplicate */
  requestDuplicate: RequestDuplicateResult;
  saveExam?: Maybe<Cursus>;
  deleteExam?: Maybe<Scalars['Boolean']>;
  updatePlanning: UpdatePlanningResult;
  updateInvoiceStatus: UpdateInvoiceStatusResult;
  createInvoiceCollection: CreateInvoiceCollectionResult;
  /** Create or update a location */
  saveLocation: Lokatie;
  /**
   * Checks if person exists in the database by bsn and birth date and if not,
   * checks the person in the GBA
   */
  checkForExistingPersonByBsn?: Maybe<CheckForExistingPersonByBsnResult>;
  /** Checks if the person exists by initials, last name and birth date in the database */
  checkForExistingPersonByPersonData?: Maybe<CheckForExistingPersonByPersonDataResult>;
  /** The `requestLicense` can be used to request a certificate */
  requestLicense: RequestLicenseResult;
  /** The createLicense mutation is used to create a new license and a card for a person */
  createLicense: Certificering;
  singleUpload: File;
  multipleUpload: Array<File>;
  multiUpload: MultiUploadResult;
  addVisitationComment?: Maybe<DiscussieVisitatie>;
  updateVisitationReport: Visitatie;
  createDeclarationInvoice: DeclarationInvoiceCreatedResult;
};

export type MutationRequestAdviseCertificateArgs = {
  input: RequestAdviseCertificateInput;
  personDataInput?: Maybe<RequestAdviseCertificatePersonDataInput>;
};

export type MutationRegisterCardReturnArgs = {
  input: RegisterCardReturnInput;
};

export type MutationCreateDuplicateCardWithoutInvoiceArgs = {
  pasId: Scalars['Int'];
};

export type MutationRegisterForCourseArgs = {
  input: RegisterForCourseInput;
};

export type MutationUnRegisterForCourseArgs = {
  CursusDeelnameID: Scalars['Int'];
};

export type MutationCreateCourseArgs = {
  input: CreateCourseInput;
};

export type MutationDecoupleLicenseArgs = {
  input: DecoupleLicenseInput;
};

export type MutationRequestDuplicateArgs = {
  input: RequestDuplicateInput;
};

export type MutationSaveExamArgs = {
  input: SaveExamInput;
};

export type MutationDeleteExamArgs = {
  input: DeleteExamInput;
};

export type MutationUpdatePlanningArgs = {
  sessieId: Scalars['Int'];
  inspectorId: Scalars['Int'];
  visitDate: Scalars['Date'];
};

export type MutationUpdateInvoiceStatusArgs = {
  input: UpdateInvoiceStatusInput;
};

export type MutationCreateInvoiceCollectionArgs = {
  input: CreateInvoiceCollectionInput;
};

export type MutationSaveLocationArgs = {
  input: SaveLocationInput;
};

export type MutationCheckForExistingPersonByBsnArgs = {
  bsn: Scalars['Int'];
  birthDate: Scalars['Date'];
};

export type MutationCheckForExistingPersonByPersonDataArgs = {
  initials: Scalars['String'];
  lastName: Scalars['String'];
  birthDate: Scalars['Date'];
};

export type MutationRequestLicenseArgs = {
  input: RequestLicenseInput;
  createPersonByBsnInput?: Maybe<CreatePersonByBsn>;
  createPersonByPersonDataInput?: Maybe<CreatePersonByPersonData>;
  personDataInput?: Maybe<BasicPersonData>;
};

export type MutationCreateLicenseArgs = {
  input: CreateLicenseInput;
};

export type MutationSingleUploadArgs = {
  file: Scalars['Upload'];
};

export type MutationMultipleUploadArgs = {
  files: Array<Scalars['Upload']>;
};

export type MutationMultiUploadArgs = {
  file1: Scalars['Upload'];
  file2: Scalars['Upload'];
};

export type MutationAddVisitationCommentArgs = {
  input: AddVisitationCommentInput;
};

export type MutationUpdateVisitationReportArgs = {
  input: UpdateVisitationReportInput;
};

export type MutationCreateDeclarationInvoiceArgs = {
  input: CreateDeclarationInvoiceInput;
};

export type My = {
  __typename?: 'My';
  Persoon: Persoon;
  Roles?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * Fetches only current licenses when 'alleenGeldig' is true.
   * When false (default), fetches all licenses.
   * 'perDatum' sets the date that the licenses should be valid (default today)
   */
  Certificeringen?: Maybe<Array<Maybe<Certificering>>>;
  Studieresultaten?: Maybe<Array<Maybe<Studieresultaat>>>;
  CursusDeelnames?: Maybe<Array<Maybe<CursusDeelname>>>;
  AangemeldeCursusDeelnames?: Maybe<Array<Maybe<AangemeldeCursusDeelname>>>;
  /** Link to vakgroep(en), via Hoogleraar table */
  VakgroepLinks?: Maybe<Array<Maybe<VakgroepLink>>>;
  /** Link to exameninstelling(en), via Examinator table */
  ExamenInstellingLinks?: Maybe<Array<Maybe<ExamenInstellingLink>>>;
};

export type MyCertificeringenArgs = {
  alleenGeldig?: Maybe<Scalars['Boolean']>;
  perDatum?: Maybe<Scalars['Date']>;
  inclusiefPassen?: Maybe<Scalars['Boolean']>;
};

export type MyStudieresultatenArgs = {
  isExamen?: Maybe<Scalars['Boolean']>;
  certificeringId?: Maybe<Scalars['Int']>;
};

export type MyCursusDeelnamesArgs = {
  certificeringId?: Maybe<Scalars['Int']>;
};

export type MyVakgroepLinksArgs = {
  activeOnly?: Maybe<Scalars['Boolean']>;
};

export type MyExamenInstellingLinksArgs = {
  activeOnly?: Maybe<Scalars['Boolean']>;
};

export type Nationaliteiten = {
  __typename?: 'Nationaliteiten';
  Value: Scalars['String'];
  Text: Scalars['String'];
};

export type NormVersie = {
  __typename?: 'NormVersie';
  NormVersieID: Scalars['Int'];
  UniversiteitID?: Maybe<Scalars['Int']>;
  Versienummer?: Maybe<Scalars['String']>;
  BeginDatum?: Maybe<Scalars['Date']>;
  EindDatum?: Maybe<Scalars['Date']>;
  Opmerkingen?: Maybe<Scalars['String']>;
  Definitief?: Maybe<Scalars['Boolean']>;
};

export type OrderByArgs = {
  /** The field to order by */
  field: Scalars['String'];
  /** The sort direction */
  sortDirection: SortDirectionEnum;
};

export type PageInfo = {
  __typename?: 'PageInfo';
  hasNextPage?: Maybe<Scalars['Boolean']>;
  hasPreviousPage?: Maybe<Scalars['Boolean']>;
};

export type Pas = {
  __typename?: 'Pas';
  PasID: Scalars['Int'];
  CertificeringID: Scalars['Int'];
  DatumAanvraag: Scalars['Date'];
  DatumUitgeleverd?: Maybe<Scalars['Date']>;
  Aantal: Scalars['Int'];
  Status: PasStatusEnum;
  BriefVerstuurd: Scalars['Boolean'];
  ContactgegevensID?: Maybe<Scalars['Int']>;
  Geadresseerde?: Maybe<Scalars['String']>;
  PasRetouren?: Maybe<Array<Maybe<PasRetour>>>;
  Licentie?: Maybe<Certificering>;
  PasAdres?: Maybe<Contactgegevens>;
};

export type PasRetour = {
  __typename?: 'PasRetour';
  PasRetourID: Scalars['Int'];
  PasID: Scalars['Int'];
  DatumRetour: Scalars['Date'];
  DatumAangemaakt: Scalars['Date'];
  AangemaaktDoor: Scalars['String'];
};

export enum PasStatusEnum {
  Aangevraagd = 'Aangevraagd',
  Betaald = 'Betaald',
  Uitgeleverd = 'Uitgeleverd',
  Error = 'Error',
}

export enum PaymentStatusEnum {
  All = 'ALL',
  NotPaid = 'NOT_PAID',
  Paid = 'PAID',
}

export type Persoon = {
  __typename?: 'Persoon';
  PersoonID: Scalars['Int'];
  BSN?: Maybe<Scalars['Int']>;
  Voorletters: Scalars['String'];
  Tussenvoegsel: Scalars['String'];
  Achternaam: Scalars['String'];
  Roepnaam: Scalars['String'];
  Geslacht: Scalars['String'];
  Geboortedatum?: Maybe<Scalars['Date']>;
  Nationaliteit: Scalars['String'];
  Actief?: Maybe<Scalars['Boolean']>;
  IsGbaGeregistreerd?: Maybe<Scalars['Boolean']>;
  GbaNummer: Scalars['String'];
  GbaUpdate?: Maybe<Scalars['Date']>;
  /** Gets the contact data */
  Contactgegevens: Contactgegevens;
  /** Fetches all licenses */
  Certificeringen?: Maybe<Array<Maybe<Certificering>>>;
  /** Name in format 'Achternaam, Voorletters [tussenvoegsel]' */
  SortableFullName?: Maybe<Scalars['String']>;
  /** Name in format 'Voorletters [tussenvoegsel] Achternaam */
  FullName?: Maybe<Scalars['String']>;
};

export type PersoonCertificeringenArgs = {
  alleenGeldig?: Maybe<Scalars['Boolean']>;
  perDatum?: Maybe<Scalars['Date']>;
};

export type PlanningData = {
  __typename?: 'PlanningData';
  InstellingID: Scalars['Int'];
  InstellingNaam: Scalars['String'];
  VakType: Scalars['String'];
  VakID: Scalars['Int'];
  CursusID: Scalars['Int'];
  CursusCode?: Maybe<Scalars['Int']>;
  CursusStatus?: Maybe<Scalars['String']>;
  Titel?: Maybe<Scalars['String']>;
  BeginDatum: Scalars['Date'];
  SessieID: Scalars['Int'];
  LocatieID?: Maybe<Scalars['Int']>;
  LocatieToevoeging?: Maybe<Scalars['String']>;
  Naam?: Maybe<Scalars['String']>;
  Woonplaats?: Maybe<Scalars['String']>;
  Begintijd?: Maybe<Scalars['String']>;
  BeginDatumTijd?: Maybe<Scalars['Date']>;
  Eindtijd?: Maybe<Scalars['String']>;
  SessieType?: Maybe<Scalars['String']>;
  VisitatieID?: Maybe<Scalars['Int']>;
  PersoonID?: Maybe<Scalars['Int']>;
  Rapportcijfer?: Maybe<Scalars['Int']>;
  VisitatieStatus?: Maybe<Scalars['String']>;
  DatumRapport?: Maybe<Scalars['Date']>;
  DatumVisitatie?: Maybe<Scalars['Date']>;
  VolgensIntentieAanbod?: Maybe<Scalars['Boolean']>;
};

export enum ProductConfiguratieCode {
  Ad = 'AD',
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
  Tb = 'TB',
}

export type Query = {
  __typename?: 'Query';
  searchCard?: Maybe<Certificering>;
  Certificaten?: Maybe<Array<Maybe<Certificaat>>>;
  Certificeringen?: Maybe<Array<Maybe<Certificering>>>;
  Competenties: Array<Maybe<Competentie>>;
  Contactgegevens?: Maybe<Contactgegevens>;
  /** In the input, either specialtyId or courseId must be supplied */
  isLicenseValidForSpecialty: IsLicenseValidForSpecialtyResult;
  CursusSessies?: Maybe<Array<Maybe<CursusSessie>>>;
  hasDuplicatePending: Scalars['Boolean'];
  ExamenInstellingen: Array<Maybe<ExamenInstelling>>;
  ExamDetails?: Maybe<Exam>;
  Exams?: Maybe<CursusNodes>;
  getInspectionPlanning?: Maybe<InspectionResult>;
  getInspectors?: Maybe<Array<Maybe<Inspector>>>;
  getInspectionReports?: Maybe<Array<Maybe<Visitatie>>>;
  /**
   * Get unpaid invoices.
   * Optionally filter by status. And apply pagination with pageSize, pageNumber and orderBy (default: createdOn, DESC)
   */
  invoices: FactuurNodes;
  Kennisgebieden: Array<Maybe<Kennisgebied>>;
  Landen: Array<Maybe<Landen>>;
  SearchLocations?: Maybe<Array<Maybe<Lokatie>>>;
  /** Fetches data of the current logged in person */
  my?: Maybe<My>;
  Nationaliteiten: Array<Maybe<Nationaliteiten>>;
  SearchOrganizers?: Maybe<Array<Maybe<SearchOrganizerResult>>>;
  SearchExamOrganizers?: Maybe<Array<Maybe<SearchExamOrganizerResult>>>;
  CursusDeelnames?: Maybe<Array<Maybe<CursusDeelname>>>;
  CursusDeelnameDetails?: Maybe<CursusDeelname>;
  Persoon?: Maybe<Persoon>;
  Sessie?: Maybe<Sessie>;
  SearchSpecialties?: Maybe<Array<Maybe<SearchSpecialtyResult>>>;
  Specialties?: Maybe<Array<Maybe<Vak>>>;
  ExamSpecialties?: Maybe<Array<Maybe<Vak>>>;
  Specialty?: Maybe<Vak>;
  tariefByCertificaatCode?: Maybe<TotaalExtBtwTarief>;
  tariefDuplicaat?: Maybe<TotaalExtBtwTarief>;
  Themas: Array<Maybe<Thema>>;
  uploads?: Maybe<Array<Maybe<File>>>;
  Vakgroepen: Array<Maybe<Vakgroep>>;
  Visitations?: Maybe<VisitationInfoNodes>;
  Visitation?: Maybe<Visitatie>;
  VisitationDeclaration?: Maybe<VisitationDeclaration>;
  /**
   * Gets a list of all available pre educations (vooropleidingen)
   * Optionally pass a array of codes (similar in vooropleiding.code) to filter the list (i.e. ["30.00", "30.01"])
   */
  Vooropleidingen: Array<Maybe<Vooropleiding>>;
  /** Get all pre education categories ordered by ID */
  preEducationCategories: Array<Maybe<VooropleidingCategorie>>;
  /** Gets an array of Certificate's by the code of the pre-education (vooropleiding) */
  certificatesByPreEducation: Array<Maybe<Certificaat>>;
};

export type QuerySearchCardArgs = {
  licenseNumber: Scalars['SafeString'];
};

export type QueryCertificatenArgs = {
  idList?: Maybe<Array<Scalars['Int']>>;
};

export type QueryCertificeringenArgs = {
  personId: Scalars['Int'];
};

export type QueryContactgegevensArgs = {
  ContactgegevensID: Scalars['Int'];
};

export type QueryIsLicenseValidForSpecialtyArgs = {
  input: IsLicenseValidForSpecialtyInput;
};

export type QueryCursusSessiesArgs = {
  input: SearchCourseSessionsInput;
};

export type QueryHasDuplicatePendingArgs = {
  licenseId: Scalars['Int'];
};

export type QueryExamenInstellingenArgs = {
  isActive?: Maybe<Scalars['Boolean']>;
  findById?: Maybe<Scalars['Int']>;
};

export type QueryExamDetailsArgs = {
  input: SearchExamInput;
};

export type QueryExamsArgs = {
  input: ExamsInput;
};

export type QueryGetInspectionPlanningArgs = {
  input: GetInspectionPlanningInput;
};

export type QueryGetInspectionReportsArgs = {
  input: GetInspectionReportsInput;
};

export type QueryInvoicesArgs = {
  pageSize: Scalars['Int'];
  pageNumber: Scalars['Int'];
  orderBy?: Maybe<OrderByArgs>;
  filterInvoices?: Maybe<FilterInvoicesInput>;
};

export type QuerySearchLocationsArgs = {
  input: SearchLocationsInput;
};

export type QueryCursusDeelnamesArgs = {
  certificeringId?: Maybe<Scalars['Int']>;
};

export type QueryCursusDeelnameDetailsArgs = {
  cursusDeelnameId: Scalars['Int'];
};

export type QueryPersoonArgs = {
  PersoonID: Scalars['Int'];
};

export type QuerySessieArgs = {
  sessieId: Scalars['Int'];
};

export type QuerySearchSpecialtiesArgs = {
  input: SearchSpecialtyInput;
};

export type QuerySpecialtiesArgs = {
  input: SpecialtiesInput;
};

export type QueryExamSpecialtiesArgs = {
  input: ExamSpecialtiesInput;
};

export type QuerySpecialtyArgs = {
  vakId: Scalars['Int'];
  fullDetails?: Maybe<Scalars['Boolean']>;
};

export type QueryTariefByCertificaatCodeArgs = {
  certificaatCode: Scalars['String'];
  individueleAanvraag?: Maybe<Scalars['Boolean']>;
};

export type QueryVakgroepenArgs = {
  isActive?: Maybe<Scalars['Boolean']>;
  findById?: Maybe<Scalars['Int']>;
};

export type QueryVisitationsArgs = {
  input: VisitationsInput;
};

export type QueryVisitationArgs = {
  input: VisitationInput;
};

export type QueryVisitationDeclarationArgs = {
  input: VisitationInput;
};

export type QueryVooropleidingenArgs = {
  codes?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type QueryCertificatesByPreEducationArgs = {
  code: Scalars['String'];
};

export type RegisterCardReturnInput = {
  PasID: Scalars['Int'];
  DatumRetour: Scalars['Date'];
};

export type RegisterResult = {
  __typename?: 'RegisterResult';
  success: Scalars['Boolean'];
  message: Scalars['String'];
};

export type SaveExamInput = {
  CursusID?: Maybe<Scalars['Int']>;
  SessieID?: Maybe<Scalars['Int']>;
  VakID: Scalars['Int'];
  LokatieID: Scalars['Int'];
  Titel: Scalars['SafeString'];
  Promotietekst: Scalars['SafeString'];
  Prijs: Scalars['Float'];
  MaximumCursisten: Scalars['Int'];
  Opmerkingen?: Maybe<Scalars['SafeString']>;
  Datum: Scalars['Date'];
  Begintijd: Scalars['Date'];
  Eindtijd: Scalars['Date'];
  IsBesloten?: Maybe<Scalars['Boolean']>;
  Docent?: Maybe<Scalars['SafeString']>;
};

export type SearchExamOrganizerResult = {
  __typename?: 'SearchExamOrganizerResult';
  ExamenInstellingID: Scalars['Int'];
  Naam?: Maybe<Scalars['String']>;
};

export type SearchOrganizerResult = {
  __typename?: 'SearchOrganizerResult';
  VakgroepID: Scalars['Int'];
  Naam?: Maybe<Scalars['String']>;
};

export type SearchSpecialtyResult = {
  __typename?: 'SearchSpecialtyResult';
  SpecialtyId: Scalars['Int'];
  Code: Scalars['String'];
  Title: Scalars['String'];
  Price: Scalars['Float'];
  Competence: Scalars['String'];
  Theme: Scalars['String'];
  Organizer: Scalars['String'];
  OrganizerEmail?: Maybe<Scalars['String']>;
  OrganizerPhone?: Maybe<Scalars['String']>;
  OrganizerWebsite?: Maybe<Scalars['String']>;
  PromoText?: Maybe<Scalars['String']>;
  SpecialtyWebsite?: Maybe<Scalars['String']>;
};

export type Sessie = {
  __typename?: 'Sessie';
  SessieID: Scalars['Int'];
  CursusID: Scalars['Int'];
  LokatieID: Scalars['Int'];
  LokatieToevoeging: Scalars['String'];
  Datum: Scalars['Date'];
  Begintijd: Scalars['Date'];
  Eindtijd: Scalars['Date'];
  Docent: Scalars['String'];
  Opmerkingen: Scalars['String'];
  SessieType: Scalars['String'];
  DigitaalExamenId?: Maybe<Scalars['Int']>;
  DatumAangemaakt?: Maybe<Scalars['Date']>;
  DatumGewijzigd?: Maybe<Scalars['Date']>;
  PersoonIDAangemaakt?: Maybe<Scalars['Int']>;
  PersoonIDGewijzigd?: Maybe<Scalars['Int']>;
  Lokatie?: Maybe<Lokatie>;
  DatumBegintijd: Scalars['Date'];
  DatumEindtijd: Scalars['Date'];
  Visitatie?: Maybe<Visitatie>;
  Cursus?: Maybe<Cursus>;
  DigitaalExamen?: Maybe<DigitaalExamen>;
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
  VisitingData?: Maybe<VisitingData>;
  SpecialtyStatistics?: Maybe<Array<Maybe<StatisticsPerSpecialty>>>;
};

export type StatisticsPerSpecialty = {
  __typename?: 'StatisticsPerSpecialty';
  VakID: Scalars['Int'];
  Title: Scalars['String'];
  VakType: Scalars['String'];
  VisitingData?: Maybe<VisitingData>;
};

export type Studieresultaat = {
  __typename?: 'Studieresultaat';
  StudieresultaatID: Scalars['Int'];
  Datum: Scalars['Date'];
  Status: StudieresultaatStatusEnum;
  Certificering?: Maybe<Certificering>;
  Cursus: Cursus;
  Persoon: Persoon;
  Vak: Vak;
  NormVersie: NormVersie;
};

export enum StudieresultaatStatusEnum {
  Voorlopig = 'Voorlopig',
  Betaald = 'Betaald',
  Definitief = 'Definitief',
}

export type TargetSettings = {
  specialtyTarget: Scalars['Float'];
  specialtyMargin: Scalars['Float'];
  organizerTarget: Scalars['Float'];
  organizerMargin: Scalars['Float'];
  overallTarget: Scalars['Float'];
  overallMargin: Scalars['Float'];
};

export type Thema = {
  __typename?: 'Thema';
  ThemaID: Scalars['Int'];
  UniversiteitID?: Maybe<Scalars['Int']>;
  Naam: Scalars['String'];
  Code: Scalars['String'];
};

export type TotaalExtBtwTarief = {
  __typename?: 'TotaalExtBtwTarief';
  TotaalExtBtw?: Maybe<Scalars['Float']>;
};

export type UnRegisterResult = {
  __typename?: 'UnRegisterResult';
  success: Scalars['Boolean'];
  message: Scalars['String'];
};

export type UpdateInvoiceStatusInput = {
  invoiceId: Scalars['Int'];
  isInvoiceCollection: Scalars['Boolean'];
  status: FactuurHistorieStatusEnum;
  actionDate: Scalars['Date'];
  remarks?: Maybe<Scalars['SafeString']>;
};

export type UpdateInvoiceStatusResult = {
  __typename?: 'UpdateInvoiceStatusResult';
  success: Scalars['Boolean'];
  message?: Maybe<Scalars['String']>;
};

export type UpdatePlanningResult = {
  __typename?: 'UpdatePlanningResult';
  planned: Scalars['Boolean'];
};

export type Vaardigheid = {
  __typename?: 'Vaardigheid';
  VaardigheidID: Scalars['Int'];
  Omschrijving: Scalars['String'];
  Code: Scalars['String'];
};

export type Vak = {
  __typename?: 'Vak';
  VakID: Scalars['Int'];
  VakgroepID?: Maybe<Scalars['Int']>;
  ExamenInstellingID?: Maybe<Scalars['Int']>;
  Afkorting?: Maybe<Scalars['String']>;
  Inhoud?: Maybe<Scalars['String']>;
  Code?: Maybe<Scalars['String']>;
  Doelgroep?: Maybe<Scalars['String']>;
  Doelstelling?: Maybe<Scalars['String']>;
  Samenhang?: Maybe<Scalars['String']>;
  Vernieuwend?: Maybe<Scalars['String']>;
  Samenvatting?: Maybe<Scalars['String']>;
  Docenten?: Maybe<Scalars['String']>;
  Titel?: Maybe<Scalars['String']>;
  Kosten?: Maybe<Scalars['Float']>;
  Tijdsduur?: Maybe<Scalars['String']>;
  Praktijk?: Maybe<Scalars['String']>;
  Werkvorm?: Maybe<Scalars['String']>;
  EvaluatieWijze?: Maybe<Scalars['String']>;
  DatumAangemaakt?: Maybe<Scalars['Date']>;
  Promotietekst?: Maybe<Scalars['String']>;
  GewijzigdDatum?: Maybe<Scalars['Date']>;
  DigitaalAanbod?: Maybe<Scalars['Boolean']>;
  MinimumDatum?: Maybe<Scalars['Date']>;
  MaximumDatum?: Maybe<Scalars['Date']>;
  MaximumCursisten?: Maybe<Scalars['Int']>;
  NormVersieID: Scalars['Int'];
  IsExamenVak?: Maybe<Scalars['Boolean']>;
  ExamenType?: Maybe<Scalars['String']>;
  Competenties?: Maybe<Array<Maybe<Competentie>>>;
  CompetentieID?: Maybe<Scalars['Int']>;
  CompetentieNaam?: Maybe<Scalars['String']>;
  Themas?: Maybe<Array<Maybe<Thema>>>;
  ThemaID?: Maybe<Scalars['Int']>;
  ThemaNaam?: Maybe<Scalars['String']>;
  Vakgroep?: Maybe<Vakgroep>;
  Status: VakStatusEnum;
  Website?: Maybe<Scalars['String']>;
  ExamenInstelling?: Maybe<ExamenInstelling>;
  BeoordelaarNaam?: Maybe<Scalars['String']>;
  Beoordelingen?: Maybe<Array<Maybe<Beoordeling>>>;
  VakVaardigheden?: Maybe<Array<Maybe<Vaardigheid>>>;
  VakKennisgebieden?: Maybe<Array<Maybe<Kennisgebied>>>;
  VakDiscussie?: Maybe<Array<Maybe<VakDiscussie>>>;
};

export type VakDiscussie = {
  __typename?: 'VakDiscussie';
  title?: Maybe<Scalars['String']>;
  comments?: Maybe<Array<Maybe<Comment>>>;
};

export enum VakStatusEnum {
  Afgekeurd = 'Afgekeurd',
  Goedgekeurd = 'Goedgekeurd',
  Ingediend = 'Ingediend',
  Ingetrokken = 'Ingetrokken',
  InOntwerp = 'InOntwerp',
  Voorlopig = 'Voorlopig',
  WordtBeoordeeld = 'WordtBeoordeeld',
}

export type Vakgroep = {
  __typename?: 'Vakgroep';
  VakgroepID: Scalars['Int'];
  UniversiteitID: Scalars['Int'];
  ContactgegevensID: Scalars['Int'];
  Naam: Scalars['String'];
  Code: Scalars['String'];
  IsBtwPlichtig: Scalars['Boolean'];
  IsActief: Scalars['Boolean'];
  WebserviceEnabled: Scalars['Boolean'];
  ApiKey?: Maybe<Scalars['String']>;
  Contactgegevens: Contactgegevens;
};

export type VakgroepLink = {
  __typename?: 'VakgroepLink';
  HoogleraarID: Scalars['Int'];
  VakgroepID: Scalars['Int'];
  PersoonID: Scalars['Int'];
  Actief: Scalars['Boolean'];
  Vakgroep?: Maybe<Vakgroep>;
};

export type Vaknorm = {
  __typename?: 'Vaknorm';
  VaknormID: Scalars['Int'];
  NormVersieID: Scalars['Int'];
  ThemaID: Scalars['Int'];
  CompetentieID: Scalars['Int'];
  MinimumPunten: Scalars['Int'];
};

export type Visitatie = {
  __typename?: 'Visitatie';
  VisitatieID: Scalars['Int'];
  SessieID: Scalars['Int'];
  PersoonID: Scalars['Int'];
  Rapport?: Maybe<Scalars['String']>;
  VragenJson?: Maybe<Scalars['SafeString']>;
  Rapportcijfer?: Maybe<Scalars['Int']>;
  Status: VisitatieStatusEnum;
  DatumVisitatie?: Maybe<Scalars['Date']>;
  DatumRapport?: Maybe<Scalars['Date']>;
  VolgensIntentieAanbod: Scalars['Boolean'];
  Sessie?: Maybe<Sessie>;
  Cursus?: Maybe<Cursus>;
  DiscussieVisitaties?: Maybe<Array<Maybe<DiscussieVisitatie>>>;
  Inspecteur?: Maybe<Persoon>;
  DatumAangemaakt?: Maybe<Scalars['Date']>;
  AangemaaktDoor?: Maybe<Scalars['String']>;
  DatumGewijzigd?: Maybe<Scalars['Date']>;
  GewijzigdDoor?: Maybe<Scalars['String']>;
  /** Only available when sub-query is available */
  IsDeclarationPossible?: Maybe<Scalars['Boolean']>;
  /** Only available when sub-query is available */
  IsDeclarationSubmitted?: Maybe<Scalars['Boolean']>;
  /** Only available when sub-query is available */
  LastChangeDate?: Maybe<Scalars['Date']>;
  /** Only available when sub-query is available */
  LastChangeBy?: Maybe<Scalars['String']>;
  VisitatieBeoordelingCategorieen?: Maybe<Array<Maybe<VisitatieBeoordelingCategorie>>>;
};

export type VisitatieBeoordelingCategorie = {
  __typename?: 'VisitatieBeoordelingCategorie';
  VisitatieBeoordelingCategorieID: Scalars['ID'];
  VisitatieID: Scalars['Int'];
  CategorieTemplateID: Scalars['Int'];
  CategorieNaam: Scalars['String'];
  Weging: Scalars['Float'];
  TotaalPunten?: Maybe<Scalars['Float']>;
  Cijfer?: Maybe<Scalars['Float']>;
  Versie: Scalars['String'];
  VanafDatum: Scalars['Date'];
  DatumAangemaakt: Scalars['Date'];
  AangemaaktDoor?: Maybe<Scalars['String']>;
  DatumGewijzigd: Scalars['Date'];
  GewijzigdDoor?: Maybe<Scalars['String']>;
  Vragen?: Maybe<Array<Maybe<VisitatieBeoordelingCategorieVraag>>>;
};

export type VisitatieBeoordelingCategorieVraag = {
  __typename?: 'VisitatieBeoordelingCategorieVraag';
  VisitatieBeoordelingCategorieVraagID: Scalars['ID'];
  VisitatieBeoordelingCategorieID: Scalars['ID'];
  CategorieTemplateID: Scalars['Int'];
  VraagTemplateID: Scalars['Int'];
  Naam: Scalars['String'];
  Weging: Scalars['Float'];
  TotaalPunten?: Maybe<Scalars['Float']>;
  Cijfer?: Maybe<Scalars['Float']>;
  Toelichting?: Maybe<Scalars['String']>;
  Versie: Scalars['String'];
  VanafDatum: Scalars['Date'];
  DatumAangemaakt: Scalars['Date'];
  AangemaaktDoor?: Maybe<Scalars['String']>;
  DatumGewijzigd: Scalars['Date'];
  GewijzigdDoor?: Maybe<Scalars['String']>;
};

export enum VisitatieStatusEnum {
  Ingepland = 'Ingepland',
  RapportWordtOpgesteld = 'RapportWordtOpgesteld',
  Ingediend = 'Ingediend',
}

export type VisitationDeclaration = {
  __typename?: 'VisitationDeclaration';
  Visitatie?: Maybe<Visitatie>;
  TariffDayPart: Scalars['Float'];
  TariffKm: Scalars['Float'];
  HasInvoice: Scalars['Boolean'];
  InvoiceLink?: Maybe<Scalars['String']>;
  FactuurNummer?: Maybe<Scalars['String']>;
};

export type VisitationInfoNodes = {
  __typename?: 'VisitationInfoNodes';
  totalCount: Scalars['Int'];
  nodes?: Maybe<Array<Maybe<Visitatie>>>;
  pageInfo?: Maybe<PageInfo>;
};

export type VisitingData = {
  __typename?: 'VisitingData';
  NrOfCourses: Scalars['Int'];
  AverageRate?: Maybe<Scalars['Float']>;
  NrOfVisits: Scalars['Int'];
  VisitTargetActual: Scalars['Float'];
  VisitTarget: Scalars['Float'];
  AverageScoreAccordingIntention?: Maybe<Scalars['Float']>;
  LastVisitData?: Maybe<LastVisitData>;
};

export type Vooropleiding = {
  __typename?: 'Vooropleiding';
  VooropleidingID: Scalars['Int'];
  VooropleidingCategorieID: Scalars['Int'];
  UniversiteitID: Scalars['Int'];
  Code: Scalars['String'];
  Naam: Scalars['String'];
  Omschrijving: Scalars['String'];
  Categorie: VooropleidingCategorie;
  IsActief: Scalars['Boolean'];
  Certificaten?: Maybe<Array<Maybe<Certificaat>>>;
};

export type VooropleidingCategorie = {
  __typename?: 'VooropleidingCategorie';
  VooropleidingCategorieID: Scalars['Int'];
  Naam: Scalars['String'];
};

export enum VrijstellingCertificaatStatusEnum {
  Betaald = 'Betaald',
  VoorlopigBetaald = 'VoorlopigBetaald',
}

export enum VrijstellingsVerzoekBetaalStatusEnum {
  Betaald = 'Betaald',
}

export enum VrijstellingsVerzoekStatusEnum {
  Geannuleerd = 'Geannuleerd',
  Afgekeurd = 'Afgekeurd',
  Aangevraagd = 'Aangevraagd',
  Betaald = 'Betaald',
  Goedgekeurd = 'Goedgekeurd',
}

export type AddVisitationCommentInput = {
  visitatieId: Scalars['Int'];
  commentaar: Scalars['SafeString'];
};

export type BasicPersonData = {
  PersoonID: Scalars['Int'];
  Email?: Maybe<Scalars['Email']>;
};

export type CheckForExistingPersonByBsnResult = {
  __typename?: 'checkForExistingPersonByBsnResult';
  /** If person is found, true, not found is false */
  personFoundInDatabase: Scalars['Boolean'];
  /** Optional check if the person is found in the Gba (only executed when not found in database) */
  personFoundInGba?: Maybe<Scalars['Boolean']>;
  /** If personFound = true, the remarks how person is found (only on BSN, or on BSN and birth date) */
  message?: Maybe<Scalars['String']>;
  /** If personFound = true, an array of the found persons (of type Persoon, but limited fields) */
  persons?: Maybe<Array<Maybe<Persoon>>>;
};

export type CheckForExistingPersonByPersonDataResult = {
  __typename?: 'checkForExistingPersonByPersonDataResult';
  /** If person is found, true, not found is false */
  personFoundInDatabase: Scalars['Boolean'];
  /** If personFound = true, the remarks how person is found (only on BSN, or on BSN and birth date) */
  message?: Maybe<Scalars['String']>;
  /** If personFound = true, an array of the found persons (of type Persoon, but limited fields) */
  persons?: Maybe<Array<Maybe<Persoon>>>;
};

export type ContactgegevensInput = {
  Adresregel1: Scalars['SafeString'];
  Huisnummer: Scalars['SafeString'];
  HuisnummerToevoeging?: Maybe<Scalars['SafeString']>;
  Postcode: Scalars['SafeString'];
  Woonplaats: Scalars['SafeString'];
  Land: Scalars['SafeString'];
  Email?: Maybe<Scalars['SafeString']>;
  Telefoon?: Maybe<Scalars['SafeString']>;
  Website?: Maybe<Scalars['SafeString']>;
};

export type CreateDeclarationInvoiceInput = {
  VisitatieID: Scalars['Int'];
  NrOfKilometers?: Maybe<Scalars['Int']>;
  NrOfDayParts?: Maybe<Scalars['Int']>;
  PublicTransport?: Maybe<Scalars['Float']>;
  Other?: Maybe<Scalars['Float']>;
  OtherDescription?: Maybe<Scalars['SafeString']>;
};

export type CreateLicenseInput = {
  personId: Scalars['Int'];
  certificateId: Scalars['Int'];
  startDate: Scalars['Date'];
  endDate: Scalars['Date'];
  /** licenseId that the new license should be based off from */
  isExtensionOf: Scalars['Int'];
  remark?: Maybe<Scalars['SafeString']>;
};

export type CreatePersonByBsn = {
  /** BSN can be 8 or 9 digits long */
  BSN: Scalars['Int'];
  /**
   * Use i.e. `new Date(Date.UTC(1955, 8, 3)).getTime()`
   * which is: 3 sept 1955 00:00:00 GMT+2 (CEST)
   * Needed to match SQL Server database field value for a Date field
   */
  Geboortedatum: Scalars['Date'];
  /** Email address is required */
  Email: Scalars['Email'];
};

export type CreatePersonByPersonData = {
  /** Max 50 chars */
  Voorletters: Scalars['SafeString'];
  /** Max 50 chars */
  Tussenvoegsel?: Maybe<Scalars['SafeString']>;
  /** Max 50 chars */
  Achternaam: Scalars['SafeString'];
  /** Can only be 'o', 'm, 'v' */
  Geslacht: Scalars['SafeString'];
  /**
   * Use i.e. `new Date(Date.UTC(1955, 8, 3)).getTime()`
   * which is: 3 sept 1955 00:00:00 GMT+2 (CEST)
   * Needed to match SQL Server database field value for a Date field
   */
  Geboortedatum: Scalars['Date'];
  /** Use Nationaliteiten endpoint */
  Nationaliteit: Scalars['SafeString'];
  /** Max 100 chars */
  Adresregel1: Scalars['SafeString'];
  /** Max 100 chars */
  Adresregel2?: Maybe<Scalars['SafeString']>;
  /** Max 20 chars */
  Huisnummer: Scalars['Int'];
  /** Max 20 chars */
  HuisnummerToevoeging?: Maybe<Scalars['SafeString']>;
  /** Max 20 chars */
  Postcode: Scalars['SafeString'];
  /** Max 100 chars */
  Woonplaats: Scalars['SafeString'];
  /** Use Landen endpoint */
  Land: Scalars['SafeString'];
  /** Email address is required */
  Email: Scalars['Email'];
};

export type DecoupleLicenseInput = {
  /** Current XX + KBA license which should be decoupled */
  licenseId: Scalars['Int'];
  confirmationEmail?: Maybe<Scalars['String']>;
};

export type DecoupleLicenseResult = {
  __typename?: 'decoupleLicenseResult';
  updatedLicense?: Maybe<Certificering>;
  kbaLicense?: Maybe<Certificering>;
};

export type ExamSpecialtiesInput = {
  /** ExamenInstellingID to filter on organizers */
  examenInstellingId?: Maybe<Scalars['Int']>;
  validOnly?: Maybe<Scalars['Boolean']>;
};

export type ExamsInput = {
  /** Filter on part of exam code */
  examCode?: Maybe<Scalars['SafeString']>;
  /** Filter on part of title */
  title?: Maybe<Scalars['SafeString']>;
  /** Filter on status */
  status?: Maybe<CursusStatusEnum>;
  /** Date range, from */
  from?: Maybe<Scalars['Date']>;
  /** Date range, to */
  to?: Maybe<Scalars['Date']>;
  /** Filter on LocatieID */
  locationId?: Maybe<Scalars['Int']>;
  pageSize: Scalars['Int'];
  pageNumber: Scalars['Int'];
  orderBy: OrderByArgs;
};

export type ExemptionRequestResult = {
  __typename?: 'exemptionRequestResult';
  VrijstellingsVerzoekID: Scalars['Int'];
  invoiceLink: Scalars['String'];
  requestFormPdfLink: Scalars['String'];
};

export type IsLicenseValidForSpecialtyInput = {
  licenseId: Scalars['Int'];
  specialtyId?: Maybe<Scalars['Int']>;
  courseId?: Maybe<Scalars['Int']>;
};

export type IsLicenseValidForSpecialtyResult = {
  __typename?: 'isLicenseValidForSpecialtyResult';
  success: Scalars['Boolean'];
};

export type RegisterForCourseInput = {
  licenseId: Scalars['Int'];
  specialtyId?: Maybe<Scalars['Int']>;
  code?: Maybe<Scalars['SafeString']>;
  courseId: Scalars['Int'];
  isDigitalSpecialty: Scalars['Boolean'];
  title: Scalars['SafeString'];
  courseDateTime?: Maybe<Scalars['Date']>;
  knowledgeArea?: Maybe<Scalars['SafeString']>;
  birthPlace?: Maybe<Scalars['SafeString']>;
  invoiceAddress?: Maybe<Scalars['SafeString']>;
  street?: Maybe<Scalars['SafeString']>;
  houseNr?: Maybe<Scalars['SafeString']>;
  houseNrExtension?: Maybe<Scalars['SafeString']>;
  zipcode?: Maybe<Scalars['SafeString']>;
  city?: Maybe<Scalars['SafeString']>;
  country?: Maybe<Scalars['SafeString']>;
  email?: Maybe<Scalars['Email']>;
  phoneNr?: Maybe<Scalars['SafeString']>;
};

export type RequestAdviseCertificateInput = {
  /** Email address is required */
  Email: Scalars['Email'];
  /** File1 to upload werkgeversverklaring */
  file1: Scalars['Upload'];
  /** File2 to upload kvk form */
  file2?: Maybe<Scalars['Upload']>;
  /** Current license that the new license should be based off from */
  CertificeringID: Scalars['Int'];
  /** Date from which the user is working as advisor */
  advisorSince: Scalars['Date'];
  /** Wants to keep DB license */
  keepDBLicense: Scalars['Boolean'];
  /** Wants to keep KBA license */
  keepKBALicense: Scalars['Boolean'];
  /** Wants to keep KBA-GB license */
  keepKBAGBLicense: Scalars['Boolean'];
  /** Optional remarks */
  remarks?: Maybe<Scalars['SafeString']>;
};

export type RequestAdviseCertificatePersonDataInput = {
  /** Max 50 chars */
  Voorletters: Scalars['SafeString'];
  /** Max 50 chars */
  Tussenvoegsel?: Maybe<Scalars['SafeString']>;
  /** Max 50 chars */
  Achternaam: Scalars['SafeString'];
  /** Can only be 'o', 'm, 'v' */
  Geslacht: Scalars['SafeString'];
  /**
   * Use i.e. `new Date(Date.UTC(1955, 8, 3)).getTime()`
   * which is: 3 sept 1955 00:00:00 GMT+2 (CEST)
   * Needed to match SQL Server database field value for a Date field
   */
  Geboortedatum: Scalars['Date'];
  /** Use Nationaliteiten endpoint */
  Nationaliteit: Scalars['SafeString'];
  /** BSN can be null if not available, can be 8 or 9 digits long */
  BSN?: Maybe<Scalars['Int']>;
  /** Max 100 chars */
  Adresregel1: Scalars['SafeString'];
  /** Max 100 chars */
  Adresregel2?: Maybe<Scalars['SafeString']>;
  /** Max 20 chars */
  Huisnummer: Scalars['SafeString'];
  /** Max 20 chars */
  HuisnummerToevoeging?: Maybe<Scalars['SafeString']>;
  /** Max 20 chars */
  Postcode: Scalars['SafeString'];
  /** Max 100 chars */
  Woonplaats: Scalars['SafeString'];
  /** Use Landen endpoint */
  Land: Scalars['SafeString'];
};

export type RequestDuplicateInput = {
  /** Licenses which should be duplicated */
  licenseIds: Array<Maybe<Scalars['Int']>>;
  /** Remark for invoice (required for anything other than KBA) */
  remark?: Maybe<Scalars['SafeString']>;
  /** Nr of cards */
  count?: Maybe<Scalars['Int']>;
};

export type RequestDuplicateResult = {
  __typename?: 'requestDuplicateResult';
  /**
   * The link to the invoice in format
   * window.open('iDeal/Factuur.aspx?SafeKey=ZR6HXPxJ00YCgPIvrf3ciG00iwRcs0FDOXkJ6S9AYiOnRSYChcmsCc+/DyH1KeCh1ZL95PyapQQxIqFviIvWpWZjgR77CTAvsd1k/DFhQb5VXOx7SoHu+I0+NQiOpn1nTkeXHTYqsmggI81XDjnLowbb5qmDhynQpJqCMerD5iw=','FactuurVenster','left=100,top=50,width=700,height=800,location=0,resizable=1,toolbar=1')
   */
  invoiceLink: Scalars['String'];
  /** One or multiple passes (1 for each license) */
  cards: Array<Pas>;
};

export type RequestLicenseInput = {
  /** The Id of the pre-education (vooropleiding) */
  preEducationId: Scalars['Int'];
  /**
   * Date of pre-education result received
   * Must be between max 5 years in past or today
   */
  dateReceived: Scalars['Date'];
  /** License the user is requesting, based on the limited list of pre-educations */
  CertificaatID: Scalars['Int'];
  /**
   * File to upload 1.
   * Eigen Verklaring or KVK uittreksel (legitimatiebewijs) or Registration certificate (inschrijvingsbewijs opleiding adviseren)
   */
  file1: Scalars['Upload'];
  /**
   * File to upload 2.
   * For normal license request: Diploma
   */
  file2?: Maybe<Scalars['Upload']>;
  /**
   * File to upload 3.
   * For normal license request: cijferlijst
   * For registration certificate: none
   */
  file3?: Maybe<Scalars['Upload']>;
  /** Optional: Current license that the new license should be based off from */
  CertificeringID?: Maybe<Scalars['Int']>;
  /** Optional remarks */
  remarks?: Maybe<Scalars['SafeString']>;
};

export type RequestLicenseResult = {
  __typename?: 'requestLicenseResult';
  VrijstellingsVerzoekID: Scalars['Int'];
  invoiceLink: Scalars['String'];
  requestFormPdfLink: Scalars['String'];
};

export type SaveLocationInput = {
  LokatieID?: Maybe<Scalars['Int']>;
  VakgroepID?: Maybe<Scalars['Int']>;
  ExamenInstellingID?: Maybe<Scalars['Int']>;
  ContactgegevensID?: Maybe<Scalars['Int']>;
  Naam: Scalars['SafeString'];
  Routebeschrijving?: Maybe<Scalars['SafeString']>;
  IsActief: Scalars['Boolean'];
  Contactgegevens?: Maybe<ContactgegevensInput>;
};

export type SearchCourseSessionsInput = {
  /** Current course (to search others) */
  currentCourseId?: Maybe<Scalars['Int']>;
  /** KnowledgeAreaId to filter on */
  knowledgeAreaId?: Maybe<Scalars['Int']>;
  /** ThemeId to filter on */
  themeId?: Maybe<Scalars['Int']>;
  /** CompetenceId to filter on */
  competenceId?: Maybe<Scalars['Int']>;
  /** Date range, from */
  from?: Maybe<Scalars['Date']>;
  /** Date range, to */
  to?: Maybe<Scalars['Date']>;
  /** Is search for online courses only (default = false) */
  isOnlineCourse: Scalars['Boolean'];
  /** Zipcode, numbers only */
  zipcodeNumbers?: Maybe<Scalars['Int']>;
  /** Radius in Kilometers */
  distanceRadius?: Maybe<Scalars['Int']>;
};

export type SearchExamInput = {
  examId: Scalars['Int'];
};

export type SearchLocationsInput = {
  VakgroepID?: Maybe<Scalars['Int']>;
  ExamenInstellingID?: Maybe<Scalars['Int']>;
};

export type SearchSpecialtyInput = {
  /** SpecialtyId */
  specialtyId?: Maybe<Scalars['Int']>;
  /** KnowledgeAreaId to filter on */
  knowledgeAreaId?: Maybe<Scalars['Int']>;
  /** ThemeId to filter on */
  themeId?: Maybe<Scalars['Int']>;
  /** CompetenceId to filter on */
  competenceId?: Maybe<Scalars['Int']>;
  /** Is search for online courses only (default = false) */
  isOnlineCourse: Scalars['Boolean'];
};

export type SpecialtiesInput = {
  /** VakgroepID to filter on organizers */
  vakgroepId?: Maybe<Scalars['Int']>;
};

export type UpdateVisitationReportInput = {
  VisitatieID: Scalars['Int'];
  Rapport: Scalars['SafeString'];
  Rapportcijfer: Scalars['Int'];
  DatumRapport?: Maybe<Scalars['Date']>;
  VolgensIntentieAanbod: Scalars['Boolean'];
  /** JSON string with ratings */
  VragenJson: Scalars['SafeString'];
  /** JSON string with ratings */
  ratings?: Maybe<Array<VisitatieBeoordelingCategorieInput>>;
  Status: VisitatieStatusEnum;
};

export type VisitatieBeoordelingCategorieInput = {
  VisitatieBeoordelingCategorieID: Scalars['ID'];
  VisitatieID: Scalars['Int'];
  CategorieTemplateID: Scalars['Int'];
  CategorieNaam: Scalars['String'];
  Weging: Scalars['Float'];
  TotaalPunten?: Maybe<Scalars['Float']>;
  Cijfer?: Maybe<Scalars['Float']>;
  Versie: Scalars['String'];
  VanafDatum: Scalars['Date'];
  Vragen?: Maybe<Array<Maybe<VisitatieBeoordelingCategorieVraagInput>>>;
};

export type VisitatieBeoordelingCategorieVraagInput = {
  VisitatieBeoordelingCategorieVraagID: Scalars['ID'];
  VisitatieBeoordelingCategorieID: Scalars['ID'];
  CategorieTemplateID: Scalars['Int'];
  VraagTemplateID: Scalars['Int'];
  Naam: Scalars['String'];
  Weging: Scalars['Float'];
  TotaalPunten?: Maybe<Scalars['Float']>;
  Cijfer?: Maybe<Scalars['Float']>;
  Toelichting?: Maybe<Scalars['String']>;
  Versie: Scalars['String'];
  VanafDatum: Scalars['Date'];
};

export type VisitationInput = {
  visitatieId: Scalars['Int'];
};

export type VisitationsInput = {
  /** Filter on part of course code */
  courseCode?: Maybe<Scalars['SafeString']>;
  /** Filter on part of title */
  title?: Maybe<Scalars['SafeString']>;
  /** Filter on status */
  status?: Maybe<VisitatieStatusEnum>;
  /** Date range, from */
  from?: Maybe<Scalars['Date']>;
  /** Date range, to */
  to?: Maybe<Scalars['Date']>;
  pageSize: Scalars['Int'];
  pageNumber: Scalars['Int'];
  orderBy: OrderByArgs;
};

export type GetMyAndDuplicatePriceQueryVariables = Exact<{ [key: string]: never }>;

export type GetMyAndDuplicatePriceQuery = {
  my?: Maybe<{
    __typename?: 'My';
    Certificeringen?: Maybe<
      Array<Maybe<{ __typename?: 'Certificering' } & CertificeringenFieldsFragment>>
    >;
  }>;
  tariefDuplicaat?: Maybe<{ __typename?: 'TotaalExtBtwTarief'; TotaalExtBtw?: Maybe<number> }>;
};

export type CertificeringenFieldsFragment = {
  __typename?: 'Certificering';
  CertificeringID: number;
  NummerWeergave: string;
  BeginDatum: Date;
  EindDatum: Date;
  Status: CertificeringStatusEnum;
  Certificaat?: Maybe<{ __typename?: 'Certificaat'; Naam: string }>;
  Passen?: Maybe<Array<Maybe<{ __typename?: 'Pas' } & PasFieldsFragment>>>;
};

export type PasFieldsFragment = {
  __typename?: 'Pas';
  PasID: number;
  DatumAanvraag: Date;
  DatumUitgeleverd?: Maybe<Date>;
  Aantal: number;
  Status: PasStatusEnum;
  Geadresseerde?: Maybe<string>;
  PasRetouren?: Maybe<Array<Maybe<{ __typename?: 'PasRetour'; PasID: number; DatumRetour: Date }>>>;
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
