import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './Navbar.module.css'

export const Navbar = () => {
    return (
        <div className={s.wrapper}>
           <ul>
                <li>
                    <NavLink to={'/wards'} className={s.link} activeClassName={s.active}>
                        Подопечные
                    </NavLink>
                </li>
                <li>
                    <NavLink to={'/organizations'} className={s.link} activeClassName={s.active}>
                        Организации
                    </NavLink>
                </li>
                <li>
                    <NavLink to={'/team'} className={s.link} activeClassName={s.active}>
                        Моя команда
                    </NavLink>
                </li>
                <li>
                    <NavLink to={'/grath'} className={s.link} activeClassName={s.active}>
                        График
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}
