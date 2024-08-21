import { Auth } from "../components/Auth"
import { Qoute } from "../components/Qoute"

export const Signup =()=>{
    return <div className="grid grid-cols-2">
        <div>
            <Auth/>
        </div>
        <div className="invisible md:visible">
        <Qoute/>
        </div>
       
    </div>
    }