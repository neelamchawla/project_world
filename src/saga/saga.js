import { delay } from "redux-saga";
import { takeLatest, put } from "redux-saga/effects";

function* ageUpAsync() {
  yield delay(4000);
  yield put({ type: "AGE_UP_ASYNC", value: 1 });
}

export function* watchAgeUp() {
  yield takeLatest("AGE_UP", ageUpAsync);
}

// never dispatch same action name, that is AGE_UP & AGE_UP_ASNC. coz whnevr you pass the dispatch it will again catch the dispatch.. and it'll go in infinite loop

//function* => it is a generator,
// it make a block of lines, runs one by one
// it compulsory to use function* to run saga, and in this function* -> * sign is used to identify the difference from normal function to generator function*