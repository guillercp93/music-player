import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import "@fortawesome/fontawesome-free/css/all.css";
import MusicApp from './store_manager/reducers';
import { canGetSongs, getSongs, getAlbums } from './store_manager/actions';
import App from './App';
import './index.css';
import * as serviceWorker from './serviceWorker';

const loggerMiddleware = createLogger();
const store = createStore(MusicApp, applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

window.onload = () => {
    store.dispatch(getSongs());
    store.dispatch(getAlbums());
    store.dispatch(canGetSongs());
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
