import Background from './components/Background'


const Error = () => {
  return (
<Background>
      <div className="grid place-items-center max-w-md ">
        <div className="mt-5 pt-10 font-poppins text-xxl font-bold not-italic ">
        <p>404</p>
        </div>
        <div className="pt-6 text-center font-poppins text-base font-semibold not-italic max-w-sm">
         <p>
          This page is not found 
          </p>
        </div>
      </div>   
</Background>
  )
}

export default Error