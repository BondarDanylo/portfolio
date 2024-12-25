import { EventHandler, FC, JSX } from "react";
import styles from './Popup.module.scss';
import close from '../../images/close.png';
import IPopup from "../../interfaces/IPopup";

const Popup: FC<IPopup> = ({text, status}): JSX.Element => {

    const handleClick = (e: any) => {
        if(e.target.hasAttribute('data-hide')) {
            status((prev: boolean): boolean => false)
        }
    }

    return(
        <div className={styles.wrapper} data-hide  onClick={handleClick}>
            <div className={styles.popup}>
                <img src={close} alt='Close Icon' data-hide className={styles.close}  onClick={handleClick}/>
                {text}
            </div>
        </div>
    )
}

export default Popup