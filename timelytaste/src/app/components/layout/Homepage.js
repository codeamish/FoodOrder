import Image from "next/image";
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils } from '@fortawesome/free-solid-svg-icons';
// import { faInfo } from "@fortawesome/free-solid-svg-icons";
export default function Homepage() {
  return (
    <section className="homepage">
      <div className="py-8">
        <h1 className="text-4xl font-semibold mt-5 mb-5">A taste you'll 
          <span className=" text-orange-500"> remember</span>
        </h1>
        <p className="text-gray-600 mt-5 mb-5">
          Browse menus, customize your order, and track your delivery in
          real-time – all with just a few clicks.Let Timely Taste fuel your next
          delicious discovery!
        </p>
        <div className="flex gap-4">
          <button className="bg-yellow-500 text-white px-4 py-2 rounded-full mt-5 flex gap-4">
            Order Now
            <FontAwesomeIcon icon={faUtensils} />
          </button>
          <button className="bg-white text-yellow-500 px-4 py-2 rounded-full mt-5 ml-5">
            Learn More
          </button>
        </div>
      </div>
      <div className="relative">
        <Image
          src={"/pizza.png"}
          layout={"fill"}
          objectFit={"contain"}
          alt={"pizza"}
        ></Image>
      </div>
    </section>
  );
}
