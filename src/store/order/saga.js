import {DUMMY_ACTION} from './actions'
import {takeEvery} from 'redux-saga/effects'

function* startUp() {
  // some functions with side effects
}

function* orderSaga() {
  yield takeEvery(DUMMY_ACTION, startUp)
}

export default orderSaga
