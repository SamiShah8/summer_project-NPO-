"use client";

import Button from "@/components/Button";
import CarouselHomePage from "@/components/Craousel";
import { truncateString } from "@/utils/helper";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const router = useRouter();
  const [events, setEvents] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);

  const gotoEventsPage = () => {
    router.push("events");
  };

  useEffect(() => {
    const token = localStorage.getItem("accessToken");

    const fetchEvents = async () => {
      try {
        const response = await fetch(
          "https://tracker.smart.org.np/api/events/all",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const data = await response.json();
        const eventArray = Object.values(data);
        console.log(data);
        setEvents(eventArray);
      } catch (error) {
        setError("Failed to fetch events");
      }
    };

    fetchEvents();
  }, [router]);

  const slicedData = events?.slice(0, 4);
  return (
    <div className="mt-[90px]">
      <CarouselHomePage />
      <h1 className="text-green-500 flex justify-center text-3xl font-semibold mt-5 ">
        About Us
      </h1>
      <div className="grid grid-cols-2 p-10 gap-4">
        <div className="col-span-1 p-2 justify-center font-serif text-green-600 text-xl">
          <p>
            At Donation For Cause, we believe in the power of community and
            compassion. Our mission is to make a positive impact on the lives of
            those in need through dedicated support, innovative programs, and
            heartfelt donations. We are a non-profit organization committed to
            providing essential resources and creating sustainable solutions to
            address the challenges faced by vulnerable populations.
          </p>
          <p>
            Over the years, we have touched the lives of thousands of
            individuals and families. Our projects have led to improved health
            outcomes, increased access to education, and stronger, more
            resilient communities. We are proud of the tangible differences we
            have made and remain committed to expanding our reach and impact.
          </p>
        </div>
        <div className="h-100">
          <img
            src="/assests/donation3.jpg"
            alt="about"
            className="w-full h-80 object-cover"
          />
        </div>
      </div>
      <div className="flex w-full pt-2 px-2 gap-1 justify-center">
        <Button onClick={() => router.push("/About")} title="See More" />
      </div>
      <h1 className="text-green-500 flex justify-center text-3xl font-semibold mt-5 ">
        Recent Events
      </h1>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mt-10 p-5">
        {slicedData?.map((data, index) => (
          <div className="bg-green-200 shadow-md" key={index}>
            <img
              className="h-80 w-[100%] object-cover "
              src={"https://tracker.smart.org.np/storage/" + data?.image}
              alt="baground"
            />
            <div className="p-5">
              <h3 className=" mb-1 text-xl mt-1">{data.title}</h3>
              <p>{truncateString(data?.description, 100)}</p>
            </div>
            <div className="flex w-full pt-2 py-2 gap-1 justify-center">
              <Link href={"/events/" + data.id}>
                <Button
                  title="Click Here"
                  className="border-none outline-none py-2 px-3 text-white font-semibold  bg-emerald-300 rounded-md"
                  // onClick={gotoId}
                />
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="flex w-full pt-2 px-2 gap-1 justify-center mb-6">
        <button
          title="See More"
          className="border-none outline-none py-2 px-3 text-white font-semibold  bg-emerald-300 rounded-md"
          onClick={gotoEventsPage}
        >
          See More
        </button>
      </div>

      {/* <h1 className="text-green-500 flex justify-center text-3xl font-semibold my-5  ">
        Donate us
      </h1>
      <div className="pt-10 pb-10 flex justify-center bg-green-200">
        <form className="w-full max-w-lg">
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
                type="Email"
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
                  <option>pokhara</option>
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
            <div className="pt-5 ">
              <p>Choose your payment method:</p>
              <br />
              <div className="flex content-between gap-2  w-full">
                <input
                  className=""
                  type="checkbox"
                  name="name"
                  value="E-Sewa"
                />
                E-Sewa
                <input
                  className=""
                  type="checkbox"
                  name="name"
                  value="Khalti"
                />
                Khalti
                <input type="checkbox" name="name" value="offline-payment" />
                Offline-payment
              </div>
            </div>
            <div className="flex w-full pt-2 px-2 gap-1 justify-center">
              <Button title="Donate Now" />
            </div>
          </div>
        </form>
      </div> */}
    </div>
  );
}
