import PieWithGradient from "@/component/dashbord/VendorCircleChart";
import PieWithGradient2 from "@/component/dashbord/VendorCircleChart2";
import PieWithGradient3 from "@/component/dashbord/VendorCircleChart3";
import PieWithGradient4 from "@/component/dashbord/VendorCircleChart4";
import { useTranslations } from "next-intl";

export default function ReportVendor() {
  const t = useTranslations("ReportVendor");

  return (
    <div className="grid grid-cols-2 gap-10 px-5 lg:px-20 mt-10">
      <div>
        <p className=" text-center font-bold text-2xl text-foreground">
          {t("spring")}
        </p>
        <PieWithGradient />
      </div>
      <div>
        <p className=" text-center font-bold text-2xl text-foreground">
          {t("summer")}
        </p>

        <PieWithGradient2 />
      </div>
      <div>
        <p className=" text-center font-bold text-2xl text-foreground">
          {t("autumn")}
        </p>

        <PieWithGradient3 />
      </div>
      <div>
        <p className=" text-center font-bold text-2xl text-foreground">
          {t("winter")}
        </p>

        <PieWithGradient4 />
      </div>
    </div>
  );
}
