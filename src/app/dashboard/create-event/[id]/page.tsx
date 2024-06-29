// pages/event/[id].tsx
"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface EventDetail {
  id: number;
  title: string;
  description: string;
  name: string;
  contact_number: string;
  bank_account: string;
  bank_name: string;
  purpose: string;
  status: string;
  cover: string;
  image: string;
}

function EventDetailPage() {
  const { id } = useParams();
  const [event, setEvent] = useState<EventDetail | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("accessToken");

    const fetchEvent = async () => {
      try {
        const response = await fetch(
          `https://tracker.smart.org.np/api/event/${id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch event details");
        }

        const data = await response.json();
        setEvent(data);
      } catch (error) {
        setError("Unable to fetch the data");
      }
    };

    if (id) {
      fetchEvent();
    }
  }, [id]);

  if (!event) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-10">
      <h1 className="text-green-600 text-3xl font-sans">Event Details</h1>
      {error && (
        <div className="bg-red-500 text-white p-3 rounded">{error}</div>
      )}
      <div className="flex flex-col gap-4 mt-6">
        <div>
          <strong>Title:</strong> {event.title}
        </div>
        <div>
          <strong>Description:</strong> {event.description}
        </div>
        <div>
          <strong>Name:</strong> {event.name}
        </div>
        <div>
          <strong>Contact Number:</strong> {event.contact_number}
        </div>
        <div>
          <strong>Bank Account:</strong> {event.bank_account}
        </div>
        <div>
          <strong>Bank Name:</strong> {event.bank_name}
        </div>
        <div>
          <strong>Purpose:</strong> {event.purpose}
        </div>
        <div
          className={`px-6 py-4 ${
            event.status === "approved"
              ? "text-green-500"
              : event.status === "rejected"
              ? "text-red-500"
              : "text-yellow-500"
          }`}
        >
          <strong>Status:</strong> {event.status}
        </div>
        {event.cover && (
          <div>
            <strong>Cover Image:</strong>{" "}
            <img
              src={"https://tracker.smart.org.np/storage/" + event.cover}
              alt="Cover Image"
              className="w-200 h-auto"
            />
          </div>
        )}
        {event.image && (
          <div>
            <strong>Image:</strong>{" "}
            <img
              src={"https://tracker.smart.org.np/storage/" + event.image}
              alt="Image"
              className="w-96 h-auto"
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default EventDetailPage;
