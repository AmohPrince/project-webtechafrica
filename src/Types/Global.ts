export type BlogArticleType = {
  title: string;
  date: string;
  preText: string;
  img: string;
  writer: string;
  position: string;
  categories: string[];
  writerImage: string;
  introduction?: string;
  points?: string[];
  blogBodyImage?: string;
  conclusions?: string[];
};

export type UserData = {
  plan: "basic" | "premium" | string; // Either basic or premium but basic by default.
  paymentMethodSelected: boolean; // whether or not the use has selected a payment method. false by default
  activeWebsites?: ActiveWebsite[]; //list of the users active websites.
  devWebsites?: DevWebsite[]; //list of the users dev websites. This are websites currently in development.
  pendingVerificationWebsites?: PendingVerificationWebsite[]; //list of websites that are pending verification. For people with no pending verification website this field does not exist
  cards?: Card[]; //list of user credit cards.
  pastTransactions?: Transaction[];
  upcomingTransactions?: Transaction[];
  phoneNumber?: string;
  country?: string;
};

export type Transaction = {
  websiteUrl: string;
  plan: "Basic" | "Premium";
  currencyCode: string;
  lastPaymentDate: number;
  lastPaymentTime: number;
  billingDate: number;
  amount: string;
  card: Card;
};

export type WebsiteStage =
  | "In Review"
  | "Reviewed"
  | "Development"
  | "Deployed";

export type Website = {
  id: string;
  url: string;
  plan: "Basic" | "Premium";
  createdAt: number;
  stage: WebsiteStage;
};

export type ActiveWebsite = Website & {
  websiteScreenShot: string;
};

export type DevWebsite = Website & {
  websiteScreenShot?: string;
  expectedCompletionDate: string;
};

export type PendingVerificationWebsite = Website & {
  decisionDeadline: number;
  selections: NewWebsiteSelections;
};

export type Card = {
  type: string;
  expiryDate: string;
  endsIn: string;
};

export type Theme = {
  id: string;
  name: string;
  colors: {
    primary: string;
    secondary: string;
    text: string;
    border: string;
    background: string;
    primaryOffset: string;
    textOffset: string;
    backgroundOffset: string;
  };
};

//This is for the choices the user makes in the app.
export type WebsiteType = {
  type: string;
  description: string;
};

export type NewWebsiteSelections = {
  theme: Theme;
  websiteType: WebsiteType;
  domainName: string | null;
  websiteDescription: string | null;
  userHasOwnContent: boolean | null;
  plan: "Basic" | "Premium" | null;
};
