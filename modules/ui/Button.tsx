import React from 'react'

export type ButtonProps = {
    children: typeof React.Children,
    type: 'primary' | 'secondary' | 'warning'
}

export default function Button({children, type}: ButtonProps) {
    return(
        <button className="py-3 px-7">{children}</button>
    )
}