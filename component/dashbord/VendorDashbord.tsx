import { Package } from "lucide-react";
const stats = [
  {
    title: "فروش این ماه",
    value: "۲۵ میلیون تومان",
    description: "مجموع فروش فروشگاه",
  },
  {
    title: " سفارش‌ها",
    value: "۱۲۵",
    description: "سفارش‌های ثبت‌شده",
  },
  {
    title: "محصولات فعال",
    value: "۲۰",
    description: "در فروشگاه",
  },
  {
    title: "سفارش در انتظار",
    value: "۲۴",
    description: " نیاز به پیگیری",
  },
];

export default function VendorDashboard() {
  return (
    <div className="space-y-8 flex md:mr-80 flex-col mt-10 md:ml-8 px-10">
      <header>
        <h1 className="text-3xl font-bold text-foreground ">داشبورد فروشنده</h1>

        <p className="mt-2 text-gray-400">
          به پنل فروشنده در فروشگاه ویترین خوش آمدید.
        </p>
      </header>

      <section className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <article
            key={stat.title}
            className="rounded-2xl border border-white/10 bg-second-background p-5"
          >
            <h2 className="text-sm text-gray-400">{stat.title}</h2>

            <p className="mt-4 text-2xl font-bold text-foreground">
              {stat.value}
            </p>

            <p className="mt-3 text-sm text-gray-500">{stat.description}</p>
          </article>
        ))}
      </section>
      <div className="rounded-2xl border border-white/10 bg-second-background p-5 flex flex-col gap-8">
        <div className=" flex justify-between  text-gray-400">
          <p className=" flex text-xl">آخرین سفارش ها</p>
          <p className="text-foreground flex text-xl">مشاهده همه</p>
        </div>
        <div className=" flex justify-between items-center">
          <div className="flex flex-row items-center gap-3">
            <p className="bg-foreground rounded-full text-background p-2">
              <Package />
            </p>
            <div>
              <p>کانسیلر</p>
              <p>#7</p>
            </div>
          </div>
          <p className="text-foreground">در انتظار</p>
        </div>
        <div className=" flex justify-between items-center">
          <div className="flex flex-row items-center gap-3">
            <p className="bg-foreground rounded-full text-background p-2">
              <Package />
            </p>
            <div>
              <p>رژگونه صورتی</p>
              <p>#5</p>
            </div>
          </div>
          <p className="text-green-ok">تایید شده</p>
        </div>
        <div className=" flex justify-between items-center">
          <div className="flex flex-row items-center gap-3">
            <p className="bg-foreground rounded-full text-background p-2">
              <Package />
            </p>
            <div>
              <p>هایلایتر</p>
              <p>#9</p>
            </div>
          </div>
          <p className="text-red-reject">لغو شده</p>
        </div>
      </div>
    </div>
  );
}
