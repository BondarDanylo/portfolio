import { JSX } from "react";

interface IButton {
    children?: JSX.Element;
    link?: string;
    to?:string;
    isLocalLink: boolean,
}

export default IButton