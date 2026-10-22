// import SideBar from "@/component/sidebar";
"use client";
import { useSelector } from "react-redux";
import type { Rootstate } from "@/lib/store";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
export default function Home() {
  const user = useSelector((state: Rootstate) => state.auth.user);
  const router = useRouter();
  useEffect(() => {
    if (user) {
      router.replace("/dashbord");
    } else {
      router.replace("/login");
    }
  }, [user, router]);
  return null;
  // <main>
  //   <SideBar role="vendor" />
  // </main>
}
