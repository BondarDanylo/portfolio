import React, { FC, JSX } from "react";
import styles from './NavigationLink.module.scss';
import IChildrenProps from '../../interfaces/IChildrenProps';
import { NavLink } from "react-router";

const NavigationLink: FC<IChildrenProps> = ({link,children}): JSX.Element => {

    const styledChildren = (elem: JSX.Element) => {
        return elem = React.cloneElement(children, {
            className: `${styles['menu__icon']}`
        })
    }

    return (
        <li className={styles['menu__item']}>
            <NavLink to={`/${link}`} className={({ isActive }) => isActive 
            ? styles['menu-active'] + ' ' +  styles['menu__link']
            : styles['menu__link']}>

                {styledChildren(children)}
                
            </NavLink>
        </li>
    )
}

export default NavigationLink