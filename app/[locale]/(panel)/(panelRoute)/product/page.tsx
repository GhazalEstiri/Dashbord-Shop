"use client";
// import { products } from "@/lib/data/product";
import { ShoppingBag, Trash } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import type { Rootstate, AppDispatch } from "@/lib/store";
import { add, deleteProduct } from "@/faeture/product/productSlice";
import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
export default function Product() {
  const t = useTranslations("Product");
  const locale = useLocale();
  const productT = useTranslations("Products");

  const product = useSelector(
    (state: Rootstate) => state.productSlicing.product,
  );
  const dispatch = useDispatch<AppDispatch>();
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [status, setStatus] = useState<"available" | "unavailable">(
    "available",
  );
  const [image, setImage] = useState("");
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
        image,
      }),
    );
    setPrice("");
    setTitle("");
    setStatus("available");
    setImage("");
    (document.getElementById("my_modal_1") as HTMLDialogElement)?.close();
  }

  function handleDelete(id: number) {
    dispatch(deleteProduct(id));
  }
  return (
    <section className="flex flex-col gap-10 px-10 md:px-20">
      <header className="flex flex-row justify-between items-center">
        <div className="flex flex-col mt-10 gap-5">
          <h1 className="text-foreground text-3xl font-bold"> {t("title")}</h1>
          <p className="text-text-title text-xl">{t("description")}</p>
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
                <p className="">
                  <img
                    src={item.image}
                    alt={t("imagePreview")}
                    className="w-15 h-15 rounded-full "
                  />
                </p>
                <div className="flex flex-col gap-4">
                  <p className="font-bold text-lg">
                    {item.titleKey ? productT(item.titleKey) : item.title}
                  </p>
                  <p className="text-foreground">
                    {t("currency")}:{" "}
                    {item.price?.toLocaleString(
                      locale === "fa" ? "fa-IR" : "en-US",
                    )}{" "}
                  </p>
                  <p
                    className={`${item.status === "available" ? "text-green-ok" : "text-red-900"}`}
                  >
                    {item.status === "available"
                      ? t("available")
                      : t("unavailable")}
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
        {t("addProduct")}
      </button>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box bg-second-background">
          <form action="" onSubmit={handleAdd} className=" flex flex-col gap-5">
            <div className="flex flex-col gap-3">
              <p className="text-foreground">{t("image")}</p>

              <input
                type="file"
                accept="image/png, image/jpeg, image/webp"
                onChange={(e) => {
                  const file = e.target.files?.[0];

                  if (!file) return;

                  const reader = new FileReader();

                  reader.onload = () => {
                    setImage(reader.result as string);
                  };

                  reader.readAsDataURL(file);
                }}
                className="file-input w-full bg-background text-text-title"
              />

              {image && (
                <img
                  src={image}
                  alt={t("imagePreview")}
                  className="w-24 h-24 object-cover rounded-xl border border-white/10"
                />
              )}
            </div>

            <p className="text-foreground">{t("productName")}</p>
            <input
              type="text"
              value={title}
              placeholder={t("productNamePlaceholder")}
              onChange={(e) => setTitle(e.target.value)}
              className="bg-background h-10 outline-none "
            />
            <p className="text-foreground">{t("productPrice")}</p>

            <input
              type="text"
              value={price}
              placeholder={t("productPricePlaceholder")}
              onChange={(e) => setPrice(e.target.value)}
              className="bg-second-background h-10 outline-none"
            />
            <div className="bg-background text-text-base w-full">
              <p className="text-foreground"> {t("productStatus")}</p>
              <select
                name=""
                id=""
                onChange={(e) =>
                  setStatus(e.target.value as "available" | "unavailable")
                }
                className=" text-text-title h-10 outline-none cursor-pointer"
              >
                <option
                  value="available"
                  className="bg-text-base text-background"
                >
                  {t("available")}
                </option>
                <option
                  value="unavailable"
                  className="bg-text-base text-background hover:bg-foreground "
                >
                  {t("unavailable")}
                </option>
              </select>
            </div>
            <button
              type="submit"
              className="btn bg-foreground text-background border-none"
            >
              {t("submit")}
            </button>
          </form>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn bg-background text-foreground border-none">
                {t("close")}
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </section>
  );
}
