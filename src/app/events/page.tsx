"use client";
import Link from "next/link";
import cardList from "./components/data";
import Image from "next/image";
import { truncateString } from "@/utils/helper";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface Event {
  id: number;
  title: string;
  purpose: string;
  name: string;
  status: string;
  description: string;
  cover: string;
  image: string;
}

function Events() {
  const router = useRouter();
  const [events, setEvents] = useState<Event[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("accessToken");

    const fetchEvents = async () => {
      try {
        const response = await fetch(
          "https://tracker.smart.org.np/api/events/all",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const data = await response.json();
        setEvents(data);
      } catch (error) {
        setError("Failed to fetch events");
      }
    };

    fetchEvents();
  }, [router]);

  console.log(events);
  return (
    <div>
      <main className="container ">
        <div className="grid lg:grid-cols-3 gap-3 py-8">
          {events &&
            events.length > 0 &&
            events?.map((card, index) => (
              <Link href={"/events/" + card?.id} key={index}>
                <div className=" shadow-lg rounded-lg">
                  <div className="h-80 w-full rounded-t-lg">
                    <img
                      className="rounded-t-lg text-center h-full w-full object-cover"
                      src={"https://tracker.smart.org.np/storage/" + card.image}
                      alt={card.title}
                    />
                  </div>
                  <div className="">
                    <h3 className="text-3lx font-bold text-slate-700 mb-3">
                      {card.title}
                    </h3>
                    <p className="text-lg font-normal text-gray">
                      {truncateString(card.description, 100)}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          {cardList.map((card, index) => (
            <Link href={"/events/" + card.id} key={index}>
              <div className=" shadow-lg rounded-lg">
                <div className="h-80 w-full rounded-t-lg">
                  <img
                    className="rounded-t-lg text-center h-full w-full object-cover"
                    src={card.img}
                    alt={card.title}
                  />
                </div>
                <div className="">
                  <h3 className="text-3lx font-bold text-slate-700 mb-3">
                    {card.title}
                  </h3>
                  <p className="text-lg font-normal text-gray">
                    {truncateString(card.text, 100)}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
export default Events;
