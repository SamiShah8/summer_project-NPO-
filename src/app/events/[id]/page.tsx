"use client";

import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { esewaPayment } from "@/api/esewa";
import KhaltiPayment from "../components/KaltiPayement";
import { generateHashCode } from "@/utils/helper";

interface EventDetail {
  id: number;
  title: string;
  description: string;
  name: string;
  contact_number: string;
  bank_account: string;
  bank_name: string;
  purpose: string;
  status: string;
  cover: string;
  image: string;
}

const Page = () => {
  const { id } = useParams();
  const [event, setEvent] = useState<EventDetail | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState<any>({
    firstName: "",
    lastName: "",
    email: "",
    country: "",
    city: "",
    zip: "",
    paymentMethod: [],
    event_id: id,
    amount: "",
  });

  const esewaClick = async (amount: string) => {
    const sig = generateHashCode(amount, "unique-transaction-id");

    const formData = new FormData();
    formData.append("amount", amount);
    formData.append("failure_url", "https://google.com");
    formData.append("product_delivery_charge", "0");
    formData.append("product_service_charge", "0");
    formData.append("product_code", "DONATION");
    formData.append("signature", sig.signature);
    formData.append("signed_field_names", sig.signed_field_names);
    formData.append("success_url", "https://esewa.com.np");
    formData.append("tax_amount", "10");
    formData.append("total_amount", (parseInt(amount) + 10).toString());
    formData.append("transaction_uuid", "unique-transaction-id");
    formData.append("secret", "your-secret-key");

    try {
      const response = await esewaPayment(formData);
      console.log(response);
    } catch (error) {
      console.error("Error making payment:", error);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("accessToken");

    const fetchEvent = async () => {
      try {
        const response = await fetch(
          `https://tracker.smart.org.np/api/event/${id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch event details");
        }

        const data = await response.json();
        setEvent(data);
      } catch (error) {
        setError("Unable to fetch the data");
      }
    };

    if (id) {
      fetchEvent();
    }
  }, [id]);

  if (!event) {
    return <div>Loading...</div>;
  }

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
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

  const handleSubmit = async (e) => {
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
    <div className="p-10 shadow-lg rounded-lg flex items-center justify-center flex-col">
      <div className="grid grid-cols-2 gap-4 mb-10">
        <div className="w-full flex justify-center object-cover">
          <img
            src={"https://tracker.smart.org.np/storage/" + event.image}
            alt={event?.title}
          />
        </div>
        <div>
          <h1 className="text-4xl font-bold text-slate-700 mb-3">
            {event.title}
          </h1>
          <p className="font-normal text-green-600">
            {event && (
              <div dangerouslySetInnerHTML={{ __html: event.description }} />
            )}
          </p>
        </div>
      </div>

      <div className="pt-10 pb-10 flex">
        <form className="w-full" onSubmit={handleSubmit}>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                First Name
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="text"
                name="first_name"
                value={formData.first_name}
                onChange={handleChange}
                placeholder="Samiksha"
              />
              <p className="text-red-500 text-xs italic">
                Please fill out this field.
              </p>
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Last Name
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="text"
                name="last_name"
                value={formData.last_name}
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
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
          >
            Submit Donation
          </button>
        </form>
      </div>
    </div>
  );
};

export default Page;
