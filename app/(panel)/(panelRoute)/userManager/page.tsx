"use client";
import { Users } from "lucide-react";
import { mockUser } from "@/lib/data/user";
export default function UserManager() {
  const users = mockUser.filter((item) => item.role === "user");
  return (
    <section className=" flex flex-col mr-70 gap-10 px-20">
      <header className="flex flex-row justify-between items-center">
        <div className="flex flex-col mt-10 gap-5">
          <h1 className="text-foreground text-3xl font-bold">مدیریت کاربران</h1>
          <p className="text-gray-400 text-xl">مشاهده و مدیریت حساب‌های کاربران</p>
        </div>
        <p className="bg-foreground p-3 rounded-xl h-auto text-background">
          <Users />
        </p>
      </header>

      <div className="rounded-2xl border border-white/10 bg-second-background p-5 flex flex-col gap-5 mb-5">
        {users.map((item) => {
          return (
            <div
              key={item.id}
              className="rounded-2xl border border-white/10 bg-second-background p-5"
            >
              <p>{item.name}</p>
              <p>{item.email}</p>
              <p>{item.status}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
