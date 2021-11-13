import React, { useState } from 'react';

import Todos from './Todos';
import Todo from './models/todo';

import './App.css';
import NewTodo from './components/NewTodo';

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (todoText: string) => {
    const newTodo = new Todo(todoText);

    setTodos((pre) => {
      return pre.concat(newTodo);
    })
  }

  const removeTodoHandler = (todoId: string) => {
    setTodos(preTodos => {
      return preTodos.filter(todo => todo.id !== todoId);
    })
  }

  return (
    <div className="App">
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos items={todos} onRemoveTodo={removeTodoHandler} />
    </div>
  );
}

export default App;
