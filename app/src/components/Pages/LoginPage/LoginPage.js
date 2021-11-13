import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './LoginPage.module.css'
import { useForm } from "react-hook-form";
import { connect } from 'react-redux';
import { loginUser } from '../../../redux/reducers'

const LoginAPIPage = (props) => {
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        props.loginUser(data.login, data.password)
    }

    return (
        <div className={s.wrapper}>
            <img src={'./hands.jpg'} className={s.bg}/>
            <div className={s.container}>
                <div className={s.loginWrapper}>
                    <img src={'./logo-horizontal.svg'}/>
                    <h1 className={s.title}>Добро пожаловать!</h1>
                    <p className={s.subtitle}>Войдите в аккаунт, чтобы стать <br/> частью большого дела</p>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {props.errorMessage && <p className={s.error}>{props.errorMessage}</p>}
                        <input type="name" placeholder="Номер телефона/Email" {...register("login")}/>
                        <input type="password" placeholder="Пароль" {...register("password")}/>
                        <button type="submit" className={s.btn}>Войти</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

let mapStateToProps = state => {
    return {
        errorMessage: state.app.errorMessage
    }
}

export const LoginPage = connect(mapStateToProps, { loginUser })(LoginAPIPage)
