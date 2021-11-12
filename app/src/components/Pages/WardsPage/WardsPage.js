import React from 'react'
import { NavLink } from 'react-router-dom'
import { Card } from '../../ui/Card'
import s from './WardsPage.module.css'

export const WardsPage = () => {
    return (
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
    )
}
