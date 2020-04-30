import { combineReducers } from 'redux';

import appReducer from './app.reducer';

const rootReducerSaga = combineReducers({
  app: appReducer
});

export default rootReducerSaga;