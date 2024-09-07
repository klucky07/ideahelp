import { Link } from "react-router-dom";

interface BlogsCardProps{
     authorName:string;
     title:string;
     content:string;
     publishedDate:string;
     id:number;
 }
export const BlogsCard =(
    {authorName,
    title ,
    content,
    publishedDate,
id}:BlogsCardProps
)=>{
    return <Link to={`/blog/${id}`}>
    <div className=" cursor-pointer border-b-2 border-r-2 m-2 pt-6 pb-2 max-w-screen-lg ">
    
       <div className=" flex w-sceen">
        <div className="flex justify-center flex-col">
        <Avatar  name={authorName}/>
        </div>
        
        <div className="pl-2">{authorName}
            </div> 
            <div className="pl-2 text-xs text-slate-600 ">
                .
            </div>
            <div className="font-light pl-2 text-slate-500"> {publishedDate}
                </div>
       </div>
      <div className="text-lg pt-2 font-extrabold text-slate-900">
        {title}
        </div>
        <div className=" pt-1 text-md font-thin">
            {content.slice(0,100)+"..."}
        </div>
      <div className="text-slate-500 pt-4 text-sm font-semibold">
        {`${Math.ceil(content.length/100)} min read`}
      </div>
    </div>
    </Link>
}

 export function Avatar({name} :{name:string}){
    
return  <div className="relative inline-flex items-center justify-center w-5 h-5 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
    <span className="text-xs text-gray-500 dark:text-gray-300">{name[0]}</span>
</div>

}