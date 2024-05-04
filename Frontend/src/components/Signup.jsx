import React from "react";
import NAvbar from "./NAvbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <NAvbar />
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
          <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
            <h1 className="title-font font-medium text-3xl text-gray-900">
              Slow-carb next level shoindcgoitch ethical authentic, poko
              scenester
            </h1>
            <p className="leading-relaxed mt-4">
              Poke slow-carb mixtape knausgaard, typewriter street art gentrify
              hammock starladder roathse. Craies vegan tousled etsy austin.
            </p>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            {" "}
            <div className="lg:w-2/6 md:w-1/2 bg-gray-900 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
              <h2 className="text-gray-200 text-lg font-medium title-font mb-5">
                Sign Up
              </h2>
              <div className="relative mb-4">
                <div className="m-[0.5rem]">
                  {" "}
                  <span className="text-lg m-[0.5rem]">Name:</span>
                  <input
                    {...register("name", { required: true })}
                    type="text"
                    className="m-[0.3rem] outline-none border-none rounded-xl text-sm bg-black h-[2rem] text-white font-semibold p-[1rem] w-[100%]"
                  />
                  {errors.exampleRequired && (
                    <span>Name field is required</span>
                  )}
                </div>
                <div className="m-[0.5rem]">
                  <span className="text-lg m-[0.5rem]">Email:</span>
                  <input
                    {...register("email", { required: true })}
                    type="email"
                    className="m-[0.3rem] outline-none border-none rounded-xl text-sm bg-black h-[2rem] text-white font-semibold p-[1rem] w-[100%]"
                  />
                  {errors.exampleRequired && (
                    <span>email field is required</span>
                  )}
                </div>
                <div className="m-[0.5rem]">
                  <span className="text-lg m-[0.5rem]">Password:</span>
                  <input
                    {...register("password", { required: true })}
                    type="password"
                    className="m-[0.3rem] outline-none border-none rounded-xl text-xl bg-black text-white p-[1rem] h-[2rem] font-semibold w-[100%]"
                  />
                  {errors.exampleRequired && (
                    <span>password field is required</span>
                  )}
                </div>
              </div>
              <button
                type="submit"
                className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
              >
                Signup
              </button>
              <h1 className="text-lg text-gray-500 mt-3">
                Already have an account?{" "}
                <Link to="/" className="text-blue-500">
                  Login
                </Link>
              </h1>
            </div>
          </form>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Signup;
