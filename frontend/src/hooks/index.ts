import axios from "axios";
import { useEffect, useState } from "react"
import { BACKEND_URL } from "../config";
interface Blog {
    "content": string;
    "title": string;
    "id": number
    "author": {
        "name": string
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