"use client";

import { useState, MouseEvent, ChangeEvent } from "react";
import KhaltiPayment from "../events/components/KaltiPayement";

interface DonationForm {
  firstname: string;
  lastname: string;
  email: string;
  country: string;
  city: string;
  zip: string;
  // paymentMethod: [];
  // event_id: id,
  amount: number;
}

function Donate() {
  const [formData, setFormData] = useState<DonationForm>({
    firstname: "",
    lastname: "",
    email: "",
    country: "",
    city: "",
    zip: "",
    // paymentMethod: [],
    // event_id: id,
    amount: 0,
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      setFormData((prevState) => {
        const paymentMethod = checked
          ? [...prevState.paymentMethod, value]
          : prevState.paymentMethod.filter((method) => method !== value);
        return { ...prevState, paymentMethod };
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (
    e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
  ) => {
    e.preventDefault();

    // Process donation submission
    const response = await fetch("https://tracker.smart.org.np/api/donation", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      const result = await response.json();
      alert("Donation received!");
      console.log(result);

      // Handle payment based on selected method
      if (formData.paymentMethod.includes("E-Sewa")) {
        esewaClick(formData.amount);
      } else if (formData.paymentMethod.includes("Khalti")) {
        // Call Khalti payment function
        // You need to create and import KhaltiPayment function/component
      } else {
        console.log("Offline payment selected");
      }
    } else {
    }
  };
  return (
    <div>
      <div className="  bg-donate-hero-image no-repeat bg-cover bg-center flex justify-center items-center flex-col h-96 ">
        <h1 className="text-7xl text-white shadow-xl font-extrabold ">
          Donate Us
        </h1>
        <h4 className="text-white font-serif">
          Reach Out, Make a Difference: Contact Us to Donate Today!, Be the
          Light: Connect with Us to Donate
        </h4>
      </div>
      <div className="pt-10 pb-10 flex">
        <form
          className="w-full"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                First Name
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border hover: rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-first-name"
                type="text"
                name="firstname"
                value={formData.firstname}
                onChange={handleChange}
                placeholder="Samiksha"
              />
              {/* <p className="text-red-500 text-xs italic">
                Please fill out this field.
              </p> */}
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Last Name
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="text"
                name="lastname"
                value={formData.lastname}
                onChange={handleChange}
                placeholder="Shah"
              />
            </div>
          </div>

          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Email
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-2">
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Country
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-country"
                type="text"
                name="country"
                value={formData.country}
                onChange={handleChange}
                placeholder="Nepal"
              />
            </div>
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                City
              </label>
              <div className="relative">
                <select
                  className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-city"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                >
                  <option value="Kathmandu">Kathmandu</option>
                  <option value="Pokhara">Pokhara</option>
                  <option value="Tikapur">Tikapur</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Zip
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-zip"
                type="text"
                name="zip"
                value={formData.zip}
                onChange={handleChange}
                placeholder="90210"
              />
            </div>
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Amount
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-amount"
                type="text"
                name="amount"
                value={formData.amount}
                onChange={handleChange}
                placeholder="1000"
              />
            </div>
          </div>
          <KhaltiPayment />
          <button
            type="submit"
            onClick={handleSubmit}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
          >
            Submit Donation
          </button>
        </form>
      </div>
    </div>
  );
}
export default Donate;
