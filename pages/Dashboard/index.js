import { useState } from 'react'
import Sidebar from '../../components/Sidebar'
import DashboardHeader from '../components/DashboardHeader';

const Layout = ({ children }) => {

  const [show, setShow] = useState(false);
 
  return (
    <div className="h-screen flex flex-row justify-start">

      <Sidebar  setShow={setShow}/>

      <div className="bg-primary flex-1 p-4">

        <DashboardHeader/>
   
        {children}

      </div>

    </div>
   
  )
}

export default Layout