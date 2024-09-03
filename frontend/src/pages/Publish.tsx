import { Appbar } from "../components/Appbar"

export const Publish=()=>{
    return <div>
        <Appbar/>
     <div className="flex justify-center">
   
     <div className="w-full max-w-screen-lg">
        

<input type="text"   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  " 
placeholder="Title"/>


    </div>
    </div>
    <TextEditor/>
    </div>
}
function TextEditor() {
    return <div className="mt-2">
        <div className="w-full mb-4 ">
            <div className="flex items-center justify-between border">
            <div className="my-2 bg-white rounded-b-lg w-full">
                <label className="sr-only">Publish post</label>
                <textarea  id="editor" rows={8} className="focus:outline-none block w-full px-0 text-sm text-gray-800 bg-white border-0 pl-2" placeholder="Write an article..." required />
            </div>
        </div>
       </div>
    </div>
    
}