
type StatusProduct = "available" | "unavailable";

export type Product = {
  id: number;
  titleKey: string;
  status: StatusProduct;
  price: number;
  image: string;
};

export const products: Product[] = [
  {
    id: 1,
    titleKey: "mascara",
    status: "available",
    price: 450000,
    image:
      "https://sahara.market/wp-content/uploads/2022/11/Bell-Full-Lash-Volume-up-Mascaraaaa-768x768.jpg",
  },
  {
    id: 2,
    titleKey: "lipGloss",
    status: "unavailable",
    price: 380000,
    image: "https://yasmetic.com/wp-content/uploads/2024/01/8-5.jpg",
  },
  {
    id: 3,
    titleKey: "foundation",
    status: "available",
    price: 890000,
    image: "https://torman.ir/wp-content/uploads/2023/05/mac-studio-fix.jpg.webp",
  },
  {
    id: 4,
    titleKey: "eyeshadowPalette",
    status: "available",
    price: 1250000,
    image:
      "https://storage.khanoumi.com/ProductImages/DSC02166-202538164539534.jpg?w=320",
  },
  {
    id: 5,
    titleKey: "blush",
    status: "unavailable",
    price: 520000,
    image:
      "https://storage.khanoumi.com/ProductImages/1ce0af3edecc46509a2a0e7cc81ad50a.jpg?w=320",
  },
  {
    id: 6,
    titleKey: "eyeliner",
    status: "available",
    price: 310000,
    image:
      "https://storage.khanoumi.com/ProductImages/7843c025ff7f4c62ab47fd4537d83c9f.jpg?w=320",
  },
  {
    id: 7,
    titleKey: "concealer",
    status: "available",
    price: 470000,
    image:
      "https://storage.khanoumi.com/ProductImages/00100914-202583132455201.jpg?w=320",
  },
  {
    id: 8,
    titleKey: "lipBalm",
    status: "unavailable",
    price: 190000,
    image:
      "https://storage.khanoumi.com/ProductImages/da586cefa1e44f289ac35ac9782bcc17.jpg?w=320",
  },
  {
    id: 9,
    titleKey: "highlighter",
    status: "available",
    price: 610000,
    image:
      "https://storage.khanoumi.com/ProductImages/Sheglam-Go-Go-Glow-Highlighting-Body-Mist.KHANOUMI-202393171821212.jpg?w=320",
  },
  {
    id: 10,
    titleKey: "settingPowder",
    status: "unavailable",
    price: 720000,
    image:
      "https://storage.khanoumi.com/ProductImages/9acff9e619c64d47a20b7fd340a7768f.jpg?w=320",
  },
];
