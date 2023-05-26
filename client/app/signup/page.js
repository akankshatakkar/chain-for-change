'use client';
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PhilanthropistSignUp from "./PhilanthropistSignUp";
import NgoSignUp from "./NgoSignUp";

const Signup = () => {
  const router = useRouter();
  const [category, setCategory] = useState("philanthropist");
  return (
    <div className=" sm:flex sm:min-h-screen  px-4 sm:px-6 md:px-4 lg:px-16 xl:px-48 2xl:px-60 py-10 bg-primary/20">
     <ToastContainer
        position="bottom-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className="flex flex-col sm:justify-center sm:items-start sm:flex-row bg-gray-100  p-6 rounded-3xl">
      <div className="sm:justify-center h-full bg-primary/90 hidden rounded-2xl sm:6/12  md:w-4/12 lg:w-4/12 sm:flex flex-col py-6 px-6 lg:px-10 text-white">
      <div className="flex font-bold tracking-widest text-lg">Chain for change</div>
      <div className="justify-center items-center flex flex-col my-auto">
      <div className="flex text-3xl sm:text-4xl ">
        Start your journey with us!
      </div>
      <div className="flex text-base sm:text-xl font-thin text-white/50 mb-8">
        With your support, countless people will receive the help they need - start making a difference today
      </div>
      </div>
      <div className="flex bg-primary p-8 rounded-xl">
        An Interesting feedback from an awesome developer.
      </div>
    </div>
        {/* <div className='h-full  w-full'></div> */}
        {/* ------------------------------------------------------- */}
        <div className="flex flex-col bg-gray-100 p-6 md:pl-8 lg:pl-12 2xl:pl-32 w-full md:w-7/12">
        <div className="flex font-bold text-primary sm:hidden tracking-widest text-lg">Chain for change</div>
        <div className="text-3xl sm:text-4xl font-bold py-1">Sign Up</div>
          <div className="flex text-xl">
            Have an account ?{" "}
            <p
              className="cursor-pointer text-primary font-semibold pl-2"
              onClick={() => {
                router.push("/login");
              }}
            >
              Log in{" "}
            </p>{" "}
          </div>
          <div className="text-black/50 pt-1 font-semibold text-lg">
            Sign up as :
          </div>
          <div className="flex flex-col space-y-4 lg:space-y-0 lg:flex-row py-1 justify-evenly">
    <div onClick={() => setCategory("philanthropist")}
      className={`flex items-center border-2 cursor-pointer w-full mr-10 text-base sm:text-lg pr-10 rounded-lg px-4 py-3 ${
        category === "philanthropist"
          ? "border-primary/80 bg-light-color/20 text-primary"
          : "border-black-color/20"
      }`}
    >
      <input
        type="checkbox"
        className="appearance-none h-4 w-4 rounded-full checked:bg-primary  ring-2 ring-offset-4 ring-black-color/20 checked:ring-primary"
        id="philanthropist"
        checked={category === "philanthropist"}
        onChange={() => setCategory("philanthropist")}
      />
      <label className="ml-3 cursor-pointer" htmlFor="philanthropist">
        Philanthropist
      </label>
    </div>
    <div onClick={() => setCategory("ngo")}
      className={`flex items-center border-2 cursor-pointer w-full text-base sm:text-lg pr-20 rounded-lg px-4 py-3 ${
        category === "ngo"
          ? "border-primary/80 bg-light-color/20 text-primary"
          : "border-black-color/20"
      }`}
    >
      <input
        type="checkbox"
        className="appearance-none h-4 w-4 rounded-full checked:bg-primary  ring-2 ring-offset-4 ring-black-color/20 checked:ring-primary"
        id="ngo"
        checked={category === "ngo"}
        onChange={() => setCategory("ngo")}
      />
      <label className="ml-3 cursor-pointer" htmlFor="ngo">
        NGO
      </label>
    </div>
  </div>
          {category == "ngo" && <NgoSignUp />}
          {category == "philanthropist" && <PhilanthropistSignUp />}
        </div>
      </div>
    </div>
  );
};

export default Signup;