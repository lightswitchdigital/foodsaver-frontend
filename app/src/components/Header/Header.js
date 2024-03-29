import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './Header.module.css'

export const Header = () => {
    return (
        <header className={s.header}>
            <img src={'./logo-horizontal.svg'} className={s.logo}/>
            <ul>
                <li>
                    <a href={'https://foodsharing.ru/rules/'} className={s.link}>Наши правила</a>
                </li>
                <li>
                    <NavLink to={'/'} className={s.link}>Вопрос/Ответ</NavLink>
                </li>
                <li>
                    <NavLink to={'/'} className={s.activeLink}>Связаться с куратором</NavLink>
                </li>
            </ul>
        </header>
    )
}
