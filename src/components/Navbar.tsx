// import Image from "next/image";
// import logo from "../../public/assests/logo.png";
"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

function Navbar() {
  const router = useRouter();
  const [accessToken, setAccessToken] = useState("");
  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (token) setAccessToken(token);
  }, [accessToken, localStorage]);

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    location.reload();
  };
  return (
    <header className="flex justify-between items-center h-header-height gap-5 bg-slate-50 shadow-md fixed top-0 w-full  z-50">
      {/* logo  */}

      <div className="flex items-center  justify-center bg-transparent flex-col h-full bg-grey text-green-600 font-bold">
        <img
          className="flex items-center  justify-center flex-col h-20 w-28 "
          src="/assests/logog.png"
          alt="logo"
        />
        <h1 className="ml-5 text-xl">Non-Profitable Organization</h1>
      </div>
      {/* NAV LINKS  */}
      <nav className="bg-transparent h-full gap-8 flex items-center justify-end flex-1  ">
        <Link href="/" className="hover:text-green-400 text-xl ">
          Home
        </Link>
        <Link href="/events" className="hover:text-green-400 text-xl">
          Events
        </Link>
        <Link
          href="/dashboard/create-event"
          className="hover:text-green-400 text-xl"
        >
          Events Create
        </Link>
        <Link href="/About" className="hover:text-green-400 text-xl">
          About Us
        </Link>
        <Link href="/contact" className="hover:text-green-400 text-xl">
          Contact
        </Link>
        <Link href="/Gallary" className="hover:text-green-400 text-xl">
          Gallary
        </Link>
        <Link href="/donate" className="hover:text-green-400 text-xl">
          Donate
        </Link>
        {accessToken && <button onClick={handleLogout}>Logout</button>}
      </nav>
      {/* login button  */}
      <div className="  bg-transparent w-[150px]">
        {accessToken ? (
          <Link
            className="p-4 rounded-xl border w-16 space-x-1 h-10 bg-blue hover:bg-zinc-300"
            href="/dashboard"
          >
            <span className="text-xl">Dashboard</span>
          </Link>
        ) : (
          <Link
            className="p-4 rounded-xl border w-16 space-x-1 h-10 bg-blue hover:bg-zinc-300"
            href="/login"
          >
            <span className="text-xl">Login</span>
          </Link>
        )}
      </div>
    </header>
  );
}

export default Navbar;
