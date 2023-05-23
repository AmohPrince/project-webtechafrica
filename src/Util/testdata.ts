import { UserData } from "../Types/Global";

export const testUserData: UserData = {
  plan: "Basic",
  paymentMethodSelected: false,
  activeWebsites: [
    {
      id: "randomId",
      url: "https://testuser.webtechafrica.com/",
      websiteScreenShot:
        "https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2018/08/Empire-Flippers-an-online-business-marketplace.webp",
      plan: "Basic",
      createdAt: 1682234423660,
    },
  ],
  devWebsites: [
    {
      id: "tastjs",
      url: "https://testuser.webtechafrica.com/",
      expectedCompletionDate: "24th January",
      websiteScreenShot:
        "https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2018/08/Empire-Flippers-an-online-business-marketplace.webp",
      plan: "Basic",
      createdAt: 1682234423660,
    },
    {
      id: "Trsfsf",
      expectedCompletionDate: "28th February",
      url: "https://testuser.webtechafrica.com/",
      websiteScreenShot:
        "https://assets-global.website-files.com/6009ec8cda7f305645c9d91b/602f2109a787c146dcbe2b66_601b1c1f7567a7399353fe47_traackr.jpeg",
      plan: "Premium",
      createdAt: 1682234423660,
    },
  ],
  pendingVerificationWebsites: [
    {
      id: "sgukkb",
      url: "website.com",
      decisionDeadline: new Date().getTime(),
      plan: "Basic",
      createdAt: 1682234423660,
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
          type: "E-commerce websites",
          description:
            "An E-commerce website is an online platform where businesses can sell their products or services. These websites have a catalog of products, a shopping cart system, and a checkout process. They also feature secure payment gateways, customer reviews, ratings, and recommendations. Personalized accounts, wish lists, and subscription services may also be available. E-commerce websites can be owned by a single retailer or can serve as a platform for multiple vendors. Popular examples include Amazon, eBay, and Etsy.",
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
  pastTransactions: [
    {
      amount: "4500",
      billingDate: 1682234423660,
      card: {
        endsIn: "5353",
        expiryDate: "04/2023",
        type: "MasterCard",
      },
      currencyCode: "Ksh",
      lastPaymentDate: 1682234423660,
      lastPaymentTime: 1682234423660,
      plan: "Basic",
      websiteUrl: "website.com",
    },
    {
      amount: "4500",
      billingDate: 1682234423660,
      card: {
        endsIn: "5353",
        expiryDate: "04/2023",
        type: "MasterCard",
      },
      currencyCode: "Ksh",
      lastPaymentDate: 1682234423660,
      lastPaymentTime: 1682234423660,
      plan: "Basic",
      websiteUrl: "website.com",
    },
  ],
  upcomingTransactions: [
    {
      amount: "4500",
      billingDate: 1682234423660,
      card: {
        endsIn: "5353",
        expiryDate: "04/2023",
        type: "MasterCard",
      },
      currencyCode: "Ksh",
      lastPaymentDate: 1682234423660,
      lastPaymentTime: 1682234423660,
      plan: "Basic",
      websiteUrl: "website.com",
    },
    {
      amount: "4500",
      billingDate: 1682234423660,
      card: {
        endsIn: "5353",
        expiryDate: "04/2023",
        type: "MasterCard",
      },
      currencyCode: "Ksh",
      lastPaymentDate: 1682234423660,
      lastPaymentTime: 1682234423660,
      plan: "Basic",
      websiteUrl: "website.com",
    },
  ],
};
