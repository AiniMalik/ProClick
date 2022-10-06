import React, { useState } from 'react'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import Link from 'next/link'


const Sidebar = ({setShow}) => {
    const [hide, setHide]= useState(false);
  return (
    <>
    {hide === true?
     <div className="h-screen grid justify-start items-start"  style={{backgroundColor: "black",width:"304px"}} onClick={()=> setHide(false)}>
        
        <div className="grid justify-center items-center h-[5rem] ">
            <div className="text-white text-base font-roboto pt-[1rem] font-bold">Pro Click</div>
        </div>
       <div>
        <div style={{width:"304px"}} className="flex border border-black border-b-gray-800 ">
            <div className="pl-8 pb-4">
            <DashboardOutlinedIcon sx={{ color: 'white' }}/>
            </div>
            <div className="text-white font-poppins text-xsm font-light not-italic self-center  ml-4 pb-2" onClick={setShow(true)}>
            <Link href={'../DashboardPages/Dashboardpage'}>Dashboard</Link>
            </div>
        </div>

        <div  style={{width:"304px"}} className="flex border border-black border-b-gray-800 mt-[2rem]" onClick={setShow(true)}>
            <div className="pl-8 pb-4">
            <InsertDriveFileOutlinedIcon sx={{ color: 'white' }}/>
            </div>
            <div className="text-white font-poppins text-xsm font-light not-italic self-center ml-4 pb-2">
            <Link href={'../DashboardPages/Documents'}>Documents</Link> 
            </div>
        </div>
        <div style={{width:"304px"}} className="flex border border-black border-b-gray-800 mt-[2rem]">
            <div className="pl-8 pb-4">
            <AssignmentOutlinedIcon sx={{ color: 'white' }}/>
            </div>
            <div className="text-white font-poppins text-xsm font-light not-italic self-center ml-4 pb-2">
            Reports  
            </div>
        </div>
        <div style={{width:"304px"}} className="flex border border-black border-b-gray-800 mt-[2rem]">
            <div className="pl-8 pb-4">
            <AccountCircleOutlinedIcon sx={{ color: 'white' }}/>
            </div>
            <div className="text-white font-poppins text-xsm font-light not-italic self-center ml-4 pb-2">
            Profile
            </div>
        </div>
        <div style={{width:"304px"}} className="flex border border-black border-b-gray-800 mt-[2rem]">
            <div className="pl-8 pb-4">
            <SendOutlinedIcon sx={{ color: 'white' }}/>
            </div>
            <div className="text-white font-poppins text-xsm font-light not-italic self-center ml-4 pb-2">
            Invite 
            </div>
        </div>
        <div style={{width:"304px"}} className="flex border border-black border-b-gray-800 mt-[2rem]">
            <div className="pl-8 pb-4">
            <LanguageOutlinedIcon sx={{ color: 'white' }}/>
            </div>
            <div className="text-white font-poppins text-xsm font-light not-italic self-center ml-4 pb-2">
            Sites  
            </div>
        </div>
        </div>
       
        <div style={{width:"304px"}} className="flex  self-end mb-[1rem]">
            <div className="pl-8 ">
            <SettingsOutlinedIcon  sx={{ color: 'white' }}/>
            </div>
            <div className="text-white font-poppins text-xsm font-light not-italic self-center ml-4">
            Settings  
            </div>
        </div>
      
     </div>
      :
  
    <div className="h-screen grid justify-start items-start"  style={{backgroundColor: "black",width:"100px"}} onClick={()=> setHide(true)}>     
    <div className="grid justify-center items-center h-[5rem] ">
        <div className="text-white text-xsm font-roboto pt-[1rem] font-bold">Pro Click</div>
    </div>
   <div>
    <div style={{width:"100px"}} className="flex border border-black border-b-gray-800 ">
        <div className="pl-8 pb-4">
        <DashboardOutlinedIcon sx={{ color: 'white' }}/>
        </div>
    </div>

    <div  style={{width:"100px"}} className="flex border border-black border-b-gray-800 mt-[2rem]" onClick={setShow(true)}>
        <div className="pl-8 pb-4">
        <InsertDriveFileOutlinedIcon sx={{ color: 'white' }}/>
        </div>
    </div>
    <div style={{width:"100px"}} className="flex border border-black border-b-gray-800 mt-[2rem]">
        <div className="pl-8 pb-4">
        <AssignmentOutlinedIcon sx={{ color: 'white' }}/>
        </div>
    </div>
    <div style={{width:"100px"}} className="flex border border-black border-b-gray-800 mt-[2rem]">
        <div className="pl-8 pb-4">
        <AccountCircleOutlinedIcon sx={{ color: 'white' }}/>
        </div>
    </div>
    <div style={{width:"100px"}} className="flex border border-black border-b-gray-800 mt-[2rem]">
        <div className="pl-8 pb-4">
        <SendOutlinedIcon sx={{ color: 'white' }}/>
        </div>
    </div>
    <div style={{width:"100px"}} className="flex border border-black border-b-gray-800 mt-[2rem]">
        <div className="pl-8 pb-4">
        <LanguageOutlinedIcon sx={{ color: 'white' }}/>
        </div>
    </div>
    </div>
   
    <div style={{width:"100px"}} className="flex  self-end mb-[1rem]">
        <div className="pl-8 ">
        <SettingsOutlinedIcon  sx={{ color: 'white' }}/>
        </div>
    </div>
  
 </div>
     } 
    </>
   
  )
}

export default Sidebar