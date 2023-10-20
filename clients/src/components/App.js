import { useContext, useEffect, useState } from 'react';
import '../css/App.css'
import '../css/header.css'
import { Context } from '..';
import {  observer } from 'mobx-react-lite';
import {check} from '../htttp/userAPI'
import Spinner from 'react-bootstrap/Spinner';
import AppRoute from './AppRoute';
import { BrowserRouter } from 'react-router-dom';

const App = observer (() => {
 
  const {user} = useContext(Context)
  const [loading, setLoading] = useState(true)
  useEffect(() =>{
    setTimeout(() => {
      check().then(data => {
        user.setUser(user)
        user.setIsAuth(true)
      }).finally(() => {setLoading(false)})
    }, 1000)
    
  }, [])
  
  if(loading){
    return <Spinner animation={"grow"} />
  }
  console.log(user)
  return (
    <>
      <BrowserRouter>
        <AppRoute user={user}/>
      </BrowserRouter>
    </>
  );
})

export default App;
