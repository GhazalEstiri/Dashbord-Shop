"use client";
import { products } from "@/lib/data/product";
import { ShoppingBag, Trash } from "lucide-react";
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
  const [status, setStatus] = useState<"موجود" | "ناموجود">("موجود");
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
    setStatus("موجود");
    (document.getElementById("my_modal_1") as HTMLDialogElement)?.close();
  }

  function handleDelete(id: number) {
    dispatch(deleteProduct(id));
  }
  return (
    <section className="flex flex-col md:mr-70 gap-10 px-10 md:px-20">
      <header className="flex flex-row justify-between items-center">
        <div className="flex flex-col mt-10 gap-5">
          <h1 className="text-foreground text-3xl font-bold">مدیریت محصولات</h1>
          <p className="text-text-title text-xl">
            مدیریت موجودی، قیمت و وضعیت محصولات
          </p>
        </div>
        <p className="bg-foreground p-3 rounded-xl h-auto text-background">
          <ShoppingBag />
        </p>
      </header>

      <div className="rounded-2xl border border-white/10 bg-second-background p-5 flex flex-col gap-5 w-full">
        {product.map((item) => {
          return (
            <div
              key={item.id}
              className=" border-b border-white/10 bg-second-background p-5 flex flex-col md:flex-row justify-between items-center gap-5 "
            >
              <div className="flex flex-col text-center md:text-start md:flex-row items-center gap-10">
                <p className="bg-[#29251A] rounded-full p-3 text-foreground">
                  <ShoppingBag />
                </p>
                <div className="flex flex-col gap-4">
                  <p className="font-bold text-lg">{item.title}</p>
                  <p className="text-foreground">
                    تومان: {item.price.toLocaleString("fa-IR")}{" "}
                  </p>
                  <p
                    className={`${item.status === "available" ? "text-green-ok" : "text-red-900"}`}
                  >
                    {item.status === "available" ? "موجود" : "ناموجود"}
                  </p>
                </div>
              </div>
              <button
                onClick={() => handleDelete(item.id)}
                className="text-red-900 bg-[#AF44482f] p-2 h-10 cursor-pointer rounded-xl"
              >
                <Trash />
              </button>
            </div>
          );
        })}
      </div>

      <button
        className="btn mb-10 bg-second-background text-foreground  hover:bg-foreground hover:text-background border-neutral"
        onClick={() =>
          (
            document.getElementById("my_modal_1") as HTMLDialogElement
          )?.showModal()
        }
      >
        اضافه کردن محصول
      </button>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box bg-second-background">
          <form action="" onSubmit={handleAdd} className=" flex flex-col gap-5">
            <p className="text-foreground">نام محصول:</p>
            <input
              type="text"
              value={title}
              placeholder="نام محصول را وارد کنید."
              onChange={(e) => setTitle(e.target.value)}
              className="bg-background h-10 outline-none "
            />
            <p className="text-foreground">قیمت محصول:</p>

            <input
              type="text"
              value={price}
              placeholder="قیمت محصول را وارد کنید."
              onChange={(e) => setPrice(e.target.value)}
              className="bg-second-background h-10 outline-none"
            />
            <div className="bg-background text-text-base w-full">
              <p className="text-foreground">وضعیت محصول:</p>
              <select
                name=""
                id=""
                onChange={(e) =>
                  setStatus(e.target.value as "موجود" | "ناموجود")
                }
                className=" text-text-title h-10 outline-none cursor-pointer"
              >
                <option value="موجود" className="bg-text-base text-background">
                  موجود
                </option>
                <option
                  value="ناموجود"
                  className="bg-text-base text-background hover:bg-foreground "
                >
                  ناموجود
                </option>
              </select>
            </div>
            <button type="submit" className="btn bg-foreground text-background border-none">
              ثبت محصول
            </button>
          </form>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn bg-background text-foreground border-none">بستن</button>
            </form>
          </div>
        </div>
      </dialog>
    </section>
  );
}
