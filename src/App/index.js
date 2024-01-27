import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
// import './index.css';

function App() {
  const defaultTodos = [
    { text: 'Todo 1', completed: false },
    { text: 'Todo 2', completed: true },
    { text: 'Todo 3', completed: false },
    { text: 'Todo 4', completed: false },
    { text: 'Todo 5', completed: false },
    { text: 'Todo 6', completed: false },
  ];

  return (
    <>
      <TodoCounter completed={defaultTodos.filter((element) => element.completed).length} total={defaultTodos.length} />
      <TodoSearch />
      <TodoList>
        {/* {defaultTodos.map((todo, index) => {
          if (!todo.completed) {
            return <TodoItem key={index} index={index} item={todo} />;
          }
          return <></>;
        })} */}
        {defaultTodos.map((todo, index) => (
          <TodoItem key={index} index={index} item={todo} />
        ))}
      </TodoList>

      <CreateTodoButton />
    </>
  );
}

export { App };
