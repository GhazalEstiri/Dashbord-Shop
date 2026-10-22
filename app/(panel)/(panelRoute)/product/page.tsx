"use client";
import { products } from "@/lib/data/product";
import { useDispatch, useSelector } from "react-redux";
import type { Rootstate, AppDispatch } from "@/lib/store";
import { add, deleteProduct } from "@/faeture/product/productSlice";
import { useState } from "react";
export default function Product() {
  const product = useSelector(
    (state: Rootstate) => state.productSlicing.product,
  );
  const dispatch = useDispatch<AppDispatch>();
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [status, setStatus] = useState<"available" | "unavailable">(
    "available",
  );
  function handleAdd(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (title === "" || price === "") {
      return;
    }
    dispatch(
      add({
        id: Date.now(),
        title: title,
        price: Number(price),
        status,
      }),
    );
    setPrice("");
    setTitle("");
    setStatus("available");
    (document.getElementById("my_modal_1") as HTMLDialogElement)?.close();
  }

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

      <button
        className="btn"
        onClick={() =>
          (
            document.getElementById("my_modal_1") as HTMLDialogElement
          )?.showModal()
        }
      >
        open modal
      </button>
      <dialog id="my_modal_1" className="modal ">
        <div className="modal-box bg-amber-300">
          <form action="" onSubmit={handleAdd}>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="bg-black"
            />
            <input
              type="text"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="bg-red-700"
            />
            <select
              name=""
              id=""
              onChange={(e) =>
                setStatus(e.target.value as "available" | "unavailable")
              }
            >
              <option value="موجود">موجود</option>
              <option value="ناموجود">ناموجود</option>
            </select>
            <button type="submit" className="btn btn-warning">
              ثبت محصول
            </button>
          </form>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
}
