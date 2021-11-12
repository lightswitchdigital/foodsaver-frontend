import React from 'react';
import s from './SongPage.module.scss'


const Button = ({children, type}) => {
    return (
        <button className={type === 'green' ? 'btn-green' : 'btn-default'}>
            {children}
        </button>
    )
}

export default Button