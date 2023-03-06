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

export type User = {
  name: string;
  email: string;
  plan: string;
  paymentMethodSelected: boolean;
  activeWebsites?: ActiveWebsiteType[];
  devWebsites?: DevWebsite[];
  cards?: Card[];
};

export type Card = {
  type: string;
  expiryDate: string;
  endsIn: string;
};

export type ActiveWebsiteType = {
  websiteUrl: string;
  hasShop: boolean;
  shopUrl?: string;
  websiteScreenShot: string;
  plan: string;
};

export type DevWebsite = {
  previewUrl: string;
  hasShop: boolean;
  shopUrl?: string;
  websiteScreenShot: string;
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

export type WebsiteType = {
  type: string;
  description: string;
};
