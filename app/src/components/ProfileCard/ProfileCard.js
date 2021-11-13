import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './ProfileCard.module.css'
import { connect } from 'react-redux';
import { logOut } from '../../redux/reducers';

export const ProfileCardAPI = (props) => {
    return (
        <div className={s.wrapper}>
            <div className={s.info}>
                <div className={s.img}>
                    <img
                        src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80"/>
                </div>
                <div className={s.content}>
                    <p className={s.rating}>Рейтинг<span> 4.2</span></p>
                    <h3 className={'h3'}>Анна Андреева</h3>
                </div>
            </div>
            <div className={s.stats}>
                <ul>
                    <li>Доставлено: 24 кг</li>
                    <li>В проекте: 2 месяца</li>
                </ul>
            </div>
            <ul>
                <li>
                    <NavLink to={'/'} className={s.link}>
                        <img src={"./icons/notification.svg"}/>
                        Уведомления
                    </NavLink>
                </li>
                <li>
                    <NavLink to={'/'} className={s.link}>
                        <img src={"./icons/setting-2.svg"}/>
                        Настройки
                    </NavLink>
                </li>
                <li>
                    <button className={s.link} onClick={() => props.logOut()}>
                        <img src={"./icons/logout.svg"}/>
                        Выйти
                    </button>
                </li>
            </ul>
        </div>
    )
}

export const ProfileCard = connect(null, {logOut})(ProfileCardAPI)