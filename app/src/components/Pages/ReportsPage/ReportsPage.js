import React from 'react'
import s from './ReportsPage.module.css'

export const ReportsPage = () => {
    return (
        <div>
            <p className="team-name">Название команды: LightSwitch</p>
            <div className={s.wrapper}>
            <div className={s.docWrapper}>
                <div className={s.docCard}>
                    <div className={s.docblock}>
                        <img src="./icons/word.svg"/>
                    </div>
                    <p className="p">Егор Овчинников</p>
                    <p className="mute">25.02.2021 21:20</p>
                </div>
                <div className={s.docCard}>
                    <div className={s.docblock}>
                        <img src="./icons/word.svg"/>
                    </div>
                    <p className="p">Егор Овчинников</p>
                    <p className="mute">25.02.2021 21:20</p>
                </div>
                <div className={s.docCard}>
                    <div className={s.docblock}>
                        <img src="./icons/word.svg"/>
                    </div>
                    <p className="p">Егор Овчинников</p>
                    <p className="mute">25.02.2021 21:20</p>
                </div>
           </div>
            </div>
        </div>
    )
}
