type SearchCardProps = {
    imageURL: string | undefined,
    heading: string,
    subheading: string
}
export default function SearchCard({ imageURL, heading, subheading }: SearchCardProps) {
    return (
        <div className="card rounded bg-white text-black p-3 flex mb-2 gap-6">
            <img className="w-16 h-16" src={imageURL} />
            <div>
            <span className="text-black mr-1">{heading}</span>
            <span className="text-gray-500">{subheading}</span>
            </div>
        </div>
    )
} 