import React from 'react';
import ReactDOM from 'react-dom';
import {Home} from './pages/Home';
import {Provider} from 'react-redux';
import {configureStore} from './redux/createStore'


const store = configureStore(); 
ReactDOM.render(
    <Provider store={store}>
        <Home />
    </Provider>,
    document.getElementById("app")
);
