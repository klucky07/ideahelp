import { Auth } from "../components/Auth"
import { Qoute } from "../components/Qoute"

export const Signin = () => {
    return (<div>
    <div className="grid grid-cols-1 md:grid-cols-2">
            <div>
                <Auth type={"signin"}/>
            </div>
            <div className="hidden md:block">
            <Qoute/>
            </div>
           
        </div>
        </div>)

}