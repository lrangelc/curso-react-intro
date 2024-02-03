import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';

function AppUI({ loading, error, completedTodos, totalTodos, searchValue, setSearchValue, searchedTodos, completeTodo, deleteTodo }) {
  return (
    <>
      <TodoCounter completed={completedTodos} total={totalTodos} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      <TodoList>
        {loading && <p>Estamos cargando...</p>}
        {error && <p>Error al cargar los datos!</p>}
        {!loading && searchedTodos.length === 0 && <p>Agrega tu primer TODO</p>}

        {searchedTodos.map((todo) => (
          <TodoItem key={todo.id} item={todo} onComplete={completeTodo} onDelete={deleteTodo} />
        ))}
      </TodoList>

      <CreateTodoButton />
    </>
  );
}

export { AppUI };
