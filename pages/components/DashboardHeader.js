import React from 'react'
import { Avatar } from '@mui/material'
import { Badge } from '@mui/material';


 const DashboardHeader = () => {

const Data ={ name: "Aini Malik", Company: "aini.techling@gmail.com" }

  return (
    <div className="flex justify-end gap-5">
       <div>
              <div>
                 {Data.name}
              </div>
              <div>
                 {Data.Company}
              </div>
      </div>
       <div>
              <Badge
              overlap="circular"
              anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
              variant="dot"
              color='success'
               >
              <Avatar alt="AiniMalik" sx={{ width: 56, height: 56 }} src="/public/profile.jpg" />
              </Badge>
    
       </div>
  </div>  
  )
}

export default DashboardHeader