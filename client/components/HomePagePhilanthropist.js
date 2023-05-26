import React from 'react'
import NavBarPhilanthropist from "./NavBarPhilanthropist"

import Campaign from "../models/Campaign"
import mongoose from 'mongoose';

const HomePagePhilanthropist = async () => {
  const { campaigns } = await getData()
  // console.log("in getDATA HOMEPAGE")
  console.log(campaigns)
  return (
    <>
    <NavBarPhilanthropist/>
    <div>
    {/* ---------------- Search bar --------- */}

    <div className='h-[40vh] w-full bg-pink-300 '>BANNER COMMING SOON</div>
    
    <div className='mt-4 pl-6 text-2xl font-semibold'>On Going Campaigns:</div>
    
    <div className='bg-red-200 h-10 w-full'>
  {campaigns.map((item) => (
    <div key={item.title}>{item.title}</div>
  ))}
</div>


     
    </div>
  </>
  )
}

async function getData() {
  if (!mongoose.connections[0].readyState) {
          await mongoose.connect(process.env.MONGO_URI);
        }
  let campaigns = await Campaign.find();
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  // Recommendation: handle errors
  // if (!res.ok) {
  //   // This will activate the closest `error.js` Error Boundary
  //   throw new Error('Failed to fetch data');
  // }
 
  return {campaigns: JSON.parse(JSON.stringify(campaigns))};
}


export default HomePagePhilanthropist