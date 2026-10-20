import SideBar from "@/component/sidebar";
import SalesChart from "@/component/dashbord/SalesChart";
import AdminDashboard from "@/component/dashbord/AdminDashboard";
export default function AdminPannel() {
  return (
    <div>
      <SideBar role="admin"></SideBar>
      <div className="left-0 bottom-0">
        <SalesChart />
        <AdminDashboard />
      </div>
    </div>
  );
}
