"use client";
import { products } from "@/lib/data/product";
import { useDispatch, useSelector } from "react-redux";
import type { Rootstate, AppDispatch } from "@/lib/store";
import { deleteProduct } from "@/faeture/product/productSlice";
export default function ProductManager() {
  const product = useSelector(
    (state: Rootstate) => state.productSlicing.product,
  );
  const dispatch = useDispatch<AppDispatch>();
  function handleDelete(id: number) {
    dispatch(deleteProduct(id));
  }
  return (
    <div className="mr-100">
      {product.map((item) => {
        return (
          <div key={item.id}>
            <p>
              {item.title}
              {item.status}
              {item.price}
            </p>
            <button onClick={() => handleDelete(item.id)}>deeeleeeteee</button>

           
          </div>
        );
      })}
    </div>
  );
}
