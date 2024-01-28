import React from 'react';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';

const defaultTodos = [
  { text: 'Todo 1', completed: false },
  { text: 'Todo 2', completed: true },
  { text: 'Todo3', completed: false },
  { text: 'Todo 4', completed: true },
  { text: 'Todo 5', completed: false },
  { text: 'Todo 6', completed: false },
  { text: 'Korn', completed: false },
  { text: 'Pearl Jam', completed: false },
  { text: 'Nirvana', completed: false },
  { text: 'Niño', completed: false },
  { text: 'Papá', completed: false },
  { text: 'Canción', completed: false },
];

function App() {
  const [searchValue, setSearchValue] = React.useState('');
  const [todos, setTodos] = React.useState(defaultTodos);

  const searchedTodos = todos.filter((todo) => {
    return todo.text.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase());
  });
  const completedTodos = todos.filter((element) => element.completed).length;
  const totalTodos = todos.length;

  const completeTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = true;
    setTodos(newTodos);
  };

  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <>
      <TodoCounter completed={completedTodos} total={totalTodos} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      <TodoList>
        {searchedTodos.map((todo, index) => (
          <TodoItem key={index} index={index} item={todo} onComplete={completeTodo} onDelete={deleteTodo} />
        ))}
      </TodoList>

      <CreateTodoButton />
    </>
  );
}

export { App };
