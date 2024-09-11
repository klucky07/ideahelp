import axios from "axios"
import { Appbar } from "../components/Appbar"
import { BACKEND_URL } from "../config"
import { ChangeEvent, useState } from "react"
import { useNavigate } from "react-router-dom"
import { CreatePostType } from "../../../commons/src"

export const Publish=()=>{
    const [inputs,setInputs]=useState<CreatePostType>({
        title:"",
        content:""
    });
    //const [description,setDescription]=useState("");
    const navigate=useNavigate();
    return <div>
        <Appbar type={"/*"}/>
     <div className="flex justify-center">
   
     <div className="w-full max-w-screen-lg">
        

<input type="text" onChange={(e)=>{
    setInputs( c =>({
        ...c,
        title: e.target.value


    }))
}}  className="bg-white focus:outline-none   text-gray-900 text-xl font-bold rounded-lg  block w-full p-2.5  " 
placeholder="Title ..."/>


    </div>
    </div>
    <TextEditor onChange={(e)=>{
        setInputs( c=>({
            ...c,
            content:e.target.value
        }))
    }}/>
    <div className="flex justify-center">
    <button onClick={async()=>{
           const response=  await axios.post(`${BACKEND_URL}/api/v1/blog`,{
                    title:inputs.title,
                    content:inputs.content
  
                },{
                    headers:{
                        Authorization:localStorage.getItem("token")
                    }
                });
                navigate(`/blog/${response.data.id}`)
            }} className="bg-slate-100 m-1  px-4 p-1 border hover:bg-slate-200  border-slate-500 rounded-md">Publish post</button>
             </div>
    </div>
}
function TextEditor({onChange}:{onChange:(e:ChangeEvent<HTMLTextAreaElement>)=>void}) {
    return <div className="  mt-2 ">
        <div className="flex justify-center mb-4 ">
            <div className=" border-b-2 w-full max-w-screen-lg">
            <div className="my-2 bg-blue-600 rounded-b-lg w-full">
                <label className="sr-only">Publish post</label>
                <textarea onChange={onChange}  id="editor" rows={8} className="focus:outline-none block w-full px-0 text-sm text-gray-800 bg-white border-0 pl-2" placeholder="Write an article..." required />
            </div>
           
        </div>
       
       </div>
    </div>
    
}