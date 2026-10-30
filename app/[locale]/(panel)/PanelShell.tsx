"use client";

import SideBar from "@/component/sidebar";
import { useLocale } from "next-intl";

export default function PanelShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = useLocale();

  return (
    <div dir={locale === "fa" ? "rtl" : "ltr"}>
      <SideBar />

      <main
        className={`min-h-screen ${
          locale === "fa" ? "md:mr-72" : "md:ml-72"
        }`}
      >
        {children}
      </main>
    </div>
  );
}