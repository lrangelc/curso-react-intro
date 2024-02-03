import { TodoContext } from '../TodoContext';
import './index.css';

function TodoCounter() {
  return (
    <TodoContext.Consumer>
      {({ completed, total }) => (
        <div className="TodoCounter">
          <h1>
            Completaste {completed} de {total} TODOs
          </h1>
        </div>
      )}
    </TodoContext.Consumer>
  );
}

export { TodoCounter };
