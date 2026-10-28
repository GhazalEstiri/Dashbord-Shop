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
import LanguageSwitcher from "./LanguageSwitcher";
import { useLocale, useTranslations } from "next-intl";
type Role = "admin" | "user" | "vendor";
const menuItemRole = {
  user: [
    { title: "dashbord", href: "/", icon: House },
    { title: "adress", href: "/adress", icon: MapPinHouse },
    {
      title: "comments",
      href: "/comment",
      icon: MessageCircle,
    },
    {
      title: "orders",
      href: "/orderstatus",
      icon: ShoppingCartMinus,
    },
    { title: "favorites", href: "/favorite", icon: Bookmark },
    {
      title: "account",
      href: "/account",
      icon: IdCard,
    },
    { title: "exitAccount", href: "/login", icon: LogOut },
  ],
  vendor: [
    { title: "dashbord", href: "/", icon: House },
    { title: "products", href: "/product", icon: LayoutList },

    {
      title: "reports",
      href: "/report",
      icon: MessageSquareWarning,
    },
    // {
    //   title: "orderManager",
    //   href: "/orderManager",
    //   icon: ShoppingCartMinus,
    // },

    {
      title: "account",
      href: "/account",
      icon: IdCard,
    },
    { title: "exitAccount", href: "/login", icon: LogOut },
  ],
  admin: [
    { title: "dashbord", href: "/", icon: House },
    {
      title: "productManager",
      href: "/productManager",
      icon: LayoutList,
    },
    {
      title: "vendorManager",
      href: "/vendorManager",
      icon: Store,
    },
    {
      title: "userManager",
      href: "/userManager",
      icon: UserGroup,
    },
    {
      title: "reportVendor",
      href: "/reportVendor",
      icon: MessageSquareWarning,
    },
    {
      title: "account",
      href: "/account",
      icon: IdCard,
    },
    { title: "exitAccount", href: "/login", icon: LogOut },
  ],
};
const status = [
  { role: "admin", title: "adminpanel" },
  { role: "user", title: "userpanel" },
  { role: "vendor", title: "vendorpanel" },
];
function SideBar() {
  const t = useTranslations("sidebar");
  const [openHambergur, setopenHambergur] = useState(false);
  const locale = useLocale();
  const pathname = usePathname();
  const roleUser = useSelector((state: Rootstate) => state.auth.user?.role);
  if (!roleUser) {
    return null;
  }
  const menuItems = menuItemRole[roleUser];
  const statusRole = status.find((item) => item.role === roleUser);
  function toggleHambergur() {
    setopenHambergur(!openHambergur);
  }

  return (
    <section>
      <aside
        dir={locale === "fa" ? "rtl" : "ltr"}
        className={`fixed top-0 hidden md:flex h-screen w-72 flex-col
  overflow-y-auto border-white/10 bg-second-background p-5
  ${locale === "fa" ? "right-0 border-l" : "left-0 border-r"}`}
      >
        <div>
          <Link
            href="/"
            className="flex flex-row items-center text-foreground text-6xl justify-center gap-5 font-kamran"
          >
            <ShoppingCart size={50} className="flex mt-5" />
            {t("vitrin")}
          </Link>
        </div>
        {statusRole && (
          <p className="flex justify-center items-center mx-auto text-foreground mt-10">
            {t(statusRole.title)}
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
                  <span>{t(title)}</span>
                </Link>
              );
            })}
            <div className="">
              <div className="flex flex-row items-center gap-5 mr-3">
                <ModeToggle />
                <p>{t("themeChange")}</p>
              </div>
            </div>
          </nav>
          <div className="mt-auto border-t border-white/10 pt-4">
            <p className="text-center text-xs text-text-title">پنل ویترین</p>
            <LanguageSwitcher />
          </div>
        </div>
      </aside>

      <button
        onClick={toggleHambergur}
        className=" right-4 top-4 z-60 md:hidden border border-foreground rounded-full p-2 flex -mb-5 mr-5 mt-2 text-foreground "
      >
        <Menu />
      </button>

      <aside
        dir={locale === "fa" ? "rtl" : "ltr"}
        className={`fixed top-0 z-50 flex md:hidden h-screen w-72 flex-col
  transition-transform duration-500 ease-in-out
  overflow-y-auto border-white/10 bg-second-background p-5
  ${
    locale === "fa"
      ? `right-0 border-l ${openHambergur ? "translate-x-0" : "translate-x-full"}`
      : `left-0 border-r ${openHambergur ? "translate-x-0" : "-translate-x-full"}`
  }`}
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
            {t("vitrin")}
          </Link>
        </div>
        {statusRole && (
          <p className="flex justify-center items-center mx-auto text-foreground mt-10">
            {t(statusRole.title)}
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
                <p>{t("themeChange")}</p>
              </div>
            </div>
          </nav>
          <div className="mt-auto border-t border-white/10 pt-4">
            <p className="text-center text-xs text-text-title">پنل ویترین</p>
            <LanguageSwitcher />
          </div>
        </div>
      </aside>
    </section>
  );
}
export default SideBar;
