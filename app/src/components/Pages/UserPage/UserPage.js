import React from 'react'
import { NavLink } from 'react-router-dom'
import { Achievement } from '../../Achievement/Achievement'
import { Card } from '../../ui/Card'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { GrathLeadPage } from '../GrathLeadPage/GrathLeadPage'
import s from './UserPage.module.css'
import { Line } from 'react-chartjs-2';

const data = {
    labels: ['1', '2', '3', '4'],
    datasets: [
      {
        label: 'График изменения рейтинга',
        data: [5, 4, 4.5, 3],
        fill: false,
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgba(255, 99, 132, 0.2)',
      },
    ],
  };
  
  const options = {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  };

export const UserPage = () => {
    return (
        <div>
            <NavLink to={'/team'} className={s.backTo}>
                <img src={'./icons/Vector.svg'}/>
                Вернуться к списку</NavLink>
            <GrathLeadPage/>
            <br/>
            <h2 className={'h2'}>Аналитика</h2>
            <div className="flex" style={{ marginBottom: 50}}>
            <div style={{ width: '50%', height: 200 , marginRight: 50}} >
                <Line data={data} options={options} />
            </div>
            <div style={{ width: 200, height: 200 , marginTop: 24, textAlign: 'center' }} >
                <CircularProgressbar value={73} text={`${73}%`} />
                <p style={{ marginTop: 10}}>Загруженность</p>
            </div>
            </div>
            <br/>
            <br/>
            <Achievement/>
        </div>
    )
}
