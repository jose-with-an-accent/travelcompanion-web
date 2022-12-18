import { useContext, useEffect, useState } from "react";
import PocketbaseContext from "../../modules/PocketbaseContext";
import Typography from "../../modules/ui/Typography";
type BlogPost = {
    title: string,
    id: string,
    description: string,
    post: string
}
export default function BlogIndex() {
    const [blogPosts, setBlogPosts] = useState<BlogPost[]>();
    const [error, setError] = useState<string>();
    const pbContext = useContext(PocketbaseContext);

    useEffect(() => {
        pbContext.collection('posts').getFullList<BlogPost>()
        .then(items => setBlogPosts(items))
        .catch(error => console.error(error))


    }, [])
    
    return(
        <>
        <p>{error}</p>
        {blogPosts?.map(post => (
            <>
                <Typography level="h1">{post.title}</Typography>
                <Typography level="h1">{post.description}</Typography>
                <Typography>{post.post}</Typography>
            </>
        ))}
        </>
    )
}