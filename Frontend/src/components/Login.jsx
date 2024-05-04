import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const userinfo = {
      email: data.email,
      password: data.password,
    };
    await axios
      .post("http://localhost:5000/user/login", userinfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success("Successfully Logined!");
          document.getElementById("my_modal_3").close();

          setTimeout(() => {
            localStorage.setItem("user", JSON.stringify(res.data.user));

            window.location.reload();
          }, 1000);
        } else {
          toast.error("Logined Failed!!");
        }
      })
      .catch((err) => {
        console.log(err.message);
        alert("error creating user");
        setTimeout(() => {}, 2000);
      });
  };

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
            <button
              className="btn  btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => document.getElementById("my_modal_3").close()}
            >
              ✕
            </button>
            <div className="h-[100%] items-center justify-around w-[100%] flex flex-col border rounded-2xl m-[1rem] p-[1rem]">
              <div className="font-bold  text-lg m-[0.5rem]">
                <h1 className="font-bold text-3xl ">Login</h1>
              </div>

              <div className="m-[0.5rem]">
                <span className="text-lg m-[0.5rem]">Email:</span>
                <input
                  {...register("email", { required: true })}
                  type="email"
                  className="m-[0.3rem] outline-none border-none rounded-xl text-sm bg-black h-[2rem] text-white font-semibold p-[1rem] w-[27rem]"
                />
                {errors.exampleRequired && <span>email field is required</span>}
              </div>
              <div className="m-[0.5rem]">
                <span className="text-lg m-[0.5rem]">Password:</span>
                <input
                  {...register("password", { required: true })}
                  type="password"
                  className="m-[0.3rem] outline-none border-none rounded-xl text-xl bg-black text-white p-[1rem] h-[2rem] font-semibold w-[27rem]"
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
