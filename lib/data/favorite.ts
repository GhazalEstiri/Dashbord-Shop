
import { products } from "@/lib/data/product";

export const favorites = products.filter((item) =>
  [1, 3, 5, 7, 9].includes(item.id)
);
