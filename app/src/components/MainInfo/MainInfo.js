import React from 'react'
import { NavLink } from 'react-router-dom'
import { ProfileCard } from '../ProfileCard/ProfileCard'
import s from './MainInfo.module.css'

export const MainInfo = () => {
    return (
        <div className={s.wrapper}>
            {localStorage.getItem('login') == 'user' ? <h1>Волонтер</h1> : <h1>Куратор</h1>}
            <ProfileCard/>
            <NavLink to={'/documents'} className={s.btnActGreen}>Загрузить акт</NavLink>
        </div>
    )
}
