import React from 'react'
import { NavLink } from 'react-router-dom'
import { Card } from '../ui/Card'
import s from './Achievement.module.css'

export const Achievement = () => {
    return (
        <div>
            <h2 className={s.title}>Достижения</h2>
            <p className={s.subtitle}>От прогресса зависит ваш рейтинг!</p>
            <div className={s.wrapper}>
                <Card>
                    <div className={'content-md'}>
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
                    <div className={'content-md'}>
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
                    <div className={'content-md'}>
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
