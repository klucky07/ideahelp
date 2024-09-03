import { Blog } from "../hooks"
import { Appbar } from "./Appbar"
import { Avatar } from "./BlogsCard"

export const Fullblog = ({blog}:{blog:Blog}) => {
    return <div>
        <Appbar />
        <div className="flex justify-center">

        
        <div className="grid grid-cols-12 px-10 pt-14 m-2 w-full max-w-screen-xl">
            <div className=" col-span-8">
                <div className="text-4xl font-extrabold">
                    {blog.title}


                </div>
                <div className="text-slate-500 pt-3">
                    Posted on 2nd Dec
                </div>
                <div className="pt-5">
                    {blog.content}
                </div>
            </div>
            <div className=" col-span-4 ">
                <div className="text-slate-600 text-lg">Author</div>
                <div className="grid grid-cols-7">

                <div className="col-span-1 pt-3 pl-3  flex flex-col justify-center">
                    <Avatar  name={blog.author.name || "Anonymous"}/>
                </div>
                <div className="col-span-6 pt-2">    <div className="text-xl  font-bold">
                    {blog.author.name || "Anonymous"}</div>
           
           <div className="pt-2 text-slate-500">
                Lorem ipsum dolor  deserunt rerum cupiditate, earum aperiam. Eligendi, rerum eos? Laboriosam quae quod quas voluptatibus error necessitatibus rei
            </div></div>
            
            </div>
            </div>
       

        </div>
    </div>
    </div>

}