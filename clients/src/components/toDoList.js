import React from 'react';



const ToDoList = (props) =>{
   
    const sidebar = (
        <ul>
            {props.posts.length ? 
            props.posts.map((post) =>
            <li key={post.id}>
                <input  type='checkbox' id={post.id} value={post.id}/>
                <label htmlFor={post.id}> {post.title}</label>
                <input id='inDel' type='button' value='Удалить' 
                    onClick={() => 
                    { 
                        props.setToDoList(props.posts.filter(a =>
                            a.id !== post.id))
                    }}/>
            </li>
            ): (<p>Нет задач</p>)}
        </ul>
    );
    return (
        <div className='list'>
            {sidebar}
        </div>
    )
}

export default ToDoList;
