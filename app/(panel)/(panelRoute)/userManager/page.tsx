"use client";
import { Users, User } from "lucide-react";
import { mockUser } from "@/lib/data/user";
export default function UserManager() {
  const users = mockUser.filter((item) => item.role === "user");
  return (
    <section className=" flex flex-col md:mr-70 gap-10 px-3 md:px-20">
      <header className="flex flex-row justify-between items-center">
        <div className="flex flex-col mt-10 gap-5">
          <h1 className="text-foreground text-3xl font-bold">مدیریت کاربران</h1>
          <p className="text-text-title text-xl">
            مشاهده و مدیریت حساب‌های کاربران
          </p>
        </div>
        <p className="bg-foreground p-3 rounded-xl h-auto text-background">
          <Users />
        </p>
      </header>

      {/* <div className=" flex flex-row"> */}
      <div className="rounded-2xl border border-white/10 bg-second-background px-10 py-5 flex lg:px-20 lg:py-10  flex-col items-start gap-5 text-xl w-full md:w-1/2">
        <p className="text-foreground">
          <Users />
        </p>
        <h1 className="w-full">تعداد کاربران</h1>
        <p>{users.length}</p>
      </div>
      {/* </div> */}

      <div className="rounded-2xl border border-white/10 bg-second-background p-5 flex flex-col gap-5 mb-5 w-full">
        <h1 className="text-text-base font bold  text-2xl pr-2">فهرست کاربران</h1>
        {users.map((item) => {
          return (
            <div
              key={item.id}
              className=" border-b border-white/10 bg-second-background p-5 flex flex-col md:flex-row items-center gap-5 mx-auto md:mx-0"
            >
              <p className="bg-[#29251A] rounded-full p-3 text-foreground">
                <User />
              </p>
              <div className=" flex justify-between w-full flex-col md:flex-row items-center">
                <div className="text-center md:text-start">
                  <p className="text-xl font-bold">{item.name}</p>
                  <p className="text-text-title">{item.email}</p>
                </div>

                <p
                  className={`p-4 rounded-full ${item.status === "Active" ? "text-green-ok bg-[#2780522f]" : "text-red-800 bg-[#AF44482f]"}`}
                >
                  {item.status === "Active" ? "فعال" : "غیر فعال"}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
