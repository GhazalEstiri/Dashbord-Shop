import PieWithGradient from "@/component/dashbord/VendorCircleChart";
import PieWithGradient2 from "@/component/dashbord/VendorCircleChart2";
import PieWithGradient3 from "@/component/dashbord/VendorCircleChart3";
import PieWithGradient4 from "@/component/dashbord/VendorCircleChart4";
export default function ReportVendor() {
  return (
    <div className="grid grid-cols-2 md:mr-70 gap-10 px-5 lg:px-20 mt-10">
      <div>
        <p className=" text-center font-bold text-2xl text-foreground">
          آمار فصل بهار
        </p>
        <PieWithGradient />
      </div>
      <div>
        <p className=" text-center font-bold text-2xl text-foreground">
          آمار فصل تابستان
        </p>

        <PieWithGradient2 />
      </div>
      <div>
        <p className=" text-center font-bold text-2xl text-foreground">
          آمار فصل پاییز
        </p>

        <PieWithGradient3 />
      </div>
      <div>
        <p className=" text-center font-bold text-2xl text-foreground">
          آمار فصل زمستون
        </p>

        <PieWithGradient4 />
      </div>
    </div>
  );
}
