import SideBar from "@/component/sidebar";
import VendorDashboard from "@/component/dashbord/VendorDashbord";

export default function VendorPannel() {
  return (
    <div>
      <SideBar role="vendor"></SideBar>
      <div className="">
        <VendorDashboard />
      </div>
    </div>
  );
}
