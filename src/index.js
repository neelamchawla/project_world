import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import '../src/index.css';

//--------------- redux ---------------

import {Provider} from 'react-redux';
import {createStore} from 'redux';
// import {applyMiddleware} from 'redux';
import {combineReducers} from 'redux';

//--------------- reducers ---------------

import rootReducer from './Reducers/rootReducer';
//icon
import reducerAge from './component/store/reducerAge';    //ageCal
// import reducer2 from './component/store/reducer2';    //multipleRedux combination of reducerA and reducerB

// to combine multiple reducers
import reducerA from './component/store/reducerA';
import reducerB from './component/store/reducerB';


//--------------- combine reducers ---------------

const rootReducers = combineReducers({
    rA: reducerA,
    rB: reducerB,
    reducerAge: reducerAge,
    rootReducer: rootReducer
});

// -------------- middleware ---------------

// const logAction = store => {
//     return next => {
//         return action => {
//             const result = next(action);
//             console.log(`middleware ${JSON.stringify(result)}`);
//             return result;
//         }
//     }
// }

//--------------- store ---------------

// only one store will work
// const store = createStore(rootReducer);
// const store = createStore(reducerAge);
// const store = createStore(reducer2);
const store = createStore(rootReducers);
//middleware
// const store = createStore(reducerAge, applyMiddleware(logAction));

ReactDOM.render(
<Provider store={store} >
<App />
</Provider>, document.getElementById('root'));
