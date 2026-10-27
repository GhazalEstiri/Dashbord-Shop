import SalesChart from "@/component/dashbord/SalesChart";
export default function Report() {
  return (
    <div className="flex flex-col md:mr-70 gap-10 px-10 md:px-20 relative">
      <header className="flex flex-row justify-between items-center">
        <div className="flex flex-col mt-10 gap-5">
          <h1 className="text-foreground text-3xl font-bold">
            {" "}
            آمار و گزارشات فروش
          </h1>
          <p className="text-text-title text-xl">
            وضعیت فروش سفارشات خود را اینجا مشاهده بکنید
          </p>
        </div>
      </header>
      <div className="-mr-70 mt-20">
        <SalesChart />
      </div>
    </div>
  );
}
