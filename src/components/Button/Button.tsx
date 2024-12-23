import { FC, JSX } from "react";
import IChildrenProps from "../../interfaces/IChildrenProps";
import styles from './Button.module.scss';

const Button: FC<IChildrenProps> = ({children}): JSX.Element => {
    return(
        <a href="#" className={styles.button}>
            {children}
        </a>
    )
}

export default Button