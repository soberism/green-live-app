import React from 'react'
import LoginView from './LoginView'
import {setLogin} from "../../redux/actions/login"
import { useDispatch } from 'react-redux'

export default function Login() {
  const dispatch=useDispatch()
  function loginHandle(user){
    dispatch(setLogin(user))
    // console.log(user);
    window.history.back()
  }

  return (
    <div>
        <LoginView onLoginEvent={loginHandle} />
    </div>
  )
}
