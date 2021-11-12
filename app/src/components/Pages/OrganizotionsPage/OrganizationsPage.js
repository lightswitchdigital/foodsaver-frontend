import React from 'react'
import { NavLink } from 'react-router-dom'
import { Achievement } from '../../Achievement/Achievement'
import { Card } from '../../ui/Card'
import s from './OrganizationsPage.module.css'

export const OrganizationsPage = () => {
    return (
        <div>
            <div className={s.wrapper}>
                <Card type={"high"}>
                    <div className={'content-sm'}>
                        <h2>Пятерочка</h2>
                        <p className={'subtitle'}>ул. Карякина 7</p>
                        <span className={'line'}></span>
                        <p className={'mute'}>Через 30 мин!</p>
                    </div>
                    <div className={'icons'}>
                        <NavLink to={'/'}><img src={'./icons/call.svg'}/></NavLink>
                        <NavLink to={'/'}><img src={'./icons/routing.svg'}/></NavLink>
                    </div>
                </Card>
                <Card>
                    <div className={'content-sm'}>
                        <h2>Пятерочка</h2>
                        <p className={'subtitle'}>ул. Карякина 7</p>
                        <span className={'line'}></span>
                        <p className={'mute'}>Через 30 мин!</p>
                    </div>
                    <div className={'icons'}>
                        <NavLink to={'/'}><img src={'./icons/call.svg'}/></NavLink>
                        <NavLink to={'/'}><img src={'./icons/routing.svg'}/></NavLink>
                    </div>
                </Card>
                <Card>
                    <div className={'content-sm'}>
                        <h2>Пятерочка</h2>
                        <p className={'subtitle'}>ул. Карякина 7</p>
                        <span className={'line'}></span>
                        <p className={'mute'}>Через 30 мин!</p>
                    </div>
                    <div className={'icons'}>
                        <NavLink to={'/'}><img src={'./icons/call.svg'}/></NavLink>
                        <NavLink to={'/'}><img src={'./icons/routing.svg'}/></NavLink>
                    </div>
                </Card>
            </div>
            <Achievement/>
        </div>
    )
}
