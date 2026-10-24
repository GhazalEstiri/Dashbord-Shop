"use client";
import Link from "next/link";
import { ModeToggle } from "@/component/ThemeToggle";
import {
  House,
  MessageSquareWarning,
  Store,
  UserGroup,
  ShoppingCartMinus,
  LayoutList,
  IdCard,
  ShoppingCart,
  Bookmark,
  MessageCircle,
  MapPinHouse,
  LogOut,
  Menu,
  CircleX,
} from "lucide-react";
import { usePathname } from "next/navigation";
import { useSelector } from "react-redux";
import type { Rootstate } from "@/lib/store";
import { useState } from "react";
type Role = "admin" | "user" | "vendor";

// const menuItems = [
//   { title: "داشبورد", href: "/", icon: House },
//   { title: "محصولات", href: "/product", icon: LayoutList },
//   { title: "سبد خرید", href: "/order", icon: ShoppingCartMinus },
//   { title: "مشتریان", href: "/customer", icon: UserGroup },
//   { title: "فروشندگان", href: "/vendor", icon: Store },
//   { title: "گزارش‌ها", href: "/report", icon: MessageSquareWarning },
//   { title: "علاقه مندی ها ", href: "/favorite", icon: Bookmark },
//   { title: "اطلاعات حساب کاربری", href: "/account", icon: IdCard },
// ];
const menuItemRole = {
  user: [
    { title: "داشبورد", href: "/", icon: House },
    { title: "آدرس ها", href: "/adress", icon: MapPinHouse },
    {
      title: "دیدگاه و پرسش ها ",
      href: "/comment",
      icon: MessageCircle,
    },
    {
      title: "سفارش ها ",
      href: "/orderstatus",
      icon: ShoppingCartMinus,
    },
    { title: "علاقه مندی ها ", href: "/favorite", icon: Bookmark },
    {
      title: "اطلاعات حساب کاربری",
      href: "/account",
      icon: IdCard,
    },
    { title: "خروج از حساب کاربری ", href: "/login", icon: LogOut },
  ],
  vendor: [
    { title: "داشبورد", href: "/", icon: House },
    { title: "محصولات", href: "/product", icon: LayoutList },

    {
      title: "آمار و گزارش‌ها",
      href: "/report",
      icon: MessageSquareWarning,
    },
    {
      title: "مدیریت سفارش ها",
      href: "/orderManager",
      icon: ShoppingCartMinus,
    },

    {
      title: "اطلاعات حساب کاربری",
      href: "/account",
      icon: IdCard,
    },
    { title: "خروج از حساب کاربری ", href: "/login", icon: LogOut },
  ],
  admin: [
    { title: "داشبورد", href: "/", icon: House },
    {
      title: "مدیریت محصولات",
      href: "/productManager",
      icon: LayoutList,
    },
    {
      title: "مدیریت فروشگاه",
      href: "/vendorManager",
      icon: Store,
    },
    {
      title: "مدیریت کاربران",
      href: "/userManager",
      icon: UserGroup,
    },
    {
      title: "آمار فروشندگان",
      href: "/reportVendor",
      icon: MessageSquareWarning,
    },
    {
      title: "اطلاعات حساب کاربری",
      href: "/account",
      icon: IdCard,
    },
    { title: "خروج از حساب کاربری ", href: "/login", icon: LogOut },
  ],
};
const status = [
  { role: "admin", title: "پنل مدیریت" },
  { role: "user", title: "پنل کاربر" },
  { role: "vendor", title: "پنل فروشنده" },
];
function SideBar() {
  // const [openHambergur, setopenHambergur] = useState(false);

  const pathname = usePathname();
  const roleUser = useSelector((state: Rootstate) => state.auth.user?.role);
  if (!roleUser) {
    return null;
  }
  const menuItems = menuItemRole[roleUser];
  const statusRole = status.find((item) => item.role === roleUser);
  // function toggleHambergur() {
  //   setopenHambergur(!openHambergur);
  // }

  return (
    <section>
      <aside
        dir="rtl"
        className="fixed right-0 top-0 hidden md:flex h-screen w-72 flex-col
      overflow-y-auto border-l border-white/10 bg-second-background p-5"
      >
        <div>
          <Link
            href="/"
            className="flex flex-row items-center text-foreground text-6xl justify-center gap-5 font-kamran"
          >
            <ShoppingCart size={50} className="flex mt-5" />
            ویترین
          </Link>
        </div>
        {statusRole && (
          <p className="flex justify-center items-center mx-auto text-foreground mt-10">
            {statusRole.title}
          </p>
        )}

        <div className="flex flex-col gap-10 mt-10">
          <nav className="flex flex-col gap-2">
            {menuItems.map(({ title, href, icon: Icon }) => {
              const isActive =
                pathname === href ||
                (href !== "/" && pathname.startsWith(href + "/"));

              return (
                <Link
                  key={href}
                  href={href}
                  className={`flex items-center gap-3 rounded-xl px-4 py-3
              transition-colors duration-200 ${
                isActive
                  ? "bg-foreground text-background font-bold"
                  : "text- hover:bg-white/5 hover:text-foreground"
              }`}
                >
                  <Icon size={20} />
                  <span>{title}</span>
                </Link>
              );
            })}
            <div className="">
              <div className="flex flex-row items-center gap-5 mr-3">
                <ModeToggle />
                <p>تغییر تم</p>
              </div>
            </div>
          </nav>
          <div className="mt-auto border-t border-white/10 pt-4">
            <p className="text-center text-xs text-text-title">پنل ویترین</p>
          </div>
        </div>
      </aside>

      {/* <button
        onClick={toggleHambergur}
        className=" right-4 top-4 z-60 md:hidden border border-foreground rounded-full p-2 flex -mb-5 mr-5 mt-2 text-foreground "
      >
        <Menu />
      </button>

      <aside
        dir="rtl"
        className={`fixed right-0 top-0 z-10 flex md:hidden h-screen w-72 flex-col
             transition-transform duration-500 ease-in-out
      overflow-y-auto border-l border-white/10 bg-second-background p-5 ${openHambergur ? "translate-x-0" : "translate-x-full"}`}
      >
        <button onClick={toggleHambergur} className="flex justify-end text-xl">
          <CircleX />
        </button>
        <div>
          <Link
            href="/"
            className="flex flex-row items-center text-foreground text-6xl justify-center gap-5 font-kamran"
          >
            <ShoppingCart size={50} className="flex mt-5" />
            ویترین
          </Link>
        </div>
        {statusRole && (
          <p className="flex justify-center items-center mx-auto text-foreground mt-10">
            {statusRole.title}
          </p>
        )}

        <div className="flex flex-col gap-10 mt-10">
          <nav className="flex flex-col gap-2">
            {menuItems.map(({ title, href, icon: Icon }) => {
              const isActive =
                pathname === href ||
                (href !== "/" && pathname.startsWith(href + "/"));

              return (
                <Link
                  key={href}
                  href={href}
                  className={`flex items-center gap-3 rounded-xl px-4 py-3
              transition-colors duration-200 ${
                isActive
                  ? "bg-foreground text-background font-bold"
                  : "text- hover:bg-white/5 hover:text-foreground"
              }`}
                >
                  <Icon size={20} />
                  <span>{title}</span>
                </Link>
              );
            })}
            <div className="">
              <div className="flex flex-row items-center gap-5 mr-3">
                <ModeToggle />
                <p>تغییر تم</p>
              </div>
            </div>
          </nav>
          <div className="mt-auto border-t border-white/10 pt-4">
            <p className="text-center text-xs text-text-title">پنل ویترین</p>
          </div>
        </div>
      </aside> */}
    </section>
  );
}
export default SideBar;
