'use client';
import Link from 'next/link';
/* eslint-disable @next/next/no-img-element */
import React from 'react'
import {useStateContext} from "../context";

const NavBarNGO = () => {
  const {connect, address} = useStateContext();
  // const address = "0xabc";
  
  return (
    
    <>
    <nav class="bg-light-color sticky w-full z-20 top-0 left-0 border-b border-gray-200">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <a href="./" class="flex items-center">
          <img src="nv-logo.png" class="h-8 mr-3" alt="NV Logo" />
          <span class="self-center text-2xl font-semibold whitespace-nowrap "></span>
      </a>
      <div class="flex md:order-2">
      {/* createCampaign */}
          <Link href={"/"}>  
            <button class="text-white bg-primary hover:bg-dark-color focus:ring-4 focus:outline-none focus:ring-light-color font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 " onClick={() => {if(address) navigate('createCampaign')
            else connect();}}>New Campaign</button>
          </Link>
          {/* <button type="button" class="text-black-color md:ml-2 hover:text-primary focus:ring-4 focus:outline-none focus:ring-light-color font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 ">Log Out</button> */}
          
          <img src="nv-logo.png" class="h-8 ml-6 relative left-10 top-0.5" alt="NV Logo" />

          <button onClick={()=>{ 
            const currDiv = document.getElementById("navbar-sticky")
            if(currDiv.classList.contains('hidden'))
            { 
                console.log('CONTAINS')
                currDiv.classList.remove('hidden')
             } 
             else {
                console.log("NOT CONTAINS")
                currDiv.classList.add('hidden')
             }
          }} data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden bg-light-color hover:bg-primary focus:outline-none focus:ring-2 focus:ring-gray-200 " aria-controls="navbar-sticky" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
          </button>
          
      </div>
      <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
        <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-primary rounded-lg bg-light-color md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-light-color">
          <li>
            <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-primary md:hover:bg-transparent md:hover:text-primary md:p-0">How it works?</a>
          </li>
          <li>
            <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-primary md:hover:bg-transparent md:hover:text-primary md:p-0  ">About Us</a>
          </li>
          <li>
            <a href={"/inbox"} class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-primary md:hover:bg-transparent md:hover:text-primary md:p-0  ">Inbox</a>
          </li>
          <li>
            <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-primary md:hover:bg-transparent md:hover:text-primary md:p-0  ">Campaigns</a>
          </li>
          {/* <li>
            <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-primary md:hover:bg-transparent md:hover:text-primary md:p-0  ">Profile</a>
          </li> */}
        </ul>
      </div>
      </div>
    </nav>
    </>
  )
}

export default NavBarNGO