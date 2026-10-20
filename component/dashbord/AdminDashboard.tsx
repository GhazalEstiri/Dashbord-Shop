
const stats = [
  {
    title: "فروش کل",
    value: "۱۲۵ میلیون تومان",
    description: "مجموع فروش فروشگاه",
  },
  {
    title: "کل سفارش‌ها",
    value: "۸۴۲",
    description: "سفارش‌های ثبت‌شده",
  },
  {
    title: "کاربران",
    value: "۳۲۰",
    description: "کاربران ثبت‌شده",
  },
  {
    title: "فروشندگان",
    value: "۲۴",
    description: "فروشندگان فعال",
  },
];

export default function AdminDashboard() {
  return (
    <div className="space-y-8 flex mr-80 flex-col mt-10 ml-8">
      <header>
        <h1 className="text-3xl font-bold text-foreground">
          داشبورد مدیریت
        </h1>

        <p className="mt-2 text-gray-400">
          به پنل مدیریت فروشگاه ویترین خوش آمدید.
        </p>
      </header>

      <section className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <article
            key={stat.title}
            className="rounded-2xl border border-white/10 bg-second-background p-5"
          >
            <h2 className="text-sm text-gray-400">
              {stat.title}
            </h2>

            <p className="mt-4 text-2xl font-bold text-foreground">
              {stat.value}
            </p>

            <p className="mt-3 text-sm text-gray-500">
              {stat.description}
            </p>
          </article>
        ))}
      </section>
      
    </div>
  );
}