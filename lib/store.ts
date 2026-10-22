import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "@/faeture/auth/authSlice";
import { productReducer } from "@/faeture/product/productSlice";
export const store = configureStore({
  reducer: { auth: authReducer, productSlicing: productReducer },
});
export type Rootstate = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
