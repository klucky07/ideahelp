import { Auth } from "../components/Auth"
import { Qoute } from "../components/Qoute"

export const Signup =()=>{
    return <div>
<div className="grid grid-cols-1 md:grid-cols-2">
        <div>
            <Auth type={"signup"}/>
        </div>
        <div className="invisible md:visible">
        <Qoute/>
        </div>
       
    </div>
    </div>
     
    }