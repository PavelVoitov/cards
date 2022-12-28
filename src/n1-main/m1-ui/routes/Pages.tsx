import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Error404 from "./pages/error404/Error404";
import {Login} from "./pages/login/Login";
import {Registration} from "./pages/registration/Registration";
import {Profile} from "./pages/profile/Profile";
import {PasswordRecovery} from "./pages/passwordRecovery/PasswordRecovery";
import {NewPassword} from "./pages/newPassword/NewPassword";
import {Test} from "./pages/test/Test";


export const PATH = {
    LOGIN: '/login',
    REGISTRATION: '/registration',
    PROFILE: '/profile',
    PASSWORD_RECOVERY: '/password-recovery',
    NEW_PASSWORD: '/new-password',
    TEST: '/test'
}

export const Pages = () => {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<Login />}/>
                <Route path={PATH.LOGIN} element={<Login />}/>
                <Route path={PATH.REGISTRATION} element={<Registration />}/>
                <Route path={PATH.PROFILE} element={<Profile />}/>
                <Route path={PATH.PASSWORD_RECOVERY} element={<PasswordRecovery />}/>
                <Route path={PATH.NEW_PASSWORD} element={<NewPassword />}/>
                <Route path={PATH.TEST} element={<Test />}/>
                <Route path={'/*'} element={<Error404/>}/>
            </Routes>
        </div>
    )
}


