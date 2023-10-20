import { useState } from 'react';
import '../css/App.css';
import AddModalWin from './addModalWin';
import ToDoList from './toDoList'
import posts from './posts'

function App() {
  const [modalActive, setModalActive] = useState(false);
  const [valToDo, setValToDo] = useState('');
  const [toDoList, setToDoList] = useState(posts);

  const funAdd = () =>{
    const toDo = 
      {
        id: posts.length + 1,
        title: valToDo,
        favourites: false,
      }
    
    
    setToDoList(posts.push(toDo));
    setValToDo('')
    setModalActive(false)
    console.log(posts)
  }


  const date = new Date();
  const fullDate = new Intl.DateTimeFormat("ru", {dateStyle: "full"}).format(date);
  return (
    <div className='win'>

      {/* <div className='punctMenu'>
        <ul>
          <li>
            <button className='butLi' >Мой день</button>
          </li>
          <li>
            <button className='butLi' >Важно</button>
          </li>
        </ul>
      </div> */}
      <div className="App">
        <h1>{fullDate}</h1>
        <button className='buttonADD' onClick={() => setModalActive(true)}>Добавить задачу</button>

        <AddModalWin activ={modalActive} setActive={setModalActive}>
          <div className='divButt'>
            <button className='buEx' onClick={() => setModalActive(false)}>❌</button>
          </div>
          <h2>Добавить задачу на день</h2>
          <input id="inToDo" type="text" value={valToDo} onChange={e => setValToDo(e.target.value)}/><br />
          <button className='button' id="buttAdd" onClick={() => funAdd()}>Добавить</button>
        </AddModalWin>

        <ToDoList posts={posts.length ? posts : (1)} setToDoList={setToDoList} />
      </div>
      
    </div>
  );
}

export default App;
