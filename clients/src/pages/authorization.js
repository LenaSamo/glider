import React, { useContext, useState } from "react";
import '../css/Auth.css'
import { useForm } from "react-hook-form"
import { Link, useLocation, useNavigate } from "react-router-dom";
import { LIST_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE } from "../utils/const";
import { login, registration } from "../htttp/userAPI";
import { Context } from "..";

const Auth = () =>{
    const {user} = useContext(Context)
    const navigate = useNavigate()
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE
    console.log(location)
    const {register, handleSubmit, formState: {errors}, reset} = useForm({mode: "onChange"});
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const click = async () => {
        try{
            let data
            if (isLogin){
                data = await login(email, password)
            }else{
                data = await registration(email, password) 
            }
            
            user.setUser(user)
            user.setIsAuth(true)
            navigate(LIST_ROUTE)
        }catch(e){
            alert(e.response.data.message)
        }
    }


    return(
        <div className="main auth">
            <div className="hmain"> 
                <Link to={LOGIN_ROUTE} className={isLogin ? "h1" : "h1Link"}>Вход</Link>
                <Link to={REGISTRATION_ROUTE} className={isLogin ? "h1Link" : "h1"}>Регистрация</Link> 
            </div>
            <form className="formAuth">
                {/* <label htmlFor="email">Почта</label><br /> */}
                <input {...register("email", {required: 'Введите почту', 
                                                pattern:{
                                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i ,
                                                    message: 'Введите правильно почту (пример: petr@gmail.com)'
                                                }})} 
                className="formInput" id="email" type="email" placeholder="почта" 
                value={email} onChange={e => setEmail(e.target.value)}></input><br />
                {
                    errors?.email && (
                        <div style={{color: 'red'}}>{errors.email.message}</div>
                    )
                }

                {/* <label htmlFor="password">Пароль</label><br /> */}
                <input {...register("password", {required: 'Введите пароль'})} 
                className="formInput" id="password" type="password" placeholder="пароль"
                value={password} onChange={e => setPassword(e.target.value)}/><br />
                {
                    errors?.password && (
                        <div style={{color: 'red'}}>{errors.password.message}</div>
                    )
                }
                
                {/* {!isLogin &&
                    <>
                    <input {...register("password2", {required: 'Введите повторно пароль'})} 
                    className="formInput" id="password2" type="password" placeholder="повторить пароль" /><br />
                    {
                        errors?.password2 && (
                            <div style={{color: 'red'}}>{errors.password2.message}</div>
                        )
                    }
                    </>
                    
                } */}
                {
                    isLogin ? <input id="buttonAuth" type="button" value="Войти" onClick={click}/>
                            : <input id="buttonRegist" type="button" value="Регистрация" onClick={click}/>
                }
                
            </form>
        </div>
    )
}
export default Auth