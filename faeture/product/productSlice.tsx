import { products } from "@/lib/data/product";
import { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
type Product = {
  id: number;
  title: string;
  status: string;
  price: number;
};
type Everyproduct = {
  product: Product[];
};
const initialState: Everyproduct = {
  product: products,
};

export const productSlice = createSlice({
  name: "productSlicing",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Product>) => {
      state.product?.push(action.payload);
    },
    delete: (state, action: PayloadAction<number>) => {
      const deleteProduct = state.product?.filter(
        (item) => item.id !== action.payload,
      );
      state.product = deleteProduct;
    },
  },
});
export const { add, delete: deleteProduct } = productSlice.actions;
export const productReducer= productSlice.reducer;
