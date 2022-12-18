import React from "react"

type TypographyProps = {
    level: "h1" | "h2" | "h3" | "h4" | "h5" | "h6",
    children: string | undefined,
    className: string | undefined
}

export default function Typography({ level, children, className = "" }: TypographyProps): JSX.Element {
    switch (level) {
        case "h1":
            return <h1 className={`text-3xl ${className}`}>{children}</h1>
        case "h2":
            return <h2 className={`text-2xl ${className}`}>{children}</h2>
        case "h3":
            return <h3 className={`text-xl ${className}`}>{children}</h3>
        case "h4":
            return <h4 className={`text-xl ${className}`}>{children}</h4>
        case "h5":
            return <h5 className="text-lg">{children}</h5>

        case "h6":
            return <h6 className={`${className}`}>{children}</h6>
        default:
            return <p>{children}</p>
    }
}