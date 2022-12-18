import Link from "next/link"
import Typography from "../Typography"


export type BlogCardProps = {
    title: string,
    description: string,
    content: string,
    id: string
}
export default function BlogCard({ title, description, content, id }: BlogCardProps) {
    return (
        <div className="border-2 border-gray-600 p-3 rounded space-y-3">
            <img className="w-full h-96 bg-gray-500" />
            <Typography level="h2">{title}</Typography>
            <Typography level="h3">{description}</Typography>
            <Typography>{content.substring(0, 256)}...</Typography>
            <Link href={`/blog/${id}`}>Read More -</Link>
        </div>
    )
}