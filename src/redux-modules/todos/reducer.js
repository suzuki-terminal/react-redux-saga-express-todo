import {
  FETCH_TODOS_READIED,
  FETCH_TODOS_FULFILLED,
  ADD_TODOS_ITEM_FULFILLED,
  UPDATE_TODOS_ITEM_FULFILLED,
  DELETE_TODOS_ITEM_FULFILLED,
} from './action';

const initialState = {
  fetch: false,
  items: [],
};

export default function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case FETCH_TODOS_READIED: {
      return Object.assign({}, state, {
        fetch: true,
      });
    }

    case FETCH_TODOS_FULFILLED: {
      const { todos } = payload;

      return Object.assign({}, state, {
        fetch: false,
        items: todos,
      });
    }

    case ADD_TODOS_ITEM_FULFILLED: {
      const { todo } = payload;

      return Object.assign({}, state, {
        items: [...state.items, todo],
      });
    }

    case UPDATE_TODOS_ITEM_FULFILLED: {
      const { todo } = payload;

      return Object.assign({}, state, {
        items: state.items.map(i => i.id === todo.id ? todo : i),
      });
    }

    case DELETE_TODOS_ITEM_FULFILLED: {
      const { todo } = payload;

      return Object.assign({}, state, {
        items: state.items.filter(i => i.id !== todo.id),
      });
    }

    default: {
      return state;
    }
  }
}
