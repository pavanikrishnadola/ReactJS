import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTodo, toggleTodo } from './redux/actions';
const App = ({ todos, addTodo, toggleTodo }) => {
  const [newTodo, setNewTodo] = useState('');
  const handleAddTodo = () => {
    if (newTodo.trim() !== '') {
      addTodo(newTodo);
      setNewTodo('');
    }
  };
  return (
  <div>
    <h1>Redux ToDo App</h1>
    <div>
      <input type="text" value={newTodo} onChange={(e) => setNewTodo(e.target.value)}/>
      <button onClick={handleAddTodo}>Add Todo</button>
      </div>
      <ul>
        {todos.map((todo) => (
          <li
          key={todo.id}
          onClick={() => toggleTodo(todo.id)}
          style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
            {todo.text}
            </li>
          ))}
          </ul>
          </div>
          );
        };
        const mapStateToProps = (state) => ({
          todos: state.todos,
        });
export default connect(mapStateToProps, { addTodo, toggleTodo })(App);
