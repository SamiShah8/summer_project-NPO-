function Form() {
  return (
    <div className="p-10">
      <h1 className="text-green-600 text-3xl font-sans ">EVENT DETAILS FORM</h1>
      <form className="flex flex-col h-full w-full">
        <div className="flex w-full pt-6 px-2 flex-col ">
          <label className=" items-center text-black" htmlFor="">
            Name of Event:{" "}
          </label>
          <input
            className="border-2 h-20 p-2 rounded-md flex-1 "
            type="text"
            name="name"
            placeholder="Enter your Name"
          />
        </div>
        <div className="flex w-full pt-6 px-2 gap-1 flex-col">
          <label
            className="flex items-center text-black"
            htmlFor="Event Description"
          >
            Event Description{" "}
          </label>
          <textarea
            className="border-2 h-80 rounded-md flex-1"
            name="a4ddress"
            cols={20}
          ></textarea>
        </div>

        <div className="flex w-full pt-6 px-2 gap-1 flex-col">
          <label
            className=" flex items-center text-black"
            htmlFor="Some Proofs"
          >
            Some Proofs{" "}
          </label>
          <input
            className=" border-2  h-20 p-2 rounded-md flex-1"
            type="file"
            name="address"
            accept="images/*"
          />
        </div>
        <div className="flex w-full pt-6 px-2 gap-1 flex-col">
          <label
            className=" flex items-center text-black"
            htmlFor="Some Proofs"
          >
            Cover Image{" "}
          </label>
          <input
            className=" border-2  h-20 p-2 rounded-md flex-1"
            type="file"
            name="cover_image"
            accept="images/*"
          />
        </div>
        {/* personal details */}
        <div className=" W-full mt-2 ">
          <h1 className="text-2xl font-bold">Personal Details</h1>
          <div className=" flex">
            <div className="flex w-full pt-6 px-2 flex-col ">
              <label className=" items-center text-black" htmlFor="Name">
                Name:{" "}
              </label>
              <input
                className="border-2 h-20 p-2 rounded-md flex-1 "
                type="text"
                name="name"
                placeholder="Enter your Name"
              />
            </div>

            <div className="flex w-full pt-6 px-2  flex-col">
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

            <div className="flex w-full pt-6 px-2 flex-col ">
              <label className=" items-center text-black" htmlFor="">
                Phone Number:{" "}
              </label>
              <input
                className="border-2 h-20 p-2 rounded-md flex-1 "
                type="text"
                name="name"
                placeholder="Enter your phone number"
              />
            </div>
          </div>
          <div className="flex">
            <div className="flex w-full pt-6 px-2 flex-col ">
              <label className=" items-center text-black" htmlFor="">
                Bank Account Number:{" "}
              </label>
              <input
                className="border-2 h-20 p-2 rounded-md flex-1 "
                type="text"
                name="name"
                placeholder="Enter your Account Number"
              />
            </div>
            <div className="flex w-full pt-6 px-2 flex-col ">
              <label className=" items-center text-black" htmlFor="">
                Bank Name:{" "}
              </label>
              <input
                className="border-2 h-20 p-2 rounded-md flex-1 "
                type="text"
                name="name"
                placeholder="Enter Bank  Name"
              />
            </div>
          </div>
        </div>
        <div className="w-1/3 pt-6 px-2  ">
          <label className=" items-center text-black" htmlFor="">
            Purpose:{" "}
          </label>
          <select
            name="Purpose"
            className=" border-2 h-10 w-2/3 p-2 rounded-md "
          >
            <option value="Education">Education</option>
            <option value="Natural Disaster">Natural Disaster</option>
            <option value="Health">Health</option>
            <option value="oldage home">Oldage home</option>
            <option value="orphanage">Orphanage</option>
          </select>
        </div>

        <div className="flex w-full pt-6 px-2 gap-1 justify-center">
          <button className="bg-green-500 text-white p-2 w-40">Submit</button>
        </div>
      </form>
    </div>
  );
}
export default Form;
