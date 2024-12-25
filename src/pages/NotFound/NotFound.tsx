import { FC, JSX } from "react";
import Button from "../../components/Button/Button";
import styles from './NotFound.module.scss';

const NotFound: FC = (): JSX.Element => {
    return(
        <div className={styles.wrapper}>
            <h1 className={styles.title}>
                WHOOOPS! Page not found :(
            </h1>
            <Button type='Link' to='/'><>Go Back</></Button>
        </div>
    )
}
export default NotFound