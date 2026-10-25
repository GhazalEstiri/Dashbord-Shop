type StatusProduct = "available" | "unavailable";
type Product = {
  id: number;
  title: string;
  status: StatusProduct;
  price: number;
};

export const favorites: Product[] = [
  {
    id: 2,
    title: "رژ لب مایع",
    status: "unavailable",
    price: 380000,
  },
  {
    id: 3,
    title: "کرم پودر",
    status: "available",
    price: 890000,
  },
  {
    id: 4,
    title: "پالت سایه چشم",
    status: "available",
    price: 1250000,
  },
  {
    id: 7,
    title: "کانسیلر",
    status: "available",
    price: 470000,
  },
  {
    id: 8,
    title: "بالم لب ",
    status: "unavailable",
    price: 190000,
  },
  {
    id: 9,
    title: "هایلایتر ",
    status: "available",
    price: 610000,
  },
  {
    id: 10,
    title: "پودر فیکس ",
    status: "unavailable",
    price: 720000,
  },
];
