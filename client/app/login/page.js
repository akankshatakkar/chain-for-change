'use client';
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useCookies } from "react-cookie"

const LogIn = () => {
    const router = useRouter();
    const [cookies, setCookie, removeCookie] = useCookies(['user']);
    const [category, setCategory] = useState("");
  //   console.log(category);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = async emailPass => {
      // console.log(emailPass)
      // console.log(category)
  
      const data = { ...emailPass, category}
      console.log(data)
  
      let res = await fetch("api/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
        let response = await res.json();
        
        if (response.success) {
          // localStorage.setItem("token", response.token);
          console.log("setting cookies");
          setCookie("user", JSON.stringify(response.token),{
            path: "/",
            maxAge: 3600, // Expires after 1hr
            sameSite: true,
          });
          setCookie("category",JSON.stringify(response.category),{
            path: "/",
            maxAge: 3600, // Expires after 1hr
            sameSite: true,
          });
          
          console.log("cookies set");
          toast.success("You are Logged In", {
            position: "bottom-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          setTimeout(() => {
            router.push("/");
          }, 3000);
        } else {
          console.log("error");
          toast.error(response.error, {
            position: "bottom-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
  
  
    }
      ;
  return ( <div className=" sm:flex sm:min-h-screen  px-4 sm:px-6 md:px-4 lg:px-16 xl:px-48 2xl:px-60 py-10 bg-primary/20">
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
    {/* <div className="flex flex-col bg-gray-100 h-full p-6 md:pl-8 lg:pl-32 sm:w-7/12">
      <div className="text-3xl sm:text-4xl font-bold py-4">Log In</div>
      <div className="flex text-base sm:text-xl">
        Dont have an account ?{" "}
        <p
          className="cursor-pointer text-primary font-semibold pl-2"
          onClick={() => {
            router.push("/signup");
          }}
        >
          Register{" "}
        </p>{" "}
      </div>
      <div className="text-black-color/50 pt-6 font-semibold text-base sm:text-lg">
        Log in as :
      </div>
      <div className="flex flex-row py-4 justify-evenly">
        <div
          className={`flex items-center border-2 w-full mr-10 text-base sm:text-lg pr-10 rounded-lg px-4 py-3 ${
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
          <label className="ml-3" htmlFor="philanthropist">
            Philanthropist
          </label>
        </div>
        <div
          className={`flex items-center border-2 w-full text-base sm:text-lg pr-20 rounded-lg px-4 py-3 ${
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
              <label className="ml-3" htmlFor="ngo">
                NGO
              </label>
            </div>
          </div> 
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-4 pt-6">
      <input type="email" {...register("email", { required: true })} placeholder="Email"  className='inputField'/>
      <input type="password" {...register("password", { required: true })} placeholder="Password"  className='inputField'/>
      
      
      <button
          type="submit"
          onClick={handleSubmit(onSubmit)}
          className="font-bold text-white text-md rounded-lg h-12 tracking-widest py-2 bg-primary/90 "
        >
          Log In
        </button>
    </form>
        </div> */}
        <div className="flex flex-col bg-gray-100 p-6 md:pl-8 lg:pl-12 2xl:pl-32 w-full md:w-7/12">
        <div className="flex font-bold text-primary sm:hidden tracking-widest text-lg">Chain for change</div>
  <div className="text-3xl sm:text-4xl font-bold py-4">Log In</div>
  <div className="flex text-base sm:text-xl">
    Dont have an account ?{" "}
    <p
      className="cursor-pointer text-primary font-semibold pl-2"
      onClick={() => {
        router.push("/signup");
      }}
    >
      Register{" "}
    </p>{" "}
  </div>
  <div className="text-black-color/50 pt-6 font-semibold text-base sm:text-lg">
    Log in as :
  </div>
  <div className="flex flex-col space-y-4 lg:space-y-0 lg:flex-row py-4 justify-evenly">
    <div onClick={() => setCategory("philanthropist")}
      className={`flex items-center border-2 w-full cursor-pointer mr-10 text-base sm:text-lg pr-10 rounded-lg px-4 py-3 ${
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
      className={`flex items-center border-2 w-full cursor-pointer text-base sm:text-lg pr-20 rounded-lg px-4 py-3 ${
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
  <form
    onSubmit={handleSubmit(onSubmit)}
    className="flex flex-col space-y-4 pt-6"
  >
    <input
      type="email"
      {...register("email", { required: true })}
      placeholder="Email"
      className="inputField"
    />
    <input
      type="password"
      {...register("password", { required: true })}
      placeholder="Password"
      className="inputField"
    />
    <button
      type="submit"
      onClick={handleSubmit(onSubmit)}
      className="font-bold text-white text-md rounded-lg h-12 tracking-widest py-2 bg-primary/90 "
    >
      Log In
    </button>
  </form>
</div>

      </div>
    </div>
          
                );
            };
            
            export default LogIn;