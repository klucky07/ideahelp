import { Hono } from "hono";
import { decode, sign, verify } from 'hono/jwt'
import { withAccelerate } from '@prisma/extension-accelerate'
import { PrismaClient } from '@prisma/client/edge'


export const blogRouter=new Hono<{
    Bindings:{
        DATABASE_URL:string,
        JWT_SECRET:string
    },
    Variables:{
        userId:string
    }
}>();

blogRouter.use('/*', async (c, next) => {
    const  authHeader=c.req.header("authorization")||"";
    const user =await verify(authHeader,c.env.JWT_SECRET);
    if(user){
        //@ts-ignore
        c.set("userId",user.id)
       await next()
    }else{
      c.status(403)
      return c.json({error:"unauthorized"})
    }
  
  })
blogRouter.post("/",async (c)=>{
    const body =await c.req.json();
    const authorId=c.get("userId");
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
      }).$extends(withAccelerate())
      const post =await prisma.post.create({
        data:{
            title: body.title,
            content: body.content,
            authorId:authorId
        }
      })
    return c.json({
        id:post.id
    })
  })


  blogRouter.put("/",async (c)=>{
    const body =await c.req.json();
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
      }).$extends(withAccelerate())
      const post =await prisma.post.update({
        where:{
            id:body.id
        },
        data:{
            title: body.title,
            content: body.content,
          
        }
      })
    return c.json({
        id:post.id
    })
  })

  blogRouter.get("/bulk",async(c)=>{
  
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
      }).$extends(withAccelerate())
     const blogs =await prisma.post.findMany({ 
      select: {
        content: true,
        title: true,
        id: true,
        author: {
            select: {
                name: true
            }
        }
    

      }
    }
     );

     return c.json({
        blogs
     })
   
  })
  blogRouter.get("/:id",async(c)=>{
    const id =await c.req.param("id");
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
      }).$extends(withAccelerate())
      const post =await prisma.post.findFirst({
        where:{
            id:id
        },
        select:{
          id:true,
          title:true,
          content:true,
          author:{
            select:{
              name:true
            }
          }
        }
      })
    return c.json({
        post
    })
   
  })
//add pagination
 
  