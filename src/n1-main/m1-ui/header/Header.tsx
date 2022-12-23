import React from 'react'
import s from './Header.module.css'
import {NavLink} from 'react-router-dom'
import {PATH} from "../routes/Pages";



export const Header = () => {
    return (
        <div className={s.header}>
            <NavLink to={PATH.LOGIN}>LOGIN</NavLink>
            <NavLink to={PATH.REGISTRATION}>REGISTRATION</NavLink>
            <NavLink to={PATH.PROFILE}>PROFILE</NavLink>
            <NavLink to={PATH.PASSWORD_RECOVERY}>PASSWORD RECOVERY</NavLink>
            <NavLink to={PATH.NEW_PASSWORD}>NEW PASSWORD</NavLink>
            <NavLink to={PATH.TEST}>TEST</NavLink>
        </div>
    )
}
