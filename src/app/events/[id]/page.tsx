"use client";

import { useParams, useRouter } from "next/navigation";
import React from "react";
import cardList from "../components/data";
import { esewaPayment } from "@/api/esewa";
import { useMutation } from "react-query";
import { generateHashCode } from "@/utils/helper";

const Page = () => {
  const { id } = useParams();
  const event = cardList?.find((da) => da.id === id.toString());

  const onSubmit = async (e: any) => {
    e.preventDefault(); // Prevent default form submission behavior
    console.log("here");

    const sig = generateHashCode();
    console.log(sig);
    const data = {
      amount: "100",
      failure_url: "https://google.com",
      product_delivery_charge: "0",
      product_service_charge: "0",
      product_code: "DONATION",
      signature: sig,
      signed_field_names: "total_amount,transaction_uuid,product_code",
      success_url: "https://esewa.com.np",
      tax_amount: "10",
      total_amount: "110",
      transaction_uuid: "ab14a8f2b02c3",
      secret: "8gBm/:&EnhH.1/q",
    };
    try {
      const response = await esewaPayment(data);
      console.log(response);
    } catch (error) {
      console.error("Error making payment:", error);
    }
  };

  return (
    <div className="p-10 shadow-lg rounded-lg flex items-center justify-center flex-col">
      <div className="grid grid-cols-2 gap-4 mb-10">
        <div className="w-full flex justify-center object-cover">
          <img src={event?.img} alt={event?.title} />
        </div>
        <div>
          <h1 className="text-4xl font-bold text-slate-700 mb-3">
            {event?.title}
          </h1>
          <p className="font-normal text-green-600">
             {event && <div dangerouslySetInnerHTML={{ __html: event.text }} />} 
          </p>
        </div>
      </div>

      <div className="pt-10 pb-10 flex">
        <form className="w-full" onSubmit={onSubmit}>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                First Name
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="text"
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
                >
                  <option>Kathmandu</option>
                  <option>Pokhara</option>
                  <option>Tikapur</option>
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
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0 gap-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Zip
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-zip"
                type="text"
                placeholder="90210"
              />
            </div>
            <div className="pt-5">
              <p>Choose your payment method:</p>
              <br />
              <div className="flex content-between gap-2 w-full">
                <input
                  className=""
                  type="checkbox"
                  name="paymentMethod"
                  value="E-Sewa"
                />
                E-Sewa
                <input
                  className=""
                  type="checkbox"
                  name="paymentMethod"
                  value="Khalti"
                />
                Khalti
                <input
                  type="checkbox"
                  name="paymentMethod"
                  value="offline-payment"
                />
                Offline-payment
              </div>
              <button
                type="submit"
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
              >
                E-Sewa
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Page;
