import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from "react-redux";
import store from './store/index'
import {BrowserRouter,Routes, Route } from "react-router-dom";
import ContentBlock from "./components/ContentBlock/ContentBlock";
import Cart from "./components/Cart/Cart";


ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
          <Provider store={store}>
                  <App>
                      <>
                          <Routes>
                              <Route path='/' element={<ContentBlock/>} />
                              <Route path='/cart' element={<Cart/>} />
                          </Routes>
                      </>
                  </App>
          </Provider>
      </BrowserRouter>

  </React.StrictMode>,
  document.getElementById('root')
);

