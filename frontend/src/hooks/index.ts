import axios from "axios";
import { useEffect, useState } from "react"
import { BACKEND_URL } from "../config";
export interface Blog {
    "content": string;
    "title": string;
    "id": number
    "author": {
        "name": string
    }
}
export const useBlog = ({ id }: { id: string }) => {
    const [loading, setLoading] = useState(true);
    const [blog, setBlog] = useState<Blog>();

    useEffect(() => {
        axios.get(`${BACKEND_URL}/api/v1/blog/${id}`, {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        })
            .then(response => {
                setBlog(response.data.post);
                setLoading(false);
            })
    }, [id])

    return {
        loading,
        blog
    }

}
 export const useBlogs = () => {
    const [loading, setLoading] = useState(true);
    const [blogs, setBlogs] = useState<Blog[]>([]);
   

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                //const token = localStorage.getItem("token");
                const response = await axios.get(`${BACKEND_URL}/api/v1/blog/bulk`, {
                    headers: {
                        Authorization:  localStorage.getItem("token")
                    }
                });
                setBlogs(response.data.blogs); // Ensure response structure
                setLoading(false);
            } catch (err) {
                alert("ERROR")
                setLoading(false);
            }
        };

        fetchBlogs();
    }, [])

    return {
        loading,
        blogs
    }
}