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
    <div className="flex min-w-0 flex-col gap-8 mt-6 px-4 sm:px-6 md:mr-72 lg:ml-8 lg:mt-10">
      <header>
        <h1 className="text-3xl font-bold text-foreground">داشبورد مدیریت</h1>

        <p className="mt-2 text-text-title">
          به پنل مدیریت فروشگاه ویترین خوش آمدید.
        </p>
      </header>
      <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-5 w-full min-w-0">
        {stats.map((stat) => (
          <article
            key={stat.title}
            className="rounded-2xl border border-white/10 bg-second-background p-5"
          >
            <h2 className="text-sm text-text-title">{stat.title}</h2>

            <p className="mt-4 text-xl sm:text-2xl font-bold text-foreground wrap-break-word">
              {stat.value}
            </p>

            <p className="mt-3 text-sm text-text-title">{stat.description}</p>
          </article>
        ))}
      </section>
    </div>
  );
}
