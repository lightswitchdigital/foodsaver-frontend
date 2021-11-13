import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './Navbar.module.css'

export const Navbar = ({type = ''}) => {
    return (
        <div className={s.wrapper}>
            {type != 'user' ? 
            <ul>
                <li>
                    <NavLink to={'/grath'} className={s.link} activeClassName={s.active}>
                        График
                    </NavLink>
                </li>
                <li>
                    <NavLink to={'/organizations'} className={s.link} activeClassName={s.active}>
                        Организации
                    </NavLink>
                </li>
                <li>
                    <NavLink to={'/team'} className={s.link} activeClassName={s.active}>
                        Команда
                    </NavLink>
                </li>
            </ul> :
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
                        Мои команды
                    </NavLink>
                </li>
                <li>
                    <NavLink to={'/grath'} className={s.link} activeClassName={s.active}>
                        Мое расписание
                    </NavLink>
                </li>
            </ul>}
        </div>
    )
}
