import React from 'react';
import { render } from "react-dom";
import Home from '../home/containers/home';
import { Provider } from "react-redux";
import store from '../../redux/store';

const app = document.getElementById('app-container');

render(
    <Provider store={store}>
        <Home />
    </Provider>
, app);
