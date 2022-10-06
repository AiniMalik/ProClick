import Background from '../components/Background'
import TextField from '@mui/material/TextField';




const Verification = () => {
  return (


<Background>
      <div className="grid place-items-center max-w-md ">

        <div className="mt-5 pt-10 font-poppins text-xl font-bold not-italic ">
        <p>Account Verification</p>
        </div>

        <div className="pt-6 text-center font-poppins text-sm font-light not-italic max-w-sm">
         <p>
         Please enter the verification code sent to your email <br/> <span className="text-black font-semibold">companyname@gmail.com</span>
        </p>
        </div>
        
        <div style={{ width:"90%"}} className="flex justify-between mt-[4rem] ">
          <div>
            <TextField style={{width: "90%"}} sx={{ input: { height: "50px", backgroundColor:"#EEEEEE"  } }}    />
          </div>
          <div>
            <TextField style={{width: "90%"}} sx={{ input: { height: "50px", backgroundColor:"#EEEEEE"  } }}  />
          </div>
          <div>
            <TextField style={{width: "90%"}} sx={{ input: { height: "50px", backgroundColor:"#EEEEEE"  } }}  />
          </div>
          <div>
            <TextField style={{width: "90%"}} sx={{ input: { height: "50px", backgroundColor:"#EEEEEE"  } }}  />
          </div>
        </div>

        <div style={{ width:"90%", height:"60px", borderRadius: "4px"}}  className="bg-black mt-[5rem]  text-white  grid items-center justify-items-center">
         <button className="">Sign Up</button>
        </div>
       
      </div>   
</Background>

  )
}

export default Verification