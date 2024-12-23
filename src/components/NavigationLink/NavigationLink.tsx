import React, { FC, JSX } from "react";
import styles from './NavigationLink.module.scss';
import IChildrenProps from '../../interfaces/IChildrenProps';

const NavigationLink: FC<IChildrenProps> = ({children}): JSX.Element => {

    const styledChildren = (elem: JSX.Element) => {
        return elem = React.cloneElement(children, {
            className: `${styles['menu__icon']}`
        })
    }

    return (
        <li className={styles['menu__item']}>
            <a href="#" className={styles['menu__link']}>
                {styledChildren(children)}
            </a>
        </li>
    )
}

export default NavigationLink