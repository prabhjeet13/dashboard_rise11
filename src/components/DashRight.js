import React ,{useCallback } from 'react'
import { MdDone } from "react-icons/md";
import { SlCalculator } from "react-icons/sl";
import { PiFiles } from "react-icons/pi";
import { TbNotes } from "react-icons/tb";
import { LuScrollText } from "react-icons/lu";
import { useDropzone } from 'react-dropzone';
import Con1 from './Con1';
import { MdCloudUpload } from "react-icons/md";
import { BsPlusCircle } from "react-icons/bs";
const record  = [
    {
        "No" : 1,
        "type" : "Preliminary"    
    },
    {
        "No" : 2,
        "type" : "Your Details"    
    },
    {
        "No" : 3,
        "type" : "KYC"    
    },
    {
        "No" : 4,
        "type" : "Parties"    
    },
    {
        "No" : 5,
        "type" : "Claim"    
    },
    {
        "No" : 6,
        "type" : "Review"    
    },
    {
        "No" : 7,
        "type" : "Payment"    
    }
]

const DashRight = () => {
  const onDrop = useCallback((acceptedFiles) => {
        console.log("Uploaded files:", acceptedFiles);
   }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
  return (
     <div className='flex-col gap-2 w-[11/12] items-center'>
            <div className='xlg:flex xlg:items-center m-2 p-3 md:flex md:flex-wrap sm:grid sm:grid-cols-3 sm:grid-rows-2 xsm:grid xsm:grid-cols-2 xsm:grid-rows-2'>
                 {
                    record.map((rec) => {
                        return (
                                <div className='flex-col gap-1 items-center p-3 h-20'>
                                    <div className='flex gap-1 items-center'>
                                        <span className={`${rec.No <= 4 ? "font-mono text-lg font-bold text-black" : "font-mono text-sm font-bold text-opacity-55 text-gray-400 mt-1"}`}>0{rec.No}</span>
                                        <span className='font-mono text-xs font-semibold text-opacity-55 text-gray-600'>{rec.type}</span>
                                    </div>          
                                    { rec.No <= 3 && (<div className='flex gap-1 items-center'>
                                        <div className='rounded-full bg-blue-600 border-2 border-blue-600 w-6 h-6 flex items-center justify-center'>
                                            <MdDone className = 'text-white font-bold w-3 h-4'/> 
                                        </div> 
                                        {
                                            rec.No == 3 && (<div className='h-[1] text-blue-700'>
                                                 <span>---------------</span>   
                                            </div>)
                                        }
                                        {
                                            rec.No < 3 && (<div className='w-20 h-[0.1em] bg-blue-700'>
                                            </div>)
                                        }
                                      </div> )
                                    }
                                    { rec.No >= 4 && (<div className='flex gap-1 items-center'>
                                        <div className='rounded-full w-5 h-5 border-2 border-blue-400'>
                                        </div>
                                        {
                                            rec.No >= 4 && rec.No <= 6 && (<div className='w-20  h-[0.1em]  bg-gray-400'>
                                            </div>)
                                        }
                                      </div> )
                                    } 
                                    {
                                        rec.No >= 4 && (<div className='font-bold text-opacity-55 text-gray-400 font-mono text-xs'>
                                            (Approx 5 Min)
                                        </div>)
                                    }    
                                </div>
                        )
                    })
                 }           
            </div>
            <div className='p-5 m-2 bg-white rounded-md'>
                <div className='flex gap-2 items-center mb-2'>
                    <p className='font-mono text-lg font-bold'>File your Claim.</p> <span className='font-mono text-sm font-bold text-opacity-55 text-gray-500'>(Approx 5 Minutes)</span>
                </div>
                <hr/>
                <div className='lg:flex lg:gap-5 mb-2 md:grid md:grid-cols-2 md:rows-2'>
                    <div>
                        <div className='flex gap-1 items-center p-2 mt-2 ml-2'>
                            <SlCalculator className='text-3xl text-blue-400 ' />
                            <p className='font-bold font-mono text-lg text-gray-700'>Claim Value</p>
                        </div>
                        <div>
                            <div className='flex-col gap-1 p-2 ml-5 mb-1'>
                                <label className='font-bold font-mono text-sm text-gray-400'>Contract Value</label>
                                <div className='sm:flex sm:gap-3 sm:items-center xsm:grid xsm:grid-cols-1 xsm:grid-rows-2 xsm:gap-2'>
                                    <input className='border-2 bg-gray-200 rounded-md text-gray-600'/> 
                                    <select className='border-2 border-gray-500'>
                                        <option>USD</option>
                                        <option>Rupee</option>
                                    </select>
                                </div>
                            </div>
                            <div className='flex-col gap-2 p-2 ml-5 mb-1'>
                                <label className='font-bold font-mono text-sm text-gray-400'>Claim Value</label>
                                <div className='sm:flex sm:gap-3 sm:items-center xsm:grid xsm:grid-cols-1 xsm:grid-rows-2 xsm:gap-2'>
                                    <input className='border-2 bg-gray-200 rounded-md text-gray-600'/> 
                                    <select className='border-2 border-gray-500'>
                                        <option>USD</option>
                                        <option>Rupee</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                       <Con1 icon = "1" head ="Place" text = "Is the place for the proceedings the one mentioned in the aggrement?"></Con1>
                    </div>
                    <div>
                        <Con1 icon = "2" head ="Language" text = "Is the language for the proceedings the one mentioned in the aggrement?"></Con1>
                    </div>    
                </div>
                <hr/>
                <div className='md:flex md:justify-evenly gap-5 mt-3 sm:grid sm:grid-rows-3 sm:grid-cols-2'>
                    <div>
                        <div className='flex gap-1 items-center'>
                            <p><LuScrollText className='text-3xl text-blue-400'/></p>
                            <p className='font-bold font-mono text-xl text-gray-700'>Statement</p>
                        </div>
                        <div
                        {...getRootProps()}
                        className="border-2  border-gray-400 p-7 m-2 rounded-md text-center cursor-pointer hover:border-blue-500 w-fit bg-blue-100"
                        >
                        <input {...getInputProps()} />
                        {isDragActive ? (
                            <p className="text-blue-500">Drop the files here...</p>
                        ) : (
                            <div className='my-5'>
                             <p className='text-sm font-mono font-bold text-gray-500'> Write your Statement here </p>
                             <p className='text-sm font-mono font-bold text-gray-500'>or</p>
                             <div className='flex gap-1 items-center'>
                                <MdCloudUpload className='text-3xl text-blue-400'/>
                                <span className='text-sm font-mono font-bold text-gray-500'>Upload a pdf</span>
                             </div>
                            </div>
                        )}
                        </div>
                    </div>
                    <div>
                        <div className='flex gap-1 items-center'>
                            <p><TbNotes className='text-3xl text-blue-400'/></p>
                            <p className='font-bold font-mono text-xl text-gray-700'>Aggrement under Disputes</p>
                        </div>
                        <div className='md:flex gap-1 sm:grid-rows-2 sm:grid sm:grid-cols-1'>
                            <div
                            {...getRootProps()}
                            className="border-2 border-dashed border-gray-400 p-7 m-2 rounded-md text-center cursor-pointer hover:border-blue-500 w-fit bg-blue-100"
                            >
                            <input {...getInputProps()} />
                            {isDragActive ? (
                                <p className="text-blue-500">Drop the files here...</p>
                            ) : (
                                <div className='w-fit my-2'>
                                <MdCloudUpload className='text-4xl text-blue-600 text-center align-middle mx-auto'/>
                                <p className='text-xs font-mono font-semibold text-gray-500'> Upload the Contract</p>
                                <p className='text-xs font-mono font-bold text-blue-500'>Max 2MB PDF</p>
                                </div>
                            )}
                            </div>
                            <div
                            {...getRootProps()}
                            className="border-2 border-dashed border-gray-400 p-7 m-2 rounded-md text-center cursor-pointer hover:border-blue-500 w-fit bg-blue-100 h-fit"
                            >
                            <input {...getInputProps()} />
                            {isDragActive ? (
                                <p className="text-blue-500">Drop the files here...</p>
                            ) : (
                                <div className='w-fit'>
                                <MdCloudUpload className='text-4xl text-blue-600 text-center align-middle mx-auto'/>
                                <p className='text-xs font-mono font-semibold text-gray-500'> Upload the Contract</p>
                                <p className='textxs font-mono font-bold text-blue-500'>Max 2MB PDF</p>
                                </div>
                            )}
                            </div>
                        </div>
                    </div>
                    <div>
                       <div className='flex gap-1 items-center'>
                            <p><PiFiles className='text-3xl text-blue-400'/></p>
                            <p className='font-bold font-mono text-xl text-gray-700'>Additional Documentation</p>
                        </div>
                        <div className='flex gap-2 items-center'>
                        <div
                        {...getRootProps()}
                        className="border-2 border-dashed border-gray-400 p-7 m-2 rounded-md text-center cursor-pointer hover:border-blue-500 w-fit bg-blue-100 h-fit"
                        >
                        <input {...getInputProps()} />
                        {isDragActive ? (
                            <p className="text-blue-500">Drop the files here...</p>
                        ) : (
                            <div className='w-fit'>
                            <MdCloudUpload className='text-4xl text-blue-600 text-center align-middle mx-auto'/>
                             <p className='text-xs font-mono font-semibold text-gray-500'> Upload the Contract</p>
                             <p className='textxs font-mono font-bold text-blue-500'>Max 2MB PDF</p>
                            </div>
                        )}
                        </div> 
                        <BsPlusCircle className='text-3xl text-blue-500'/>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default DashRight