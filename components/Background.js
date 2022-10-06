import React from 'react'

const Background =  ( { children } ) => {
  return (
    <div className="bg-backgroundImg h-screen bg-cover bg-no-repeat bg-center">

        <div className="px-20">

            <div className=" pt-6 font-roboto text-base font-bold not-italic tracking-tightest">

               <p>Pro Click</p>

            </div>

        <div className="grid justify-center items-center">

            { children }

        </div>

        </div>
       
    </div>
  )
}

export default Background