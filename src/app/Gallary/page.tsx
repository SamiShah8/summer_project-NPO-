
function Gallary ({}){
    return (
      <div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
          <div>
            <img
              className="h-80 w-80 object-cover"
              src="/assests/donation4.jpg"
              alt="baground  "
              // onClick={}
            />
            <div className="text-center p-3 text-purple-800 font-bold font-serif">
              <h3 className=" mb-1 text-xl">Boys getting stuff</h3>
            </div>
          </div>
          <div>
            <img
              className="h-80 w-80 object-cover"
              src="/assests/asha1.jpg"
              alt="baground"
            />
            <div className="text-center p-3 text-purple-800 font-bold font-serif">
              <h3 className=" mb-1 text-xl pr-5 ">Serving to Childern</h3>
            </div>
          </div>
          <div>
            <img
              className="h-80 w-80 object-cover"
              src="/assests/asha2.jpg"
              alt="baground"
            />
            <div className="text-center p-3 text-purple-800 font-bold font-serif">
              <h3 className=" mb-1 text-xl">Stationery Distribution</h3>
            </div>
          </div>
          <div>
            <img
              className="h-80 w-80 object-cover"
              src="/assests/asha3.jpg"
              alt="baground"
            />
            <div className="text-center p-3 text-purple-800 font-bold font-serif">
              <h3 className=" mb-1 text-xl">Our Team</h3>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mt-2">
          <div>
            <img
              className="h-80 w-80 object-cover"
              src="/assests/donation1.jpg"
              alt="baground"
            />
            <div className="text-center p-3 text-purple-800 font-bold font-serif">
              <h3 className=" mb-1 text-xl mt-1">Girls hygiene Orientation</h3>
            </div>
          </div>
          <div>
            <img
              className="h-80 w-80 object-cover"
              src="/assests/donation2.jpg"
              alt="baground"
            />
            <div className="text-center p-3 text-purple-800 font-bold font-serif">
              <h3 className=" mb-1 text-xl mt-1">Gorkha Project</h3>
            </div>
          </div>
          <div>
            <img
              className="h-80 w-80 object-cover"
              src="/assests/donation3.jpg"
              alt="baground"
            />
            <div className="text-center p-3 text-purple-800 font-bold font-serif">
              <h3 className=" mb-1 text-xl mt-1">Volunteers</h3>
            </div>
          </div>
          <div>
            <img
              className="h-80 w-80 object-cover"
              src="/assests/n.jpg"
              alt="baground"
            />
            <div className=" p-3 text-purple-800 font-bold font-serif text-center">
              <h3 className=" mb-1 text-xl mt-1">Humla Project</h3>
            </div>
          </div>
        </div>
      </div>
    );
}
export default Gallary;
