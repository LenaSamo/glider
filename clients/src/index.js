import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import UserStore from './store/UserStore';
import ListsStore from './store/listsStore';
export const Context = createContext(null)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
        <Context.Provider value={{
                user: new UserStore(),
                list: new ListsStore(),
        }}>
                <App />     
        </Context.Provider>
        
       
);
