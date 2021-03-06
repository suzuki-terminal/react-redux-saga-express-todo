import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import moment from 'moment';

import {
  fetchTodos,
  setTodosInputTitle,
  addTodosItem,
  updateTodosItem,
  deleteTodosItem,
} from '../redux-modules/todos/action';

const propTypes = {
  todos: PropTypes.shape({
    fetch: PropTypes.bool.isRequired,
    items: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
      createdAt: PropTypes.number.isRequired,
    })),
  }),
  fetchTodos: PropTypes.func,
  setTodosInputTitle: PropTypes.func,
  addTodosItem: PropTypes.func,
  updateTodosItem: PropTypes.func,
  deleteTodosItem: PropTypes.func,
};

class AppContainer extends Component {

  componentDidMount() {
    this.props.fetchTodos();
  }

  render() {
    return (
      <div
        className="container"
        style={{ padding: '20px' }}
      >
        <form
          className="form-inline"
          onSubmit={(e) => {
            e.preventDefault();
            this.props.addTodosItem();
          }}
        >
          <input
            className="form-control form-control-lg"
            type="text"
            value={this.props.todos.inputTitle}
            onChange={({ target: { value } }) => this.props.setTodosInputTitle({ inputTitle: value })}
          />

          <button className="btn btn-primary">追加</button>
        </form>

        <br />

        {this.props.todos.fetch
          ? (
            <p>Loading...</p>
          ) : (
            <table className="table">
              <thead>
                <tr>
                  <th>タイトル</th>
                  <th>ステータス</th>
                  <th>作成日</th>
                  <th />
                  <th />
                </tr>
              </thead>

              <tbody>
                {this.props.todos.items.map(todo =>
                  <tr key={todo.id}>
                    <td>{todo.title}</td>
                    <td>{todo.completed ? '完了' : '未完了'}</td>
                    <td>{moment(todo.createdAt).format('YYYY/MM/DD HH:mm')}</td>
                    <td>
                      <button
                        className="btn btn-success"
                        onClick={() => this.props.updateTodosItem({ todo })}
                      >
                        {todo.completed ? '未完了に戻す' : '完了にする'}
                      </button>
                    </td>
                    <td>
                      <button
                        className="btn btn-danger"
                        onClick={() => this.props.deleteTodosItem({ todo })}
                      >
                        削除
                      </button>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          )}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    todos: state.todos,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchTodos,
    setTodosInputTitle,
    addTodosItem,
    updateTodosItem,
    deleteTodosItem,
  }, dispatch);
}

AppContainer.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
