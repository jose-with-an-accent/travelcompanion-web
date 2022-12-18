import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import PocketbaseContext from "../../modules/PocketbaseContext";
import BlogCard from "../../modules/ui/blogPost/BlogCard";
import Typography from "../../modules/ui/Typography";

export default function ExploreLocation() {
    const router = useRouter();
    const {location} = router.query;
    const [blogPost, setBlogPost] = useState<Location>();
    const [error, setError] = useState<string>();
    const pbContext = useContext(PocketbaseContext);
    
    useEffect(() => {
        pbContext.collection('posts').getOne<Location>(location)
        .then(item => setBlogPost(item))
        .catch(error => console.error(error))
    }, [])
    
    return(
        <div className="p-3 max-w-3xl mx-auto space-y-3">
        <Typography level="h1">Explore a City</Typography>
        
        </div>
    )
}