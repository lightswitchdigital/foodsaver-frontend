import React from 'react'
import { NavLink } from 'react-router-dom'
import { Achievement } from '../../Achievement/Achievement'
import { Card } from '../../ui/Card'
import s from './GrathLeadPage.module.css'

export const GrathLeadPage = () => {
    return (
        <div>
            <h2 className={'h2'}>Матвей Степанов</h2>
           <Card>
                <table className={s.table}>
                    <thead>
                        <tr>
                            <th></th>
                            <th>8:00</th>
                            <th>9:00</th>
                            <th>10:00</th>
                            <th>11:00</th>
                            <th>12:00</th>
                            <th>13:00</th>
                            <th>14:00</th>
                            <th>15:00</th>
                            <th>16:00</th>
                            <th>17:00</th>
                            <th>18:00</th>
                            <th>19:00</th>
                            <th>20:00</th>
                            <th>21:00</th>
                            <th>22:00</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>ПН</th>
                            <th><span className={[s.btnCalender + ' ' + s.active]}></span></th>
                            <th><span className={s.btnCalender}></span></th>
                            <th><span className={s.btnCalender}></span></th>
                            <th><span className={s.btnCalender}></span></th>
                            <th><span className={s.btnCalender}></span></th>
                            <th><span className={s.btnCalender}></span></th>
                            <th><span className={[s.btnCalender + ' ' + s.active]}></span></th>
                            <th><span className={[s.btnCalender + ' ' + s.active]}></span></th>
                            <th><span className={[s.btnCalender + ' ' + s.active]}></span></th>
                            <th><span className={[s.btnCalender + ' ' + s.active]}></span></th>
                            <th><span className={s.btnCalender}></span></th>
                            <th><span className={s.btnCalender}></span></th>
                            <th><span className={s.btnCalender}></span></th>
                            <th><span className={s.btnCalender}></span></th>
                            <th><span className={s.btnCalender}></span></th>
                        </tr>
                        <tr>
                            <th>ВТ</th>
                            <th><span className={s.btnCalender}></span></th>
                            <th><span className={s.btnCalender}></span></th>
                            <th><span className={s.btnCalender}></span></th>
                            <th><span className={s.btnCalender}></span></th>
                            <th><span className={s.btnCalender}></span></th>
                            <th><span className={s.btnCalender}></span></th>
                            <th><span className={s.btnCalender}></span></th>
                            <th><span className={s.btnCalender}></span></th>
                            <th><span className={s.btnCalender}></span></th>
                            <th><span className={[s.btnCalender + ' ' + s.active]}></span></th>
                            <th><span className={[s.btnCalender + ' ' + s.active]}></span></th>
                            <th><span className={[s.btnCalender + ' ' + s.active]}></span></th>
                            <th><span className={[s.btnCalender + ' ' + s.active]}></span></th>
                            <th><span className={[s.btnCalender + ' ' + s.active]}></span></th>
                            <th><span className={s.btnCalender}></span></th>
                        </tr>
                        <tr>
                            <th>СР</th>
                            <th><span className={s.btnCalender}></span></th>
                            <th><span className={s.btnCalender}></span></th>
                            <th><span className={s.btnCalender}></span></th>
                            <th><span className={s.btnCalender}></span></th>
                            <th><span className={s.btnCalender}></span></th>
                            <th><span className={s.btnCalender}></span></th>
                            <th><span className={[s.btnCalender + ' ' + s.active]}></span></th>
                            <th><span className={[s.btnCalender + ' ' + s.active]}></span></th>
                            <th><span className={[s.btnCalender + ' ' + s.active]}></span></th>
                            <th><span className={[s.btnCalender + ' ' + s.active]}></span></th>
                            <th><span className={s.btnCalender}></span></th>
                            <th><span className={s.btnCalender}></span></th>
                            <th><span className={s.btnCalender}></span></th>
                            <th><span className={s.btnCalender}></span></th>
                            <th><span className={s.btnCalender}></span></th>
                        </tr>
                        <tr>
                            <th>ЧТ</th>
                            <th><span className={[s.btnCalender + ' ' + s.active]}></span></th>
                            <th><span className={[s.btnCalender + ' ' + s.active]}></span></th>
                            <th><span className={[s.btnCalender + ' ' + s.active]}></span></th>
                            <th><span className={s.btnCalender}></span></th>
                            <th><span className={s.btnCalender}></span></th>
                            <th><span className={s.btnCalender}></span></th>
                            <th><span className={s.btnCalender}></span></th>
                            <th><span className={s.btnCalender}></span></th>
                            <th><span className={s.btnCalender}></span></th>
                            <th><span className={s.btnCalender}></span></th>
                            <th><span className={s.btnCalender}></span></th>
                            <th><span className={s.btnCalender}></span></th>
                            <th><span className={[s.btnCalender + ' ' + s.active]}></span></th>
                            <th><span className={[s.btnCalender + ' ' + s.active]}></span></th>
                            <th><span className={[s.btnCalender + ' ' + s.active]}></span></th>
                        </tr>
                        <tr>
                            <th>ПТ</th>
                            <th><span className={s.btnCalender}></span></th>
                            <th><span className={s.btnCalender}></span></th>
                            <th><span className={s.btnCalender}></span></th>
                            <th><span className={s.btnCalender}></span></th>
                            <th><span className={s.btnCalender}></span></th>
                            <th><span className={[s.btnCalender + ' ' + s.active]}></span></th>
                            <th><span className={[s.btnCalender + ' ' + s.active]}></span></th>
                            <th><span className={[s.btnCalender + ' ' + s.active]}></span></th>
                            <th><span className={[s.btnCalender + ' ' + s.active]}></span></th>
                            <th><span className={[s.btnCalender + ' ' + s.active]}></span></th>
                            <th><span className={s.btnCalender}></span></th>
                            <th><span className={s.btnCalender}></span></th>
                            <th><span className={s.btnCalender}></span></th>
                            <th><span className={s.btnCalender}></span></th>
                            <th><span className={s.btnCalender}></span></th>
                        </tr>
                        <tr>
                            <th>СБ</th>
                            <th><span className={s.btnCalender}></span></th>
                            <th><span className={s.btnCalender}></span></th>
                            <th><span className={[s.btnCalender + ' ' + s.active]}></span></th>
                            <th><span className={[s.btnCalender + ' ' + s.active]}></span></th>
                            <th><span className={s.btnCalender}></span></th>
                            <th><span className={s.btnCalender}></span></th>
                            <th><span className={s.btnCalender}></span></th>
                            <th><span className={s.btnCalender}></span></th>
                            <th><span className={s.btnCalender}></span></th>
                            <th><span className={s.btnCalender}></span></th>
                            <th><span className={s.btnCalender}></span></th>
                            <th><span className={s.btnCalender}></span></th>
                            <th><span className={[s.btnCalender + ' ' + s.active]}></span></th>
                            <th><span className={s.btnCalender}></span></th>
                            <th><span className={s.btnCalender}></span></th>
                        </tr>
                        <tr>
                            <th>ВС</th>
                            <th><span className={s.btnCalender}></span></th>
                            <th><span className={[s.btnCalender + ' ' + s.active]}></span></th>
                            <th><span className={[s.btnCalender + ' ' + s.active]}></span></th>
                            <th><span className={[s.btnCalender + ' ' + s.active]}></span></th>
                            <th><span className={s.btnCalender}></span></th>
                            <th><span className={s.btnCalender}></span></th>
                            <th><span className={s.btnCalender}></span></th>
                            <th><span className={s.btnCalender}></span></th>
                            <th><span className={s.btnCalender}></span></th>
                            <th><span className={s.btnCalender}></span></th>
                            <th><span className={[s.btnCalender + ' ' + s.active]}></span></th>
                            <th><span className={s.btnCalender}></span></th>
                            <th><span className={s.btnCalender}></span></th>
                            <th><span className={s.btnCalender}></span></th>
                            <th><span className={s.btnCalender}></span></th>
                        </tr>
                    </tbody>
                </table>
            </Card>
            <button className={s.btn}>Сохранение</button>
        </div>
    )
}
