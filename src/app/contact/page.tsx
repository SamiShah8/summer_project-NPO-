"use client";
import { ChangeEvent, useState } from "react";
import type { MouseEvent } from "react";

interface FormData {
  name: string;
  email: string;
  address: string;
  suggestion: string;
}

function Contact() {
  const postUrl = "https://tracker.smart.org.np/api/contacts";
  const [isPending, setIsPending] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    address: "",
    suggestion: "",
  });

  const inputChangeHandler = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const submitHandler = async (
    e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
  ) => {
    e.preventDefault();
    setIsPending(true);

    if (
      formData.email === "" ||
      formData.name === "" ||
      formData.address === "" ||
      formData.suggestion === ""
    ) {
      alert("Field cannot be empty");
      setIsPending(false);
      return;
    }

    try {
      const response = await fetch(postUrl, {
        method: "POST",
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      const result = await response.json();
      console.log(result); // Handle the result as needed

      setFormData({
        name: "",
        email: "",
        address: "",
        suggestion: "",
      });
    } catch (error) {
      alert("Something went wrong. Try again!");
    } finally {
      setIsPending(false);
    }
  };

  return (
    <div>
      <div className="bg-contact-hero-image no-repeat bg-cover bg-center flex justify-center items-center flex-col h-96">
        <h1 className="text-7xl text-white shadow-xl font-extrabold">
          Contact Us
        </h1>
        <h4 className="text-white font-serif">
          Reach Out, Make a Difference: Contact Us to Donate Today!, Be the
          Light: Connect with Us to Donate
        </h4>
      </div>
      <div className="pl-5 mt-3">
        <h1 className="w-[100%] h-16 text-black-600 font-bold text-2xl">
          We would love to hear from you!
        </h1>
        <div className="grid grid-cols-2 gap-4 mb-10">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col h-full w-full items-center bg-gray-100 justify-center"
          >
            <div className="flex w-full pt-6 px-2 flex-col">
              <label className="items-center text-black" htmlFor="name">
                Name:
              </label>
              <input
                required
                className="border-2 px-2 h-20 p-2 rounded-md flex-1"
                type="text"
                name="name"
                onChange={inputChangeHandler}
                value={formData.name}
                placeholder="Enter your Name"
              />
            </div>
            <div className="flex w-full pt-6 px-2 gap-1 flex-col">
              <label className="flex items-center text-black" htmlFor="address">
                Address:
              </label>
              <input
                required
                className="border-2 px-2 h-20 p-2 rounded-md flex-1"
                type="text"
                name="address"
                onChange={inputChangeHandler}
                value={formData.address}
                placeholder="Enter your Address"
              />
            </div>
            <div className="flex w-full pt-6 px-2 gap-1 flex-col">
              <label className="flex items-center text-black" htmlFor="email">
                Email:
              </label>
              <input
                required
                className="border-2 px-2 h-20 p-2 rounded-md flex-1"
                type="email"
                name="email"
                onChange={inputChangeHandler}
                value={formData.email}
                placeholder="Enter your Email"
              />
            </div>
            <div className="flex w-full pt-6 px-2 gap-1 flex-col">
              <label
                className="flex items-center text-black"
                htmlFor="suggestion"
              >
                Suggestion:
              </label>
              <textarea
                required
                className="border-2 px-2 h-80 rounded-md flex-1"
                name="suggestion"
                onChange={inputChangeHandler}
                value={formData.suggestion}
                placeholder="Enter your Suggestion"
              ></textarea>
            </div>
            <div className="flex w-full pt-6 px-2 gap-1 justify-center">
              <button
                onClick={submitHandler}
                className="bg-green-500 text-white p-2 w-40"
                disabled={isPending}
              >
                {isPending ? "Submitting" : "Submit"}
              </button>
            </div>
          </form>
          <div className="h-full w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7065.2877315871165!2d85.33179999999997!3d27.69740000000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sne!2snp!4v1718691174120!5m2!1sne!2snp"
              height="450"
              loading="lazy"
              className="h-full w-full"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
