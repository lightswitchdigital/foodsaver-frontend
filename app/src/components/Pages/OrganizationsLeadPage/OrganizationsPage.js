import React, { Component} from 'react'
import { NavLink } from 'react-router-dom'
import { Achievement } from '../../Achievement/Achievement'
import { Card } from '../../ui/Card'
import s from './OrganizationsPage.module.css'
import { connect } from 'react-redux';
import { requestOrganizations } from '../../../redux/reducers';
import { Preloader } from '../../common/preloader/preloader';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

class OrganizationsPageAPI extends Component {
    componentDidMount() {
        this.props.requestOrganizations()
    }
    render() {
        return (
            <div>
                <div className={s.wrapper}>
                    <Card>
                        <div className={s.card}>
                            <div className={'content-sm'}>
                                <h2>Пятерочка</h2>
                                <p className={'subtitle'}>ул. Карякина 7</p>
                                <span className={'line'}></span>
                                <Dropdown className='myClassName' options={['one', 'two', 'three']} placeholder="Закрепить команду"/>
                            </div>
                            <div className={'icons'}>
                                <NavLink to={'/'}><img src={'./icons/call.svg'}/></NavLink>
                                <NavLink to={'/'}><img src={'./icons/routing.svg'}/></NavLink>
                            </div>
                            <div className={s.newrow}>
                                <strong>Объемы полученной продукции</strong>
                                <p className="mute">Период: последняя неделя</p>
                                <p>Мясо - 20кг</p>
                                <p>Фрукты - 12кг</p>
                                <p>Хлебобулочные изделия - 8кг</p>
                            </div>
                        </div>
                    </Card>
                    <Card>
                        <div className={s.card}>
                            <div className={'content-sm'}>
                                <h2>Пятерочка</h2>
                                <p className={'subtitle'}>ул. Карякина 7</p>
                                <span className={'line'}></span>
                                <Dropdown className='myClassName' options={['one', 'two', 'three']} placeholder="Закрепить команду"/>
                            </div>
                            <div className={'icons'}>
                                <NavLink to={'/'}><img src={'./icons/call.svg'}/></NavLink>
                                <NavLink to={'/'}><img src={'./icons/routing.svg'}/></NavLink>
                            </div>
                            <div className={s.newrow}>
                                <strong>Объемы полученной продукции</strong>
                                <p className="mute">Период: последняя неделя</p>
                                <p>Мясо - 20кг</p>
                                <p>Фрукты - 12кг</p>
                                <p>Хлебобулочные изделия - 8кг</p>
                            </div>
                        </div>
                    </Card>
                    <Card>
                        <div className={s.card}>
                            <div className={'content-sm'}>
                                <h2>Пятерочка</h2>
                                <p className={'subtitle'}>ул. Карякина 7</p>
                                <span className={'line'}></span>
                                <Dropdown className='myClassName' options={['one', 'two', 'three']} placeholder="Закрепить команду"/>
                            </div>
                            <div className={'icons'}>
                                <NavLink to={'/'}><img src={'./icons/call.svg'}/></NavLink>
                                <NavLink to={'/'}><img src={'./icons/routing.svg'}/></NavLink>
                            </div>
                            <div className={s.newrow}>
                                <strong>Объемы полученной продукции</strong>
                                <p className="mute">Период: последняя неделя</p>
                                <p>Мясо - 20кг</p>
                                <p>Фрукты - 12кг</p>
                                <p>Хлебобулочные изделия - 8кг</p>
                            </div>
                        </div>
                    </Card>
                </div>
                <Achievement/>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    organizations: state.app.organizations,
    isFetching: state.app.isFetching
  })

export const OrganizationsLeadPage = connect(mapStateToProps, { requestOrganizations })(OrganizationsPageAPI)