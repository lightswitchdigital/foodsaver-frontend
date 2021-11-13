import React from 'react'
import { NavLink } from 'react-router-dom'
import { Achievement } from '../../Achievement/Achievement'
import { Card } from '../../ui/Card'
import s from './TeamPage.module.css'

export const TeamPage = () => {
    return (
        <div>
            <div className={s.wrapper}>
                <Card>
                    <div className={'content-sm'}>
                        <h2>Матвей Степанов</h2>
                        <span className={'line'}></span>
                        <p className={'mute'}>Рейтинг: 4.2</p>
                        <p className={'mute'}>Кол-во Достижений: 12</p>
                    </div>
                    <div className={'icons-sm'}>
                        <NavLink to={'/'}><img src={'./icons/call.svg'}/></NavLink>
                    </div>
                </Card>
                <Card>
                    <div className={'content-sm'}>
                        <h2>Кристина Приступа</h2>
                        <span className={'line'}></span>
                        <p className={'mute'}>Рейтинг: 3.1</p>
                        <p className={'mute'}>Кол-во Достижений: 10</p>
                    </div>
                    <div className={'icons-sm'}>
                        <NavLink to={'/'}><img src={'./icons/call.svg'}/></NavLink>
                    </div>
                </Card>
                <Card>
                    <div className={'content-sm'}>
                        <h2>Егор Овчинников</h2>
                        <span className={'line'}></span>
                        <p className={'mute'}>Рейтинг: 4.0</p>
                        <p className={'mute'}>Кол-во Достижений: 9</p>
                    </div>
                    <div className={'icons-sm'}>
                        <NavLink to={'/'}><img src={'./icons/call.svg'}/></NavLink>
                    </div>
                </Card>
            </div>
            <Achievement/>
        </div>
    )
}
