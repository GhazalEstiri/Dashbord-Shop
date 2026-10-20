import SideBar from "@/component/sidebar";
import UserDashbord from "@/component/dashbord/Userdashbord";
export default function UserPannel() {
  return (
    <div>
      <SideBar role="user"></SideBar>
      <UserDashbord/>
    </div>
  );
}
