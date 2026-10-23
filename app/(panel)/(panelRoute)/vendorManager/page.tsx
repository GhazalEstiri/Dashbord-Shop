"use client";
import { mockUser } from "@/lib/data/user";
export default function VendorManager() {
const vendors = mockUser.filter((item)=>item.role==="vendor")
  return (
    <div className="rounded-2xl border border-white/10 bg-second-background p-5 flex flex-col gap-5 mb-5 mr-100">
    
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
