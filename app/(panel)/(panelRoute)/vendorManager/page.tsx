"use client";

import { mockUser } from "@/lib/data/user";
import {
  Store,
  Mail,
  Users,
  ArrowUpLeft,
  ShieldCheck,
  ShoppingBag,
} from "lucide-react";

export default function VendorManager() {
  const vendors = mockUser.filter((item) => item.role === "vendor");

  return (
    <section className="flex flex-col mr-70 gap-10 px-20 ">
      <header className="flex flex-row justify-between items-center">
        <div className="flex flex-col mt-10 gap-5">
          <h1 className="text-foreground text-3xl font-bold">
            {" "}
            مدیریت فروشندگان
          </h1>
          <p className="text-gray-400 text-xl">
            اطلاعات و حساب فروشندگان فروشگاه را مدیریت کنید.
          </p>
        </div>
        <p className="bg-foreground p-3 rounded-xl h-auto text-background">
          <ShoppingBag />
        </p>
      </header>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-second-background p-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-400">تعداد فروشندگان</p>
              <p className="mt-3 text-3xl font-bold text-foreground">
                {vendors.length}
              </p>
            </div>

            <div className="rounded-xl bg-second-background p-3">
              <Users size={26} className="text-foreground" />
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-second-background p-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-400">نوع حساب</p>
              <p className="mt-3 text-xl font-bold">فروشنده</p>
            </div>

            <div className="rounded-xl bg-second-background p-3">
              <ShieldCheck size={26} className="text-foreground" />
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">فهرست فروشندگان</h2>

          <span className="text-sm text-gray-400">
            {vendors.length} فروشنده
          </span>
        </div>

        {vendors.length > 0 ? (
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
            {vendors.map((item) => (
              <div
                key={item.id}
                className="group rounded-2xl border border-white/10 bg-second-background p-5 "
              >
                <div className="flex items-center gap-4">
                  <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl border border-[#FABE2C]/20 bg-second-background text-foreground">
                    <Store size={27} />
                  </div>

                  <div className="min-w-0 flex-1">
                    <h3 className="truncate text-base font-bold">
                      {item.name}
                    </h3>

                    <span className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-second-background px-2.5 py-1 text-xs text-foreground">
                      <ShieldCheck size={14} />
                      فروشنده
                    </span>
                  </div>
                </div>

                {/* Email */}
                <div className="mt-6 flex items-start gap-3 rounded-xl border border-white/5 bg-black/20 p-3">
                  <Mail size={18} className="mt-0.5 shrink-0 text-gray-400" />

                  <div className="min-w-0">
                    <p className="text-xs text-gray-500">آدرس ایمیل</p>

                    <p className="mt-1 break-all text-sm text-gray-300">
                      {item.email}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-white/10 bg-second-background px-5 py-14 text-center">
            <div className="rounded-2xl bg-[#FABE2C]/10 p-4">
              <Store size={32} className="text-[#FABE2C]" />
            </div>

            <h3 className="mt-4 font-semibold">فروشنده‌ای ثبت نشده است</h3>

            <p className="mt-2 text-sm text-gray-400">
              در حال حاضر فروشنده‌ای در فهرست وجود ندارد.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
