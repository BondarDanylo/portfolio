import { FC, JSX } from "react";
import { Link } from "react-router";
import IButton from "../../interfaces/IButton";
import styles from './Button.module.scss';

const Button: FC<IButton> = ({link, children, to, isLocalLink}): JSX.Element => {
    if(isLocalLink && typeof(to)=== 'string') {
        return(
            <Link to={to} className={styles.button}>
                {children}
            </Link>
        )
    }else {
        return(
            <a href={link} className={styles.button} target="_blank">
                {children}
            </a>
        )
    }
}

export default Button