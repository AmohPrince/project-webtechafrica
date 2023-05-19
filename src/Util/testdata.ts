import { UserData } from "../Types/Global";

export const testUserData: UserData = {
  plan: "Basic",
  paymentMethodSelected: false,
  activeWebsites: [
    {
      id: "randomId",
      url: "https://testuser.webtechafrica.com/",
      hasShop: true,
      shopUrl: "https://testuser.webtechafrica.com/shop",
      websiteScreenShot:
        "https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2018/08/Empire-Flippers-an-online-business-marketplace.webp",
      plan: "Basic",
    },
  ],
  devWebsites: [
    {
      id: "tastjs",
      url: "https://testuser.webtechafrica.com/",
      expectedCompletionDate: "24th January",
      hasShop: true,
      shopUrl: "https://testuser.webtechafrica.com/shop",
      websiteScreenShot:
        "https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2018/08/Empire-Flippers-an-online-business-marketplace.webp",
    },
    {
      id: "Trsfsf",
      expectedCompletionDate: "28th February",
      url: "https://testuser.webtechafrica.com/",
      hasShop: false,
      websiteScreenShot:
        "https://assets-global.website-files.com/6009ec8cda7f305645c9d91b/602f2109a787c146dcbe2b66_601b1c1f7567a7399353fe47_traackr.jpeg",
    },
  ],
  pendingVerificationWebsites: [
    {
      id: "sgukkb",
      hasShop: true,
      url: "https://www.website.com",
      decisionDeadline: new Date().getTime(),
      selections: {
        domainName: "website.com",
        plan: "Basic",
        theme: {
          id: "dark",
          name: "Dark",
          colors: {
            primary: "#ff5277",
            secondary: "#43a9a3",
            text: "#ffffff",
            border: "#2d2d2d",
            background: "#0e141b",
            primaryOffset: "#ff2957",
            textOffset: "#818a91",
            backgroundOffset: "#252526",
          },
        },
        userHasOwnContent: false,
        websiteDescription: "svvysvtjstvs",
        websiteType: {
          description: "ssyysvst",
          type: "basic",
        },
      },
    },
  ],
  cards: [
    {
      endsIn: "5353",
      expiryDate: "04/2023",
      type: "MasterCard",
    },
  ],
};
