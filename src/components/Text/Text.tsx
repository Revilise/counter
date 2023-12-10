import './Text.scss'
import React from "react";

interface TextProps extends React.PropsWithChildren {
    align?: "al-central" | "al-right" | "al-left"
}

export default function Text(props: TextProps) {
    const additionalClassNames = [props.align].filter(el => !!el).join(' ')
    console.log(additionalClassNames)
    return <p {...props} className={`text ${additionalClassNames}`} />
}