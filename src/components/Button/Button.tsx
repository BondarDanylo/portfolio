import { FC, JSX } from "react";
import { Link } from "react-router";
import IButton from "../../interfaces/IButton";
import styles from './Button.module.scss';

const Button: FC<IButton> = ({link, children, to, type}): JSX.Element => {
    if(type === 'Link' && typeof(to) === 'string') {
        return(
            <Link to={to} className={styles.button}>
                {children}
            </Link>
        )
    }else if (type === 'a') {
        return(
            <a href={link} className={styles.button} target="_blank">
                {children}
            </a>
        )
    }else {
        return(
            <button className={styles.button}>
                {children}
            </button>
        )
    }
}

export default Button