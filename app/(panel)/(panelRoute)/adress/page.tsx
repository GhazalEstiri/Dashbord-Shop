"use client";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, Rootstate } from "@/lib/store";
import { House, Phone, Milestone, Star } from "lucide-react";
import React, { useState } from "react";
import { Rootstate } from "@/lib/store";
import { addad } from "@/faeture/product/productSlice";
import { it } from "node:test";
export default function Adress() {
  const [name, setName] = useState("");
  const [adress, setAdress] = useState("");
  const [postCode, setPostCode] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const user = useSelector((state: Rootstate) => state.auth.user);

  const adresses = useSelector((state: Rootstate) => state.addAdress.adress);

  const dispatch = useDispatch<AppDispatch>();

  function handleAdd(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    dispatch(
      addad({
        id: Date.now(),
        name,
        adress,
        phoneNumber: Number(phoneNumber),
        postCode: Number(postCode),
      }),
    );

    setAdress("");
    setName("");
    setPhoneNumber("");
    setPostCode("");
    (document.getElementById("my_modal_1") as HTMLDialogElement)?.close();
  }

  console.log(user);
  return (
    <section className="flex flex-col md:mr-70 gap-10 px-5 lg:px-20">
      <header className="flex flex-row justify-between items-center">
        <div className="flex flex-col mt-10 gap-5">
          <h1 className="text-foreground text-3xl font-bold"> آدرس کاربر</h1>
          <p className="text-text-title text-xl">
            اطلاعات مربوط به آدرس خود را اینجا وارد کنید.
          </p>
        </div>
      </header>
      <div className="rounded-2xl border border-white/10 bg-second-background p-5 w-full flex flex-col items-start gap-5 justify-between">
        <p className="text-foreground text-xl">افزودن آدرس جدید</p>
        <p className="text-text-title">
          برای ثبت آدرس جدید روی دکمه زیر کلیک کنید.
        </p>
        <button
          className="bg-foreground px-10 py-3 hover:translate-y-0.5 cursor-copy hover:transition ease-in rounded-2xl text-background"
          onClick={() =>
            (
              document.getElementById("my_modal_1") as HTMLDialogElement
            )?.showModal()
          }
        >
          + افزودن آدرس
        </button>
      </div>

      <div className="rounded-2xl relative border border-white/10 bg-second-background p-5 w-full flex flex-col items-start gap-5">
        {user && (
          <div className=" flex flex-row gap-5 ">
            <p className="text-foreground border border-foreground flex items-center justify-center rounded-full  h-10 w-10 mx-auto">
              <House />
            </p>

            <div className="flex gap-5 flex-col">
              <p>{user?.adress?.name}</p>
              <p>{user?.adress?.Path}</p>
              <p className="flex flex-row gap-2">
                <Milestone className="text-foreground" /> آدرس پستی :{" "}
                {user?.adress?.postcode.toLocaleString("fa-IR")}
              </p>
              <p className="flex flex-row gap-2">
                <Phone className="text-foreground" /> شماره تلفن :{" "}
                {user?.adress?.phoneNumber.toLocaleString("fa-IR")}
              </p>
            </div>
          </div>
        )}
        <p className="absolute left-5 top-5 border border-foreground rounded-2xl px-5 py-2 flex text-foreground gap-2">
          <Star fill="bg-foreground" /> آدرس پیش فرض
        </p>
      </div>
      {adresses.length > 0 ? (
        <div className="rounded-2xl relative border border-white/10 bg-second-background p-5 w-full flex flex-col items-start gap-5">
          {adresses.map((item) => {
            return (
              <div className=" flex flex-row gap-5 " key={item.id}>
                <p className="text-foreground border border-foreground flex items-center justify-center rounded-full  h-10 w-10 mx-auto">
                  <House />
                </p>

                <div className="flex gap-5 flex-col">
                  <p>{item?.name}</p>
                  <p>{item.adress}</p>
                  <p className="flex flex-row gap-2">
                    <Milestone className="text-foreground" /> آدرس پستی :{" "}
                    {item.postCode.toLocaleString("fa-IR")}
                  </p>
                  <p className="flex flex-row gap-2">
                    <Phone className="text-foreground" /> شماره تلفن :{" "}
                    {item.phoneNumber.toLocaleString("fa-IR")}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <p className="text-text-title">هنوز آدرس جدیدی ثبت نکرده‌اید.</p>
      )}
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box bg-second-background">
          <form action="" onSubmit={handleAdd} className=" flex flex-col gap-5">
            <p className="text-foreground">نام آدرس:</p>
            <input
              type="text"
              value={name}
              placeholder="نام محصول را وارد کنید."
              onChange={(e) => setName(e.target.value)}
              className="bg-background h-10 outline-none "
            />
            <p className="text-foreground"> آدرس:</p>

            <input
              type="text"
              value={adress}
              placeholder="قیمت محصول را وارد کنید."
              onChange={(e) => setAdress(e.target.value)}
              className="bg-second-background h-10 outline-none"
            />
            <p className="text-foreground">کد پستی :</p>
            <input
              type="text"
              value={postCode}
              placeholder="کد پستی  را وارد کنید."
              onChange={(e) => setPostCode(e.target.value)}
              className="bg-background h-10 outline-none "
            />

            <p className="text-foreground">شماره تلفن :</p>
            <input
              type="text"
              value={phoneNumber}
              placeholder="شماره تلفن را وارد کنید."
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="bg-background h-10 outline-none "
            />

            <button
              type="submit"
              className="btn bg-foreground text-background border-none"
            >
              ثبت محصول
            </button>
          </form>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn bg-background text-foreground border-none">
                بستن
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </section>
  );
}
