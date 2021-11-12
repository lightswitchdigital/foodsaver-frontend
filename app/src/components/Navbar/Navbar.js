import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './Navbar.module.css'

export const Navbar = () => {
    return (
        <div className={s.wrapper}>
           <ul>
                <li>
                    <NavLink to={'/'} className={s.active}>
                        Подопечные
                    </NavLink>
                </li>
                <li>
                    <NavLink to={'/'} className={s.link}>
                        Организации
                    </NavLink>
                </li>
                <li>
                    <NavLink to={'/'} className={s.link}>
                        Моя команда
                    </NavLink>
                </li>
                <li>
                    <NavLink to={'/'} className={s.link}>
                        График
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}
