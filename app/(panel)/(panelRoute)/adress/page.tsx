"use client";
import { useSelector } from "react-redux";
import { Rootstate } from "@/lib/store";
import { House } from "lucide-react";
export default function Adress() {
  const user = useSelector((state: Rootstate) => state.auth.user);
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
        <button className="bg-foreground px-10 py-3 hover:translate-y-0.5 cursor-copy hover:transition ease-in rounded-2xl text-background">
          + افزودن آدرس
        </button>
      </div>

      <div className="rounded-2xl border border-white/10 bg-second-background p-5 w-full md:w-1/2 flex flex-col items-center gap-5">
        {user && (
          <div className=" flex flex-row gap-5">
            <p className="text-foreground border border-foreground p-2 w-12 items-center justify-center rounded-full h-11">
              <House />
            </p>
            <div>
              <p>{user.adress.name}</p>
              <p>{user?.adress.Path}</p>
              <p>{user?.adress.phoneNumber}</p>
              <p>{user?.adress.postcode}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
