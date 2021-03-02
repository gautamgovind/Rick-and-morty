import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import * as rootReducer from './rootReducer';
import rootSaga from './rootSaga';


const bindMiddleware = (middleware) => {
    const {composeWithDevTools} = require("redux-devtools-extension");
    return composeWithDevTools(applyMiddleware(...middleware));
}

export const configureStore = (initialState={} )=> {
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(
        combineReducers({...rootReducer}),
        initialState,
        bindMiddleware([sagaMiddleware])
    );

    store.sagaTask = sagaMiddleware.run(rootSaga);

    return store;
}
