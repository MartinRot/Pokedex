import React from 'react'
import { useNavigate } from "react-router-dom";
import { useDashboard } from '../../hooks/useDashboard';
import LoginForm from './LoginForm';

const Login = () => {

    const navigate = useNavigate()
    const { onSuccess } = useDashboard()

    function onLoginFormSuccess(){
        onSuccess();
        navigate("/");
    } 

  return (

    <>
        <LoginForm onSuccess={onLoginFormSuccess} />
    </>
  )
}

export default Login