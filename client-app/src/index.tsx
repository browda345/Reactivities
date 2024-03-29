
import ReactDOM from 'react-dom/client';
import 'semantic-ui-css/semantic.min.css'
import './app/layout/styles.css';
import {router} from './app/router/Routes';
import { StoreContext, store } from './app/stores/store';
import { RouterProvider } from 'react-router-dom';
import React from 'react';
import 'react-calendar/dist/Calendar.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
  <StoreContext.Provider value={store}>
    
    <RouterProvider router={router}/>
    
    </StoreContext.Provider>
   

  </React.StrictMode>

  
);


