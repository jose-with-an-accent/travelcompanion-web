import { useContext, useEffect, useState } from "react";
import useQuery, { QUERY_TYPE } from "../../modules/hooks/useQuery";
import PocketbaseContext from "../../modules/PocketbaseContext";
import BlogCard from "../../modules/ui/blogPost/BlogCard";
import Typography from "../../modules/ui/Typography";
type BlogPost = {
    title: string,
    id: string,
    description: string,
    post: string
}
export default function BlogIndex() {
    const blogPosts = useQuery<BlogPost[]>('posts', QUERY_TYPE.ALL, {});

    console.log(blogPosts);
    const [error, setError] = useState<string>();
    
    return(
        <div className="p-3 max-w-3xl mx-auto space-y-3">
        <Typography level="h1">Blog</Typography>
        <p>{error}</p>
        <div className="space-y-8">{blogPosts?.map(post => (
            <BlogCard title={post.title} content={post.post} description={post.description} id={post.id}/>
        ))}</div>
        </div>
    )
}