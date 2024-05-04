import React from "react";

const Cards = ({ item }) => {
  return (
    <div>
      <div className="card m-[2rem] dark:bg-black dark:border-2 dark:border-cyan-700 hover:scale-105 duration-300 cursor-pointer border bg-gray-900 text-white w-96 p-[1rem] shadow-xl">
        <figure>
          <img className="rounded-lg dark:border h-[11rem] w-auto" src={item.image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{item.name}</h2>
          <div className="badge badge-secondary font-bold">{item.category}</div>
          <p>{item.title}</p>
          <div className="card-actions justify-between">
            <div className="mt-[0.8rem] rounded-lg border p-[0.5rem]"><h1>${item.price}</h1></div>
            <button className="btn  btn-primary hover:bg-black hover:border-white hover:text-white duration-150">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
