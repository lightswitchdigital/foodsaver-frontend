import React, { Component, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { Achievement } from '../../Achievement/Achievement'
import { Card } from '../../ui/Card'
import s from './WardsPage.module.css'
import { connect } from 'react-redux';
import { getWards } from '../../../redux/selectors';
import { requestWards } from '../../../redux/reducers';
import { Preloader } from '../../common/preloader/preloader';

class WardsPageAPI extends Component  {
    componentDidMount() {
        this.props.requestWards()
    }

    render() {
        return (
            <div>
                <div className={s.wrapper}>
                    {this.props.wards.length > 0 ?
                        this.props.wards.map(u => <Card key={u.id}>
                                <div className={'content'}>
                                    <h2>{u.name} {u.last_name}</h2>
                                    <p className={'subtitle'}>{u.address}</p>
                                    <span className={'line'}></span>
                                    <p className={'mute'}> Возраст: {u.age}</p>
                                    <p className={'mute'}> Инвалидность: {u.disabled ? u.disabled : 'Нет'}</p>
                                    <p className={'mute'}> Аллергия: {u.allergy ? u.allergy : 'Нет'}</p>
                                </div>
                                <div className={'icons'}>
                                    <a href={"tel:" + u.phone}><img src={'./icons/call.svg'}/></a>
                                    <NavLink to={'/'}><img src={'./icons/routing.svg'}/></NavLink>
                                </div>
                            </Card>)
                    : <Preloader/>}
                </div>
                <Achievement/>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    wards: getWards(state),
    isFetching: state.app.isFetching
})

export const WardsPage = connect(mapStateToProps, { requestWards })(WardsPageAPI)