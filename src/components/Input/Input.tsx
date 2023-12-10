import "./Input.scss";
import React from "react";

interface InputProps extends React.HTMLProps<HTMLInputElement> {}

export default function Input({
   value, onChange, type, placeholder, required
}: InputProps): JSX.Element {
    return (
        <input
            className="input"
            value={value}
            onChange={onChange}
            type={type}
            placeholder={placeholder}
            required={required}
        />
    )
}