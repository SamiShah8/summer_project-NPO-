import { FaLocationArrow } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";

function Footer() {
  return (
    <div className="bg-gray-700 ">
      <div className="h-12 bg-green-600"></div>
      <div className="grid grid-cols-4 p-5 gap-4 ">
        <div className="col-span-1 p-10 text-white flex justify-center items-center flex-col gap-3` ">
          <h1 className="text-xl font-bold">About Us</h1>
          <h3 className=" text-justify">
            At Donation For Cause, we believe in the power of community and
            compassion. Our mission is to make a positive impact on the lives of
            those in need through dedicated support, innovative programs, and
            heartfelt donations.
          </h3>
        </div>
        <div className="col-span-1 p-10 text-white flex justify-center items-center flex-col gap-3 ">
          <h1 className="text-xl font-bold">Useful Links</h1>

          <ul>
            <li>
              <a href="/Home">Homehids</a>
            </li>
            <a href="/About Us">About Us</a>
            <li>
              <a href="/Contact">Contact</a>
            </li>
            <li>
              <a href="/Donation">Donation</a>
            </li>
            <li>
              <a href="/Events">Events</a>
            </li>
            <li>
              <a href="/Gallary">Gallary</a>
            </li>
          </ul>
        </div>
        <div className="col-span-1  text-white p-10 text-xl font-bold flex justify-center items-center flex-col gap-3">
          <h1>Map</h1>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7065.2877315871165!2d85.33179999999997!3d27.69740000000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sne!2snp!4v1718691174120!5m2!1sne!2snp"
            height="450"
            loading="lazy"
            className="h-full w-full"
          ></iframe>
        </div>
        <div className="col-span-1  p-10  font-bold  text-white flex justify-center items-center flex-col gap-3">
          <ul>
            <li>
              <h1 className="text-xl">Contact US</h1>
            </li>
            <li>
              <IoCall />
              <p>9848879330</p>
            </li>
            <li>
              <FaLocationArrow />
              <p>New Baneshwor, Kathmandu</p>
            </li>
            <li>
              <MdEmail />
              <p>donationforcause@gmail.com</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="h-12 bg-black flex items-center justify-center  ">
        <p className="text-red-800 font-bold pl-3  ">Copyright @ 2017</p>
        <p className="text-white  pl-3 "> All Right Reserved.</p>
        <p className="text-white  pl-3 ">Powered by</p>
        <p className="text-red-800 font-bold  pl-3 ">Donation</p>
      </div>
    </div>
  );
}
export default Footer;
