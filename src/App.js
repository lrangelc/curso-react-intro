import React from 'react';
import './App.css';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';

function App() {
  const todos = [
    { text: 'Todo 1', completed: false },
    { text: 'Todo 2', completed: true },
    { text: 'Todo 3', completed: false },
    { text: 'Todo 4', completed: false },
    { text: 'Todo 5', completed: false },
    { text: 'Todo 6', completed: false },
  ];

  return (
    <div className="App">
      <TodoCounter completed={todos.filter((element) => element.completed).length} total={todos.length} />
      <TodoSearch />
      <TodoList>
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </TodoList>

      <CreateTodoButton />
    </div>
  );
}

export default App;
