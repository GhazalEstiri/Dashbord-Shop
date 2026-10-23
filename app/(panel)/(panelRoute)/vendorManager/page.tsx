"use client";
import { mockUser } from "@/lib/data/user";
export default function VendorManager() {
const vendors = mockUser.filter((item)=>item.role==="vendor")
  return (
    <div className="flex mr-100">
    
    {vendors.map((item)=>{
      return(
        <div key={item.id}>
          <p>{item.name}</p>
          <p>{item.email}</p>
        </div>
      )
    })}
    </div>
  );
}
