import React, { useState } from 'react';
import { GrDashboard } from "react-icons/gr";
import { VscBriefcase } from "react-icons/vsc";
import { TbActivityHeartbeat } from "react-icons/tb";
import { LiaCalendarSolid } from "react-icons/lia";
import { LuFileSpreadsheet } from "react-icons/lu";
import { PiHandFist } from "react-icons/pi";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import pic from "../assets/judtice.png";
import DashRight from '../components/DashRight';

const Dashboard = () => {
  const [showSidebar, setShowSidebar] = useState(true); // State to toggle sidebar

  return (
    <div className="w-[11/12] max-w-[1260px] flex gap-5 p-2 mx-auto">
      {/* Sidebar */}
      <div
        className={`flex-col gap-5 items-center transition-all duration-300 ${
          showSidebar ? 'w-[20%]' : 'w-0 overflow-hidden invisible'
        }`}
      >
        <div className={`flex-col m-2`}>
          <div className="flex gap-2 mt-5 p-2 items-center">
            <div className="text-blue-400">
              <GrDashboard />
            </div>
            <div>
              <span className="font-mono text-base font-semibold text-opacity-55 text-gray-600">
                Dashboard
              </span>
            </div>
          </div>
          <div className="flex gap-2 p-2 items-center">
            <div className="text-blue-400">
              <VscBriefcase />
            </div>
            <div>
              <span className="font-mono text-base font-semibold text-opacity-55 text-gray-600">
                My Cases
              </span>
            </div>
          </div>
          <div className="flex gap-2 p-2 items-center">
            <div className="text-blue-400">
              <TbActivityHeartbeat />
            </div>
            <div>
              <span className="font-mono text-base font-semibold text-opacity-55 text-gray-600">
                Activities
              </span>
            </div>
          </div>
          <div className="flex gap-2 p-2 items-center">
            <div className="text-blue-400">
              <LiaCalendarSolid />
            </div>
            <div>
              <span className="font-mono text-base font-semibold text-opacity-55 text-gray-600">
                Calendar
              </span>
            </div>
          </div>
          <div className="flex gap-2 p-2 items-center">
            <div className="text-blue-400">
              <LuFileSpreadsheet />
            </div>
            <div>
              <span className="font-mono text-base font-semibold text-opacity-55 text-gray-600">
                Files
              </span>
            </div>
          </div>
          <div className="flex gap-2 p-2 items-center">
            <div className="text-blue-400">
              <PiHandFist />
            </div>
            <div>
              <span className="font-mono text-base font-semibold text-opacity-55 text-gray-600">
                Open a Dispute
              </span>
            </div>
          </div>
        </div>
        <div>
          <img className="w-full mb-1" src={pic} alt="Justice" />
        </div>
      </div>

      {/* Main Content */}
      <div className={`w-[86%] rounded-md bg-blue-50 relative ${!showSidebar && 'w-[100%]'}`}>
        {/* Toggle Button */}
        <button
          onClick={() => setShowSidebar(!showSidebar)}
          className={`absolute -top-[0.5] left-2 bg-gray-200 px-3 py-2 rounded-md shadow-md z-10 flex items-center justify-center sidebar:hidden`}
        >
          {showSidebar ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </button>
        <DashRight />
      </div>
    </div>
  );
};

export default Dashboard;


// import React, { useState } from 'react';
// import { GrDashboard } from "react-icons/gr";
// import { VscBriefcase } from "react-icons/vsc";
// import { TbActivityHeartbeat } from "react-icons/tb";
// import { LiaCalendarSolid } from "react-icons/lia";
// import { LuFileSpreadsheet } from "react-icons/lu";
// import { PiHandFist } from "react-icons/pi";
// import pic from "../assets/judtice.png";
// import DashRight from '../components/DashRight';

// const Dashboard = () => {
//   const [showSidebar, setShowSidebar] = useState(true); // State to toggle sidebar

//   return (
//     <div className="w-[11/12] max-w-[1260px] flex gap-5 p-2 mx-auto">
//       {/* Sidebar */}
//       <div
//         className={`flex-col gap-5 items-center transition-all duration-300 ${
//           showSidebar ? 'w-[20%]' : 'w-0 overflow-hidden'
//         }`}
//       >
//         <div className={`flex-col m-2 p-2 ${!showSidebar && 'hidden'}`}>
//           <div className="flex gap-2 mt-5 p-2 items-center">
//             <div className="text-blue-400">
//               <GrDashboard />
//             </div>
//             <div>
//               <span className="font-mono text-base font-semibold text-opacity-55 text-gray-600">
//                 Dashboard
//               </span>
//             </div>
//           </div>
//           <div className="flex gap-2 p-2 items-center">
//             <div className="text-blue-400">
//               <VscBriefcase />
//             </div>
//             <div>
//               <span className="font-mono text-base font-semibold text-opacity-55 text-gray-600">
//                 My Cases
//               </span>
//             </div>
//           </div>
//           <div className="flex gap-2 p-2 items-center">
//             <div className="text-blue-400">
//               <TbActivityHeartbeat />
//             </div>
//             <div>
//               <span className="font-mono text-base font-semibold text-opacity-55 text-gray-600">
//                 Activities
//               </span>
//             </div>
//           </div>
//           <div className="flex gap-2 p-2 items-center">
//             <div className="text-blue-400">
//               <LiaCalendarSolid />
//             </div>
//             <div>
//               <span className="font-mono text-base font-semibold text-opacity-55 text-gray-600">
//                 Calendar
//               </span>
//             </div>
//           </div>
//           <div className="flex gap-2 p-2 items-center">
//             <div className="text-blue-400">
//               <LuFileSpreadsheet />
//             </div>
//             <div>
//               <span className="font-mono text-base font-semibold text-opacity-55 text-gray-600">
//                 Files
//               </span>
//             </div>
//           </div>
//           <div className="flex gap-2 p-2 items-center">
//             <div className="text-blue-400">
//               <PiHandFist />
//             </div>
//             <div>
//               <span className="font-mono text-base font-semibold text-opacity-55 text-gray-600">
//                 Open a Dispute
//               </span>
//             </div>
//           </div>
//         </div>
//         <div>
//           <img className="w-full mb-1" src={pic} alt="Justice" />
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className={`w-[86%] rounded-md bg-blue-50 relative ${!showSidebar && 'w-[100%]'}`}>
//         {/* Toggle Button */}
//         <button
//           onClick={() => setShowSidebar(!showSidebar)}
//           className="absolute top-2 left-2 bg-gray-200 px-3 py-2 rounded-md shadow-md z-10"
//         >
//           {showSidebar ? 'Hide Sidebar' : 'Show Sidebar'}
//         </button>
//         <DashRight />
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

// import React, { useState } from 'react'
// import { GrDashboard } from "react-icons/gr";
// import { VscBriefcase } from "react-icons/vsc";
// import { TbActivityHeartbeat } from "react-icons/tb";
// import { LiaCalendarSolid } from "react-icons/lia";
// import { LuFileSpreadsheet } from "react-icons/lu";
// import { PiHandFist } from "react-icons/pi";
// import pic from "../assets/judtice.png"
// import DashRight from '../components/DashRight';
// const Dashboard = () => {

//   return (
//     <div className='w-[11/12] max-w-[1260px] flex gap-5 p-2 mx-auto'>
//         <div className='w-[20%] flex-col gap-5 items-center'>
//           <div className={`flex-col m-2 p-2`}>
//                 <div className='flex gap-2 mt-5 p-2 items-center'>
//                     <div className='text-blue-400'>
//                         <GrDashboard/>
//                     </div>
//                     <div>
//                         <span className='font-mono text-base font-semibold text-opacity-55 text-gray-600'>Dashboard</span>
//                     </div>
//                 </div>
//                 <div className='flex gap-2  p-2 items-center'>
//                     <div className='text-blue-400'>
//                         <VscBriefcase/>
//                     </div>
//                     <div>
//                         <span className='font-mono text-base font-semibold text-opacity-55 text-gray-600'>My Cases</span>
//                     </div>
//                 </div>
//                 <div className='flex gap-2 p-2 items-center'>
//                     <div className='text-blue-400'>
//                         <TbActivityHeartbeat/>
//                     </div>
//                     <div>
//                         <span className='font-mono text-base font-semibold text-opacity-55 text-gray-600'>Activities</span>
//                     </div>
//                 </div>
//                 <div className='flex gap-2 p-2 items-center'>
//                     <div className='text-blue-400'>
//                         <LiaCalendarSolid/>
//                     </div>
//                     <div>
//                         <span className='font-mono text-base font-semibold text-opacity-55 text-gray-600'>Calendar</span>
//                     </div>
//                 </div>
//                 <div className='flex gap-2 p-2 items-center'>
//                     <div className='text-blue-400'>
//                         <LuFileSpreadsheet/>
//                     </div>
//                     <div>
//                         <span className='font-mono text-base font-semibold text-opacity-55 text-gray-600'>Files</span>
//                     </div>
//                 </div>
//                 <div className='flex gap-2 p-2 items-center'>
//                     <div className='text-blue-400'>
//                         <PiHandFist/>
//                     </div>
//                     <div>
//                         <span className='font-mono text-base font-semibold text-opacity-55 text-gray-600'>Open a Dispute</span>
//                     </div>
//                 </div>
//             </div>
//             <div>
//                 <img className='w-full mb-1' src = {pic}/>
//             </div>
//         </div>
//         <div className='w-[86%] rounded-md bg-blue-50 '>
//             <DashRight />
//         </div>
//     </div>
//   )
// }

// export default Dashboard