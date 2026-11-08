import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
export type Product = {
  title: string;
  id: number;
  price: number;
  category: string;
  date: string;
  image: string;
};
export type Products = {
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
    edit: (state, action) => {
      const editItem = state.product.find(
        (item) => item.id === action.payload.id,
      );
      if (editItem) {
        editItem.title = action.payload.title;
        editItem.category = action.payload.category;
        editItem.price = action.payload.price;
        editItem.image = action.payload.image;
        editItem.date = action.payload.date;
      }
    },
  },
});
export const addProductreducer = addProductSlice.reducer;
export const {
  add,
  restore,
  delete: deleteItem,
  edit,
} = addProductSlice.actions;
