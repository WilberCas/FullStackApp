import React from 'react';
import {render} from 'react-dom';
import App from './components/app';
import {BrowserRouter} from "react-router-dom";
import './../css/style.scss';
const rootEl = document.getElementById('app');

render(
<BrowserRouter>
    <App />
</BrowserRouter>,
rootEl);

if(module.hot) {
    module.hot.accept();
}
