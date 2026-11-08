"use client";
import { AppDispatch, Rootstate } from "@/lib/store";
import { useTranslations, useLocale } from "next-intl";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, deleteItem, edit } from "@/faeture/addProduct/addproductSlice";
import DatingPicker from "@/component/datePicker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import { DateObject } from "react-multi-date-picker";
import type { Product } from "@/faeture/addProduct/addproductSlice";
import dayjs from "dayjs";
import jalaliday from "jalaliday/dayjs";
import gregorian_en from "react-date-object/locales/gregorian_en";
import gregorian from "react-date-object/calendars/gregorian";
import { Trash, PencilSparkles } from "lucide-react";
dayjs.extend(jalaliday);

const categories = [
  { value: "Hygiene", label: "hygiene" },
  { value: "Cosmetics", label: "cosmetics" },
  { value: "Skincare", label: "skincare" },
  { value: "Hair care", label: "hairCare" },
  { value: "Novelty", label: "novelty" },
  { value: "Gift items", label: "giftItems" },
];
export default function AddProduct() {
  const [title, setTile] = useState("");
  const [price, setprice] = useState("");
  const [date, setDate] = useState<DateObject | null>(null);
  const [category, setcategory] = useState("");
  const [image, setImage] = useState("");

  const [editProduct, setEditproduct] = useState<Product | null>(null);
  const [editTitle, setEditTitle] = useState("");
  const [editPrice, setEditPrice] = useState("");
  const [editDate, setEditDate] = useState<DateObject | null>(null);
  const [editcategory, setEditCategory] = useState("");
  const [editImage, setEditImage] = useState("");
  const t = useTranslations("AddProducts");
  const products = useSelector(
    (state: Rootstate) => state.addProductSlice.product,
  );

  const dispatch = useDispatch<AppDispatch>();
  const locale = useLocale();
  const isPersian = locale === "fa";
  function convertToGregorian(date: DateObject) {
    // const jalaliDate = `${date.year}-${String(date.month.number).padStart(2, "0")}-${String(date.day).padStart(2, "0")}`;

    return date.convert(gregorian, gregorian_en).format("YYYY-MM-DD");
  }

  function formatDate(date: string) {
    const savedDate = new DateObject({
      date,
      calendar: gregorian,
      locale: gregorian_en,
    });

    return savedDate
      .convert(
        isPersian ? persian : gregorian,
        isPersian ? persian_fa : gregorian_en,
      )
      .format("YYYY/MM/DD");
  }

  function handleAdd(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!date) {
      alert("Please select a date");
      return;
    }

    // const gregorianDate = convertToGregorian(date);

    dispatch(
      add({
        id: Date.now(),
        title: title,
        price: Number(price),
        category,
        date: convertToGregorian(date),
        image,
      }),
    );
    console.log(date);
    setTile("");
    setcategory("");
    setImage("");
    setprice("");
    setDate(null);
    (document.getElementById("my_modal_1") as HTMLDialogElement).close();
  }
  function handleDelete(id: number) {
    dispatch(deleteItem(id));
  }

  function handleEditClick(product: Product) {
    (document.getElementById("edit_modal") as HTMLDialogElement)?.showModal();
    setEditproduct(product);
    setEditCategory(product.category);

    const savedDate = new DateObject({
      date: product.date,
      calendar: gregorian,
      locale: gregorian_en,
    });

    setEditDate(
      savedDate.convert(
        isPersian ? persian : gregorian,
        isPersian ? persian_fa : gregorian_en,
      ),
    );
    setEditImage(product.image);
    setEditPrice(String(product.price));
    setEditTitle(product.title);
  }
  function handleEdit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!editProduct) return;
    dispatch(
      edit({
        ...editProduct,
        title: editTitle,
        price: Number(editPrice),
        category: editcategory,
        date: convertToGregorian(editDate),
        image: editImage,
      }),
      console.log(editDate),
      console.log(editProduct)
    );
    setEditproduct(null);
  }

  return (
    <section className="flex flex-col gap-10 px-10 md:px-20">
      <header className="flex flex-row justify-between items-center">
        <div className="flex flex-col mt-10 gap-5">
          <h1 className="text-foreground text-3xl font-bold">{t("title")}</h1>
          <p className="text-text-title text-xl">{t("description")}</p>
        </div>
      </header>
      {products.map((item) => {
        return (
          <div
            key={item.id}
            className="group rounded-2xl border border-white/10 bg-second-background p-5 flex flex-col gap-5"
          >
            <div className="flex flex-row justify-between">
              <div className="flex flex-col gap-5">
                <div className="flex  flex-row gap-4">
                  <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl border border-[#FABE2C]/20 bg-second-background text-foreground">
                    {item.image && (
                      <img
                        src={item.image}
                        alt={t("imagePreview")}
                        className="w-15 h-15 rounded-2xl "
                      />
                    )}
                  </div>

                  <div className=" flex  flex-col">
                    <h3 className=" text-base font-bold">{item.title}</h3>

                    <p className="mt-2 flex items-center gap-1.5 rounded-full bg-second-background text-xs text-foreground">
                      {formatDate(item.date)}
                    </p>
                  </div>
                </div>
                <div className="flex flex-row gap-2 ">
                  <h1>{t("category")}</h1>
                  <p className="text-foreground">
                    {" "}
                    {t(
                      `categories.${
                        categories.find((cat) => cat.value === item.category)
                          ?.label ?? "all"
                      }`,
                    )}
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <button
                  onClick={() => handleDelete(item.id)}
                  className="text-red-900 bg-[#AF44482f] p-2 h-10 cursor-pointer rounded-xl"
                >
                  <Trash />
                </button>
                <button
                  onClick={() => handleEditClick(item)}
                  className="text-green-ok bg-[#2780522f] p-2 h-10 cursor-pointer rounded-xl"
                >
                  <PencilSparkles size={20} />
                </button>
              </div>
            </div>

            <div className=" flex items-start gap-3 rounded-xl border border-white/5 bg-black/20 p-3">
              <div className="min-w-0 flex flex-row justify-center items-center gap-5">
                <p className="text-xs text-text-title"> {t("price")}</p>

                <p className="mt-1 break-all text-sm text-text-title">
                  {item.price}
                </p>
              </div>
            </div>
          </div>
        );
      })}
      <button
        className="btn"
        onClick={() =>
          (
            document.getElementById("my_modal_1") as HTMLDialogElement
          ).showModal()
        }
      >
        {t("add")}
      </button>
      <dialog id="my_modal_1" className="modal h-auto">
        <div className="modal-box bg-black h-auto">
          <form
            action=""
            onSubmit={handleAdd}
            className="h-auto flex flex-col gap-5"
          >
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
            <div className="flex flex-col gap-2">
              <label className="text-foreground">{t("productTitle")}</label>
              <input
                type="text"
                value={title}
                placeholder={t("titlePlaceholder")}
                className="bg-background h-10 outline-none pr-5 pl-5"
                onChange={(e) => setTile(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-foreground">{t("productPrice")} </label>
              <input
                type="text"
                placeholder={t("pricePlaceholder")}
                value={price}
                className="bg-second-background h-10 outline-none pr-5 pl-5"
                onChange={(e) => setprice(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-foreground">{t("selectCategory")} </label>
              <select
                name=""
                id=""
                value={category}
                className=" text-text-title h-10 outline-none cursor-pointer bg-background pr-5 pl-5"
                onChange={(e) => setcategory(e.target.value)}
              >
                <option value="all">{t("all")}</option>
                {categories.map((item) => {
                  return (
                    <option value={item.value} key={item.value}>
                      {t(`categories.${item.label}`)}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="flex flex-col gap-2 w-full">
              <label className="text-foreground">{t("selectDate")}</label>
              <DatingPicker
                onDateChange={setDate}
                locale={locale}
                value={date}
              />
            </div>
            <button
              type="submit"
              className="btn bg-foreground text-background border-none"
            >
              {t("add")}
            </button>
          </form>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">{t("close")}</button>
            </form>
          </div>
        </div>
      </dialog>

      {editProduct && (
        <dialog id="edit_modal" className="modal h-auto">
          <div className="modal-box bg-black h-auto">
            <form
              action=""
              onSubmit={handleEdit}
              className="h-auto flex flex-col gap-5"
            >
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
                      setEditImage(reader.result as string);
                    };

                    reader.readAsDataURL(file);
                  }}
                  className="file-input w-full bg-background text-text-title"
                />

                {image && (
                  <img
                    src={editImage}
                    alt={t("imagePreview")}
                    className="w-24 h-24 object-cover rounded-xl border border-white/10"
                  />
                )}
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-foreground">{t("productTitle")}</label>
                <input
                  type="text"
                  value={editTitle}
                  placeholder={t("titlePlaceholder")}
                  className="bg-background h-10 outline-none pr-5 pl-5"
                  onChange={(e) => setEditTitle(e.target.value)}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-foreground">{t("productPrice")} </label>
                <input
                  type="text"
                  placeholder={t("pricePlaceholder")}
                  value={editPrice}
                  className="bg-second-background h-10 outline-none pr-5 pl-5"
                  onChange={(e) => setEditPrice(e.target.value)}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-foreground">{t("selectCategory")}</label>
                <select
                  name=""
                  id=""
                  value={editcategory}
                  className=" text-text-title h-10 outline-none cursor-pointer bg-background pr-5 pl-5"
                  onChange={(e) => setEditCategory(e.target.value)}
                >
                  <option value="all">{t("all")}</option>
                  {categories.map((item) => {
                    return (
                      <option value={item.value} key={item.value}>
                        {t(`categories.${item.label}`)}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="flex flex-col gap-2 w-full">
                <label className="text-foreground">{t("selectDate")}</label>
                <DatingPicker
                  onDateChange={setEditDate}
                  locale={locale}
                  value={editDate}
                />
              </div>
              <button
                type="submit"
                className="btn bg-foreground text-background border-none"
              >
                {t("add")}
              </button>
            </form>
            <div className="modal-action">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn">{t("close")}</button>
              </form>
            </div>
          </div>
        </dialog>
      )}
    </section>
  );
}
