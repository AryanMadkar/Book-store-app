import React, { useEffect } from "react";

const BAnner = () => {
  return (
    <div>
      <div
        className={` flex mt-[0rem]  flex-col md:flex-row w-[100%] justify-around`}
      >
        <div className="w-full md:w-1/2 m-[1rem] h-screen flex flex-col ">
          <h1 className="font-bold text-5xl m-[1rem]  ">
            Hello,Welcome Here to learn Something new everyday!!!
          </h1>
          <p className="m-[1rem]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries
          </p>
          <input
            type="text"
            placeholder="Type here"
            className="m-[1rem] input input-bordered w-[100%] max-w-xs"
          />

          <button className="btn  w-[7rem] ml-4 mt-4 hover:bg-white hover:text-black transition btn-accent">
            Secondary
          </button>
        </div>
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center">
          <div className="rounded-xl h-[100%] w-[100%]  ">
            <dotlottie-player
              src="https://lottie.host/ebbedc54-2ff9-40d8-9a22-737e190384ee/OaPOjoVgFr.json"
              background="transparent"
              speed="1"
              loop
              autoplay
            ></dotlottie-player>
          </div>
        </div>
      </div>
      <div className="w-full h-2px border"></div>
    </div>
  );
};

export default BAnner;
