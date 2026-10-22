"use client";
import { useSelector } from "react-redux";
import type { Rootstate } from "@/lib/store";
import SalesChart from "@/component/dashbord/SalesChart";
import AdminDashboard from "@/component/dashbord/AdminDashboard";
import UserDashbord from "@/component/dashbord/Userdashbord";
import VendorDashboard from "@/component/dashbord/VendorDashbord";
export default function RolePage() {
  const role = useSelector((state: Rootstate) => state.auth.user?.role);

  if (!role) {
    return <p>در حال بارگذاری...</p>;
  }

  return (
    <div>
      {role === "admin" && (
        <div>
          <SalesChart />
          <AdminDashboard />
        </div>
      )}
      {role === "user" && (
        <div>
          <UserDashbord />
        </div>
      )}
      {role === "vendor" && (
        <div>
          <VendorDashboard />
        </div>
      )}
    </div>
  );
}
