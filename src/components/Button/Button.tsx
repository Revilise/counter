import "./Button.scss";
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export default function Button(props: ButtonProps): JSX.Element {
    return <button className="button" {...props} />
}