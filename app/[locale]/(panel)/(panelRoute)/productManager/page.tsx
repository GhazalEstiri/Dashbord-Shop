"use client";
import { ShoppingBag, Trash } from "lucide-react";
import { products } from "@/lib/data/product";
import { useDispatch, useSelector } from "react-redux";
import type { Rootstate, AppDispatch } from "@/lib/store";
import { deleteProduct } from "@/faeture/product/productSlice";
import { useLocale, useTranslations } from "next-intl";

export default function ProductManager() {
  const locale = useLocale();

  const t = useTranslations("ProductManager");
  const productT = useTranslations("Products");
  const product = useSelector(
    (state: Rootstate) => state.productSlicing.product,
  );
  const dispatch = useDispatch<AppDispatch>();
  function handleDelete(id: number) {
    dispatch(deleteProduct(id));
  }
  return (
    <section className=" flex flex-col gap-10 px-10 md:px-20">
      <header className="flex flex-row justify-between items-center">
        <div className="flex flex-col mt-10 gap-5">
          <h1 className="text-foreground text-3xl font-bold"> {t("title")} </h1>
          <p className="text-text-title text-xl">{t("description")} </p>
        </div>
        <p className="bg-foreground p-3 rounded-xl h-auto text-background">
          <ShoppingBag />
        </p>
      </header>
      <div className="rounded-2xl border border-white/10 bg-second-background p-5 flex flex-col gap-5 mb-5 w-full">
        {product.map((item) => {
          return (
            <div
              key={item.id}
              className=" border-b border-white/10 bg-second-background p-5 flex flex-col md:flex-row justify-between items-center gap-5 "
            >
              <div className="flex flex-col md:flex-row items-center gap-10 text-center md:text-start">
                <p className="">
                  <img
                    src={item.image}
                    alt={t("imageAlt")}
                    className="w-15 h-15 rounded-full "
                  />
                </p>
                <div className="flex flex-col gap-4">
                  <p className="font-bold text-lg">
                    {" "}
                    {productT(item.titleKey)}
                  </p>
                  <p className="text-foreground">
                    {t("currency")}{" "}
                    {item.price.toLocaleString(
                      locale === "fa" ? "fa-IR" : "en-Us",
                    )}{" "}
                  </p>
                  <p
                    className={`${item.status === "available" ? "text-green-ok" : "text-red-900"}`}
                  >
                    {item.status === "available"
                      ? t("available")
                      : t("unavailable")}{" "}
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
    </section>
  );
}
