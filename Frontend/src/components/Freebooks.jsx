import { useState,useEffect } from "react";
import React from "react";
import Slider from "react-slick";
import Cards from "./Cards";
import axios from "axios";

const Freebooks = () => {

  const [book,setBook] = useState([])
  useEffect(()=>{
    const getbook = async()=>{
      try {
        const res=await axios.get("http://localhost:5000/book1")
        console.log(res.data);
        
        setBook(res.data.filter((data) => data.category === "Free"))
      } catch (error) {
        console.log(error.message);
      }
    }
    getbook()
  },[])

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  return (
    <div>
      <div className="flex mx-[1rem] p-[1rem] flex-col ">
        <div className="flex flex-col m-[1rem]">
          <h1 className="font-bold text-4xl text-white mb-[1rem]">
            Free offered courses
          </h1>
          <p className="font-semibold text-sm">
            orem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since t
          </p>
        </div>
        <div className="">
          <Slider {...settings}>
            {book.map((item) => (
              <Cards item={item} key={item.id} />
            ))}
          </Slider>
        </div>
      </div>
      <div className="w-full h-2px border mt-[2rem]"></div>
    </div>
  );
};

export default Freebooks;
