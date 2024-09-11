import { Link } from "react-router-dom"
import { Avatar } from "./BlogsCard"

export const Appbar = ({type}:{type:'/'| '/*'}) => {
    return <div className="border-b py-4 flex justify-between px-10">
       {type==='/'? <div className=" pl-10 font-semibold text-xl flex flex-col justify-center">
                Th!nK
            </div>: <Link to={'/blogs'}>
            <div className="cursor-pointer pl-10 font-semibold text-xl flex flex-col justify-center">
                Th!nK
            </div>
        </Link> } 

        <div className="flex justify-center ">
            <div className=" pr-8 pt-2flex flex-col justify-center" >
              {type==="/"?null:<Link to={'/publish'}>
                    <button className="   text-green-700 hover:text-white border border-gray-800 hover:bg-black focus:ring-2 focus:outline-none  font-medium rounded-lg text-sm px-3 py-1 text-center   " >
                        Create blog</button>    
                          </Link>}  
            </div>
            <div>
               {type==="/*" && <Link to={'/'}>
                <div onClick={()=>{
                    localStorage.removeItem('token');
                }} className="underline underline-offset-4 decoration-slate-600  font-light pr-5 text-slate-700 ">
                  Logout
                </div>
               
                </Link>} 
            </div>
            <div className="flex flex-col justify-center">
                <Avatar name="User" />
            </div>

        </div>
    </div>
}