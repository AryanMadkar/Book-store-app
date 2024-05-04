import React from "react";
import NAvbar from "./NAvbar";
import Footer from "./Footer";
import { Link, useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import  axios  from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
const Signup = () => {
  const navigate = useNavigate();
  const location =useLocation()
  const from = location.state?.from?.pathname || "/"
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const userinfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    };
    await axios
      .post("http://localhost:5000/user/signup", userinfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success('Successfully Signed up!')
          localStorage.setItem("user", JSON.stringify(res.data.user));
          setTimeout(()=>{
            navigate(from,{replace:true})
          },2000)
        } else {
          toast.error("Signing up Failed!!")
        }

      })
      .catch((err) => {
        console.log(err.message);
        alert("error creating user");
      });
  };

  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap items-center justify-center">
          
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            {" "}
            <div className=" bg-gray-900  border rounded-lg w-[34rem] p-8 flex flex-col md:ml-auto mt-10 md:mt-0">
              <h2 className="text-gray-200 text-lg font-medium title-font mb-5">
                Sign Up
              </h2>
              <div className="relative mb-4">
                <div className="m-[0.5rem]">
                  {" "}
                  <span className="text-lg m-[0.5rem]">Name:</span>
                  <input
                    {...register("fullname", { required: true })}
                    type="text"
                    className="m-[0.3rem] outline-none border-none rounded-xl text-sm bg-black h-[2rem] text-white font-semibold p-[1rem] w-[27rem]"
                  />
                  {errors.fullname && <span>Name field is required</span>}
                </div>
                <div className="m-[0.5rem]">
                  <span className="text-lg m-[0.5rem]">Email:</span>
                  <input
                    {...register("email", { required: true })}
                    type="email"
                    className="m-[0.3rem] outline-none border-none rounded-xl text-sm bg-black h-[2rem] text-white font-semibold p-[1rem] w-[27rem]"
                  />
                  {errors.email && <span>email field is required</span>}
                </div>
                <div className="m-[0.5rem]">
                  <span className="text-lg m-[0.5rem]">Password:</span>
                  <input
                    {...register("password", { required: true })}
                    type="password"
                    className="m-[0.3rem] outline-none border-none rounded-xl text-xl bg-black text-white p-[1rem] h-[2rem] font-semibold w-[27rem]"
                  />
                  {errors.password && <span>password field is required</span>}
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
