function Donate (){
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
              {/* <div className="flex w-full pt-2 px-2 gap-1 justify-center">
                <Button title="Donate Now" />
              </div> */}
            </div>
          </form>
        </div>
      </div>
    );
}
export default Donate;