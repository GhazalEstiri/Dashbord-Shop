"use client";
import { login, logout } from "@/faeture/auth/authSlice";
import { useState } from "react";
import { Mail, UserRound } from "lucide-react";
import type { FormEventHandler } from "react";
import { useRouter } from "next/navigation";
import { mockUser } from "@/lib/data/user";
// import Navbar from "../src/navbar";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, Rootstate } from "@/lib/store";
type Role = "admin" | "user" | "vendor";
type User = {
  id: number;
  email: string;
  name: string;
  // status: StatuUser;
  role: Role;
};
export default function LoginPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const router = useRouter();
  // const navigate=
  const dispatch = useDispatch<AppDispatch>();
  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const foundUser = mockUser.find((user) => user.email === email);
    if (foundUser && foundUser.name === name) {
      dispatch(login(foundUser));

      if (foundUser.role === "admin") {
        router.push("/admin");
      }
      if (foundUser.role === "user") {
        router.push("/user");
      }
      if (foundUser.role === "vendor") {
        router.push("/vendor");
      }
    } else {
      alert("کسی نیستتت");
    }
  };

  const user = useSelector((state: Rootstate) => state.auth.user);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <section className="min-h-screen flex items-center justify-center w-full">
      {/* <img src="bookLogin.jpg" alt="" className="inset-0 relative" /> */}
      <div className="w-fit flex items-center justify-center px-7 py-10 sm:px-12 lg:px-20 mx-auto absolute z-100 bg-[#d9ad8398] rounded-2xl">
        {/* <div className="w-full max-w-[380px] mx-auto flex justify-center items-center"></div> */}
        {user !== null ? (
          <div className="flex flex-col items-center text-center gap-5">
            <div className="w-16 h-16 rounded-full bg-[#d9ad8398] flex items-center justify-center text-[#33231F]">
              <UserRound size={30} />
            </div>

            <div>
              <p className="text-3xl font-bold text-[#33231F]">
                Hello <span className="text-[#3B3616]"> {user?.name}</span>
              </p>

              <p className="text-sm text-[#33231F] mt-2">
                You are successfully logged in.
              </p>
            </div>

            <button
              onClick={handleLogout}
              className="w-full py-3 rounded-full bg-[#4C4531] text-white font-medium hover:bg-[#33231F] transition"
            >
              Log out
            </button>
          </div>
        ) : (
          <div>
            <form onSubmit={handleSubmit} className="space-y-5 ">
              <div>
                <label className="block text-xs font-medium text-[#33231F] mb-2">
                  Name
                </label>

                <div className="relative">
                  <UserRound
                    size={17}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-[#33231F]"
                  />

                  <input
                    type="text"
                    value={name}
                    placeholder="Your name"
                    onChange={(e) => setName(e.target.value)}
                    className="w-full text-foreground h-12 rounded-xl border border-[#dce5ec] bg-[#fbfcfd] pl-11 pr-4 text-sm outline-none focus:border-[#33231F] transition  placeholder:text-foreground"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-medium text-[#33231F] mb-2">
                  Email
                </label>

                <div className="relative">
                  <Mail
                    size={17}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-[#33231F]"
                  />

                  <input
                    type="email"
                    value={email}
                    placeholder="you@example.com"
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full h-12  text-foreground rounded-xl border border-[#dce5ec] bg-[#fbfcfd] pl-11 pr-4 text-sm outline-none focus:border-[#33231F] transition placeholder:text-foreground"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full h-12 rounded-full bg-[#4C4531] text-white text-sm font-semibold shadow-md hover:bg-[#33231F] transition"
              >
                submit
              </button>
            </form>
          </div>
        )}
      </div>
    </section>
  );
}
