import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import '../src/index.css';

//--------------- redux ---------------

import {Provider} from 'react-redux';
import {combineReducers} from 'redux';
import {createStore} from 'redux';
import {applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import createSagaMiddleware from "redux-saga";
// import logger from 'redux-logger';

// import { watchAgeUp } from "./sagas/saga";

//--------------- reducers ---------------

import rootReducer from './Reducers/rootReducer';
//icon
import reducerAge from './component/store/reducerAge';    //ageCal
// import reducer2 from './component/store/reducer2';    //multipleRedux combination of reducerA and reducerB

// import reducerSaga from './store/reducer/reducerSaga';

// to combine multiple reducers
import reducerA from './component/store/reducerA';
import reducerB from './component/store/reducerB';

import rootReducerSaga from './component/sagaProp/redux/root-reducer-saga';
import { incrementSaga } from './component/sagaProp/redux/app.saga';

//--------------- combine reducers ---------------

const rootReducers = combineReducers({
    rA: reducerA,
    rB: reducerB,
    reducerAge: reducerAge,
    // reducerSaga: reducerSaga,
    rootReducer: rootReducer,
    rootReducerSaga: rootReducerSaga
});

// -------------- middleware ---------------

const logAction = store => {
    return next => {
        return action => {
            const result = next(action);
            console.log(`middleware ${JSON.stringify(result)}`);
            return result;
        }
    }
}

// -------------- saga ---------------

const sagaMiddleware = createSagaMiddleware();
const middlewares = [ logAction, sagaMiddleware, thunk ];

//--------------- store ---------------

// only one store will work
// const store = createStore(rootReducer);
// const store = createStore(reducerAge);
// const store = createStore(reducer2);
// const store = createStore(rootReducers);

//middleware
// const store = createStore(rootReducers, applyMiddleware(logAction));

//thunk Middleware
// const store = createStore(rootReducers, applyMiddleware(thunk));

//Saga Middleware
const store = createStore(rootReducers, applyMiddleware(...middlewares));


// add after calling store
// SagaMiddleware.run(watchAgeUp);
sagaMiddleware.run(incrementSaga);


ReactDOM.render(
<Provider store={store} >
<App />
</Provider>, document.getElementById('root'));
