import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { fetchListOne } from "../htttp/listAPI";

const ListToDo = () =>{
    const [list, setList] = useState({info: []})
    const {id} = useParams()
    useEffect(() => {
        fetchListOne(id).then(data => setList(data))
    }, [])
    const navigate = useNavigate()
    return(
        <div className="main blockList">
            <button className="back" onClick={() => {navigate(-1)}}>Назад</button>
            <div>
                <input type="checkbox" id={list.id}/>
                <label htmlFor={list.id}>{list.text}</label>
                {list.favourite ? <button className="favourite true" >★</button> : <button className="favourite" >★</button> } 
            </div>
            
        </div>
    )
}
export default ListToDo