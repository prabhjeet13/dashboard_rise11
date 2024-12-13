import React from 'react'
import { SlLocationPin } from "react-icons/sl";
import { PiChatCenteredTextBold } from "react-icons/pi";

const Con1 = ({icon,head,text}) => {
  return (
    <div >
            <div className='flex gap-1 items-center p-2 mt-2 ml-2 mr-2 -mb-2'>
            {
                icon == "1" ? (<SlLocationPin className='text-3xl text-blue-400'/>) : (<PiChatCenteredTextBold className='text-3xl text-blue-400'/>)
            }
            <span className='font-bold font-mono text-lg text-gray-700'>{head}</span>
            </div>
            <div className='mt-2 p-2 ml-5'> 
                <input className='border-2 bg-gray-200 rounded-md text-gray-600'/> 
            </div>
            <div className='p-2 ml-5 font-mono text-xs text-gray-500 mt-2'>{text}</div>
            <div className='p-2 ml-5 font-mono text-xs text-gray-500 flex gap-2 items-center'>
                <div>
                    <input type = 'radio' name = 'chk' checked/>
                    <label> yes </label>
                </div>
                <div>
                    <input type = 'radio' name = 'chk' />
                    <label> no </label>
                </div>
                
            </div>
    </div>
  )
}

export default Con1