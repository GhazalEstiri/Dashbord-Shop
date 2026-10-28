import { Order } from "@/lib/data/order";
import { ShoppingBag } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";

export default function OrderStatus() {
  const locale = useLocale();

  const t = useTranslations("OrderStatus");
  const productT = useTranslations("Products");
  return (
    <section className="flex flex-col gap-10 px-10 md:px-20">
      <header className="flex flex-row justify-between items-center">
        <div className="flex flex-col mt-10 gap-5">
          <h1 className="text-foreground text-3xl font-bold"> {t("title")}</h1>
          <p className="text-text-title text-xl">{t("description")}</p>
        </div>
        <p className="bg-foreground p-3 rounded-xl h-auto text-background">
          <ShoppingBag />
        </p>
      </header>
      <div className="rounded-2xl border border-white/10 bg-second-background p-5 flex flex-col gap-5 mb-5 w-full">
        {Order.map((item) => {
          return (
            <div
              key={item.id}
              className=" border-b border-white/10 bg-second-background p-5 flex flex-col text-center md:text-start md:flex-row justify-between items-center gap-5"
            >
              <p className="w-60">{productT(item.titleKey)}</p>
              <p className="flex items-center justify-center">
                {" "}
                {item.price.toLocaleString(locale==="fa"?"fa-IR":"en-Us")}
              </p>
              <p
                className={`${item.status === "available" ? "text-green-ok" : "text-red-900"}`}
              >
                {item.status === "available" ? t("confirmed") : t("cancelled")}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
