'use client';
import Link from 'next/link'
import React from 'react'
import { useCookies } from 'react-cookie';
const HomePage = () => {
  const [cookies, setCookie, removeCookie] = useCookies(['user']);
  const user = cookies['user'];
  const category = cookies['category']
  return (
    <div className='text-3xl bg-gray-50 '>
    <h1 className='text-primary text-center pt-5 font-serif'>Homepage under development !!</h1>
    <div className='py-10'>Check out <Link className='text-blue-600' href={"/login"}>Login</Link> and <Link className='text-blue-600' href={"/signup"}>Sign up</Link></div>
    <div className='text-primary'><Link href={"/testPagePhilan"}>TEST PAGE Philanthropist</Link></div>
    <div className='text-primary'><Link href={"/testPage"}>TEST PAGE</Link></div>
    {  user && <> 
    <div className='break-words'>Your token is : {user}</div>
    
    {
        category && <div className='text-primary py-2 uppercase'>category : {category}</div>
      }
    
     <button onClick={() => removeCookie('user')} className='font-bold mt-10 ml-20 text-white text-md rounded-lg h-12 px-10 bg-blue-700/90 ' >LogOut </button>
      </ >}
      
    </div>
  )
}

export default HomePage