"use client";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, Rootstate } from "@/lib/store";
import { House, Phone, Milestone, Star } from "lucide-react";
import React, { useState } from "react";
import { addad } from "@/faeture/product/productSlice";
import { useLocale, useTranslations } from "next-intl";
export default function Adress() {
  const locale = useLocale();
  const PathT = useTranslations("AddressPath");
  const [name, setName] = useState("");
  const [adress, setAdress] = useState("");
  const [postCode, setPostCode] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const t = useTranslations("Adress");

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
    <section className="flex flex-col  gap-10 px-5 lg:px-20">
      <header className="flex flex-row justify-between items-center">
        <div className="flex flex-col mt-10 gap-5">
          <h1 className="text-foreground text-3xl font-bold"> {t("title")}</h1>
          <p className="text-text-title text-xl">{t("description")} </p>
        </div>
      </header>
      <div className="rounded-2xl border border-white/10 bg-second-background p-5 w-full flex flex-col items-start gap-5 justify-between">
        <p className="text-foreground text-xl">{t("addNewAddress")}</p>
        <p className="text-text-title">{t("addAddressDescription")} </p>
        <button
          className="bg-foreground px-10 py-3 hover:translate-y-0.5 cursor-copy hover:transition ease-in rounded-2xl text-background"
          onClick={() =>
            (
              document.getElementById("my_modal_1") as HTMLDialogElement
            )?.showModal()
          }
        >
          + {t("addAddress")}
        </button>
      </div>

      <div className="rounded-2xl relative border border-white/10 bg-second-background p-5 w-full flex flex-col items-start gap-5">
        <p className=" border border-foreground rounded-2xl px-5 py-2 flex text-foreground gap-2">
          <Star fill="bg-foreground" /> {t("defaultAddress")}
        </p>
        {user && (
          <div className=" flex flex-row gap-5 ">
            <p className="text-foreground border border-foreground flex items-center justify-center rounded-full  h-10 w-10 mx-auto">
              <House />
            </p>

            <div className="flex gap-5 flex-col">
              <p>{PathT(user.adress.name)}</p>
              <p>{PathT(user.adress.path)}</p>
              <p className="flex flex-row gap-2">
                <Milestone className="text-foreground" /> {t("postalAddress")} :
                {user?.adress?.postcode.toLocaleString(
                  locale === "fa" ? "fa-IR" : "en-Us",
                )}
              </p>
              <p className="flex flex-row gap-2">
                <Phone className="text-foreground" /> {t("phoneNumber")} :
                {user?.adress?.phoneNumber.toLocaleString(
                  locale === "fa" ? "fa-IR" : "en-Us",
                )}
              </p>
            </div>
          </div>
        )}
      </div>
      {adresses.length > 0 ? (
        <div className="rounded-2xl relative border border-white/10 bg-second-background p-5 w-full flex flex-col items-start gap-5 mb-10">
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
                    <Milestone className="text-foreground" />{" "}
                    {t("postalAddress")} :
                    {item.postCode.toLocaleString(
                      locale === "fa" ? "fa-IR" : "en-Us",
                    )}
                  </p>
                  <p className="flex flex-row gap-2">
                    <Phone className="text-foreground" /> {t("phoneNumber")} :{" "}
                    {item.phoneNumber.toLocaleString(
                      locale === "fa" ? "fa-IR" : "en-Us",
                    )}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <p className="text-text-title">{t("emptyAddresses")}.</p>
      )}
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box bg-second-background">
          <form action="" onSubmit={handleAdd} className=" flex flex-col gap-5">
            <p className="text-foreground"> {t("form.addressName")}</p>
            <input
              type="text"
              value={name}
              placeholder={t("form.addressNamePlaceholder")}
              onChange={(e) => setName(e.target.value)}
              className="bg-background h-10 outline-none "
            />
            <p className="text-foreground"> {t("form.address")}</p>
            <input
              type="text"
              value={adress}
              placeholder={t("form.addressPlaceholder")}
              onChange={(e) => setAdress(e.target.value)}
              className="bg-second-background h-10 outline-none"
            />
            <p className="text-foreground">{t("form.postCode")}</p>
            <input
              type="text"
              value={postCode}
              placeholder={t("form.postCodePlaceholder")}
              onChange={(e) => setPostCode(e.target.value)}
              className="bg-background h-10 outline-none "
            />

            <p className="text-foreground">{phoneNumber}</p>
            <input
              type="text"
              value={phoneNumber}
              placeholder={t("form.phoneNumberPlaceholder")}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="bg-background h-10 outline-none "
            />

            <button
              type="submit"
              className="btn bg-foreground text-background border-none"
            >
              {t("form.submit")}{" "}
            </button>
          </form>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn bg-background text-foreground border-none">
                {t("form.close")}
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </section>
  );
}
