"use client";
import { User, Mail, UserShield, ShieldCheck } from "lucide-react";
import { useSelector } from "react-redux";
import { Rootstate } from "@/lib/store";
export default function Account() {
  const user = useSelector((state: Rootstate) => state.auth.user);
  console.log(user);
  return (
    <section className=" flex flex-col md:mr-70 gap-10 px-5 lg:px-20">
      <header className="flex flex-row justify-between items-center">
        <div className="flex flex-col mt-10 gap-5">
          <h1 className="text-foreground text-3xl font-bold"> حساب کاربری</h1>
          <p className="text-text-title text-xl">
            اطلاعات حساب و سطح دسترسی خود را مشاهده کنید.
          </p>
        </div>
        {/* <p className="bg-foreground p-3 rounded-xl h-auto text-background">
          
        </p> */}
      </header>
      <div className="flex flex-col mb-10">
        {user && (
          <div className=" flex flex-col gap-5 ">
            <div className=" flex flex-col md:flex-row gap-5">
              <div className="rounded-2xl border border-white/10 bg-second-background p-5 w-full md:w-1/2 flex flex-col md:flex-row  items-center gap-5">
                <p className="bg-[#29251A] rounded-full p-3 text-foreground">
                  <User />
                </p>
                <div className=" flex flex-col gap-5 items-center md:items-start">
                  <p className="text-text-title text-lg">نام کاربری</p>
                  <p className="font-bold lg:text-xl text-lg">{user?.name}</p>
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-second-background p-5 w-full md:w-1/2 flex flex-col md:flex-row  items-center gap-5">
                <p className="bg-[#29251A] rounded-full p-3 text-foreground">
                  <Mail />
                </p>
                <div className=" flex flex-col gap-5  items-center md:items-start">
                  <p className="text-text-title text-lg">ایمیل </p>
                  <p className="font-bold  lg:text-xl text-lg">{user?.email}</p>
                </div>
              </div>
            </div>
            <div className=" flex flex-col md:flex-row gap-5">
              <div className="rounded-2xl border border-white/10 bg-second-background p-5 w-full md:w-1/2 flex flex-col md:flex-row  items-center gap-5">
                <p className="bg-[#29251A] rounded-full p-3 text-foreground">
                  <ShieldCheck />
                </p>
                <div className=" flex flex-col gap-5  items-center md:items-start">
                  <p className="text-text-title text-lg"> وضعیت کاربر</p>
                  <p
                    className={`p-2 rounded-full w-20 flex justify-center font-bold  lg:text-lg text-sm ${user.status === "Active" ? "text-green-ok bg-[#2780522f]" : "text-red-800 bg-[#AF44482f]"}`}
                  >
                    {user.status === "Active" ? "فعال" : "غیر فعال"}
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-second-background p-5 w-full md:w-1/2 flex flex-col md:flex-row  items-center gap-5">
                <p className="bg-[#29251A] rounded-full p-3 text-foreground">
                  <UserShield />
                </p>
                <div className=" flex flex-col gap-5  items-center md:items-start">
                  <p className="text-text-title text-lg">نقش و سطح دسترسی </p>
                  <p className="font-bold  lg:text-xl text-lg">
                    {user?.role === "admin"
                      ? "ادمین"
                      : user?.role === "vendor"
                        ? "فروشنده"
                        : "کاربر"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
