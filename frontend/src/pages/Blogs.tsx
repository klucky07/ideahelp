
import { Appbar } from "../components/Appbar"
import { BlogsCard } from "../components/BlogsCard"
import { BlogSkeleton } from "../components/BlogSkeleton";
import { useBlogs } from "../hooks"




 export const Blogs =()=>{
  const{loading,blogs}=useBlogs();
  if(loading){
    return <div>
      <div className="flex place-items-center justify-center min-h-screen">
        <div className="">
        <BlogSkeleton/>
       <BlogSkeleton/>
       <BlogSkeleton/>

        </div>
    
    </div>
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