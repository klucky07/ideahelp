
import { Appbar } from "../components/Appbar"
import { BlogsCard } from "../components/BlogsCard"
import { BlogSkeleton } from "../components/BlogSkeleton";
import { useBlogs } from "../hooks"




export const Blogs = () => {
  const { loading, blogs } = useBlogs();
  if (loading) {
    return <div>
      <div className="flex place-items-center justify-center min-h-screen">
        <div className="">
          <BlogSkeleton />
          <BlogSkeleton />
          <BlogSkeleton />

        </div>

      </div>
    </div>

  }
  return <div>

    <Appbar type="/*" />
    <div className=" pt-5">
    <div className="flex   justify-center col-span-3">
      <div className="   max-w-xl">
        {blogs.map(blog => <BlogsCard
          id={blog.id}
          authorName={blog.author.name || "anonymous"}
          title={blog.title}
          content={blog.content}
          publishedDate="2nd feb 2024" />)}


      </div>
    </div>
    {/* <div className="text-slate-500 font-semibold text-lg col-span-1 pt-10 pl-5">
      Trending
      <BlogsCard authorName={""} title={""} content={""} publishedDate={""} id={0}/>
    </div> */}
    </div>
  </div>
}