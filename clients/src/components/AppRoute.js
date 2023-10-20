import React from 'react'
import '../css/App.css'
import '../css/header.css'
import {Routes, Route, Link, useNavigate} from 'react-router-dom'
import Auth from '../pages/authorization'
import ListAllToDo from '../pages/listAllToDo'
import NotFound from '../pages/notfound'
import ToDo from '../pages/toDo'
import { FIRST_ROUTE, LIST_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE } from '../utils/const';
import ListToDo from '../pages/listToDo';

const AppRoute = (user) => {
    const navigate = useNavigate()
 
    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
        navigate(FIRST_ROUTE)
    }
    return (
        <>
        <header className='header'>
            
            {!user.isAuth ? <Link className='Link' to={FIRST_ROUTE}>Главная</Link> 
            : <Link className='Link' to={LIST_ROUTE}>Главная</Link>
            }
            {!user.isAuth ? <Link className='Link' to={LOGIN_ROUTE}>Войти</Link>
            : <button className='Link buttonLink' onClick={() => logOut()}>Выйти</button>
            }
            
        </header>
        <Routes>
            <Route path={FIRST_ROUTE} element={<ToDo />}/>
            <Route path={LOGIN_ROUTE} element={<Auth />}/>
            <Route path={LIST_ROUTE} element={<ListAllToDo />}/>
            <Route path={REGISTRATION_ROUTE} element={<Auth />}/>
            <Route path={LIST_ROUTE + '/:id'} element={<ListToDo />}/>
            <Route path='*' element={<NotFound />}/>
        </Routes>
        </>
    );
}

export default AppRoute;
