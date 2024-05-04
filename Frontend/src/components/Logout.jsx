import React from "react";
import { useAuth } from "../Context/Authprovider";
import toast from "react-hot-toast";

const Logout = () => {
  const [authuser, setAuthuser] = useAuth();
  const handellogout = () => {
    try {
      setAuthuser({
        ...authuser,
        user: null,
      });
      localStorage.removeItem("user");
      toast.success("Logout successfully");

      setTimeout(() => {
        window.location.reload();
      }, 2000);
    } catch (error) {
      toast.error("Error:" + error.message);
      console.log(error);
      setTimeout(() => {}, 2000);
    }
  };
  return (
    <div>
      <button
        onClick={handellogout}
        className="rounded-xl p-[1rem] m-[0.5rem bg-black border text-white cursor-pointer]"
      >
        Logout
      </button>
    </div>
  );
};

export default Logout;
