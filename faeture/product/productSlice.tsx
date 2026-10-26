import { products } from "@/lib/data/product";
import { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
type Product = {
  id: number;
  title: string;
  status: string;
  price: number;
  image: string;
};
type Everyproduct = {
  product: Product[];
};
const initialState: Everyproduct = {
  product: products,
};
type comment = {
   id: number;
  productId: number;
  comment: string;
};
type comments = {
  comments: comment[];
};
const initialComment: comments = {
  comments: [],
};

type Adress={
  id:number,
  name:string,
  adress:string,
  postCode:number,
  phoneNumber:number,
}

type Adresses={
  adress:Adress[]
}
const initialAdress:Adresses={
  adress:[]
}
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

export const addComment = createSlice({
  name: "addComment",
  initialState: initialComment,
  reducers: {
    addcm: (state, action: PayloadAction<comment>) => {
      state.comments?.push(action.payload);
    },
    deletecm:(state,action)=>{
      const deletecomment = state.comments.filter((item)=>item.id!==action.payload)
      state.comments=deletecomment
    }
  },
});


export const addAdress = createSlice({
  name:"addAdress",
  initialState:initialAdress,
  reducers:{
    addad: (state, action: PayloadAction<Adress>) => {
      state.adress.push(action.payload);
    },
    deletead:(state,action)=>{
      const deleteAdress = state.adress.filter((item)=>item.id!==action.payload)
      state.adress=deleteAdress
    }
  }

})
export const { add, delete: deleteProduct } = productSlice.actions;
export const productReducer = productSlice.reducer;
export const { addcm ,deletecm} = addComment.actions;
export const commentReducer = addComment.reducer;
export const {addad,deletead} = addAdress.actions
export const adressReducer= addAdress.reducer;
