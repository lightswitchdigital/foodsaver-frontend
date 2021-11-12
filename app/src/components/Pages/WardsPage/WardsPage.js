import React from 'react'
import { NavLink } from 'react-router-dom'
import { Card } from '../../ui/Card'
import s from './WardsPage.module.css'

export const WardsPage = () => {
    return (
        <div>
            <div className={s.wrapper}>
                <Card>
                    <div className={'content'}>
                        <h2>Егор Овчинников</h2>
                        <p className={'subtitle'}>ул. Перекопская 5  кв. 51</p>
                        <span className={'line'}></span>
                        <p className={'mute'}> Возраст: 56 лет</p>
                        <p className={'mute'}> Инвалидность: Нет</p>
                        <p className={'mute'}> Аллергия: Нет</p>
                    </div>
                    <div className={'icons'}>
                        <NavLink to={'/'}><img src={'./icons/call.svg'}/></NavLink>
                        <NavLink to={'/'}><img src={'./icons/routing.svg'}/></NavLink>
                    </div>
                </Card>
                <Card>
                    <div className={'content'}>
                        <h2>Егор Овчинников</h2>
                        <p className={'subtitle'}>ул. Перекопская 5  кв. 51</p>
                        <span className={'line'}></span>
                        <p className={'mute'}> Возраст: 56 лет</p>
                        <p className={'mute'}> Инвалидность: Нет</p>
                        <p className={'mute'}> Аллергия: Нет</p>
                    </div>
                    <div className={'icons'}>
                        <NavLink to={'/'}><img src={'./icons/call.svg'}/></NavLink>
                        <NavLink to={'/'}><img src={'./icons/routing.svg'}/></NavLink>
                    </div>
                </Card>
                <Card>
                    <div className={'content'}>
                        <h2>Егор Овчинников</h2>
                        <p className={'subtitle'}>ул. Перекопская 5  кв. 51</p>
                        <span className={'line'}></span>
                        <p className={'mute'}> Возраст: 56 лет</p>
                        <p className={'mute'}> Инвалидность: Нет</p>
                        <p className={'mute'}> Аллергия: Нет</p>
                    </div>
                    <div className={'icons'}>
                        <NavLink to={'/'}><img src={'./icons/call.svg'}/></NavLink>
                        <NavLink to={'/'}><img src={'./icons/routing.svg'}/></NavLink>
                    </div>
                </Card>
            </div>
            <h2 className={s.title}>Достижения</h2>
            <p className={s.subtitle}>От прогресса зависит ваш рейтинг!</p>
            <div className={s.wrapper}>
                <Card>
                    <div className={'content-sm'}>
                        <span className={s.progress}>
                            <span style={{width: '40%'}}></span>
                        </span>
                        <h3 className={'green-text'}>6 раз</h3>
                        <p className={'subtitle'}>Прибыл на точку вовремя</p>
                        <p className={'btn'}>Награда</p>
                        <p className={'subtitle'}>Достижение: Всегда вовремя</p>
                    </div>
                </Card>
                <Card>
                    <div className={'content-sm'}>
                        <span className={s.progress}>
                            <span style={{width: '40%'}}></span>
                        </span>
                        <h3 className={'green-text'}>6 раз</h3>
                        <p className={'subtitle'}>Прибыл на точку вовремя</p>
                        <p className={'btn'}>Награда</p>
                        <p className={'subtitle'}>Достижение: Всегда вовремя</p>
                    </div>
                </Card>
                <Card>
                    <div className={'content-sm'}>
                        <span className={s.progress}>
                            <span style={{width: '40%'}}></span>
                        </span>
                        <h3 className={'green-text'}>6 раз</h3>
                        <p className={'subtitle'}>Прибыл на точку вовремя</p>
                        <p className={'btn'}>Награда</p>
                        <p className={'subtitle'}>Достижение: Всегда вовремя</p>
                    </div>
                </Card>
            </div>
        </div>
    )
}
