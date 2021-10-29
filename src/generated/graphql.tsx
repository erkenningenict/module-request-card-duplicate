import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
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
  TerBeoordeling = 'TerBeoordeling'
}

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
  Verlopen = 'Verlopen'
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
  Docent?: Maybe<Scalars['SafeString']>;
  Eindtijd: Scalars['Date'];
  IsBesloten: Scalars['Boolean'];
  LokatieID: Scalars['Int'];
  MaximumCursisten: Scalars['Int'];
  Opmerkingen?: Maybe<Scalars['SafeString']>;
  Prijs: Scalars['Float'];
  Promotietekst: Scalars['SafeString'];
  Titel: Scalars['SafeString'];
  VakID: Scalars['Int'];
};

export type CreateInvoiceCollectionInput = {
  invoiceIds?: Maybe<Array<Scalars['Int']>>;
};

export type CreateInvoiceCollectionResult = {
  __typename?: 'CreateInvoiceCollectionResult';
  invoiceCollectionId?: Maybe<Scalars['Int']>;
  message?: Maybe<Scalars['String']>;
  success: Scalars['Boolean'];
};

export enum CrediteurTypeEnum {
  Persoon = 'persoon',
  Universiteit = 'universiteit'
}

export type Cursus = {
  __typename?: 'Cursus';
  /**  Only available when sub query is available  */
  AantalCursusDeelnames?: Maybe<Scalars['Int']>;
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
  /** Gezakt theorie, geslaagd praktijk */
  GeslaagdPraktijkGezaktTheorie = 'GeslaagdPraktijk_GezaktTheorie',
  /** Geslaagd theorie, gezakt praktijk */
  GeslaagdTheorieGezaktPraktijk = 'GeslaagdTheorie_GezaktPraktijk',
  Gezakt = 'Gezakt',
  Voorlopig = 'Voorlopig'
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
  ExamenAangemeld = 'ExamenAangemeld',
  Goedgekeurd = 'Goedgekeurd',
  Voorlopig = 'Voorlopig'
}

export enum DebiteurTypeEnum {
  Exameninstelling = 'exameninstelling',
  Persoon = 'persoon',
  Universiteit = 'universiteit',
  Vakgroep = 'vakgroep'
}

export type DeclarationInvoiceCreatedResult = {
  __typename?: 'DeclarationInvoiceCreatedResult';
  FactuurNummer: Scalars['String'];
  InvoiceLink: Scalars['String'];
};

export type DeleteExamInput = {
  CursusID?: Maybe<Scalars['Int']>;
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
  OnjuistAangemaakt = 'OnjuistAangemaakt'
}

