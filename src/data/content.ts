export const site = {
  name: "The Golden Years Express",
  tagline: "Rat Pack on the Rails · Entertainment for senior communities",
  phone: "530-608-9324",
  phoneHref: "tel:5306089324",
  baseURL: "https://www.goldenyearsexpress.org",
  emailSubject: "Partnership Opportunity – The Golden Years Express",
  sibling: {
    name: "Rat Pack Events",
    url: "https://www.ratpackevents.com",
    blurb: "The Martin & Monroe Show, The Dean-O-Holics, and more",
  },
  deanoholics: {
    name: "The Dean-O-Holics",
    url: "https://www.deanoholics.com",
  },
  /** Direct destinations decoded from the Drive donation QR codes (do not use QR images on-site). */
  donations: {
    venmo: {
      label: "Donate with Venmo",
      handle: "@Robert-Caudle-4",
      url: "https://venmo.com/u/Robert-Caudle-4",
    },
    paypal: {
      label: "Donate with PayPal",
      url: "https://www.paypal.com/qrcodes/managed/66352869-13bb-494b-a91b-c8bd511709a8?utm_source=consapp_download",
    },
  },
  poster: {
    src: "/images/poster-golden-years-express.jpg",
    alt: "Golden Years Express poster — art deco train with Rat Pack and Marilyn Monroe, bringing entertainment to senior communities and veterans by rail",
  },
} as const;

export const heroLead =
  "Bob Caudle and Sherri-Lynn Laboissonniere of Rat Pack Events invite you to help bring high-quality Rat Pack entertainment into senior living communities from San Diego to Seattle — by train.";

export const trustLine = [
  "San Diego → Seattle by train",
  "Senior communities & VA hospitals",
  "Partnerships & sponsorships welcome",
] as const;

export const supportOptions = [
  "Financial sponsorship",
  "Hotel rooms or discounts",
  "Local transportation and shuttle help",
  "Meals or other in-kind support",
  "Connections to retirement communities or Chambers",
  "Simply spreading the word",
] as const;

/** Partnership letter body — keep close to Bob & Sherri-Lynn’s original wording. */
export const letter = {
  greeting: "Dear Friend,",
  paragraphs: [
    "We are Bob Caudle and Sherri-Lynn Laboissonniere of Rat Pack Events, and we invite you to become part of something special.",
    "For many years we have performed live Rat Pack-era entertainment for senior living communities across California. Bob performs as Dean Martin (along with impressions of Frank Sinatra, Elvis, Tony Bennett, and others), and Sherri-Lynn is one of the top Marilyn Monroe tribute artists in the country. Together we bring The Martin & Monroe Show and other programs into active adult, assisted living, memory care, and skilled nursing communities.",
    "Bob and Sherri-Lynn are also part of a larger group that tours the country with a full Las Vegas-style Rat Pack tribute show featuring their band, The Dean-O-Holics. This is the only nationally touring show that includes every Rat Pack character — Frank, Dean, Sammy, Peter, and Joey — and stars Marilyn Monroe. While that larger production plays theaters, casinos, and public venues, the two of them have a special passion for bringing the same high-quality entertainment directly into senior living communities.",
    "We love what we do. The responses we receive from residents — especially those living with the effects of strokes, dementia, Parkinson’s, limited mobility, and other challenges — are deeply rewarding. Many light up with pure joy the moment the music starts. We constantly hear that our shows are the best entertainment they have ever seen, or the best that has ever visited their community. We also perform for seniors and veterans at VA hospitals. Sometimes we charge a small fee; often we charge little or nothing. The money never covers our costs, but the connection with the audience keeps us coming back. Many of these communities simply have little or no entertainment budget.",
    "That is why we created The Golden Years Express.",
    "The idea came to Bob while riding the train from Reno to Chicago for a performance. He rode straight there, stayed one day, and rode straight back. During that trip he fell in love with the train experience and the people who work on it. We have also taken the train whenever we can when performing on the East Coast, and those journeys only deepened our appreciation for train travel. That combination of experiences inspired this concept — or as we sometimes call it just for fun, Rat Pack on the Rails.",
  ],
  howItWorksTitle: "How it works",
  howItWorks: [
    "We will travel by train from San Diego to Seattle, stop in a town, visit two or three senior living communities while we are there (each show averages about one hour), then take the train the next day to the next stop. Between the train stations and the communities, we will also have expenses for local transportation and shuttling between venues. Good local transportation help will allow us to visit more properties that may not be right next to the depot. This is an area where we will need help.",
    "We plan to promote the tour to local Chambers of Commerce and the communities themselves as a special entertainment train coming to their town.",
    "We are looking for partners who believe in bringing joy to seniors and would like to help make this tour possible.",
  ],
  audience:
    "Whether you represent a Chamber of Commerce, a local business, a retirement community organization, an Elks Lodge, a hotel, a rental car company, or you are a private individual who simply cares about seniors (or has parents or loved ones in these communities), we would be grateful for your involvement at any level.",
  closing: [
    "This project is about more than entertainment. It is about connection, dignity, and bringing moments of happiness to people who often receive very little of either.",
    "If this speaks to you, we would love to talk. Please email or call us at 530-608-9324. We are happy to share more details, answer questions, or discuss how you might participate.",
    "Thank you for taking the time to read this. We hope you will consider joining us on The Golden Years Express.",
  ],
  signoff: "Warm regards,",
  from: [
    "“Golden Years Express”",
    "Bob Caudle & Sherri-Lynn Laboissonniere",
  ],
} as const;
