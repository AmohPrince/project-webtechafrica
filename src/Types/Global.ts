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
  activeWebsites: ActiveWebsiteType[];
  devWebsites: DevWebsite[];
};

export type ActiveWebsiteType = {
  websiteUrl: string;
  hasShop: boolean;
  shopUrl?: string;
  websiteScreenShot: string;
};

export type DevWebsite = {
  previewUrl: string;
  hasShop: boolean;
  shopUrl?: string;
  websiteScreenShot: string;
};
