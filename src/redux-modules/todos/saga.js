import { take, fork, put, call, select } from 'redux-saga/effects';
import axios from 'axios';

import {
  FETCH_TODOS,
  ADD_TODOS_ITEM,
  UPDATE_TODOS_ITEM,
  DELETE_TODOS_ITEM,
  fetchTodosReadied,
  fetchTodosFulfilled,
  setTodosInputTitle,
  addTodosItemFulfilled,
  updateTodosItemFulfilled,
  deleteTodosItemFulfilled,
} from './action';

/**
 * リスト取得
 */
function* handleFetchTodos() {
  while (true) {
    yield take(FETCH_TODOS);

    yield put(fetchTodosReadied());

    const { data: { todos } } = yield call(axios.get, '/api/todos');

    yield put(fetchTodosFulfilled({ todos }));
  }
}

/**
 * 追加
 */
function* handleAddTodosItem() {
  while (true) {
    yield take(ADD_TODOS_ITEM);

    const title = yield select(state => state.todos.inputTitle);

    const { data: { todo } } = yield call(axios.post, '/api/todos', { title });

    yield put(setTodosInputTitle({ inputTitle: '' }));
    yield put(addTodosItemFulfilled({ todo }));
  }
}

/**
 * 更新 (ステータス)
 */
function* handleUpdateTodosItem() {
  while (true) {
    const { payload: { todo } } = yield take(UPDATE_TODOS_ITEM);

    const { data } = yield call(axios.put, `/api/todos/${todo.id}`, {
      todo: Object.assign({}, todo, {
        completed: !todo.completed,
      })
    });

    yield put(updateTodosItemFulfilled({ todo: data.todo }));
  }
}

/**
 * 削除
 */
function* handleDeleteTodosItem() {
  while (true) {
    const { payload: { todo } } = yield take(DELETE_TODOS_ITEM);

    yield call(axios.delete, `/api/todos/${todo.id}`);

    yield put(deleteTodosItemFulfilled({ todo }));
  }
}


export default function* rootSaga() {
  yield fork(handleFetchTodos);
  yield fork(handleAddTodosItem);
  yield fork(handleUpdateTodosItem);
  yield fork(handleDeleteTodosItem);
}