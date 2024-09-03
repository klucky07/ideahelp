import { useParams } from "react-router-dom";
import { useBlog } from "../hooks"
import { Fullblog } from "../components/Fullblog";
import { BlogSkeleton } from "../components/BlogSkeleton";

export const Blog=()=>{
    const{id} =useParams();
    const{loading,blog}=useBlog(
       { id:id||""}
    );
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
    if(!blog){
        return <div>
            not found
        </div>
    }
  
    return <div>
    <Fullblog blog={blog}  />
</div>
}