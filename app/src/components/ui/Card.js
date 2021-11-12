import React from 'react';

export const Card = ({children, type = ''}) => {
    return (
        <div className={`main-card ${type}`}>
            {children}
        </div>
    )
}