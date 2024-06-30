"use client";

import { useState } from "react";

interface EventFormData {
  title: string;
  description?: string;
  email_verified_at?: string;
  cover?: File;
  image?: File;
  name?: string;
  contact_number?: string;
  bank_account?: string;
  bank_name?: string;
  purpose?: string;
  status?: "approved" | "pending" | "rejected";
  created_by?: string | null;
}

const Form = () => {
  const user_id = localStorage.getItem("user_id");
  const initialFormData: EventFormData = {
    title: "",
    description: "",
    email_verified_at: "",
    cover: undefined,
    image: undefined,
    name: "",
    contact_number: "",
    bank_account: "",
    bank_name: "",
    purpose: "",
    status: "pending",
    created_by: user_id,
  };

  const [formData, setFormData] = useState<EventFormData>(initialFormData);
  const [err, setErr] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;
    if (files && files.length > 0) {
      setFormData({
        ...formData,
        [name]: files[0],
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);

    const data = new FormData();
    for (const key in formData) {
      if (formData[key as keyof EventFormData]) {
        data.append(key, formData[key as keyof EventFormData] as string | Blob);
      }
    }

    try {
      const response = await fetch("https://tracker.smart.org.np/api/event", {
        method: "POST",
        body: data,
      });

      if (response.status === 401) {
        setErr(true);
      } else {
        const result = await response.json();
        console.log(result);
        setSuccess(true);
        setFormData(initialFormData);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="p-10">
      <h1 className="text-green-600 text-3xl font-sans ">EVENT DETAILS FORM</h1>
      {success && (
        <div className="bg-green-500 text-white p-3 rounded">
          Event created successfully!
        </div>
      )}
      <form onSubmit={handleSubmit} className="flex flex-col h-full w-full">
        <div className="flex w-full pt-6 px-2 flex-col ">
          <label className="items-center text-black" htmlFor="title">
            Name of Event:
          </label>
          <input
            className="border-2 h-20 p-2 rounded-md flex-1"
            type="text"
            name="title"
            placeholder="Enter the event name"
            value={formData.title}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex w-full pt-6 px-2 gap-1 flex-col">
          <label className="flex items-center text-black" htmlFor="description">
            Event Description
          </label>
          <textarea
            className="border-2 h-80 rounded-md flex-1"
            name="description"
            cols={20}
            value={formData.description}
            onChange={handleInputChange}
          ></textarea>
        </div>
        <div className="flex w-full pt-6 px-2 gap-1 flex-col">
          <label className="flex items-center text-black" htmlFor="image">
            Some Proofs
          </label>
          <input
            className="border-2 h-20 p-2 rounded-md flex-1"
            type="file"
            name="image"
            accept="image/*"
            onChange={handleFileChange}
          />
        </div>
        <div className="flex w-full pt-6 px-2 gap-1 flex-col">
          <label className="flex items-center text-black" htmlFor="cover">
            Cover Image
          </label>
          <input
            className="border-2 h-20 p-2 rounded-md flex-1"
            type="file"
            name="cover"
            accept="image/*"
            onChange={handleFileChange}
          />
        </div>
        {/* personal details */}
        <div className="w-full mt-2">
          <h1 className="text-2xl font-bold">Personal Details</h1>
          <div className="flex">
            <div className="flex w-full pt-6 px-2 flex-col">
              <label className="items-center text-black" htmlFor="name">
                Name:
              </label>
              <input
                className="border-2 h-20 p-2 rounded-md flex-1"
                type="text"
                name="name"
                placeholder="Enter your Name"
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>
            <div className="flex w-full pt-6 px-2 flex-col">
              <label
                className="flex items-center text-black"
                htmlFor="email_verified_at"
              >
                Email:
              </label>
              <input
                className="border-2 h-20 p-2 rounded-md flex-1"
                type="email"
                name="email_verified_at"
                placeholder="Enter your Email"
                value={formData.email_verified_at}
                onChange={handleInputChange}
              />
            </div>
            <div className="flex w-full pt-6 px-2 flex-col">
              <label
                className="items-center text-black"
                htmlFor="contact_number"
              >
                Phone Number:
              </label>
              <input
                className="border-2 h-20 p-2 rounded-md flex-1"
                type="text"
                name="contact_number"
                placeholder="Enter your phone number"
                value={formData.contact_number}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="flex">
            <div className="flex w-full pt-6 px-2 flex-col">
              <label className="items-center text-black" htmlFor="bank_account">
                Bank Account Number:
              </label>
              <input
                className="border-2 h-20 p-2 rounded-md flex-1"
                type="text"
                name="bank_account"
                placeholder="Enter your Account Number"
                value={formData.bank_account}
                onChange={handleInputChange}
              />
            </div>
            <div className="flex w-full pt-6 px-2 flex-col">
              <label className="items-center text-black" htmlFor="bank_name">
                Bank Name:
              </label>
              <input
                className="border-2 h-20 p-2 rounded-md flex-1"
                type="text"
                name="bank_name"
                placeholder="Enter Bank Name"
                value={formData.bank_name}
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>
        <div className="w-1/3 pt-6 px-2">
          <label className="items-center text-black" htmlFor="purpose">
            Purpose:
          </label>
          <select
            name="purpose"
            className="border-2 h-10 w-2/3 p-2 rounded-md"
            value={formData.purpose}
            onChange={handleInputChange}
          >
            <option value="Education">Education</option>
            <option value="Natural Disaster">Natural Disaster</option>
            <option value="Health">Health</option>
            <option value="oldage home">Oldage home</option>
            <option value="orphanage">Orphanage</option>
          </select>
        </div>
        <div className="flex w-full pt-6 px-2 gap-1 justify-center">
          <button type="submit" className="bg-green-500 text-white p-2 w-40">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
