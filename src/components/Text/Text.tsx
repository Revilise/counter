import './Text.scss'
import React from "react";

interface TextProps extends React.PropsWithChildren {
    align?: "al-central" | "al-right" | "al-left",
    testid?: string
}

export default function Text(props: TextProps) {
    const additionalClassNames = [props.align].filter(el => !!el).join(' ')
    return <p data-testid={props.testid} {...props} className={`text ${additionalClassNames}`} />
}