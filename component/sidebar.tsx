"use client";
import Link from "next/link";
import {
  House,
  MessageSquareWarning,
  Store,
  UserGroup,
  ShoppingCartMinus,
  LayoutList,
  IdCard,
  ShoppingCart,
  ChevronLeft,
} from "lucide-react";
import { usePathname } from "next/navigation";
const menuItems = [
  { title: "داشبورد", href: "/", icon: House },
  { title: "محصولات", href: "/product", icon: LayoutList },
  { title: "سفارشات", href: "/order", icon: ShoppingCartMinus },
  { title: "مشتریان", href: "/customer", icon: UserGroup },
  { title: "فروشندگان", href: "/vendor", icon: Store },
  { title: "گزارش‌ها", href: "/report", icon: MessageSquareWarning },
  { title: "اطلاعات حساب کاربری", href: "/account", icon: IdCard },
];
function SideBar() {
  const pathname = usePathname();
  return (
    <aside
      dir="rtl"
      className="fixed right-0 top-0 flex h-screen w-72 flex-col
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
                  : "text-gray-300 hover:bg-white/5 hover:text-foreground"
              }`}
              >
                <Icon size={20} />
                <span>{title}</span>
              </Link>
            );
          })}
        </nav>
        <div className="mt-auto border-t border-white/10 pt-4">
          <p className="text-center text-xs text-gray-nothing">
            پنل مدیریت ویترین
          </p>
        </div>
      </div>
    </aside>
  );
}
export default SideBar;
