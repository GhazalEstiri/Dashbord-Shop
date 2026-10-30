import { Package } from "lucide-react";
import { useTranslations } from "next-intl";

export default function VendorDashboard() {
  const t = useTranslations("VendorDashboard");
  const stats = [
    {
      title: "monthlySales",
      value: "monthlySalesValue",
      description: "monthlySalesDescription",
    },
    {
      title: "orders",
      value: "ordersValue",
      description: "ordersDescription",
    },
    {
      title: "activeProducts",
      value: "activeProductsValue",
      description: "activeProductsDescription",
    },
    {
      title: "pendingOrders",
      value: "pendingOrdersValue",
      description: "pendingOrdersDescription",
    },
  ];
  return (
    <div className="space-y-8 flex  flex-col mt-10 md:ml-8 px-10">
      <header>
        <h1 className="text-3xl font-bold text-foreground "> {t("title")}</h1>

        <p className="mt-2 text-text-title">{t("welcome")} </p>
      </header>

      <section className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <article
            key={t(stat.title)}
            className="rounded-2xl border border-white/10 bg-second-background p-5"
          >
            <h2 className="text-sm text-text-title">{t(stat.title)}</h2>

            <p className="mt-4 text-2xl font-bold text-foreground">
              {t(stat.value)}
            </p>

            <p className="mt-3 text-sm text-text-title">
              {t(stat.description)}
            </p>
          </article>
        ))}
      </section>
      <div className="rounded-2xl border border-white/10 bg-second-background p-5 flex flex-col gap-8">
        <div className=" flex justify-between  text-text-title">
          <p className=" flex text-xl"> {t("latestOrders")}</p>
          <p className="text-foreground flex text-xl"> {t("viewAll")}</p>
        </div>
        <div className=" flex justify-between items-center">
          <div className="flex flex-row items-center gap-3">
            <p className="bg-foreground rounded-full text-background p-2">
              <Package />
            </p>
            <div>
              <p>{t("products.concealer")}</p>
              <p>#7</p>
            </div>
          </div>
          <p className="text-foreground">{t("orderStatus.pending")}</p>
        </div>
        <div className=" flex justify-between items-center">
          <div className="flex flex-row items-center gap-3">
            <p className="bg-foreground rounded-full text-background p-2">
              <Package />
            </p>
            <div>
              <p>{t("products.pinkBlush")}</p>
              <p>#5</p>
            </div>
          </div>
          <p className="text-green-ok">{t("orderStatus.approved")}</p>
        </div>
        <div className=" flex justify-between items-center">
          <div className="flex flex-row items-center gap-3">
            <p className="bg-foreground rounded-full text-background p-2">
              <Package />
            </p>
            <div>
              <p>{t("products.highlighter")}</p>
              <p>#9</p>
            </div>
          </div>
          <p className="text-red-reject"> {t("orderStatus.cancelled")}</p>
        </div>
      </div>
    </div>
  );
}
