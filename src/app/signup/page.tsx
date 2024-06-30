"use client";
import React, { useState } from "react";

function Signup() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "user",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const { username, email, password, role } = formData;

    try {
      const response = await fetch("https://tracker.smart.org.np/api/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email, password, role }),
      });

      if (response.ok) {
        const data = await response.json();
        alert("Signup successful!");
        console.log(data);
      } else {
        const errorData = await response.json();
        alert(`Signup failed: ${errorData.message}`);
      }
    } catch (error) {
      alert(`Signup failed: ${error}`);
    }
  };

  return (
    <div>
      <div className="flex justify-center items-center flex-col gap-8 pb-12">
        <h1 className="text-7xl text-black-800 font-mono font-extrabold pt-7">
          Signup
        </h1>
        <form
          className="flex flex-col h-full px-3 py-3 w-96 rounded-xl items-center bg-white-800 shadow-[rgba(0,0,0,0.35)_0px_5px_15px] justify-center"
          onSubmit={handleSubmit}
        >
          <div className="flex w-full flex-col">
            <label
              className="text-[1rem] capitalize ml-1 pt-5"
              htmlFor="username"
            >
              Username
            </label>
            <input
              className="focus:outline-none border placeholder:text-sm h-9 py-2 px-2 text-base font-normal text-gray-400 rounded-md border-gray-400"
              type="text"
              name="username"
              id="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
            />
          </div>
          <div className="flex w-full flex-col">
            <label className="text-[1rem] capitalize ml-1 pt-5" htmlFor="email">
              Email
            </label>
            <input
              className="focus:outline-none border placeholder:text-sm h-9 py-2 px-2 text-base font-normal text-gray-400 rounded-md border-gray-400"
              type="text"
              name="email"
              id="email"
              placeholder="Enter email or number"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="flex w-full flex-col">
            <label
              className="text-[1rem] capitalize ml-1 pt-5"
              htmlFor="password"
            >
              Create Password
            </label>
            <input
              className="focus:outline-none border placeholder:text-sm h-9 py-2 px-2 text-base font-normal text-gray-400 rounded-md border-gray-400"
              type="password"
              name="password"
              placeholder="Enter your Password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <div className="flex w-full flex-col">
            <label
              className="text-[1rem] capitalize ml-1 pt-5"
              htmlFor="confirmPassword"
            >
              Confirm Password
            </label>
            <input
              className="focus:outline-none border placeholder:text-sm h-9 py-2 px-2 text-base font-normal text-gray-400 rounded-md border-gray-400"
              type="password"
              name="confirmPassword"
              placeholder="Re-enter Password"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
          </div>

          <div className="flex items-center flex-col justify-center w-full pt-6 pb-5">
            <input
              className="py-[0.5rem] rounded-md text-white px-[1.5rem] font-semibold tracking-wide bg-green-600 border-none outline-none hover:bg-[#3f9a1b]"
              type="submit"
              value="Signup"
            />
            <div className="flex pt-3"></div>
            <p>Already have an account?</p>
            <a className="text-green-600 underline" href="login">
              login
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
