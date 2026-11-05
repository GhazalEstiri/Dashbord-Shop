"use client";
import { AppDispatch, Rootstate } from "@/lib/store";
import { useTranslations } from "next-intl";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, deleteItem } from "@/faeture/addProduct/addproductSlice";
import DatingPicker from "@/component/datePicker";
import { DateObject } from "react-multi-date-picker";
import dayjs from "dayjs";
import jalaliday from "jalaliday/dayjs";
import { Trash } from "lucide-react";
dayjs.extend(jalaliday);

const categories = [
  "Hygiene",
  "Cosmetics",
  "Skincare",
  "Hair care",
  "Novelty",
  "Gift items",
];
export default function AddProduct() {
  const [title, setTile] = useState("");
  const [price, setprice] = useState("");
  const [date, setDate] = useState<DateObject | null>(null);
  const [category, setcategory] = useState("");
  // const t = useTranslations("AddProducts");
  const products = useSelector(
    (state: Rootstate) => state.addProductSlice.product,
  );

  const dispatch = useDispatch<AppDispatch>();

  function convertToGregorian(date: DateObject) {
    const jalaliDate = `${date.year}-${String(date.month.number).padStart(2, "0")}-${String(date.day).padStart(2, "0")}`;

    return dayjs(jalaliDate, { jalali: true })
      .calendar("gregory")
      .format("YYYY-MM-DD");
  }
  function handleAdd(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!date) {
      alert("Please select a date");
      return;
    }

    const gregorianDate = convertToGregorian(date);

    dispatch(
      add({
        id: Date.now(),
        title: title,
        price: Number(price),
        category,
        date: gregorianDate,
      }),
    );
    setTile("");
    setcategory("");
    setprice("");
    setDate(null);
    (document.getElementById("my_modal_1") as HTMLDialogElement).close();
  }
  function handleDelete(id: number) {
    dispatch(deleteItem(id));
  }
  return (
    <div className="">
      {products.map((item) => {
        return (
          <div key={item.id}>
            <h1>{item.title}</h1>
            <p>{item.price}</p>
            <p>{item.category}</p>
            <p>{item.date}</p>
            <button
              onClick={() => handleDelete(item.id)}
              className="text-red-900 bg-[#AF44482f] p-2 h-10 cursor-pointer rounded-xl"
            >
              <Trash />
            </button>
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
        add product
      </button>
      <dialog id="my_modal_1" className="modal h-auto">
        <div className="modal-box bg-black h-auto">
          <form action="" onSubmit={handleAdd} className="h-auto">
            <div>
              <label>Title </label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTile(e.target.value)}
              />
            </div>
            <div>
              <label>Price </label>
              <input
                type="text"
                value={price}
                onChange={(e) => setprice(e.target.value)}
              />
            </div>
            <div>
              <label>Category </label>
              <select
                name=""
                id=""
                value={category}
                onChange={(e) => setcategory(e.target.value)}
              >
                <option value="everything">everything</option>
                {categories.map((item) => {
                  return (
                    <option value={item} key={item}>
                      {item}
                    </option>
                  );
                })}
              </select>
              <DatingPicker onDateChange={setDate} />
              <button type="submit"> add </button>
            </div>
          </form>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
}
