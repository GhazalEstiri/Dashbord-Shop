import { favorites } from "@/lib/data/favorite";
import { ShoppingBag } from "lucide-react";
export default function Favorite() {
  return (
    <section className="flex flex-col md:mr-70 gap-10 px-10 md:px-20">
      <header className="flex flex-row justify-between items-center">
        <div className="flex flex-col mt-10 gap-5">
          <h1 className="text-foreground text-3xl font-bold"> علاقه مندی ها</h1>
          <p className="text-text-title text-xl">
            سفارش های مورد علاقه خود را اینجا مشاهده بکنید.
          </p>
        </div>
        <p className="bg-foreground p-3 rounded-xl h-auto text-background">
          <ShoppingBag />
        </p>
      </header>
      <div className="rounded-2xl border border-white/10 bg-second-background p-5 flex flex-col gap-5 mb-5 w-full">
        {favorites.map((item) => {
          return (
            <div
              key={item.id}
              className=" border-b border-white/10 bg-second-background p-5 flex flex-col text-center md:text-start md:flex-row justify-between items-center gap-5"
            >
              <p className="w-60">{item.title}</p>
              <p className="flex items-center justify-center">
                {" "}
                {item.price.toLocaleString("fa-IR")}
              </p>
              <p
                className={`${item.status === "available" ? "text-green-ok" : "text-red-900"}`}
              >
                {item.status === "available" ? " موجود" : " ناموجود"}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
