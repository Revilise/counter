import './Link.scss'
import React from "react";

interface LinkProps extends React.PropsWithChildren {
    href: string,
}

export default function Link({
    children,
    href,
}: LinkProps) {
    return <a target="" className="link" href={href}>{children}</a>
}