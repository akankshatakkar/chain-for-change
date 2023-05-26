import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";

const NgoSignUp = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  // const [plans, setPlans] = useState([""]);
  // const [history, setHistory] = useState([""]);
  const onSubmit = async(e) => {
    console.log(e);
    // console.log(plans);
    // console.log(history);

    const data = {...e}

    console.log(data)

    let res = await fetch(`api/addNgo`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      let response = await res.json();

      // ------------------- //// addNews call -> api/addNews --> news ->CATEGORY : newNgo --> 
      // "A new ngo is found do check out " ` name ` hopfully link

      // amount oid 


      toast.success("Your account has been created", {
        position: "bottom-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setTimeout(() => {
        router.push("/login");
      }, 3000);
    

  };


  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col space-y-1.5"
      >
        <div className="flex flex-col md:flex-row space-y-1.5 md:space-y-0 md:space-x-4">
        <input
          type="text"
          {...register("name", { required: true })}
          placeholder="NGO Name"
          className="inputField md:w-[80%]"
        />
        <input
          type="email"
          {...register("email", { required: true })}
          placeholder="Email"
          className="inputField"
        />
        </div >

        <input
          type="tel"
          {...register("phoneNumber")}
          placeholder="Contact Number"
          className="inputField"
        />
        <div className="flex flex-row ">
          <div className=" rounded-sm border-b px-1 py-2">Target Field : </div>
          <select {...register("target")} className="inputField" defaultValue="">
          <option value="" disabled >Select an option</option>
            <option value="generalSupport">General Support</option>
            <option value="education">Education</option>
            <option value="health">Health</option>
            <option value="HandP">Hunger and Poverty</option>
            <option value="environment">Environment</option>
            <option value="humanitarianAid">Humanitarian Aid</option>
            <option value="animals">Animals</option>
            <option value="artsAndCulture">Arts and Culture</option>
            <option value="other">Other</option>
          </select>
        </div>

        <input
          type="text"
          {...register("description")}
          placeholder="Description of the Cause"
          className="inputField"
        />
        <input
          type="text"
          {...register("image")}
          placeholder="Image Link"
          className="inputField"
        />

        <input
          type="password"
          {...register("password", { required: true })}
          placeholder="Password"
          className="inputField"
        />

        {errors.exampleRequired && <span>This field is required</span>}

        <button
          type="submit"
          onClick={handleSubmit(onSubmit)}
          className="font-bold text-white text-md rounded-lg h-12 tracking-widest py-2 bg-primary/90 "
        >
          Create Account
        </button>
      </form>
    </>
  );
};

export default NgoSignUp;
