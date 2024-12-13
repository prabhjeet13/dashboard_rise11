import React from 'react'
import { GrDashboard } from "react-icons/gr";
import { VscBriefcase } from "react-icons/vsc";
import { TbActivityHeartbeat } from "react-icons/tb";
import { LiaCalendarSolid } from "react-icons/lia";
import { LuFileSpreadsheet } from "react-icons/lu";
import { PiHandFist } from "react-icons/pi";
import pic from "../assets/judtice.png"
import DashRight from '../components/DashRight';
const Dashboard = () => {
  return (
    <div className='w-[11/12] max-w-[1260px] flex gap-5 p-2 mx-auto'>
        <div className='w-[20%] flex-col gap-5 items-center'>
          <div className='flex-col m-2 p-2'>
            <div className='flex gap-2 mt-5 p-2 items-center'>
                <div className='text-blue-400'>
                    <GrDashboard/>
                </div>
                <div>
                    <span className='font-mono text-base font-semibold text-opacity-55 text-gray-600'>Dashboard</span>
                </div>
            </div>
            <div className='flex gap-2  p-2 items-center'>
                <div className='text-blue-400'>
                    <VscBriefcase/>
                </div>
                <div>
                    <span className='font-mono text-base font-semibold text-opacity-55 text-gray-600'>My Cases</span>
                </div>
            </div>
            <div className='flex gap-2 p-2 items-center'>
                <div className='text-blue-400'>
                    <TbActivityHeartbeat/>
                </div>
                <div>
                    <span className='font-mono text-base font-semibold text-opacity-55 text-gray-600'>Activities</span>
                </div>
            </div>
            <div className='flex gap-2 p-2 items-center'>
                <div className='text-blue-400'>
                    <LiaCalendarSolid/>
                </div>
                <div>
                    <span className='font-mono text-base font-semibold text-opacity-55 text-gray-600'>Calendar</span>
                </div>
            </div>
            <div className='flex gap-2 p-2 items-center'>
                <div className='text-blue-400'>
                    <LuFileSpreadsheet/>
                </div>
                <div>
                    <span className='font-mono text-base font-semibold text-opacity-55 text-gray-600'>Files</span>
                </div>
            </div>
            <div className='flex gap-2 p-2 items-center'>
                <div className='text-blue-400'>
                    <PiHandFist/>
                </div>
                <div>
                    <span className='font-mono text-base font-semibold text-opacity-55 text-gray-600'>Open a Dispute</span>
                </div>
            </div>
            </div>

            <div >
                <img className='w-full mb-1' src = {pic}/>
            </div>

        </div>

        <div className='w-[86%] rounded-md bg-blue-50 '>
            <DashRight />
        </div>
    </div>
  )
}

export default Dashboard