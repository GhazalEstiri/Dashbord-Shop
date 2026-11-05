"use client";
import { useTranslations } from "next-intl";

export default function addProduct() {
  const t = useTranslations("AddProducts");
  return (
    <div>
      <p>{t("title")}</p>
    </div>
  );
}
