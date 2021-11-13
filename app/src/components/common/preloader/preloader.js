import React, { useEffect } from 'react'
import s from './preloader.module.css'

export const Preloader = () => {
    return (
        <div className={s.ldsEllipsis}><div></div><div></div><div></div><div></div></div>
    )
}