enum textAlignment {
    left = "left",
    right = "right"
}

const productCardData = [
  {
    id: 1,
    title: "Total Control Over Your Ads",
    description:
      "You choose where we display the advertisements. Be it banners or videos. You get complete control over ad placement.",
    subtitle: "With stirmit, you can...",
    points: [
      "Experience insanely smooth ad loading speeds, which means a whole lot more engagement",
      "Fully customizable, drag and drop ad placement that anyone can use regardless of computer skills",
      "Choose your favourite campaign and place the ad on your screen",
    ],
    textAlignment: "left" as textAlignment,
    imgPath: "/logos/strimit-logo.png",
    width: 180,
  },
  {
    id: 2,
    title: "Multiplatform Streaming-Multimonetization",
    description:
      "Doesn't matter where you stream, we support every streaming platform there is. Be it YouTube, Twitch, Facebook Live, Loco, etc.",
    subtitle: "With stirmit, you can...",
    points: [
      "Stream on multiple platforms at the same time. No hassle, easy to use",
      "Monetize your stream via every platform, that means multiple viewers and multi-monetization of advertisements",
      "Maximize your personal brand by partnering with our brands on every platform",
    ],
    textAlignment: "right" as textAlignment,
    imgPath: "/images/platforms.png",
    width: 500,
  },
  {
    id: 3,
    title: "Automated Ads",
    description:
      "Pre-decide ad placement and leave the rest for us to do. Start a monetized stream in less than 2 minutes.",
    subtitle: "With stirmit, you can...",
    points: [
      "Choose automatic advertisements where we will display ads at a pre-decided frequency",
      "You get to have full focus on your content and we manage the ads",
      "Fully maintained audience engagement with no disturbance to your live stream",
    ],
    textAlignment: "left" as textAlignment,
    imgPath: "/images/3.png",
    width: 460,
  },
  {
    id: 4,
    title: "Automatic Payments and Dashboard",
    description:
      "Getting sponsors for your stream is great. On top of that, you also get automatic and timely payments plus dashboard to track your sponsored brands.",
    subtitle: "With stirmit, you can...",
    points: [
      "Strengthen brand relationship and track your sponsor history in real time",
      "Track your earnings and brand engagement",
      "Get a detailed insight on what your audience actually wants (...which helps you choose better brands as sponsors!)",
    ],
    textAlignment: "right" as textAlignment,
    imgPath: "/images/2.webp",
    width: 250,
  },
];

export default productCardData;
