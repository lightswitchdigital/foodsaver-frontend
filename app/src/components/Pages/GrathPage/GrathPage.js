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
                            <th>Пн<small>01.09.2021</small></th>
                            <th>Вт<small>02.09.2021</small></th>
                            <th>Ср<small>03.09.2021</small></th>
                            <th>Чт<small>04.09.2021</small></th>
                            <th>Пт<small>05.09.2021</small></th>
                            <th>Сб<small>06.09.2021</small></th>
                            <th>Вс<small>07.09.2021</small></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>
                                <p>11:30</p>
                                <small>Пятерочка</small>
                            </th>
                            <th>

                            </th>
                            <th>

                            </th>
                            <th>

                            </th>
                            <th>
                                <p>15:40</p>
                                <small>Перекресток</small>
                            </th>
                            <th>
                                <p>12:35</p>
                                <small>Пятерочка</small>
                            </th>
                            <th>

                            </th>
                        </tr>
                    </tbody>
                </table>
            </Card>
            <Achievement/>
        </div>
    )
}
