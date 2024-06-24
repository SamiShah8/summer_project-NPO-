"use client";
import { useRouter } from "next/navigation";
import Button from "@/components/Button";

function Dashbord() {
  const router = useRouter();

  const createEventHandler = () => {
    router.push("/dashboard/create-event");
  };

  return (
    <div className="relative overflow-x-auto px-6 py-3">
      <div className="flex justify-between items-center py-5">
        <h1 className="text-green-600 font-bold uppercase text-2xl">Events</h1>
        <Button title="Create Event" onClick={createEventHandler} />
      </div>
      <table className="table-auto w-full text-left border bg-white-800  shadow-sm rounded ">
        <thead className="text-xs  text-gray-900 uppercase">
          <tr>
            <th className="px-6 py-4">SN.</th>
            <th className="px-6 py-4">Event Name</th>
            <th className="px-6 py-4">Event Purpose</th>
            <th className="px-6 py-4">Eventer name</th>
            <th className="px-6 py-4">Action</th>
          </tr>
        </thead>
        <tbody className="text-md">
          <tr className="pt-5">
            <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              1
            </td>
            <td className="px-6 py-4">Sunita Acharya (Cancer patient)</td>
            <td className="px-6 py-4">Health</td>
            <td className="px-6 py-4">samiksha shah</td>
            <td className="px-6 py-4">
              <a href="view">view</a>
            </td>
          </tr>
          <tr className="">
            <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              2
            </td>
            <td className="px-6 py-4">Tuberclosis Victim(Aacham Village)</td>
            <td className="px-6 py-4">Health</td>
            <td className="px-6 py-4">bhaskar shah</td>
            <td className="px-6 py-4">
              <a href="view">view</a>
            </td>
          </tr>
          <tr className="">
            <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              3
            </td>
            <td className="px-6 py-4">flood victim</td>
            <td className="px-6 py-4">natural disaster</td>
            <td className="px-6 py-4">susmita shah</td>
            <td className="px-6 py-4">
              <a href="view">view</a>
            </td>
          </tr>
          <tr className="">
            <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              4
            </th>
            <td className="px-6 py-4">flood victim</td>
            <td className="px-6 py-4">natural disaster</td>
            <td className="px-6 py-4">susmita shah</td>
            <td className="px-6 py-4">
              <a href="view">view</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
export default Dashbord;
