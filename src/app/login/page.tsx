"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [err, setErr] = useState(false);
  const router = useRouter();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const token = localStorage.getItem("accessToken");

  if (token) {
    router.push("/dashboard");
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);

    try {
      const response = await fetch("https://tracker.smart.org.np/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response?.status === 401) {
        setErr(true);
      } else {
        const data = await response.json();
        localStorage.setItem("accessToken", data.access_token);

        location.reload();
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <div className="flex justify-center items-center flex-col gap-8 pb-12">
        <h1 className="text-7xl text-black-800 font-mono font-extrabold pt-7">
          Login
        </h1>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col h-full px-3 py-3 w-96 rounded-xl items-center bg-white-800 shadow-[rgba(0,0,0,0.35)_0px_5px_15px] justify-center"
        >
          <div className="flex w-full flex-col">
            <label className="text-[1rem] capitalize ml-1 pt-5" htmlFor="email">
              Id:
            </label>
            <input
              className="focus:outline-none border placeholder:text-sm h-9 py-2 px-2 text-base font-normal text-gray-400 rounded-md border-gray-400"
              type="text"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter email or number"
            />
          </div>
          <div className="flex w-full flex-col">
            <label
              className="text-[1rem] capitalize ml-1 pt-5"
              htmlFor="password"
            >
              Password:{" "}
            </label>
            <input
              className="focus:outline-none border placeholder:text-sm h-9 py-2 px-2 text-base font-normal text-gray-400 rounded-md border-gray-400"
              type="password"
              name="password"
              id="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Enter your Password"
            />
          </div>
          {err && (
            <span className="text-red-500">
              These credentials do not matched{" "}
            </span>
          )}
          <div className="flex items-center flex-col justify-center w-full pt-6 pb-5">
            <label className="text-center" htmlFor=""></label>
            <button
              type="submit"
              className="py-[0.5rem] rounded-md text-white px-[1.5rem] font-semibold tracking-wide bg-green-600 border-none outline-none hover:bg-[#1b9a21]"
            >
              Login
            </button>

            <div className="flex pt-3">
              <p>Dont have an account?</p>
              <Link
                href="/signup"
                className="hover:[#7b1fa2] pl-2 text-green-600 underline"
              >
                Signup
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
