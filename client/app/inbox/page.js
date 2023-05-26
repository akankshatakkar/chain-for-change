import React from 'react'
import NavBarNGO from "../../../components/NavBarNGO"

const page = () => {
  var newMessage = ""
  return (
    <div>
      <NavBarNGO></NavBarNGO>

      <div className='flex flex-row justify-center items-start p-2'>
        <div className='flex flex-col w-1/4 justify-start items-center h-[85vh] overflow-y-scroll'>
          <div className='text-center text-2xl font-serif pt-4 pb-6'>Messages</div>
          <div className='flex bg-light-color/50 w-[95%] border p-1 items-center rounded-md text-center border-black h-16 pl-5'>CHAT 1</div>
        </div>
        <div className='flex flex-col w-2/3 justify-start items-center h-[85vh]  overflow-y-scroll'>
        <div className='text-center text-2xl font-serif pt-4 pb-6'>Chat Name</div>
        {/* <div className="w-full">
        {messages.map( (item) => 
        (
          <div className="flex mb-3 w-full" key={item._id}>
            
            {item.senderEmail=== (userData.email) &&<div className={`flex space-x-2  mr-auto `}> 
             <div className="text-xs my-auto"> {item.senderEmail} </div>
              <div className="text-lg">{item.message}</div></div>}
              { !(item.senderEmail=== (userData.email)) &&<div className={`flex space-x-2  ml-auto `}> 
              <div className="text-lg">{item.message}</div><div className="text-xs my-auto"> {item.senderEmail} </div>
              </div>}
            
          </div>
        ))}
      </div> */}
      <div className='w-full px-2'>
        <div className='flex mb-3 w-full'>
        <div className={`flex space-x-2  mr-auto `}>
          <div className='text-lg border border-black rounded-lg bg-light-color/60 px-4 py-2'>MY MESSAGE</div>
          </div>
        </div>
        <div className='flex mb-3 w-full'>
        <div className={`flex space-x-2  ml-auto `}>
          <div className='text-lg border border-black rounded-lg bg-primary/10 px-4 py-2'>his MESSAGE</div>
          </div>
        </div>
        
      </div>
      <div className="pt-10 flex mt-auto  space-x-5 align-middle ">
        <div className="my-auto">Add new message </div>
        <div className="flex space-x-2">
          <input
            className="inputField"
            value={newMessage}
            // onChange={(e) => {
            //   setNewMessage(e.target.value);
            // }}
          />
          <button
            className="bg-primary/60 py-auto px-6 rounded-md cursor-pointer"
            // onClick={handleSendMessage}
          >
            Send
          </button>
        </div>
      </div>
        </div>


      </div>
    
    </div>
  )
}

export default page