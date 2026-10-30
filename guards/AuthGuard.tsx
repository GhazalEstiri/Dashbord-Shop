"use client";

import { useSelector } from "react-redux";
import type { Rootstate } from "@/lib/store";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

const routeRoles: Record<string, string[]> = {
  "/dashbord": ["admin", "vendor", "user"],
  "/account": ["admin", "vendor", "user"],

  "/adress": ["user"],
  "/comment": ["user"],
  "/orderstatus": ["user"],
  "/favorite": ["user"],

  "/product": ["vendor"],
  "/report": ["vendor"],

  "/productManager": ["admin"],
  "/vendorManager": ["admin"],
  "/userManager": ["admin"],
  "/reportVendor": ["admin"],
};

export default function AuthGuard({ children }: { children: React.ReactNode }) {
  const user = useSelector((state: Rootstate) => state.auth.user);
  const initialized = useSelector((state: Rootstate) => state.auth.initialized);

  const pathname = usePathname();
  const router = useRouter();

  const normalizedPath = pathname.replace(/^\/(fa|en)(?=\/|$)/, "") || "/";
  const allowedRoles = routeRoles[normalizedPath];

  useEffect(() => {
    if (!initialized) return;

    if (!user) {
      router.replace("/login");
    } else if (!allowedRoles || !allowedRoles.includes(user.role)) {
      router.replace("/dashbord");
    }
  }, [initialized, user, allowedRoles, router]);

  return (
    <div
      hidden={
        !initialized ||
        !user ||
        !allowedRoles ||
        !user ||
        !allowedRoles.includes(user.role)
      }
    >
      {children}
    </div>
  );
}
