import { createAction } from 'redux-actions';
import shortid from 'shortid';

// - Fetch Todos
export const FETCH_TODOS = shortid.generate();
export const fetchTodos = createAction(FETCH_TODOS);

export const FETCH_TODOS_READIED = shortid.generate();
export const fetchTodosReadied = createAction(FETCH_TODOS_READIED);

export const FETCH_TODOS_FULFILLED = shortid.generate();
export const fetchTodosFulfilled = createAction(FETCH_TODOS_FULFILLED);


// - Set Todos Input Title
export const SET_TODOS_INPUT_TITLE = shortid.generate();
export const setTodosInputTitle = createAction(SET_TODOS_INPUT_TITLE);


// - Add Todos Item
export const ADD_TODOS_ITEM = shortid.generate();
export const addTodosItem = createAction(ADD_TODOS_ITEM);

export const ADD_TODOS_ITEM_FULFILLED = shortid.generate();
export const addTodosItemFulfilled = createAction(ADD_TODOS_ITEM_FULFILLED);


// - Update Todos Item
export const UPDATE_TODOS_ITEM = shortid.generate();
export const updateTodosItem = createAction(UPDATE_TODOS_ITEM);

export const UPDATE_TODOS_ITEM_FULFILLED = shortid.generate();
export const updateTodosItemFulfilled = createAction(UPDATE_TODOS_ITEM_FULFILLED);


// - Delete Todos Item
export const DELETE_TODOS_ITEM = shortid.generate();
export const deleteTodosItem = createAction(DELETE_TODOS_ITEM);

export const DELETE_TODOS_ITEM_FULFILLED = shortid.generate();
export const deleteTodosItemFulfilled = createAction(DELETE_TODOS_ITEM_FULFILLED);
