import { useRouter } from "next/router";
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
    const router = useRouter();
    const {id} = router.query;
    const blogPost = useQuery<BlogPost>('blogs', QUERY_TYPE.ONE, {
        id: id
    });

    return(
        <div className="p-3 max-w-3xl mx-auto space-y-3">
        <Typography level="h1">{blogPost.title}</Typography>
        <Typography level="h3" className="text-gray-300">Written Jan 05, 2022</Typography>
        <Typography level="h2">{blogPost?.description}</Typography>
        <Typography>{blogPost?.post}</Typography>

        <Typography level="h4">Enjoyed our content? There's probably something useful here, too!</Typography>

        </div>
    )
}