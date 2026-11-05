import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "@/faeture/auth/authSlice";
import { productReducer } from "@/faeture/product/productSlice";
import { commentReducer } from "@/faeture/product/productSlice";
import { adressReducer } from "@/faeture/product/productSlice";
import { addProductreducer } from "@/faeture/addProduct/addproductSlice";
export const store = configureStore({
  reducer: {
    auth: authReducer,
    productSlicing: productReducer,
    addComment: commentReducer,
    addAdress: adressReducer,
    addProductSlice: addProductreducer,
  },
});
export type Rootstate = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
