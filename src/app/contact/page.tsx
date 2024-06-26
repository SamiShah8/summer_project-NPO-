import Image from "next/image";
import DON1 from "../../../public/assets/sam.jpg";
import Don from "../../../public/assests/sam.jpg";

function Contact() {
  return (
    <div>
      <div className="  bg-contact-hero-image no-repeat bg-cover bg-center flex justify-center items-center flex-col h-96 ">
        <h1 className="text-7xl text-white shadow-xl font-extrabold ">
          Contact Us
        </h1>
        <h4 className="text-white font-serif">
          Reach Out, Make a Difference: Contact Us to Donate Today!, Be the
          Light: Connect with Us to Donate
        </h4>
      </div>
      <div className="pl-5 mt-3 ">
        <h1 className="w-[100%] h-16 text-black-600  font-bold text-2xl  size-11  ">
          We would love to hear from you!
        </h1>

        <div className="grid grid-cols-2 gap-4 mb-10">
          <form className="flex flex-col h-full w-full items-center bg-gray-100  justify-center ">
            <div className="flex w-full pt-6 px-2 flex-col ">
              <label className=" items-center text-black" htmlFor="">
                Name:{" "}
              </label>
              <input
                className="border-2 h-20 p-2 rounded-md flex-1 "
                type="text"
                name="name"
                placeholder="Enter your Name"
              />
            </div>
            <div className="flex w-full pt-6 px-2 gap-1 flex-col">
              <label className=" flex items-center text-black" htmlFor="">
                Adress:{" "}
              </label>
              <input
                className=" border-2  h-20 p-2 rounded-md flex-1"
                type="text"
                name="address"
                placeholder="Enter your  Address"
              />
            </div>

            <div className="flex w-full pt-6 px-2 gap-1  flex-col">
              <label className="flex items-center text-black" htmlFor="">
                Email:{" "}
              </label>
              <input
                className="border-2 h-20 p-2 rounded-md flex-1 "
                type="text"
                name="name"
                placeholder="Enter your Email"
              />
            </div>

            <div className="flex w-full pt-6 px-2 gap-1 flex-col">
              <label className="flex items-center text-black" htmlFor="">
                Suggestion:{" "}
              </label>
              <textarea
                className="border-2 h-80 rounded-md flex-1"
                name="a4ddress"
                cols={10}
              ></textarea>
            </div>
            <div className="flex w-full pt-6 px-2 gap-1 justify-center">
              <button className="bg-green-500 text-white p-2 w-40">
                Submit
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
