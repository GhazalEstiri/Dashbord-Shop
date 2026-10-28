import { useTranslations } from "next-intl";

const stats = [
  {
    title: "totalSale",
    value: "ValuetotalSale",
    description: "totalSaleDescription",
  },
  {
    title: "totalOrders",
    value: "totalOrdersValue",
    description: "totalOrdersDescription",
  },
  {
    title: "users",
    value: "usersValue",
    description: "usersDescription",
  },
  {
    title: "vendors",
    value: "vendorsValue",
    description: "vendorsDescription",
  },
];

export default function AdminDashboard() {
  const t = useTranslations("AdminDashboard")
  return (
    <div className="flex min-w-0 flex-col gap-8 mt-6 px-4 sm:px-6 lg:ml-8 lg:mt-10">
      <header>
        <h1 className="text-3xl font-bold text-foreground"> {t("title")}</h1>

        <p className="mt-2 text-text-title">
        {t("welcome")}
        </p>
      </header>
      <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-5 w-full min-w-0">
        {stats.map((stat) => (
          <article
            key={stat.title}
            className="rounded-2xl border border-white/10 bg-second-background p-5"
          >
            <h2 className="text-sm text-text-title">{t(stat.title)}</h2>

            <p className="mt-4 text-xl sm:text-2xl font-bold text-foreground wrap-break-word">
              {t(stat.value)}
            </p>

            <p className="mt-3 text-sm text-text-title">{t(stat.description)}</p>
          </article>
        ))}
      </section>
    </div>
  );
}
