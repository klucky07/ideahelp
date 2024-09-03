import Skeleton from "react-loading-skeleton"
import { Appbar } from "../components/Appbar"
import { BlogsCard } from "../components/BlogsCard"
import { useBlogs } from "../hooks"
import 'react-loading-skeleton'



 export const Blogs =()=>{
  const{loading,blogs}=useBlogs();
  if(loading){
    return <div>
      loading...
       <Skeleton height={20} />
          <Skeleton circle={true} height={50} width={50} />
          <Skeleton width={100} height={40} />
    </div>
  }
     return <div>

     <Appbar/>
     <div className="flex justify-center">
 <div className="  max-w-xl">
  {blogs.map(blog=> <BlogsCard 
  id={blog.id}
  authorName={blog.author.name||"anonymous"}
         title={blog.title}
         content={blog.content}
         publishedDate="2nd feb 2024"/>)}
        
         
   </div>
     </div>
     </div>
 }