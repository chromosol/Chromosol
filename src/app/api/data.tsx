import { title } from "process";

export const footerlabels: { label: string; herf: string }[] = [
  { label: "Terms", herf: "#" },
  { label: "Disclosures", herf: "#" },
  { label: "Disclosures", herf: "#" },
  { label: "Latest News", herf: "#" },
];

export const pricedeta: {
  title: string;
  short: string;
  icon: string;
  background: string;
  price: string;
  mark: string;
  width: number;
  height: number;
  padding: string;
}[] = [ 
  {
    title: "JavaScript",
    short: "",
    icon: "/images/icons/icons8-javascript.svg",
    background: "bg-light_grey",
    price: "Strong Coding",
    mark: "",
    width: 44,
    height: 44,
    padding: "px-0 py-0",
  },
  {
    title: "Python ",
    short: "",
    icon: "/images/icons/icons8-python.svg",
    background: "bg-warning bg-opacity-20",
    price: "Advance Logic",
    mark: "",
    width: 44,
    height: 44,
    padding: "px-0 py-0",
  },
  {
    title: "Docker",
    short: "",
    icon: "/images/icons/icons8-docker.svg",
    background: "bg-light_grey",
    price: "CD",
    mark: "",
    width: 44,
    height: 44,
    padding: "px-0 py-0",
  },
  {
    title: "Jenkins",
    short: "",
    icon: "/images/icons/icons8-jenkins.svg",
    background: "bg-light_grey",
    price: "CI",
    mark: "",
    width: 44,
    height: 44,
    padding: "px-0 py-0",
  },
  {
    title: "Figma",
    short: "",
    icon: "/images/icons/icons8-figma.svg",
    background: "bg-light_grey",
    price: "Perfect Designs",
    mark: "",
    width: 44,
    height: 44,
    padding: "px-0 py-0",
  },
  {
    title: "Github",
    short: "",
    icon: "/images/icons/icons8-github.svg",
    background: "bg-light_grey",
    price: "Version Control",
    mark: "",
    width: 44,
    height: 44,
    padding: "px-0 py-0",
  },
  {
    title: "WordPress",
    short: "",
    icon: "/images/icons/icons8-wordpress.svg",
    background: "bg-light_grey",
    price: "Low code",
    mark: "",
    width: 44,
    height: 44,
    padding: "px-0 py-0",
  }
];

export const  services = [
    {
      icon: "/images/icons/icon-consulting.svg",
      text: "Digital Marketing Consulting",
    },
    {
      icon: "/images/icons/icon-blockchain.svg",
      text: "Website Solutions",
    },
    {
      icon: "/images/icons/icon-Services.svg",
      text: "UX /UI Design",
    },
    {
      icon: "/images/icons/icon-consulting.svg",
      text: "Custom Design",
    },
    {
      icon: "/images/icons/icon-blockchain.svg",
      text: "Custom Development",
    },
    {
      icon: "/images/icons/icon-Services.svg",
      text: "CI /CD Integration",
    },
    {
      icon: "/images/icons/icon-consulting.svg",
      text: "Project Deployment",
    },
  ];

export const portfolioData: { image: string; title: string }[] = [
  {
    image: "/images/portfolio/icon-wallet.svg",
    title: "Wide range of services",
  },
  {
    image: "/images/portfolio/icon-vault.svg",
    title: "Submit and track services",
  },
  {
    image: "/images/portfolio/icon-mobileapp.svg",
    title: "Stay updated with the progress",
  },
];

export const upgradeData: { title: string }[] = [
  { title: "100% Secure" },
  { title: "A Fraction of the Cost" },
  { title: "More Durable" },
  { title: "Easier to Use" },
];

export const perksData: {
  icon: string;
  title: string;
  text: string;
  space: string;
}[] = [
  {
    icon: "/images/perks/icon-support.svg",
    title: "24/7 Support",
    text: "Need help? Get your requests solved quickly via support team.",
    space: "lg:mt-8",
  },
  {
    icon: "/images/perks/icon-community.svg",
    title: "Community",
    text: "Join the conversations on our communities",
    space: "lg:mt-14",
  },
  {
    icon: "/images/perks/icon-academy.svg",
    title: "Contact",
    text: "info@chromasols.com<br /> +92-331-2618-111<br /> i8-1, Street 2, Islamabad PK 46000",
    space: "lg:mt-2",
  },
];

export const timelineData: {
  icon: string;
  title: string;
  text: string;
  position: string;
}[] = [
  {
    icon: "/images/timeline/icon-planning.svg",
    title: "Planning",
    text: "Map the project's scope and architecture",
    position: "md:top-0 md:left-0",
  },
  {
    icon: "/images/timeline/icon-refinement.svg",
    title: "Refinement",
    text: "Refine and improve your solution",
    position: "md:top-0 md:right-0",
  },
  {
    icon: "/images/timeline/icon-prototype.svg",
    title: "Prototype",
    text: "Build a working prototype to test your product",
    position: "md:bottom-0 md:left-0",
  },
  {
    icon: "/images/timeline/icon-support.svg",
    title: "Support",
    text: "Deploy the product and ensure full support by us",
    position: "md:bottom-0 md:right-0",
  },
];

export const CryptoData: { name: string; price: number }[] = [
  { name: "Bitcoin BTC/USD", price: 67646.84 },
  { name: "Ethereum ETH/USD", price: 2515.93 },
  { name: "Bitcoin Cash BTC/USD", price: 366.96 },
  { name: "Litecoin LTC/USD", price: 61504.54 },
];
