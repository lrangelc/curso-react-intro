import React from 'react';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';

const defaultTodos = [
  { id: 1, text: 'Todo 1', completed: false },
  { id: 2, text: 'Todo 2', completed: true },
  { id: 3, text: 'Todo3', completed: false },
  { id: 4, text: 'Todo 4', completed: true },
  { id: 5, text: 'Todo 5', completed: false },
  { id: 6, text: 'Todo 6', completed: false },
  { id: 7, text: 'Korn', completed: false },
  { id: 8, text: 'Pearl Jam', completed: false },
  { id: 9, text: 'Nirvana', completed: false },
  { id: 10, text: 'Niño', completed: false },
  { id: 11, text: 'Papá', completed: false },
  { id: 12, text: 'Canción', completed: false },
];

function App() {
  const [searchValue, setSearchValue] = React.useState('');
  const [todos, setTodos] = React.useState(defaultTodos);

  const searchedTodos = todos.filter((todo) => {
    return todo.text.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase());
  });
  const completedTodos = todos.filter((element) => element.completed).length;
  const totalTodos = todos.length;

  const completeTodo = (id) => {
    const newTodos = [...todos];
    const index = newTodos.findIndex((todo) => todo.id === id)
    newTodos[index].completed = true;
    setTodos(newTodos);
  };

  const deleteTodo = (id) => {
    const newTodos = [...todos];
    const index = newTodos.findIndex((todo) => todo.id === id)
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <>
      <TodoCounter completed={completedTodos} total={totalTodos} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      <TodoList>
        {searchedTodos.map((todo, index) => (
          <TodoItem key={index} item={todo} onComplete={completeTodo} onDelete={deleteTodo} />
        ))}
      </TodoList>

      <CreateTodoButton />
    </>
  );
}

export { App };
