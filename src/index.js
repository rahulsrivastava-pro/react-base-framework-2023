import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import Header from './components/Header'
import Products from './components/Products'
import NewProduct from './components/NewProduct'
import EditProduct from './components/EditProduct'
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom'

// Redux
import { Provider } from 'react-redux'
import store from './store'
import { createRoot } from "react-dom/client";



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
    <Router>
        <Provider store={ store }>
            <Header />
            <div>
            <Routes>
                <Route exact path='/' element={<Products />} />
                <Route exact path='/products/new' element={<NewProduct />} />
                <Route exact path='/products/edit/:id' element={<EditProduct />} />
            </Routes>
            </div>
        </Provider>
    </Router>
  );

serviceWorker.unregister();
