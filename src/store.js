/**
*     Import
*     - Libreries
*/
import {
    createStore,
    applyMiddleware,
    compose
} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './redux/reducers/rootReducer';
import promiseMiddleware from 'redux-promise-middleware'
// import { createLogger } from 'redux-logger';

export default function configureStore(initialState = {}) {
    return createStore(rootReducer, compose(
        applyMiddleware(
            thunk,
            promiseMiddleware(),
            // createLogger({ collapsed: true }),
        )
    )
    );
}