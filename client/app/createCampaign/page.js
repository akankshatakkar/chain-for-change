'use client';
import React from 'react'
import NavBarNGO from '../../../components/NavBarNGO'
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useCookies } from 'react-cookie';
import {useStateContext} from "../../../context";  //for context

const CreateCampaign = () => {    
    const router = useRouter();
    const [cookies, setCookie, removeCookie] = useCookies(['user']);
    const {createCampaign} = useStateContext();
    const user = cookies['user'];
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

    const data = {...e,"user":user}

    checkIfImage(data.image, async(exists) => {
      if(exists){
        await createCampaign({ ...data, target: ethers.utils.parseUnits(data.target, 18)})
        navigate('/');
      }
      else{
        alert('Provide valid image url');
        setFlagsFromString({...data, image:''});
      }
    })

    

    console.log(data)

    let res = await fetch(`api/addCampaign`, {
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


      toast.success("Your Campaign has been created", {
        position: "bottom-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setTimeout(() => {
        router.push("/testpage");
      }, 3000);
    

  };

  return (
    <div className='bg-light-color min-h-screen'>
        <NavBarNGO></NavBarNGO>
        {/* <div>{ user  }</div> */}
        {/* 
            Ignite change and create a campaign that makes a difference. Your voice has the power to drive meaningful impact in the lives of those in need.

            Harness the power of collective action and create a campaign that leaves a lasting impact. Together, we can empower communities and create positive change.

            ** Take a step towards creating a better world. Design a campaign that amplifies your cause and helps transform lives. Start your journey of impact today. 
        
        */}
        <div className='flex justify-around p-5 bg-white mx-32 rounded-3xl'>

            <div className='w-[28%] flex flex-col justify-center items-center px-12 bg-primary/90 rounded-2xl'>
                <div className='text-xl text-white font-semibold'>Take a step towards creating a better world. Design a campaign that amplifies your cause and helps transform lives. Start your journey of impact today.</div>
            <div className='bg-black animate-pulse text-white font-semibold py-4 px-2 text-center text-lg my-10 rounded-lg'>You will get 100&#37; of the raised amount</div>
            </div>
        <div className='flex flex-col w-1/2  mt-4'>
        <div className="text-3xl text-center sm:text-4xl font-bold py-4">Create a Campaign</div>
        <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col w-full space-y-7"
      >
        
        <input
          type="text"
          {...register("title", { required: true })}
          placeholder="Title"
          className="inputField md:w-full"
        />
        

        {/* <input
          type="tel"
          {...register("phoneNumber")}
          placeholder="Contact Number"
          className="inputField"
        /> */}
        <div className="flex flex-row ">
          <div className=" rounded-sm border-b px-1 py-2">Category : </div>
          <select {...register("category")} className="inputField" defaultValue="">
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
          type="number"
          {...register("target")}
          placeholder="Target Amount"
          className="inputField"
        />
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
          type="tel"
          {...register("additionalContact")}
          placeholder="Additional Contact"
          className="inputField"
        />

        {errors.exampleRequired && <span>This field is required</span>}

        <button
          type="submit"
          onClick={handleSubmit(onSubmit)}
          className="font-bold text-white text-md rounded-lg h-12 tracking-widest py-2 bg-primary/90 "
        >
          Create Campaign
        </button>
      </form>   
      </div>
      </div>
    </div>
  )
}

export default CreateCampaign