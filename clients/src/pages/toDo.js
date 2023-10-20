import React from "react";
import '../css/toDo.css'
import { Link } from "react-router-dom";
import { LOGIN_ROUTE } from "../utils/const";


const ToDo = () =>{
    return(
        <div className="main bodyHome">
            <h1>Вы ещё не вошли</h1>
            <Link id="link" to={LOGIN_ROUTE}>Войти</Link>
        </div>
    )
}
export default ToDo