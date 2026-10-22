"use client";
import { useSelector } from "react-redux";
import { Rootstate } from "@/lib/store";
export default function Account() {
  const user = useSelector((state: Rootstate) => state.auth.user);
   console.log(user)
  return (
    <section>
      {user && (
        
        <div className=" mr-80">
          {user?.name }
          {user?.email}
          {user?.role}
        </div>
      )}
    </section>
  );
}
