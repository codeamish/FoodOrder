import React from "react";

export default function MenuItem() {
  return (
    <div className=" bg-gray-200 p-4 rounded-lg text-center hover:bg-white hover:shadow-2xl hover:shadow-black/50" >
      <img src="/pizza.png" alt="pizza"></img>
      <h1 className="font-semibold text-xl my-3">Pizza</h1>
      <p className="text-gray-500 text-sm ">
        A delicious combination of cheese and pepperoni
      </p>
      <button className="bg-yellow-500 py-1 px-8 rounded-full font-bold text-white mt-4">
        Add to Cart $10.99
      </button>
    </div>
  );
}
