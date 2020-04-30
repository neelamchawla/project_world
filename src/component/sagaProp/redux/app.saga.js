// take runs only 1st time
// import {take} from 'redux-saga/effects';

//whnevr we trigger thid action under the hood redux saga is firing off a new task to run "onIncrement". it create new task, in loop formation. it works like "while loop"
// import {takeEvery, delay, put} from 'redux-saga/effects';

//this will return the latest/last clicked item. It will cancel out all the previous saga generated, except the last one and will give the output of the value.
//though in console log we'll get all the number of clicks we clicked but in output on the page will be the lastes/last one.
import { takeLatest, delay, put } from 'redux-saga/effects';


export function* onIncrement() {
  yield console.log('I am incremented');
  yield delay(1000);
  yield put({ type: 'INCREMENT_FROM_SAGA' });
}

export function* incrementSaga() {
  // yield take('INCREMENT');
  // yield takeEvery('INCREMENT', onIncrement);
  yield takeLatest('INCREMENT', onIncrement);
  console.log('I\'m Incremented')
}