import PieWithGradient from "@/component/dashbord/VendorCircleChart";
import PieWithGradient2 from "@/component/dashbord/VendorCircleChart2";
import PieWithGradient3 from "@/component/dashbord/VendorCircleChart3";
import PieWithGradient4 from "@/component/dashbord/VendorCircleChart4";
import { useTranslations } from "next-intl";

export default function ReportVendor() {
  const t = useTranslations("ReportVendor");

  return (
    <section className="flex flex-col gap-10 px-5 lg:px-20">
      <header className="flex flex-row justify-between items-center">
        <div className="flex flex-col mt-10 gap-5">
          <h1 className="text-foreground text-3xl font-bold">
            آمار فروشندگان{" "}
          </h1>
          <p className="text-text-title text-xl"> آمار فروشندگان را اینجا مشاهده کنید.</p>
        </div>
      </header>
      <div className="grid grid-cols-2 gap-40 px-5 lg:px-20 mt-10 mr-15">
        <div className="max-w-80">
          <p className=" text-center font-bold text-2xl text-foreground">
            {t("spring")}
          </p>
          <PieWithGradient />
        </div>
        <div className="max-w-80">
          <p className=" text-center font-bold text-2xl text-foreground">
            {t("summer")}
          </p>

          <PieWithGradient2 />
        </div>
        <div className="max-w-80">
          <p className=" text-center font-bold text-2xl text-foreground">
            {t("autumn")}
          </p>

          <PieWithGradient3 />
        </div>
        <div className="max-w-80">
          <p className=" text-center font-bold text-2xl text-foreground">
            {t("winter")}
          </p>

          <PieWithGradient4 />
        </div>
      </div>
    </section>
  );
}
