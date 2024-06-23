import Link from "next/link";
import cardList from "./components/data";
import Image from "next/image";
import { truncateString } from "@/utils/helper";
function Events() {
  return (
    <div>
      <main className="container ">
        <div className="grid lg:grid-cols-3 gap-3 py-8">
          {cardList.map((card) => (
            <Link href={"/events/" + card.id}>
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
