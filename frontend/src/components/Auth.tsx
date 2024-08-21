import { ChangeEvent, ChangeEventHandler, useState } from "react"
import { Link } from "react-router-dom"
import {SignupType} from "../../../commons/src/index"

export const Auth = ({ type }: { type: "signup" | "signin" }) => {
    const [postinputs,setPostinputs]=useState<SignupType>({
        name:"",
        email:"",
        password:""
    })
    return <div className="h-screen flex justify-center flex-col">
       
        <div className="flex justify-center">
            <div>
                <div className="font-bold text-3xl">
                    Create an Account
                </div>
                <div className="text-slate-400 pl-1  font-semibold">
                    Already have an account?<Link to={"/signin"} className="underline pl-2 ">Login</Link>;

                </div>
              <LabeledInput label="Username" placeholder="USername" onChange={(e)=>{
                setPostinputs(c=>({
                    ...c,
                    name:e.target.value
                }))
              }}/>

            </div>

        </div>



    </div>
}

interface LabeledInputType{
label:string,
placeholder:string,
onChange:(e:ChangeEvent<HTMLInputElement>)=>void
}
function LabeledInput({label,placeholder,onChange}:LabeledInputType){
 return  <div>
 <label  className="block mb-2 pl-2 text-sm font-medium text-gray-900 dark:text-black">{label}</label>
 <input type="text" id="first_name" onChange={onChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={placeholder} required />
</div>
}