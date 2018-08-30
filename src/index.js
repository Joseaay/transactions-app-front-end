/**
*     Import
*     - Libreries
*/
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'

/**
*     Import
*     - CSS
*/
import './styles/index.css';

/**
*     Import
*     - Components
*/
import configureStore from './store';
import TransactionsApp from './App';

ReactDOM.render(
    <Provider store={configureStore()}>
        <TransactionsApp />
    </Provider>,
    document.getElementById('root')
);