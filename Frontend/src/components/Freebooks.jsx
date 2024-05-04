import React from "react";
import list from "../../public/List.json";
import Slider from "react-slick";
import Cards from "./Cards";

const Freebooks = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  const filterData = list.filter((data) => data.category === "Free");
  console.log(filterData);
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
            {filterData.map((item) => (
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
