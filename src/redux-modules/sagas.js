import { fork } from 'redux-saga/effects';

import todos from './todos/saga';

export default function* rootSaga() {
  yield fork(todos);
}
