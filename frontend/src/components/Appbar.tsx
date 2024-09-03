import { Avatar } from "./BlogsCard"

export const Appbar=()=>{
    return <div className="border-b py-4 flex justify-between px-10">
        <div className="flex flex-col justify-center">
            iDeaL 
        </div>
        <div>
            <Avatar name="Harkirat"/>
        </div>
    </div>
}