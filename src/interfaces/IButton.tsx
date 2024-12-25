import { JSX } from "react";

interface IButton {
    children?: JSX.Element;
    link?: string;
    to?: string;
    type: 'a' | 'Link' | 'submit' ,
}

export default IButton