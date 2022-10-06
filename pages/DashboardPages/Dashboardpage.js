import  Layout  from '../Dashboard/index.js'


const Dashboardpage = () => {

  
  return (
    <Layout>
       <div>

       <div style={{height: "calc(100% - 100px)"}} className="flex gap-3 mt-5">

        <div className="gap-1 flex flex-col ">

          <div style={{maxWidth:"596px"}} className="text-sm font-roboto font-medium text-black">
          <div>
          Quick Edit
          </div>
          <div style={{backgroundColor: "#EFEFEF"}}>
          Quick Edit section  Quick Edit section  Quick Edit section
          Quick Edit section  Quick Edit section   Quick Edit section
          </div>
          </div>

          <div style={{maxWidth:"596px"}} className="text-sm font-roboto font-medium text-black">
          <div>
          Reports
          </div>
          <div  className= "border" style={{backgroundColor: "#EFEFEF"}}>
           Report section  Report section  Report section  Report section 
           Report section
          </div>
          </div>
        </div>

        <div className= " flex-1 " style={{width: "427px"}}>

        <div className="text-sm font-roboto font-medium text-black">History</div>

        <div className= " flex-1 " style={{backgroundColor: "#EFEFEF"}}>
          History section  History section   History section   History section  History section
        </div>
        </div>
        
       </div>
       </div>
       
    </Layout>
  )
}

export default Dashboardpage