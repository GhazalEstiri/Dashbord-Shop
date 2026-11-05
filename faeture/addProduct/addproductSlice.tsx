import { createSlice } from "@reduxjs/toolkit";

type Product = {
  title: string;
  id: number;
  price: number;
  category: string;
  date: string;
};
type Products = {
  product: Product[];
};
const initialState: Products = {
  product: [],
};
export const addProductSlice = createSlice({
  name: "addProductSlice",
  initialState,
  reducers: {
    add: (state, action) => {
      state.product.push(action.payload);
    },
    restore: (state, action) => {
      return action.payload;
    },
    delete: (state, action) => {
      const deleteItem = state.product.filter(
        (item) => item.id !== action.payload,
      );
      state.product = deleteItem;
    },
  },
});
export const addProductreducer = addProductSlice.reducer;
export const { add, restore, delete: deleteItem } = addProductSlice.actions;
