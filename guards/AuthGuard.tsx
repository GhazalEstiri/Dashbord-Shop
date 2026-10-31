"use client";

import { useSelector } from "react-redux";
import type { Rootstate } from "@/lib/store";
import { usePathname, useRouter } from "next/navigation";
import {  useState,useEffect } from "react";
import { useMounted } from "@/hooks/use-mounted";

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
  const mounted = useMounted();
  const pathname = usePathname();
  const router = useRouter();
  const normalizedPath = pathname.replace(/^\/(fa|en)(?=\/|$)/, "") || "/";
  const allowedRoles = routeRoles[normalizedPath];

 
  useEffect(() => {
    if (!mounted ||!initialized) return;

    if (!user) {
      router.replace("/login");
    } else if (!allowedRoles || !allowedRoles.includes(user.role)) {
      router.replace("/dashbord");
    }
  }, [initialized, user, allowedRoles, router, mounted]);

  if (!initialized) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return null;
  }

  if (!allowedRoles || !allowedRoles.includes(user.role)) {
    return null;
  }

  return <div>{children}</div>;
}
