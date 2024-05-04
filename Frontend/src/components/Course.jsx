import React, { useEffect, useState } from "react";
import NAvbar from "./NAvbar";
import Footer from "./Footer";
import Cards from "./Cards";
import axios from "axios";
import { Link } from "react-router-dom";
const Course = () => {
  const [book,setBook] = useState([])
  useEffect(()=>{
    const getbook = async()=>{
      try {
        const res=await axios.get("http://localhost:5000/book1")
        console.log(res.data);
        setBook(res.data)
      } catch (error) {
        console.log(error.message);
      }
    }
    getbook()
  },[])
  return (
    <div>
      <NAvbar />

      <div className="flex flex-col items-center min-h-[100vh]">
        <div className="flex  flex-col items-center justify-center">
          <h1 className="text-4xl m-[1rem] text-white">
            We're delighted to have you <span>Here!!!</span>
          </h1>
          <p className="w-[80%] text-center mb-[1rem] text-gray-500">
            um is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets{" "}
          </p>
          <Link to="/">
            {" "}
            <button className="btn btn-outline mb-[1rem]">Back</button>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3  mt-12">
          {book.map((item) => (
            <Cards item={item} key={item.id} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Course;
