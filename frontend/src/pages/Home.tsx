import { Link } from "react-router-dom"
import { Appbar } from "../components/Appbar"


 export const Home =()=>{

return <div> 
<Appbar type="/"/>
<div className="flex justify-center items-center h-[calc(100vh-4rem)] pb-5"> {/* Adjust height if Appbar is fixed */}
  <div className="flex justify-center w-full">
    <div className="flex flex-col space-y-48 justify-center items-center">
      <div className="animate-pulse">
        <h1 className="text-6xl   font-semibold bg-0">
          Welcome, let's dive into thoughts!
        </h1>
      </div>
      <Link to={'/signup'}>
      <button className="bg-slate-950 w-fit text-lime-100 text-lg  p-3 rounded-lg px-6 hover:scale-105">
        Get started
      </button>
      </Link>
    
    </div>
  </div>
</div>
</div>


 }