import React from 'react';

const ToDoList = (props) =>{
   {/* <div className="App">
        <h1>{fullDate}</h1>
        <button className='buttonADD' onClick={() => setModalActive(true)}>Добавить задачу</button>

        <AddModalWin activ={modalActive} setActive={setModalActive}>
          <div className='divButt'>
            <button className='buEx' onClick={() => setModalActive(false)}>❌</button>
          </div>
          <h2>Добавить задачу на день</h2>
          <input id="inToDo" type="text" /><br />
          <button className='button' id="buttAdd" >Добавить</button>
        </AddModalWin>

        
      </div> */}
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
