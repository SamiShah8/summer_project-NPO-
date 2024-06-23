import Button from "@/components/Button";

function Signup() {
  return (
    <div>
      <div className=" flex justify-center items-center flex-col gap-8 pb-12  ">
        <h1 className="text-7xl text-black-800 font-mono  font-extrabold  pt-7">
          Signup
        </h1>
        <form className="flex flex-col h-full px-3 py-3 w-96 rounded-xl items-center bg-white-800 shadow-[rgba(0,0,0,0.35)_0px_5px_15px] justify-center">
          <div className="flex w-full flex-col ">
            <label className="text-[1rem] capitalize ml-1 pt-5" htmlFor="email">
              First Name
            </label>
            <input
              className="focus:outline-none border placeholder:text-sm h-9 py-2 px-2 text-base font-normal text-gray-400 rounded-md border-gray-400 "
              type="text"
              name="name"
              id="First Name"
              placeholder="First Name"
            />
          </div>
          <div className="flex w-full flex-col ">
            <label
              className="text-[1rem] capitalize ml-1 pt-5"
              htmlFor="last Name"
            >
              last Name
            </label>
            <input
              className="focus:outline-none border placeholder:text-sm h-9 py-2 px-2 text-base font-normal text-gray-400 rounded-md border-gray-400 "
              type="text"
              name="name"
              id="last Name"
              placeholder="First Name"
            />
          </div>
          <div className="flex w-full flex-col ">
            <label
              className="text-[1rem] capitalize ml-1 pt-5"
              htmlFor="email"
            >Email:</label>
            <input
              className="focus:outline-none border placeholder:text-sm h-9 py-2 px-2 text-base font-normal text-gray-400 rounded-md border-gray-400 "
              type="text"
              name="name"
              id="email"
              placeholder="Enter email or number"
            />
          </div>

          <div className="flex w-full flex-col ">
            <label
              className="text-[1rem] capitalize ml-1 pt-5"
              htmlFor=" Create Password"
            >
              Create Password:{" "}
            </label>
            <input
              className=" focus:outline-none border placeholder:text-sm h-9 py-2 px-2 text-base font-normal text-gray-400 rounded-md border-gray-400 "
              type="text"
              name="address"
              placeholder="Enter your  Password"
            />
          </div>
          <div className="flex w-full flex-col ">
            <label
              className="text-[1rem] capitalize ml-1 pt-5"
              htmlFor="Conform password"
            >
              Conform Password:{" "}
            </label>
            <input
              className=" focus:outline-none border placeholder:text-sm h-9 py-2 px-2 text-base font-normal text-gray-400 rounded-md border-gray-400 "
              type="text"
              name="address"
              placeholder="Re-enter  Password"
            />
          </div>
          <div className="flex items-center flex-col justify-center w-full  pt-6 pb-5 ">
            <label className="text-center " htmlFor="">
              {" "}
            </label>
            <input
              className=" py-[0.5rem] rounded-md text-white px-[1.5rem] font-semibold tracking-wide bg-green-600 border-none outline-none  hover:bg-[#3f9a1b] "
              type="submit"
              name="name"
              value="Signup"
            />
            <div className=" flex pt-3"></div>
            <p>Already have an account?</p>
            <a className="text-green-600 underline"href="login"> login</a>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Signup;
