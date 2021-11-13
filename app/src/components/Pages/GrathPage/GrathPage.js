import React from 'react'
import { NavLink } from 'react-router-dom'
import { Achievement } from '../../Achievement/Achievement'
import { Card } from '../../ui/Card'
import s from './GrathPage.module.css'

export const GrathPage = () => {
    return (
        <div>
            <p className={s.week}>Неделя 2</p>
           <Card>
                <table className={s.table}>
                    <thead>
                        <tr>
                            <th>Пн</th>
                            <th>Вт</th>
                            <th>Ср</th>
                            <th>Чт</th>
                            <th>Пт</th>
                            <th>Сб</th>
                            <th>Вс</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>
                                <p>11:00 - 14:00</p>
                                <p>15:00 - 19:00</p>
                            </th>
                            <th>
                                <p>11:00 - 14:00</p>
                                <p>15:00 - 19:00</p>
                            </th>
                            <th>
                                <p>11:00 - 14:00</p>
                                <p>15:00 - 19:00</p>
                            </th>
                            <th>
                                <p>11:00 - 14:00</p>
                                <p>15:00 - 19:00</p>
                            </th>
                            <th>
                                <p>11:00 - 14:00</p>
                                <p>15:00 - 19:00</p>
                            </th>
                            <th>
                                <p>11:00 - 14:00</p>
                                <p>15:00 - 19:00</p>
                            </th>
                            <th>
                                <p>11:00 - 14:00</p>
                                <p>15:00 - 19:00</p>
                            </th>
                        </tr>
                    </tbody>
                </table>
            </Card>
            <Achievement/>
        </div>
    )
}
