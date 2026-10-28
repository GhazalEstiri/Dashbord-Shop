// type StatusProduct = "available" | "unavailable";
// type Product = {
//   id: number;
//   title: string;
//   status: StatusProduct;
//   price: number;
// };

// export const Order: Product[] = [
//   {
//     id: 1,
//     title: "ریمل حجم‌دهنده",
//     status: "available",
//     price: 450000,
//   },
 
//   {
//     id: 3,
//     title: "کرم پودر",
//     status: "available",
//     price: 890000,
//   },
//   {
//     id: 4,
//     title: "پالت سایه چشم",
//     status: "available",
//     price: 1250000,
//   },
//   {
//     id: 5,
//     title: "رژگونه صورتی",
//     status: "unavailable",
//     price: 520000,
//   },
//   {
//     id: 7,
//     title: "کانسیلر",
//     status: "available",
//     price: 470000,
//   },
//   {
//     id: 9,
//     title: "هایلایتر ",
//     status: "available",
//     price: 610000,
//   },
//   {
//     id: 10,
//     title: "پودر فیکس ",
//     status: "unavailable",
//     price: 720000,
//   },
// ];
import { products } from "@/lib/data/product";

export const Order = products.filter((item) =>
  [1, 2, 3, 4, 5].includes(item.id)
);