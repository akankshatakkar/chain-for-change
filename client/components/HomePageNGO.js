import React from 'react'
import NavBarNGO from './NavBarNGO'
import Image from 'next/image'

const HomePageNGO = () => {
  return (
  <div className='bg-light-color/50'>
    <NavBarNGO/>
    <div className='bg-gradient-radial bg-black from-light-color/20 via-primary/20 to-black flex py-20 flex-col'>
      <div className=' py-3 mx-auto text-7xl text-center text-white'>Our mission is to help Bring <br></br> <span className='text-primary'> Creative Projects </span>  to life</div>
      <div className='text-white text-center '> Our mission is to help BringOur mission is to helOur mission is to help BringOur mission is to helOur mission<br></br> is to help BringOur mission is to help BringOur mission is to help BringOur mission is to help Bring </div>
      <div className='flex flex-row justify-center items-center mt-8 h-20 w-full '>
        <div className='m-0.5 w-1/5 flex flex-col items-center justify-center bg-black/40 shadow-[0_0px_10px_4px_rgba(14,131,136,1)] h-full py-auto'><div className='text-white '>Amount Raised :</div><div className='text-white text-xl font-bold'>1000</div></div>
        <div className='m-0.5 w-1/5 flex-col items-center justify-center flex bg-black/40 shadow-[0_0px_10px_4px_rgba(14,131,136,1)] h-full py-auto'><div className='text-white '>Target :</div><div className='text-white text-xl font-bold'>10000</div></div>
        <div className='m-0.5 w-1/5 flex flex-col items-center justify-center bg-black/40 shadow-[0_0px_10px_4px_rgba(14,131,136,1)] h-full py-auto'><div className='text-white '>Days Left :</div><div className='text-white text-xl font-bold'>7</div></div>
      </div>
    </div>
    <div className='px-16 mx-auto space-x-6 flex py-4 flex-wrap justify-start '>
      <div className='w-1/4 rounded-lg p-2'> 
        <img src='https://www.indiadonates.org/uploads/campaigns/providing-ration-to-the-elderly--20230331-100307.png' alt='campaign-image' className='mix-blend-color-burn'/>
        {/* <img src="https://www.indiadonates.org/uploads/campaigns/empowering-differently-abled-through-entrepreneurship-20230509-110517.png"/> */}
        <div className="font-semibold text-xl">Name of campaign</div>
        <div className='text-sm text-black/60 mb-2'>Category</div>
        <div className='my-1' >Our mission is to help BringOur mission is to helOur mission is to help BringOur mission is to helOur mission
is to help BringOur mission is to help Bri</div>
        <div className='mt-4 text-black/30 text-sm'><span className='font-semibold text-xl text-black'>10000 </span> Raised of target goal</div>
        {/* progress div */}
        <div className='w-full h-2 bg-green-300/30 rounded-lg my-4'>
          <div className='h-full w-1/5 bg-green-700 text-right rounded-lg '></div>
        </div>
        <div className='flex justify-between px-1'>
          <div>Status</div>
          <div>Supporters</div>
        </div>
        <div className='flex justify-center  items-center mt-6'>
        <button
      type="submit"
      className="w-1/2 text-center font-bold text-white text-md rounded-lg h-12 tracking-widest py-2 bg-primary/90 "
    >
      Donate
    </button></div>
        </div>
        
        
      </div>
    </div>
  )
}

export default HomePageNGO