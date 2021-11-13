import React from 'react'
import { NavLink } from 'react-router-dom'
import { ProfileCard } from '../ProfileCard/ProfileCard'
import s from './MainInfo.module.css'

export const MainInfo = () => {
    return (
        <div className={s.wrapper}>
            <ProfileCard/>
            <NavLink to={'/documents'} className={s.btnActGreen}>Загрузить акт</NavLink>
        </div>
    )
}
