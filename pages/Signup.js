import { useState } from 'react';
import Link from 'next/link';

// Components
import Background from '../components/Background'

// @mui/material components

import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';




const Signup = () => {


  const [showPassword,  setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
      setShowPassword(!showPassword)  
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (

      <Background>

      <div className="grid place-items-center max-w-sm">


        <div className="font-poppins text-xl font-bold not-italic ">
        <p>Sign Up</p>
        </div>

        <div className="pt-6 text-center font-poppins text-sm font-light not-italic max-w-sm">
         <p>
          Nulla porttitor accumsan tincidunt. 
          Pellentesque in ipsum id orci porta dapibus. 
          Curabitur arcu erat, accumsan id imperdiet et, 
          </p>
        </div>

        <div style={{ width:"90%"}}className="mt-10">
        <TextField 
        style={{width: "100%"}} 
        id="outlined-basic" 
        type={"text"}  
        sx={{ input: { borderRadius: "6px" } }} 
        placeholder="First Name" 
        variant="outlined" 
        size="small"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <PersonOutlineOutlinedIcon  sx={{ color: 'black' }} />
            </InputAdornment>
          ),
        }}
         />
        </div>


        <div style={{ width:"90%"}} className="mt-5">
        <TextField 
        style={{width: "100%"}} 
        sx={{ input: { borderRadius: "6px"  } }}   
        id="outlined-basic" 
        type={"text"} 
        placeholder="Last Name" 
        variant="outlined" 
        size="small" 
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <PersonOutlineOutlinedIcon  sx={{ color: 'black' }} />
            </InputAdornment>
          ),
        }}
        />
        </div>


        <div style={{ width:"90%"}}className="mt-5">
        <TextField 
        style={{width: "100%"}} 
        id="outlined-basic" 
        type={"email"}  
        sx={{ input: {borderRadius: "6px" } }} 
        placeholder="Email" 
        variant="outlined" 
        size="small" 
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <MailOutlineOutlinedIcon  sx={{ color: 'black' }} />
            </InputAdornment>
          ),
        }} 
        />
        </div>


        <div style={{ width:"90%"}} className="mt-5">
        <TextField
        style={{width: "100%"}} 
        sx={{ input: { borderRadius: "6px"  } }}
        type={showPassword ? 'text' : 'password'}
        id="outlined-basic" 
        InputProps={{
          endAdornment:(
            <IconButton
            aria-label="toggle password visibility"
            onClick={handleClickShowPassword}
            onMouseDown={handleMouseDownPassword}
            edge="end"
          >
           <InputAdornment position="end">
               {showPassword ? <VisibilityOff sx={{ color: 'black' }}/> : <Visibility sx={{ color: 'black' }}/>}
           </InputAdornment>
           </IconButton>
          ), 
       }} 
        placeholder="Password" 
        variant="outlined" 
        size="small" />
        </div>

        <div style={{ width:"90%", height:"60px", borderRadius: "4px"}}  className="bg-black mt-10  text-white  grid items-center justify-items-center">
         <button className="">Sign Up</button>
        </div>

        <div className="flex justify-between mt-3" style={{width:"90%"}}>
          <div className=" text-xsm font-roboto text-gray-500">
          Already have an account <span className="text-black font-semibold"><Link href={'/Login'}>Login</Link></span>
          </div>
        </div>

      </div> 
        
    </Background>
  )
}

export default Signup