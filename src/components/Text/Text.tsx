import './Text.scss'
import React from "react";

interface TextProps extends React.PropsWithChildren {}

export default function Text(props: TextProps) {
    return <p {...props} className="text" />
}