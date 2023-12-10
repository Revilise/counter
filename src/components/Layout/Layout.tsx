import "./Layout.scss";
import React from "react";

/*
* @property orientation - can be "horizontal" or "vertical". Default => vertical.
* @property space - repeats values of $spacing in Layout.scss
* @property desktopMaxWidth - repeats values of $width in Layout.scss
* */
interface LayoutProps extends React.PropsWithChildren {
    orientation?: "horizontal" | "vertical",
    space?: "sp-0" | "sp-4" | "sp-8" | "sp-16" | "sp-32",
    height?: "screen-height" | "fit-content"
    desktopMaxWidth?: "w-full" | "w-960" | "w-1280"
}

export default function Layout(props: LayoutProps) : JSX.Element {
    const {
        orientation = "vertical",
        space = "sp-0",
        height = "fit-content",
        desktopMaxWidth = "full"
    } = props;

    return (
        <div className={`layout ${orientation} ${space} ${desktopMaxWidth} ${height}`}>
            {props.children}
        </div>
    )
}