"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Button from "@/components/Button";
import Link from "next/link";

interface Event {
  id: number;
  title: string;
  purpose: string;
  name: string;
  status: string;
}

function Dashboard() {
  const router = useRouter();
  const [events, setEvents] = useState<Event[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (!token) {
      router.push('/login');
      return;
    }

    const fetchEvents = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/event', {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });
        const data = await response.json();
        setEvents(data?.data);
      } catch (error) {
        setError('Failed to fetch events');
      }
    };

    fetchEvents();
  }, [router]);

  const handleStatusChange = async (id: number, status: string) => {
    const token = localStorage.getItem("accessToken");
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/event/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({ status }),
      });

      if (response.ok) {
        setEvents(events.map(event => event.id === id ? { ...event, status } : event));
      } else {
        setError('Failed to update event status');
      }
    } catch (error) {
      setError('Failed to update event status');
    }
  };

  const createEventHandler = () => {
    router.push("/dashboard/create-event");
  };

  return (
    <div className="relative overflow-x-auto px-6 py-3">
      <div className="flex justify-between items-center py-5">
        <h1 className="text-green-600 font-bold uppercase text-2xl">Events</h1>
        <Button title="Create Event" onClick={createEventHandler} />
      </div>
      {error && <div className="bg-red-500 text-white p-3 rounded">{error}</div>}
      <table className="table-auto w-full text-left border bg-white-800 shadow-sm rounded">
        <thead className="text-xs text-gray-900 uppercase">
          <tr>
            <th className="px-6 py-4">SN.</th>
            <th className="px-6 py-4">Event Name</th>
            <th className="px-6 py-4">Event Purpose</th>
            <th className="px-6 py-4">Eventer Name</th>
            <th className="px-6 py-4">Status</th>
            <th className="px-6 py-4">Action</th>
          </tr>
        </thead>
        <tbody className="text-md">
          {events && events.length > 0 && events?.map((event, index) => (
            <tr key={event.id} className="border-b">
              <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">{index + 1}</td>
              <td className="px-6 py-4">{event.title}</td>
              <td className="px-6 py-4">{event.purpose}</td>
              <td className="px-6 py-4">{event.name}</td>
              <td className={`px-6 py-4 ${event.status === 'approved' ? 'text-green-500' : event.status === 'rejected' ? 'text-red-500' : 'text-yellow-500'}`}>{event.status}</td>
              <td className="px-6 py-4 flex gap-2">
                <button onClick={() => handleStatusChange(event.id, 'approved')} className="bg-green-500 text-white p-2 rounded">Approve</button>
                <button onClick={() => handleStatusChange(event.id, 'rejected')} className="bg-red-500 text-white p-2 rounded">Reject</button>
                <Link className="bg-blue-400 text-white p-2 rounded" href={`/dashboard/create-event/${event.id}`}>View</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Dashboard;
