import React, { Component} from 'react'
import { NavLink } from 'react-router-dom'
import { Achievement } from '../../Achievement/Achievement'
import { Card } from '../../ui/Card'
import s from './OrganizationsPage.module.css'
import { connect } from 'react-redux';
import { requestOrganizations } from '../../../redux/reducers';
import { Preloader } from '../../common/preloader/preloader';

class OrganizationsPageAPI extends Component {
    componentDidMount() {
        this.props.requestOrganizations()
    }
    render() {
        return (
            <div>
                <div className={s.wrapper}>
                {this.props.organizations.length > 0 ?
                        this.props.organizations.map(u =>
                    <Card key={u.id}>
                        <div className={'content-sm'}>
                            <h2>{u.name}</h2>
                            <p className={'subtitle'}>{u.address}</p>
                            <span className={'line'}></span>
                            <p className={'mute'}>Через 30 мин!</p>
                        </div>
                        <div className={'icons'}>
                            <NavLink to={'/'}><img src={'./icons/call.svg'}/></NavLink>
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
    organizations: state.app.organizations,
    isFetching: state.app.isFetching
  })

export const OrganizationsPage = connect(mapStateToProps, { requestOrganizations })(OrganizationsPageAPI)