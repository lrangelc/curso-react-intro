import React from 'react';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { EmptyTodos } from '../EmptyTodos';
import { TodoContext } from '../TodoContext';

function AppUI() {
  const { loading, error, searchedTodos, completeTodo, deleteTodo, totalTodos } = React.useContext(TodoContext);

  return (
    <>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {loading && <TodosLoading />}
        {error && <TodosError />}
        {!loading && searchedTodos && totalTodos === 0 && <EmptyTodos />}

        {searchedTodos &&
          searchedTodos.map((todo) => <TodoItem key={todo.id} item={todo} onComplete={completeTodo} onDelete={deleteTodo} />)}
      </TodoList>

      <CreateTodoButton />
    </>
  );
}

export { AppUI };
