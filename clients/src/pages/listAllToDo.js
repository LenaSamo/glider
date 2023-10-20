import React, { useContext, useEffect, useState } from "react";
import { Context } from "..";
import '../css/lists.css'
import {useNavigate} from 'react-router-dom'
import { LIST_ROUTE } from "../utils/const";
import AddModalWin from "../components/addModalWin";
import { observer } from "mobx-react-lite";
import { createList, fetchList } from "../htttp/listAPI";

const ListAllToDo = observer(() =>{
    const navigate = useNavigate()
    const date = new Date();
    const fullDate = new Intl.DateTimeFormat("ru", {dateStyle: "full"}).format(date);
    const {list} = useContext(Context)
    const [modalActive, setModalActive] = useState(false);
    const [value, setValue] = useState('')
    

    const addList = () =>{
        createList({text: value}).then(data => {
            setValue('')
            setModalActive(false)
        })
    }
    useEffect(() => {
        fetchList().then(data => list.setList(data))
    }, [list])

    return(
        <div className="main App">
            <h1>{fullDate}</h1>
            <button className='buttonADD' onClick={() => setModalActive(true)}>Добавить задачу</button>

            <AddModalWin activ={modalActive} setActive={setModalActive}>
                <div className='divButt'>
                    <button className='buEx' onClick={() => setModalActive(false)}>❌</button>
                </div>
                <h2>Добавить задачу на день</h2>
                <input id="inToDo" type="text" value={value} onChange={e => {setValue(e.target.value)}}/><br />
                <button className='button' id="buttAdd"onClick={addList} >Добавить</button>
            </AddModalWin>

            <div className="boxAllLists">
                {list.List.map(listId =>
                <div key={listId.id} className="boxList" > 
                    <input type="checkbox" id={listId.id}/>
                    <label htmlFor={listId.id} onClick={() => {navigate(LIST_ROUTE + '/' + listId.id)}}>{listId.text}</label>
                    <div className="check">
                        {listId.favourite ? <button className="favourite true" >★</button> 
                        : <button className="favourite" >★</button> }
                    </div>
                    
                </div>
                )} 
            </div>
           
        </div>
    )
})
export default ListAllToDo