export type FactuurNodes = {
  __typename?: 'FactuurNodes';
  /** The email objects */
  nodes?: Maybe<Array<Maybe<Invoice>>>;
  /** Page info */
  pageInfo?: Maybe<PageInfo>;
  /** Total nr of emails */
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

/** , orderBy: OrderByArgs */
export type FilterInvoicesInput = {
  CrediteurID?: Maybe<Scalars['Int']>;
  CrediteurType?: Maybe<Scalars['SafeString']>;
  CursusCode?: Maybe<Scalars['SafeString']>;
  DebiteurID?: Maybe<Scalars['Int']>;
  DebiteurType?: Maybe<DebiteurTypeEnum>;
  ExamenInstellingID?: Maybe<Scalars['Int']>;
  FactuurNummer?: Maybe<Scalars['SafeString']>;
  ForReviewersOnly?: Maybe<Scalars['Boolean']>;
  FromDate?: Maybe<Scalars['Date']>;
  InvoiceCollectionFilter?: Maybe<InvoiceCollectionsFilterEnum>;
  InvoiceStatusFilterList?: Maybe<Array<Maybe<Scalars['SafeString']>>>;
  PaymentStatus?: Maybe<PaymentStatusEnum>;
  ToDate?: Maybe<Scalars['Date']>;
  VakgroepID?: Maybe<Scalars['Int']>;
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

export enum InkoopVerkoopEnum {
  Inkoop = 'INKOOP',
  Verkoop = 'VERKOOP'
}

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
  CreditFactuurNummer?: Maybe<Scalars['Int']>;
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
  FactuurNr: Scalars['String'];
  FactuurNummer: Scalars['String'];
  FactuurStatus: Scalars['String'];
  InVerzamelfactuur: Scalars['Int'];
  InvoiceLink: Scalars['String'];
  IsBetaald: Scalars['Boolean'];
  IsCreditFactuur?: Maybe<Scalars['Boolean']>;
  Kenmerk?: Maybe<Scalars['String']>;
  KenmerkJaarFactuurNummer: Scalars['String'];
  OrigineleFactuurID?: Maybe<Scalars['Int']>;
  OrigineleFactuurNummer?: Maybe<Scalars['Int']>;
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
  NormalInvoices = 'NORMAL_INVOICES'
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

export type MultiUploadResult = {
  __typename?: 'MultiUploadResult';
  result: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addVisitationComment?: Maybe<DiscussieVisitatie>;
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
  /** The `decoupleLicense` can be used to decouple an XX + KBA license */
  decoupleLicense: DecoupleLicenseResult;
  deleteExam?: Maybe<Scalars['Boolean']>;
  multiUpload: MultiUploadResult;
  multipleUpload: Array<File>;
  registerCardReturn: Scalars['Boolean'];
  /** Register for course */
  registerForCourse: RegisterResult;
  /**
   * The `requestAdviseCertificate` endpoint can only be used for
   * already registered users. Users that have `IsGbaGeregistreerd` set to true
   * are not required to have the personInput entered.
   */
  requestAdviseCertificate?: Maybe<ExemptionRequestResult>;
  /** The `requestDuplicate` can be used to request a license card duplicate */
  requestDuplicate: RequestDuplicateResult;
  /** The `requestLicense` can be used to request a certificate */
  requestLicense: RequestLicenseResult;
  saveExam?: Maybe<Cursus>;
  /** Create or update a location */
  saveLocation: Lokatie;
  singleUpload: File;
  /** Un-register for course. Input is CursusDeelnameID */
  unRegisterForCourse: UnRegisterResult;
  updateInvoiceStatus: UpdateInvoiceStatusResult;
  updatePlanning: UpdatePlanningResult;
  updateVisitationReport: Visitatie;
};


export type MutationAddVisitationCommentArgs = {
  input: AddVisitationCommentInput;
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


export type MutationDecoupleLicenseArgs = {
  input: DecoupleLicenseInput;
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


export type MutationRegisterCardReturnArgs = {
  input: RegisterCardReturnInput;
};


export type MutationRegisterForCourseArgs = {
  input: RegisterForCourseInput;
};


export type MutationRequestAdviseCertificateArgs = {
  input: RequestAdviseCertificateInput;
  personDataInput?: Maybe<RequestAdviseCertificatePersonDataInput>;
};


export type MutationRequestDuplicateArgs = {
  input: RequestDuplicateInput;
};


export type MutationRequestLicenseArgs = {
  createPersonByBsnInput?: Maybe<CreatePersonByBsn>;
  createPersonByPersonDataInput?: Maybe<CreatePersonByPersonData>;
  input: RequestLicenseInput;
  personDataInput?: Maybe<BasicPersonData>;
};


export type MutationSaveExamArgs = {
  input: SaveExamInput;
};


export type MutationSaveLocationArgs = {
  input: SaveLocationInput;
};


export type MutationSingleUploadArgs = {
  file: Scalars['Upload'];
};


export type MutationUnRegisterForCourseArgs = {
  CursusDeelnameID: Scalars['Int'];
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

export type My = {
  __typename?: 'My';
  AangemeldeCursusDeelnames?: Maybe<Array<Maybe<AangemeldeCursusDeelname>>>;
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
  /** Link to vakgroep(en), via Hoogleraar table */
  VakgroepLinks?: Maybe<Array<Maybe<VakgroepLink>>>;
};


export type MyCertificeringenArgs = {
  alleenGeldig?: Maybe<Scalars['Boolean']>;
  inclusiefPassen?: Maybe<Scalars['Boolean']>;
  perDatum?: Maybe<Scalars['Date']>;
};


export type MyCursusDeelnamesArgs = {
  certificeringId?: Maybe<Scalars['Int']>;
};


export type MyExamenInstellingLinksArgs = {
  activeOnly?: Maybe<Scalars['Boolean']>;
};


export type MyStudieresultatenArgs = {
  certificeringId?: Maybe<Scalars['Int']>;
  isExamen?: Maybe<Scalars['Boolean']>;
};


export type MyVakgroepLinksArgs = {
  activeOnly?: Maybe<Scalars['Boolean']>;
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
  Uitgeleverd = 'Uitgeleverd'
}

export enum PaymentStatusEnum {
  All = 'ALL',
  NotPaid = 'NOT_PAID',
  Paid = 'PAID'
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
  alleenGeldig?: Maybe<Scalars['Boolean']>;
  perDatum?: Maybe<Scalars['Date']>;
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
  /** Aanvraag duplicaat */
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
  Mgemi = 'MGEMI'
}

export enum ProductEnum {
  Ad = 'AD',
  Agn = 'AGN',
  Ak = 'AK',
  Be = 'BE',
  Bk = 'BK',
  Bv = 'BV',
  D1 = 'D1',
  D2 = 'D2',
  D3 = 'D3',
  D4 = 'D4',
  Dk = 'DK',
  Ec = 'EC',
  Ek = 'EK',
  Et = 'ET',
  Tb = 'TB'
}

export type Query = {
  __typename?: 'Query';
  Certificaten?: Maybe<Array<Maybe<Certificaat>>>;
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
  Kennisgebieden: Array<Maybe<Kennisgebied>>;
  Landen: Array<Maybe<Landen>>;
  Nationaliteiten: Array<Maybe<Nationaliteiten>>;
  Persoon?: Maybe<Persoon>;
  SearchExamOrganizers?: Maybe<Array<Maybe<SearchExamOrganizerResult>>>;
  SearchLocations?: Maybe<Array<Maybe<Lokatie>>>;
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
  hasDuplicatePending: Scalars['Boolean'];
  /**
   * Get unpaid invoices.
   * Optionally filter by status. And apply pagination with pageSize, pageNumber and orderBy (default: createdOn, DESC)
   */
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


export type QueryCertificatenArgs = {
  idList?: Maybe<Array<Scalars['Int']>>;
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
  certificeringId?: Maybe<Scalars['Int']>;
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
  findById?: Maybe<Scalars['Int']>;
  isActive?: Maybe<Scalars['Boolean']>;
};


export type QueryExamsArgs = {
  input: ExamsInput;
};


export type QueryPersoonArgs = {
  PersoonID: Scalars['Int'];
};


export type QuerySearchLocationsArgs = {
  input: SearchLocationsInput;
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
  fullDetails?: Maybe<Scalars['Boolean']>;
  vakId: Scalars['Int'];
};


export type QueryVakgroepenArgs = {
  findById?: Maybe<Scalars['Int']>;
  isActive?: Maybe<Scalars['Boolean']>;
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
  codes?: Maybe<Array<Maybe<Scalars['String']>>>;
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


export type QueryHasDuplicatePendingArgs = {
  licenseId: Scalars['Int'];
};


export type QueryInvoicesArgs = {
  filterInvoices?: Maybe<FilterInvoicesInput>;
  orderBy?: Maybe<OrderByArgs>;
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
  individueleAanvraag?: Maybe<Scalars['Boolean']>;
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

export type SaveExamInput = {
  Begintijd: Scalars['Date'];
  CursusID?: Maybe<Scalars['Int']>;
  Datum: Scalars['Date'];
  Docent?: Maybe<Scalars['SafeString']>;
  Eindtijd: Scalars['Date'];
  IsBesloten?: Maybe<Scalars['Boolean']>;
  LokatieID: Scalars['Int'];
  MaximumCursisten: Scalars['Int'];
  Opmerkingen?: Maybe<Scalars['SafeString']>;
  Prijs: Scalars['Float'];
  Promotietekst: Scalars['SafeString'];
  SessieID?: Maybe<Scalars['Int']>;
  Titel: Scalars['SafeString'];
  VakID: Scalars['Int'];
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
  Opmerkingen: Scalars['String'];
  PersoonIDAangemaakt?: Maybe<Scalars['Int']>;
  PersoonIDGewijzigd?: Maybe<Scalars['Int']>;
  SessieID: Scalars['Int'];
  SessieType: Scalars['String'];
  Visitatie?: Maybe<Visitatie>;
};

export enum SortDirectionEnum {
  Asc = 'ASC',
  Desc = 'DESC'
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
  Voorlopig = 'Voorlopig'
}

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
  remarks?: Maybe<Scalars['SafeString']>;
  status: FactuurHistorieStatusEnum;
};

export type UpdateInvoiceStatusResult = {
  __typename?: 'UpdateInvoiceStatusResult';
  message?: Maybe<Scalars['String']>;
  success: Scalars['Boolean'];
};

export type UpdatePlanningResult = {
  __typename?: 'UpdatePlanningResult';
  planned: Scalars['Boolean'];
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

export enum VakStatusEnum {
  Afgekeurd = 'Afgekeurd',
  Goedgekeurd = 'Goedgekeurd',
  InOntwerp = 'InOntwerp',
  Ingediend = 'Ingediend',
  Ingetrokken = 'Ingetrokken',
  Voorlopig = 'Voorlopig',
  WordtBeoordeeld = 'WordtBeoordeeld'
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
  /** Only available when sub-query is available */
  IsDeclarationPossible?: Maybe<Scalars['Boolean']>;
  /** Only available when sub-query is available */
  IsDeclarationSubmitted?: Maybe<Scalars['Boolean']>;
  /** Only available when sub-query is available */
  LastChangeBy?: Maybe<Scalars['String']>;
  /** Only available when sub-query is available */
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
  RapportWordtOpgesteld = 'RapportWordtOpgesteld'
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
  VoorlopigBetaald = 'VoorlopigBetaald'
}

export enum VrijstellingsVerzoekBetaalStatusEnum {
  Betaald = 'Betaald'
}

export enum VrijstellingsVerzoekStatusEnum {
  Aangevraagd = 'Aangevraagd',
  Afgekeurd = 'Afgekeurd',
  Betaald = 'Betaald',
  Geannuleerd = 'Geannuleerd',
  Goedgekeurd = 'Goedgekeurd'
}

export type AddVisitationCommentInput = {
  commentaar: Scalars['SafeString'];
  visitatieId: Scalars['Int'];
};

export type BasicPersonData = {
  Email?: Maybe<Scalars['Email']>;
  PersoonID: Scalars['Int'];
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
  Email?: Maybe<Scalars['SafeString']>;
  Huisnummer: Scalars['SafeString'];
  HuisnummerToevoeging?: Maybe<Scalars['SafeString']>;
  Land: Scalars['SafeString'];
  Postcode: Scalars['SafeString'];
  Telefoon?: Maybe<Scalars['SafeString']>;
  Website?: Maybe<Scalars['SafeString']>;
  Woonplaats: Scalars['SafeString'];
};

export type CreateDeclarationInvoiceInput = {
  NrOfDayParts?: Maybe<Scalars['Int']>;
  NrOfKilometers?: Maybe<Scalars['Int']>;
  Other?: Maybe<Scalars['Float']>;
  OtherDescription?: Maybe<Scalars['SafeString']>;
  PublicTransport?: Maybe<Scalars['Float']>;
  VisitatieID: Scalars['Int'];
};

export type CreateLicenseInput = {
  certificateId: Scalars['Int'];
  endDate: Scalars['Date'];
  /** licenseId that the new license should be based off from */
  isExtensionOf: Scalars['Int'];
  personId: Scalars['Int'];
  remark?: Maybe<Scalars['SafeString']>;
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
  Adresregel2?: Maybe<Scalars['SafeString']>;
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
  HuisnummerToevoeging?: Maybe<Scalars['SafeString']>;
  /** Use Landen endpoint */
  Land: Scalars['SafeString'];
  /** Use Nationaliteiten endpoint */
  Nationaliteit: Scalars['SafeString'];
  /** Max 20 chars */
  Postcode: Scalars['SafeString'];
  /** Max 50 chars */
  Tussenvoegsel?: Maybe<Scalars['SafeString']>;
  /** Max 50 chars */
  Voorletters: Scalars['SafeString'];
  /** Max 100 chars */
  Woonplaats: Scalars['SafeString'];
};

export type DecoupleLicenseInput = {
  confirmationEmail?: Maybe<Scalars['String']>;
  /** Current XX + KBA license which should be decoupled */
  licenseId: Scalars['Int'];
};

export type DecoupleLicenseResult = {
  __typename?: 'decoupleLicenseResult';
  kbaLicense?: Maybe<Certificering>;
  updatedLicense?: Maybe<Certificering>;
};

export type ExamSpecialtiesInput = {
  /** ExamenInstellingID to filter on organizers */
  examenInstellingId?: Maybe<Scalars['Int']>;
  validOnly?: Maybe<Scalars['Boolean']>;
};

export type ExamsInput = {
  /** Filter on part of exam code */
  examCode?: Maybe<Scalars['SafeString']>;
  /** Date range, from */
  from?: Maybe<Scalars['Date']>;
  /** Filter on LocatieID */
  locationId?: Maybe<Scalars['Int']>;
  orderBy: OrderByArgs;
  pageNumber: Scalars['Int'];
  pageSize: Scalars['Int'];
  /** Filter on status */
  status?: Maybe<CursusStatusEnum>;
  /** Filter on part of title */
  title?: Maybe<Scalars['SafeString']>;
  /** Date range, to */
  to?: Maybe<Scalars['Date']>;
};

export type ExemptionRequestResult = {
  __typename?: 'exemptionRequestResult';
  VrijstellingsVerzoekID: Scalars['Int'];
  invoiceLink: Scalars['String'];
  requestFormPdfLink: Scalars['String'];
};

export type IsLicenseValidForSpecialtyInput = {
  courseId?: Maybe<Scalars['Int']>;
  licenseId: Scalars['Int'];
  specialtyId?: Maybe<Scalars['Int']>;
};

export type IsLicenseValidForSpecialtyResult = {
  __typename?: 'isLicenseValidForSpecialtyResult';
  success: Scalars['Boolean'];
};

export type RegisterForCourseInput = {
  birthPlace?: Maybe<Scalars['SafeString']>;
  city?: Maybe<Scalars['SafeString']>;
  code?: Maybe<Scalars['SafeString']>;
  country?: Maybe<Scalars['SafeString']>;
  courseDateTime?: Maybe<Scalars['Date']>;
  courseId: Scalars['Int'];
  email?: Maybe<Scalars['Email']>;
  houseNr?: Maybe<Scalars['SafeString']>;
  houseNrExtension?: Maybe<Scalars['SafeString']>;
  invoiceAddress?: Maybe<Scalars['SafeString']>;
  isDigitalSpecialty: Scalars['Boolean'];
  knowledgeArea?: Maybe<Scalars['SafeString']>;
  licenseId: Scalars['Int'];
  phoneNr?: Maybe<Scalars['SafeString']>;
  specialtyId?: Maybe<Scalars['Int']>;
  street?: Maybe<Scalars['SafeString']>;
  title: Scalars['SafeString'];
  zipcode?: Maybe<Scalars['SafeString']>;
};

export type RequestAdviseCertificateInput = {
  /** Current license that the new license should be based off from */
  CertificeringID: Scalars['Int'];
  /** Email address is required */
  Email: Scalars['Email'];
  /** Date from which the user is working as advisor */
  advisorSince: Scalars['Date'];
  /** File1 to upload werkgeversverklaring */
  file1: Scalars['Upload'];
  /** File2 to upload kvk form */
  file2?: Maybe<Scalars['Upload']>;
  /** Wants to keep DB license */
  keepDBLicense: Scalars['Boolean'];
  /** Wants to keep KBA-GB license */
  keepKBAGBLicense: Scalars['Boolean'];
  /** Wants to keep KBA license */
  keepKBALicense: Scalars['Boolean'];
  /** Optional remarks */
  remarks?: Maybe<Scalars['SafeString']>;
};

export type RequestAdviseCertificatePersonDataInput = {
  /** Max 50 chars */
  Achternaam: Scalars['SafeString'];
  /** Max 100 chars */
  Adresregel1: Scalars['SafeString'];
  /** Max 100 chars */
  Adresregel2?: Maybe<Scalars['SafeString']>;
  /** BSN can be null if not available, can be 8 or 9 digits long */
  BSN?: Maybe<Scalars['Int']>;
  /**
   * Use i.e. `new Date(Date.UTC(1955, 8, 3)).getTime()`
   * which is: 3 sept 1955 00:00:00 GMT+2 (CEST)
   * Needed to match SQL Server database field value for a Date field
   */
  Geboortedatum: Scalars['Date'];
  /** Can only be 'o', 'm, 'v' */
  Geslacht: Scalars['SafeString'];
  /** Max 20 chars */
  Huisnummer: Scalars['SafeString'];
  /** Max 20 chars */
  HuisnummerToevoeging?: Maybe<Scalars['SafeString']>;
  /** Use Landen endpoint */
  Land: Scalars['SafeString'];
  /** Use Nationaliteiten endpoint */
  Nationaliteit: Scalars['SafeString'];
  /** Max 20 chars */
  Postcode: Scalars['SafeString'];
  /** Max 50 chars */
  Tussenvoegsel?: Maybe<Scalars['SafeString']>;
  /** Max 50 chars */
  Voorletters: Scalars['SafeString'];
  /** Max 100 chars */
  Woonplaats: Scalars['SafeString'];
};

export type RequestDuplicateInput = {
  /** Nr of cards */
  count?: Maybe<Scalars['Int']>;
  /** Licenses which should be duplicated */
  licenseIds: Array<Maybe<Scalars['Int']>>;
  /** Remark for invoice (required for anything other than KBA) */
  remark?: Maybe<Scalars['SafeString']>;
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
  CertificeringID?: Maybe<Scalars['Int']>;
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
  file2?: Maybe<Scalars['Upload']>;
  /**
   * File to upload 3.
   * For normal license request: cijferlijst
   * For registration certificate: none
   */
  file3?: Maybe<Scalars['Upload']>;
  /** The Id of the pre-education (vooropleiding) */
  preEducationId: Scalars['Int'];
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
  Contactgegevens?: Maybe<ContactgegevensInput>;
  ContactgegevensID?: Maybe<Scalars['Int']>;
  ExamenInstellingID?: Maybe<Scalars['Int']>;
  IsActief: Scalars['Boolean'];
  LokatieID?: Maybe<Scalars['Int']>;
  Naam: Scalars['SafeString'];
  Routebeschrijving?: Maybe<Scalars['SafeString']>;
  VakgroepID?: Maybe<Scalars['Int']>;
};

export type SearchCourseSessionsInput = {
  /** CompetenceId to filter on */
  competenceId?: Maybe<Scalars['Int']>;
  /** Current course (to search others) */
  currentCourseId?: Maybe<Scalars['Int']>;
  /** Radius in Kilometers */
  distanceRadius?: Maybe<Scalars['Int']>;
  /** Date range, from */
  from?: Maybe<Scalars['Date']>;
  /** Is search for online courses only (default = false) */
  isOnlineCourse: Scalars['Boolean'];
  /** KnowledgeAreaId to filter on */
  knowledgeAreaId?: Maybe<Scalars['Int']>;
  /** ThemeId to filter on */
  themeId?: Maybe<Scalars['Int']>;
  /** Date range, to */
  to?: Maybe<Scalars['Date']>;
  /** Zipcode, numbers only */
  zipcodeNumbers?: Maybe<Scalars['Int']>;
};

export type SearchExamInput = {
  examId: Scalars['Int'];
};

export type SearchLocationsInput = {
  ExamenInstellingID?: Maybe<Scalars['Int']>;
  VakgroepID?: Maybe<Scalars['Int']>;
};

export type SearchSpecialtyInput = {
  /** CompetenceId to filter on */
  competenceId?: Maybe<Scalars['Int']>;
  /** Is search for online courses only (default = false) */
  isOnlineCourse: Scalars['Boolean'];
  /** KnowledgeAreaId to filter on */
  knowledgeAreaId?: Maybe<Scalars['Int']>;
  /** SpecialtyId */
  specialtyId?: Maybe<Scalars['Int']>;
  /** ThemeId to filter on */
  themeId?: Maybe<Scalars['Int']>;
};

export type SpecialtiesInput = {
  /** VakgroepID to filter on organizers */
  vakgroepId?: Maybe<Scalars['Int']>;
};

export type UpdateVisitationReportInput = {
  DatumRapport?: Maybe<Scalars['Date']>;
  Rapport: Scalars['SafeString'];
  Rapportcijfer: Scalars['Int'];
  Status: VisitatieStatusEnum;
  VisitatieID: Scalars['Int'];
  VolgensIntentieAanbod: Scalars['Boolean'];
  /** JSON string with ratings */
  VragenJson: Scalars['SafeString'];
  /** JSON string with ratings */
  ratings?: Maybe<Array<VisitatieBeoordelingCategorieInput>>;
};

export type VisitatieBeoordelingCategorieInput = {
  CategorieNaam: Scalars['String'];
  CategorieTemplateID: Scalars['Int'];
  Cijfer?: Maybe<Scalars['Float']>;
  TotaalPunten?: Maybe<Scalars['Float']>;
  VanafDatum: Scalars['Date'];
  Versie: Scalars['String'];
  VisitatieBeoordelingCategorieID: Scalars['ID'];
  VisitatieID: Scalars['Int'];
  Vragen?: Maybe<Array<Maybe<VisitatieBeoordelingCategorieVraagInput>>>;
  Weging: Scalars['Float'];
};

export type VisitatieBeoordelingCategorieVraagInput = {
  CategorieTemplateID: Scalars['Int'];
  Cijfer?: Maybe<Scalars['Float']>;
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

export type VisitationInput = {
  visitatieId: Scalars['Int'];
};

export type VisitationsInput = {
  /** Filter on part of course code */
  courseCode?: Maybe<Scalars['SafeString']>;
  /** Date range, from */
  from?: Maybe<Scalars['Date']>;
  orderBy: OrderByArgs;
  pageNumber: Scalars['Int'];
  pageSize: Scalars['Int'];
  /** Filter on status */
  status?: Maybe<VisitatieStatusEnum>;
  /** Filter on part of title */
  title?: Maybe<Scalars['SafeString']>;
  /** Date range, to */
  to?: Maybe<Scalars['Date']>;
};

export type GetMyAndDuplicatePriceQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMyAndDuplicatePriceQuery = { my?: { __typename?: 'My', Certificeringen?: Array<{ __typename?: 'Certificering', CertificeringID: number, NummerWeergave: string, BeginDatum: Date, EindDatum: Date, Status: CertificeringStatusEnum, Certificaat?: { __typename?: 'Certificaat', Naam: string } | null | undefined, Passen?: Array<{ __typename?: 'Pas', PasID: number, DatumAanvraag: Date, DatumUitgeleverd?: Date | null | undefined, Aantal: number, Status: PasStatusEnum, Geadresseerde?: string | null | undefined, PasRetouren?: Array<{ __typename?: 'PasRetour', PasID: number, DatumRetour: Date } | null | undefined> | null | undefined } | null | undefined> | null | undefined } | null | undefined> | null | undefined } | null | undefined, tariefDuplicaat?: { __typename?: 'TotaalExtBtwTarief', TotaalExtBtw?: number | null | undefined } | null | undefined };

export type CertificeringenFieldsFragment = { __typename?: 'Certificering', CertificeringID: number, NummerWeergave: string, BeginDatum: Date, EindDatum: Date, Status: CertificeringStatusEnum, Certificaat?: { __typename?: 'Certificaat', Naam: string } | null | undefined, Passen?: Array<{ __typename?: 'Pas', PasID: number, DatumAanvraag: Date, DatumUitgeleverd?: Date | null | undefined, Aantal: number, Status: PasStatusEnum, Geadresseerde?: string | null | undefined, PasRetouren?: Array<{ __typename?: 'PasRetour', PasID: number, DatumRetour: Date } | null | undefined> | null | undefined } | null | undefined> | null | undefined };

export type PasFieldsFragment = { __typename?: 'Pas', PasID: number, DatumAanvraag: Date, DatumUitgeleverd?: Date | null | undefined, Aantal: number, Status: PasStatusEnum, Geadresseerde?: string | null | undefined, PasRetouren?: Array<{ __typename?: 'PasRetour', PasID: number, DatumRetour: Date } | null | undefined> | null | undefined };

export type RequestDuplicateMutationVariables = Exact<{
  input: RequestDuplicateInput;
}>;


export type RequestDuplicateMutation = { requestDuplicate: { __typename?: 'requestDuplicateResult', invoiceLink: string, cards: Array<{ __typename?: 'Pas', PasID: number, DatumAanvraag: Date, Status: PasStatusEnum, Aantal: number }> } };

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
    ${PasFieldsFragmentDoc}`;
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
    ${CertificeringenFieldsFragmentDoc}`;

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
export function useGetMyAndDuplicatePriceQuery(baseOptions?: Apollo.QueryHookOptions<GetMyAndDuplicatePriceQuery, GetMyAndDuplicatePriceQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMyAndDuplicatePriceQuery, GetMyAndDuplicatePriceQueryVariables>(GetMyAndDuplicatePriceDocument, options);
      }
export function useGetMyAndDuplicatePriceLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMyAndDuplicatePriceQuery, GetMyAndDuplicatePriceQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMyAndDuplicatePriceQuery, GetMyAndDuplicatePriceQueryVariables>(GetMyAndDuplicatePriceDocument, options);
        }
export type GetMyAndDuplicatePriceQueryHookResult = ReturnType<typeof useGetMyAndDuplicatePriceQuery>;
export type GetMyAndDuplicatePriceLazyQueryHookResult = ReturnType<typeof useGetMyAndDuplicatePriceLazyQuery>;
export type GetMyAndDuplicatePriceQueryResult = Apollo.QueryResult<GetMyAndDuplicatePriceQuery, GetMyAndDuplicatePriceQueryVariables>;
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
export type RequestDuplicateMutationFn = Apollo.MutationFunction<RequestDuplicateMutation, RequestDuplicateMutationVariables>;

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
export function useRequestDuplicateMutation(baseOptions?: Apollo.MutationHookOptions<RequestDuplicateMutation, RequestDuplicateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RequestDuplicateMutation, RequestDuplicateMutationVariables>(RequestDuplicateDocument, options);
      }
export type RequestDuplicateMutationHookResult = ReturnType<typeof useRequestDuplicateMutation>;
export type RequestDuplicateMutationResult = Apollo.MutationResult<RequestDuplicateMutation>;
export type RequestDuplicateMutationOptions = Apollo.BaseMutationOptions<RequestDuplicateMutation, RequestDuplicateMutationVariables>;