// import SalesChart from "@/component/dashbord/SalesChart";
import AreaChartFillByValue from "@/component/dashbord/reportVendor";
import { useTranslations } from "next-intl";
export default function Report() {
    const t = useTranslations("Report");

  return (
    <div className="flex flex-col gap-10 px-10 md:px-20 relative">
      <header className="flex flex-row justify-between items-center">
        <div className="flex flex-col mt-10 gap-5">
          <h1 className="text-foreground text-3xl font-bold">
            {" "}{t("title")}
          </h1>
          <p className="text-text-title text-xl">
                       {t("description")}

          </p>
        </div>
      </header>
      <div className="-mr-70 mt-20">
        {/* <SalesChart /> */}
        <AreaChartFillByValue/>
      </div>
    </div>
  );
}
