import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { AppUI } from './AppUI';

const defaultTodos = [
  { id: uuidv4(), text: 'Todo 1', completed: false },
  { id: uuidv4(), text: 'Todo 2', completed: true },
  { id: uuidv4(), text: 'Todo3', completed: false },
  { id: uuidv4(), text: 'Todo 4', completed: true },
  { id: uuidv4(), text: 'Todo 5', completed: false },
  { id: uuidv4(), text: 'Todo 6', completed: false },
  { id: uuidv4(), text: 'Korn', completed: false },
  { id: uuidv4(), text: 'Pearl Jam', completed: false },
  { id: uuidv4(), text: 'Nirvana', completed: false },
  { id: uuidv4(), text: 'Niño', completed: false },
  { id: uuidv4(), text: 'Papá', completed: false },
  { id: uuidv4(), text: 'Canción', completed: false },
];

function App() {
  const [searchValue, setSearchValue] = React.useState('');
  const { storedValue: todos, setStoredValue: setTodos, loading, error } = useLocalStorage('TODOS_V1',[]  || defaultTodos);

  const searchedTodos = todos.filter((todo) => {
    return todo.text.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase());
  });
  const completedTodos = todos.filter((element) => element.completed).length;
  const totalTodos = todos.length;

  const completeTodo = (id) => {
    const newTodos = [...todos];
    const index = newTodos.findIndex((todo) => todo.id === id);
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const deleteTodo = (id) => {
    const newTodos = [...todos];
    const index = newTodos.findIndex((todo) => todo.id === id);
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <AppUI
      loading={loading}
      error={error}
      completedTodos={completedTodos}
      totalTodos={totalTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
    />
  );
}

export { App };
