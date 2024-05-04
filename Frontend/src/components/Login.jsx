import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form
            onSubmit={handleSubmit(onSubmit)}
            method="dialog"
            className="h-auto w-[100%] flex flex-col items-center justify-around"
          >
            {/* if there is a button in form, it will close the modal */}
            <button className="btn  btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
            <div className="h-[100%] items-center justify-around w-[100%] flex flex-col border rounded-2xl m-[1rem] p-[1rem]">
              <div className="font-bold  text-lg m-[0.5rem]">
                <h1 className="font-bold text-3xl ">Login</h1>
              </div>
              <div className="m-[0.5rem]">
                {" "}
                <span className="text-lg m-[0.5rem]">Name:</span>
                <input
                  {...register("name", { required: true })}
                  type="text"
                  className="m-[0.3rem] outline-none border-none rounded-xl text-sm bg-black h-[2rem] text-white font-semibold p-[1rem] w-[100%]"
                />
                {errors.exampleRequired && <span>Name field is required</span>}
              </div>
              <div className="m-[0.5rem]">
                <span className="text-lg m-[0.5rem]">Email:</span>
                <input
                  {...register("email", { required: true })}
                  type="email"
                  className="m-[0.3rem] outline-none border-none rounded-xl text-sm bg-black h-[2rem] text-white font-semibold p-[1rem] w-[100%]"
                />
                {errors.exampleRequired && <span>email field is required</span>}
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
              <button type="submit" className="btn btn-accent ">
                Login
              </button>
            </div>
            <div className="w-[100%] text-center">
              <span>
                <h1>
                  Don't have an account ?{" "}
                  <Link to="/signup" className="text-blue-700">
                    {" "}
                    Signup
                  </Link>
                </h1>
              </span>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default Login;
